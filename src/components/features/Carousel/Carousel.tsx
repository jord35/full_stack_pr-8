"use client";

import { CarouselMobile } from "./mobile/CarouselMobile";
import { CarouselDesktop } from "./desktop/CarouselDesktop";

export interface CarouselProps {
    /** Tableau des URLs des images du logement */
    pictures: string[];
}

/**
 * Carousel.
 * Composant orchestrateur de la galerie interactive des photos d'un logement.
 *
 * Il ne contient pas de logique propre : il délègue le rendu à deux sous-composants
 * selon l'écran :
 * - Mobile : <CarouselMobile> (grande image + carrousel défilant + défilement auto)
 * - Desktop : <CarouselDesktop> (grande image + 4 miniatures + flèches + pagination)
 *
 * Les deux composants sont rendus, mais masqués selon l'écran via CSS responsive
 * (hidden xl:flex / xl:hidden). C'est plus simple et plus performant que de
 * détecter l'écran en JavaScript.
 */
export function Carousel({ pictures }: CarouselProps) {
    return (
        <>
            {/* Mobile : visible en dessous du breakpoint xl */}
            <div className="xl:hidden">
                <CarouselMobile pictures={pictures} />
            </div>

            {/* Desktop : visible à partir du breakpoint xl */}
            <div className="hidden xl:block">
                <CarouselDesktop pictures={pictures} />
            </div>
        </>
    );
}
