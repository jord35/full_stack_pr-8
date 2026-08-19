import Link from "next/link";
import type { Property } from "@/lib/types";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { FavoriteButton } from "@/components/ui/FavoriteButton/FavoriteButton";

export interface PropertyCardProps {
    /** Le logement à afficher */
    property: Property;
}

/**
 * PropertyCard.
 * Carte affichant un logement : image, titre, localisation, prix par nuit
 * et un bouton cœur (favoris).
 *
 * Le clic sur la carte redirige vers la page Détail Logement (/logements/{slug}).
 * La carte est identique sur mobile et desktop (c'est le parent qui gère la grille).
 */
export function PropertyCard({ property }: PropertyCardProps) {
    return (
        <Link
            href={`/logements/${property.slug}`}
            className="group relative block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-grisLight transition-shadow hover:shadow-md"
        >
            {/* Image de couverture */}
            <div className="relative h-48 w-full overflow-hidden">
                <ContentImage
                    src={property.cover}
                    alt={property.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, 100vw"
                />
            </div>

            {/* Bouton cœur (favoris) */}
            <div className="absolute right-3 top-3">
                <FavoriteButton propertyId={property.id} />
            </div>

            {/* Informations */}
            <div className="p-4">
                <h2 className="font-inter text-lg font-bold text-noir">
                    {property.title}
                </h2>
                <p className="mt-1 text-sm text-grisDark">{property.location}</p>
                <p className="mt-2 font-inter text-base font-medium text-mainRed">
                    {property.price_per_night} € / nuit
                </p>
            </div>
        </Link>
    );
}
