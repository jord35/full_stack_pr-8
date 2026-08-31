"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";

export interface CarouselMobileProps {
    /** Tableau des URLs des images du logement */
    pictures: string[];
}

/** Image de secours quand il n'y a aucune image */
const NO_IMAGE = "/images/no-image.png";

/** Intervalle du défilement automatique (ms) */
const AUTO_SCROLL_INTERVAL = 3000;

/**
 * CarouselMobile.
 * Version mobile du carrousel : grande image + carrousel défilant de miniatures.
 *
 * Comportement :
 * - Grande image en haut (l'image sélectionnée).
 * - Carrousel défilant de miniatures en dessous (scroll horizontal).
 * - Cliquer sur une miniature → elle devient la grande image.
 * - Défilement automatique quand le carrousel n'a pas été touché.
 *
 * Cas limites :
 * - 0 image → affiche l'image de secours (no-image.png).
 * - 1 image → affiche uniquement la grande image, pas de carrousel.
 * - 2-3 images → carrousel plus petit (taille adaptée au nombre d'images).
 */
export function CarouselMobile({ pictures }: CarouselMobileProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isInteracting, setIsInteracting] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Si aucune image, on affiche l'image de secours
    const images = pictures.length > 0 ? pictures : [NO_IMAGE];
    const hasCarousel = images.length > 1;

    // Défilement automatique : fait défiler les miniatures quand inactif
    useEffect(() => {
        if (!hasCarousel || isInteracting) return;

        const interval = setInterval(() => {
            const el = scrollRef.current;
            if (!el) return;
            // Fait défiler d'une miniature vers la droite, boucle au début
            const scrollAmount = el.clientWidth;
            if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
                el.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                el.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }, AUTO_SCROLL_INTERVAL);

        return () => clearInterval(interval);
    }, [hasCarousel, isInteracting]);

    const handleSelect = useCallback((index: number) => {
        setSelectedIndex(index);
    }, []);

    return (
        <div className="w-full">
            {/* Grande image */}
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg">
                <ContentImage
                    src={images[selectedIndex]}
                    alt={`Photo ${selectedIndex + 1} du logement`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            {/* Carrousel de miniatures (seulement si plus d'une image) */}
            {hasCarousel && (
                <div
                    ref={scrollRef}
                    onMouseEnter={() => setIsInteracting(true)}
                    onMouseLeave={() => setIsInteracting(false)}
                    onTouchStart={() => setIsInteracting(true)}
                    className="mt-3 flex gap-3 overflow-x-auto pb-2"
                >
                    {images.map((src, index) => (
                        <button
                            key={src + index}
                            type="button"
                            onClick={() => handleSelect(index)}
                            aria-label={`Voir la photo ${index + 1}`}
                            aria-pressed={index === selectedIndex}
                            className={`relative h-20 w-[83.5px] flex-shrink-0 overflow-hidden rounded-md transition-opacity ${index === selectedIndex
                                ? "ring-2 ring-mainRed"
                                : "opacity-70 hover:opacity-100"
                                }`}
                        >
                            <ContentImage
                                src={src}
                                alt={`Miniature ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="112px"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
