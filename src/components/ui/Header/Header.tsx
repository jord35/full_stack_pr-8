export type Size = "sm" | "md" | "lg";

export interface HeaderProps {
    /** Titre principal, rendu dans un <h1> */
    title: string;
    /** Description, rendue sous le titre */
    description: string;
    /** Taille du titre sur mobile (< breakpoint) */
    sizeMobile: Size;
    /** Taille du titre sur desktop (>= breakpoint) */
    sizeDesktop: Size;
}

const mobileSizeClasses: Record<Size, string> = {
    sm: "text-sm",
    md: "text-2xl",
    lg: "text-3xl",
};

const desktopSizeClasses: Record<Size, string> = {
    sm: "xl:text-sm",
    md: "xl:text-2xl",
    lg: "xl:text-3xl",
};

/**
 * En-tête réutilisable : affiche un titre (<h1>) et une description.
 * La taille du titre varie selon le type d'écran (mobile/desktop).
 */
export function Header({
    title,
    description,
    sizeMobile,
    sizeDesktop,
}: HeaderProps) {
    return (
        <header className="font-inter text-center">
            <h1
                className={`font-bold text-mainRed ${mobileSizeClasses[sizeMobile]} ${desktopSizeClasses[sizeDesktop]}`}
            >
                {title}
            </h1>
            <p className="mx-auto mt-2 text-sm font-normal text-noir xl:max-w-[488px]">{description}</p>
        </header>
    );
}
