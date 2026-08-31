"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";

export interface CarouselDesktopProps {
    /** Tableau des URLs des images du logement */
    pictures: string[];
}

/** Image de secours quand il n'y a aucune image */
const NO_IMAGE = "/images/no-image.png";

/** Nombre de miniatures affichées par page */
const THUMBS_PER_PAGE = 4;

/**
 * CarouselDesktop.
 * Version desktop du carrousel : grande image + 4 miniatures + flèches + pagination.
 *
 * Comportement :
 * - Grande image à gauche (l'image sélectionnée).
 * - 4 miniatures par page à droite.
 * - Cliquer sur une miniature → elle devient la grande image.
 * - Flèches pour naviguer entre les pages de miniatures.
 * - Points (pagination) : 1 point par page de 4 miniatures.
 *
 * Cas limites :
 * - 0 image → affiche l'image de secours (no-image.png).
 * - 1 image → affiche uniquement la grande image, pas de miniatures.
 * - ≤ 4 images → pas de flèches ni de points (une seule page).
 * - > 4 images → flèches + points pour naviguer entre les pages.
 */
export function CarouselDesktop({ pictures }: CarouselDesktopProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [pageIndex, setPageIndex] = useState(0);

    // Si aucune image, on affiche l'image de secours
    const images = pictures.length > 0 ? pictures : [NO_IMAGE];

    // Nombre de pages de miniatures (arrondi au supérieur)
    const totalPages = Math.max(1, Math.ceil(images.length / THUMBS_PER_PAGE));

    // Miniatures de la page courante
    const pageThumbs = images.slice(
        pageIndex * THUMBS_PER_PAGE,
        pageIndex * THUMBS_PER_PAGE + THUMBS_PER_PAGE
    );

    // A-t-on besoin des miniatures ? (plus d'une image)
    const hasThumbnails = images.length > 1;

    // A-t-on besoin des flèches/pagination ? (plus de 4 images)
    const hasPagination = images.length > THUMBS_PER_PAGE;

    const handleSelect = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    const goToPage = useCallback(
        (page: number) => {
            setPageIndex((page + totalPages) % totalPages);
        },
        [totalPages]
    );

    return (
        <div className="w-full">
            <div className="flex gap-4">
                {/* Grande image */}
                <div className="relative h-[400px] flex-1 overflow-hidden rounded-lg">
                    <ContentImage
                        src={images[selectedIndex]}
                        alt={`Photo ${selectedIndex + 1} du logement`}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1280px) 60vw, 100vw"
                    />
                </div>

                {/* Miniatures (à droite, seulement si plus d'une image) */}
                {hasThumbnails && (
                    <div className="grid w-[320px] grid-cols-2 gap-2.5">
                        {pageThumbs.map((src, index) => {
                            const realIndex = pageIndex * THUMBS_PER_PAGE + index;
                            return (
                                <button
                                    key={src + realIndex}
                                    type="button"
                                    onClick={() => handleSelect(realIndex)}
                                    aria-label={`Voir la photo ${realIndex + 1}`}
                                    aria-pressed={realIndex === selectedIndex}
                                    className={`relative aspect-[148.5/174] w-full overflow-hidden rounded-md transition-opacity ${realIndex === selectedIndex
                                        ? "ring-2 ring-mainRed"
                                        : "opacity-70 hover:opacity-100"
                                        }`}
                                >
                                    <ContentImage
                                        src={src}
                                        alt={`Miniature ${realIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="160px"
                                    />
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Flèches + pagination (seulement si plus de 4 images) */}
            {hasPagination && (
                <div className="mt-4 flex items-center justify-center gap-4">
                    {/* Flèche précédente */}
                    <button
                        type="button"
                        onClick={() => goToPage(pageIndex - 1)}
                        aria-label="Page précédente"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-grisDark text-noir transition-colors hover:bg-grisLight"
                    >
                        <Image
                            src="/icone/arrow.svg"
                            alt=""
                            width={16}
                            height={16}
                        />
                    </button>

                    {/* Points de pagination */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goToPage(i)}
                                aria-label={`Aller à la page ${i + 1}`}
                                aria-current={i === pageIndex}
                                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === pageIndex ? "bg-mainRed" : "bg-grisDark"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Flèche suivante */}
                    <button
                        type="button"
                        onClick={() => goToPage(pageIndex + 1)}
                        aria-label="Page suivante"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-grisDark text-noir transition-colors hover:bg-grisLight"
                    >
                        <Image
                            src="/icone/arrow.svg"
                            alt=""
                            width={16}
                            height={16}
                            className="rotate-180"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}
