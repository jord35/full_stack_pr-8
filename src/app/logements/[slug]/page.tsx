import { notFound } from "next/navigation";
import { getProperties, getProperty } from "@/lib/api";
import { Carousel } from "@/components/features/Carousel/Carousel";
import { HostCard } from "@/components/features/HostCard/HostCard";
import { BackButton } from "@/components/ui/BackButton/BackButton";
import { InfoLogement } from "@/components/ui/InfoLogement/InfoLogement";
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
        <main className="mx-auto w-full max-w-[971px] flex-1 px-4 py-8 xl:px-0">
            {/* ─── Flèche retour ─────────────────────────────── */}
            {/* BackButton : revient d'où on vient (accueil OU favoris) via
                router.back(), avec fallback vers l'accueil si arrivée directe.
                Voir contrat : components/ui/BackButton/BackButton.contrat.md */}
            <BackButton />

            {/* ─── Conteneur flex : réordonne les blocs selon l'écran ── */}
            {/* Mobile : carousel(1) → div blanche(2) → carte hôte(3)
                Desktop (xl) : carousel(1) + carte hôte(1) côte à côte,
                div blanche(2) en dessous sur toute la largeur. */}
            <div className="mt-2.5 flex flex-col xl:mt-10 xl:flex-row xl:flex-wrap xl:items-start">
                {/* ─── Carousel de photos ────────────────────── */}
                {/* Le carousel est FONCTIONNEL : il prend les photos du logement. */}
                <div className="order-1 xl:order-1 xl:mr-2.5 xl:w-[calc(100%-355px)]">
                    {property.pictures && property.pictures.length > 0 && (
                        <Carousel pictures={property.pictures} />
                    )}
                </div>

                {/* ─── Carte hôte (HostCard) ─────────────────── */}
                {/* HostCard : affiche l'avatar, le nom, la note (StarCount)
                    + 2 boutons "Contacter l'hôte" et "Envoyer un message" → /messages.
                    Mobile : en bas (order-3). Desktop : à côté du carousel (order-1). */}
                <div className="order-3 mt-2.5 xl:order-1 xl:mt-0">
                    <HostCard property={property} />
                </div>

                {/* ─── Div blanche : description + équipements + catégories ── */}
                {/* Englobe InfoLogement + les 2 TagList dans une carte blanche. */}
                <div className="order-2 mt-2.5 w-full rounded-[10px] bg-white p-6 xl:order-2 xl:mt-6 xl:w-[63%]">
                    {/* Titre, lieu et description */}
                    <InfoLogement
                        title={property.title}
                        location={property.location}
                        description={property.description}
                    />

                    {/* Liste des équipements */}
                    <div className="mt-10">
                        <TagList title="Équipements" items={property.equipments ?? []} />
                    </div>

                    {/* Liste des catégories (tags) */}
                    <div className="mt-10">
                        <TagList title="Catégories" items={property.tags ?? []} />
                    </div>
                </div>
            </div>
        </main>
    );
}
