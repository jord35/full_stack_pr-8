import type { Property } from "@/lib/types";
import { PropertyCard } from "@/components/ui/PropertyCard/PropertyCard";

export interface PropertyGridProps {
    /** La liste des logements à afficher */
    properties: Property[];
}

/**
 * PropertyGrid.
 * Grille affichant toutes les propriétés sous forme de cartes.
 *
 * Responsive (mobile first, breakpoint xl: = 1280px) :
 * - Mobile : 1 colonne (cartes empilées, scroll vertical).
 * - Desktop : 3 colonnes (grille horizontale).
 *
 * C'est ici que la grille change selon l'écran, pas dans la carte.
 */
export function PropertyGrid({ properties }: PropertyGridProps) {
    return (
        <ul className="grid grid-cols-1 gap-6 xl:grid-cols-3">
            {properties.map((property) => (
                <li key={property.id}>
                    <PropertyCard property={property} />
                </li>
            ))}
        </ul>
    );
}
