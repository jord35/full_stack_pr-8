"use client";

import { useRouter } from "next/navigation";
import type { Property } from "@/lib/types";
import { Button } from "@/components/ui/Button/Button";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { StarCount } from "@/components/ui/StarCount/StarCount";

export interface HostCardProps {
    /** Le logement à afficher (contient l'hôte et la note) */
    property: Property;
}

/**
 * HostCard.
 * Carte "hôte" affichée sur la page Détail Logement.
 *
 * Affiche :
 * - Le titre "Votre hôte"
 * - L'avatar et le nom de l'hôte
 * - Le StarCount (note de l'hôte)
 * - 2 boutons : "Contacter l'hôte" et "Envoyer un message" → /messages
 *
 * C'est un composant client car il gère la navigation vers la page Messages.
 */
export function HostCard({ property }: HostCardProps) {
    const router = useRouter();

    const handleContact = () => {
        router.push("/messages");
    };

    return (
        <section className="rounded-lg border border-grisLight p-4">
            {/* Titre */}
            <h2 className="mb-4 text-lg font-semibold text-noir">Votre hôte</h2>

            {/* Zone hôte : avatar + nom + note */}
            <div className="flex items-center gap-3">
                {/* Avatar de l'hôte */}
                <ContentImage
                    src={property.host.picture}
                    alt={`Photo de ${property.host.name}`}
                    width={64}
                    height={64}
                    className="h-16 w-16 rounded-full object-cover"
                />

                {/* Nom + note */}
                <div className="flex flex-col gap-1">
                    <span className="font-medium text-noir">{property.host.name}</span>
                    <StarCount rating={property.rating_avg} />
                </div>
            </div>

            {/* Zone boutons */}
            <div className="mt-4 flex flex-col gap-2">
                <Button variant="primary" onClick={handleContact}>
                    Contacter l'hôte
                </Button>
                <Button variant="secondary" onClick={handleContact}>
                    Envoyer un message
                </Button>
            </div>
        </section>
    );
}
