import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Carousel } from "./Carousel";

// Mock de next/image : on remplace le composant Image par un simple <img>.
vi.mock("next/image", () => ({
    default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} />
    ),
}));

const IMG_1 = "/images/mocks/image-3.png";
const IMG_2 = "/images/mocks/image-4.png";

describe("Carousel (orchestrateur)", () => {
    it("rend les deux sous-composants (mobile + desktop)", () => {
        render(<Carousel pictures={[IMG_1, IMG_2]} />);
        // Le parent rend les deux sous-composants (mobile + desktop),
        // donc il y a 2 grandes images avec le même alt (masquées par CSS selon l'écran)
        expect(screen.getAllByAltText("Photo 1 du logement").length).toBe(2);
    });

    it("transmet les images aux deux sous-composants", () => {
        render(<Carousel pictures={[IMG_1, IMG_2]} />);
        // Les miniatures sont rendues (mobile + desktop)
        expect(screen.getAllByRole("button", { name: "Voir la photo 1" }).length).toBeGreaterThan(0);
        expect(screen.getAllByRole("button", { name: "Voir la photo 2" }).length).toBeGreaterThan(0);
    });
});
