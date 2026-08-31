import Image from "next/image";

export interface StarCountProps {
    /** Note de l'hôte (entier ou décimal, ex: 5, 4.5). Optionnel : si absent, on n'affiche rien. */
    rating?: number;
}

/**
 * StarCount.
 * Petit badge qui affiche la note d'un hôte : un cube dark-grey avec une étoile
 * et le nombre d'étoiles en chiffres (ex: 5, 4.5).
 *
 * - Affiche la note telle quelle (pas d'arrondi).
 * - Si `rating` est absent (pas de note), le composant ne rend rien.
 */
export function StarCount({ rating }: StarCountProps) {
    // Pas de note → on n'affiche rien
    if (rating === undefined) {
        return null;
    }

    return (
        <div className="inline-flex items-center gap-1 rounded-[10px] bg-grisDark px-2 py-1 text-white">
            {/* Étoile décorative */}
            <Image
                src="/icone/star.svg"
                alt=""
                width={15}
                height={17}
                aria-hidden="true"
            />
            {/* Note en chiffres */}
            <span>{rating}</span>
        </div>
    );
}
