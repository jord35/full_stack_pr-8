export interface TagListProps {
    /** Titre affiché au-dessus de la grille (ex: "Équipements", "Catégories") */
    title: string;
    /** Liste des tags à afficher */
    items: string[];
}

/**
 * TagList.
 * Affiche une liste de tags sous forme de grille, avec un titre au-dessus.
 *
 * Disposition responsive (pour ne jamais déborder en largeur) :
 * - Desktop : 3 tags par colonne, le nombre de colonnes augmente si besoin.
 * - Mobile : 3 colonnes maximum, le nombre de tags par colonne augmente si besoin.
 */
export function TagList({ title, items }: TagListProps) {
    return (
        <section>
            <h2 className="mb-3 text-lg font-semibold text-noir">{title}</h2>

            {/* Grille responsive :
                - Mobile (par défaut) : 3 colonnes fixes (grid-cols-3), les tags se
                  remplissent de gauche à droite puis retour à la ligne.
                - Desktop (xl) : 3 tags par colonne (grid-rows-3) avec flux en colonnes
                  (grid-flow-col), le nombre de colonnes s'adapte automatiquement. */}
            <div className="flex flex-wrap gap-2 xl:grid xl:grid-flow-col xl:grid-cols-none xl:grid-rows-3 xl:justify-start xl:justify-items-start">
                {items.map((item, index) => (
                    <span
                        key={item + index}
                        className="inline-flex min-w-[100px] items-center justify-center rounded-[5px] bg-grisLight px-4 py-2 text-xs text-grisDark"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </section>
    );
}
