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
        <section className="w-[345px] rounded-lg border border-grisLight p-6">
            {/* Titre */}
            <h2 className="mb-4 text-lg font-semibold text-noir">Votre hôte</h2>

            {/* Zone hôte : avatar + nom + note à l'horizontale */}
            <div className="flex items-center gap-3">
                {/* Avatar de l'hôte */}
                <ContentImage
                    src={property.host.picture}
                    alt={`Photo de ${property.host.name}`}
                    width={80}
                    height={82}
                    className="h-[82px] w-[80px] rounded-[10px] object-cover"
                />

                {/* Nom de l'hôte */}
                <span className="font-medium text-noir">{property.host.name}</span>

                {/* Note (StarCount) */}
                <StarCount rating={property.rating_avg} />
            </div>

            {/* Zone boutons : les deux en mainRed (primary), pleine largeur */}
            <div className="mt-4 flex flex-col gap-2">
                <Button variant="primary" className="w-full" onClick={handleContact}>
                    {"Contacter l'hôte"}
                </Button>
                <Button variant="primary" className="w-full" onClick={handleContact}>
                    Envoyer un message
                </Button>
            </div>
        </section>
    );
}
