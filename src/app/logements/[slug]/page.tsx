import { notFound } from "next/navigation";
import { getProperties, getProperty } from "@/lib/api";
import { Carousel } from "@/components/features/Carousel/Carousel";
import { HostCard } from "@/components/features/HostCard/HostCard";
import { BackButton } from "@/components/ui/BackButton/BackButton";
import { TagList } from "@/components/ui/TagList/TagList";


export default async function PropertyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    // ─── Chargement des données ─────────────────────────────
    // ⚠️ NOTE : cette logique de chargement (lookup + fetch) est sans doute
    // à extraire dans un composant/service dédié plus tard (ex: un service
    // dans src/lib, comme le mappers.ts du projet 7). Pour l'instant, on
    // la garde ici dans la page, car c'est simple et fonctionnel.
    //
    // Pattern "lookup puis fetch" :
    // 1. On charge la liste pour trouver l'ID du logement dont le slug correspond.
    //    (La liste ne contient PAS les photos/équipements/tags.)
    // 2. On charge le DÉTAIL complet avec getProperty(id), qui renvoie
    //    pictures, equipments, tags (voir getPropertyDetails côté back-end).
    const properties = await getProperties();
    const match = properties.find((p) => p.slug === slug);

    // Si le logement n'existe pas → page 404
    if (!match) {
        notFound();
    }

    // Détail complet (avec pictures, equipments, tags)
    const property = await getProperty(match.id);

    return (
        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
            {/* ─── Flèche retour ─────────────────────────────── */}
            {/* BackButton : revient d'où on vient (accueil OU favoris) via
                router.back(), avec fallback vers l'accueil si arrivée directe.
                Voir contrat : components/ui/BackButton/BackButton.contrat.md */}
            <BackButton />

            {/* ─── Carousel de photos ────────────────────────── */}
            {/* Le carousel est FONCTIONNEL : il prend les photos du logement. */}
            {property.pictures && property.pictures.length > 0 && (
                <Carousel pictures={property.pictures} />
            )}

            {/* ─── Carte hôte (HostCard) ─────────────────────── */}
            {/* HostCard : affiche l'avatar, le nom, la note (StarCount)
                + 2 boutons "Contacter l'hôte" et "Envoyer un message" → /messages.
                Voir contrat : components/features/HostCard/HostCard.contrat.md */}
            <HostCard property={property} />

            {/* ─── Titre, lieu et description ────────────────── */}
            {/* TODO : afficher property.title, property.location, property.description */}

            {/* ─── Liste des équipements ─────────────────────── */}
            {/* TagList : affiche les équipements du logement en grille de tags. */}
            <TagList title="Équipements" items={property.equipments ?? []} />

            {/* ─── Liste des catégories (tags) ───────────────── */}
            {/* TagList : affiche les catégories du logement en grille de tags. */}
            <TagList title="Catégories" items={property.tags ?? []} />
        </main>
    );
}
