import Image from "next/image";

export interface ContentImageProps {
    /** URL ou chemin de l'image */
    src: string;
    /** Description de l'image (obligatoire pour l'accessibilité) */
    alt: string;
    /** Mode remplissage : l'image remplit son conteneur parent */
    fill?: boolean;
    /** Largeur fixe (mode dimensions fixes) */
    width?: number;
    /** Hauteur fixe (mode dimensions fixes) */
    height?: number;
    /** Classes CSS additionnelles (style en surcouche) */
    className?: string;
    /** Tailles d'affichage pour l'optimisation responsive */
    sizes?: string;
    /** Image prioritaire (LCP) : désactive le lazy-loading et précharge */
    priority?: boolean;
}

/**
 * ContentImage.
 * Wrapper de next/image pour les images de contenu (photos de logements, avatars).
 * Garantit l'accessibilité (alt obligatoire) et l'optimisation (next/image).
 * Le style est passé en surcouche via className.
 */
export function ContentImage({
    src,
    alt,
    fill = false,
    width,
    height,
    className,
    sizes,
    priority = false,
}: ContentImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            className={className}
            sizes={sizes}
            priority={priority}
        />
    );
}
