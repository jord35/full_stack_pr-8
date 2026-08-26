import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CarouselDesktop } from "./CarouselDesktop";

// Mock de next/image : on remplace le composant Image par un simple <img>.
vi.mock("next/image", () => ({
    default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} />
    ),
}));

const IMG_1 = "/images/mocks/image-3.png";
const IMG_2 = "/images/mocks/image-4.png";
const IMG_3 = "/images/mocks/home_img.png";
const IMG_4 = "/images/mocks/image-3.png";
const IMG_5 = "/images/mocks/image-4.png";

describe("CarouselDesktop", () => {
    it("affiche la première image comme grande image par défaut", () => {
        render(<CarouselDesktop pictures={[IMG_1, IMG_2]} />);
        const mainImage = screen.getByAltText("Photo 1 du logement");
        expect(mainImage).toHaveAttribute("src", IMG_1);
    });

    it("affiche les miniatures quand il y a plusieurs images", () => {
        render(<CarouselDesktop pictures={[IMG_1, IMG_2, IMG_3]} />);
        expect(screen.getByRole("button", { name: "Voir la photo 1" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Voir la photo 2" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Voir la photo 3" })).toBeInTheDocument();
    });

    it("change la grande image quand on clique sur une miniature", async () => {
        const user = userEvent.setup();
        render(<CarouselDesktop pictures={[IMG_1, IMG_2]} />);

        await user.click(screen.getByRole("button", { name: "Voir la photo 2" }));

        const mainImage = screen.getByAltText("Photo 2 du logement");
        expect(mainImage).toHaveAttribute("src", IMG_2);
    });

    it("n'affiche pas de flèches ni de points avec 4 images ou moins", () => {
        render(<CarouselDesktop pictures={[IMG_1, IMG_2, IMG_3, IMG_4]} />);
        expect(screen.queryByRole("button", { name: "Page précédente" })).not.toBeInTheDocument();
        expect(screen.queryByRole("button", { name: "Page suivante" })).not.toBeInTheDocument();
    });

    it("affiche les flèches et la pagination avec plus de 4 images", () => {
        render(<CarouselDesktop pictures={[IMG_1, IMG_2, IMG_3, IMG_4, IMG_5]} />);
        expect(screen.getByRole("button", { name: "Page précédente" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Page suivante" })).toBeInTheDocument();
        // 5 images / 4 par page = 2 points
        expect(screen.getByRole("button", { name: "Aller à la page 1" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Aller à la page 2" })).toBeInTheDocument();
    });

    it("n'affiche pas de miniatures quand il n'y a qu'une seule image", () => {
        render(<CarouselDesktop pictures={[IMG_1]} />);
        expect(screen.queryByRole("button", { name: "Voir la photo 1" })).not.toBeInTheDocument();
    });

    it("affiche l'image de secours quand il n'y a aucune image", () => {
        render(<CarouselDesktop pictures={[]} />);
        const mainImage = screen.getByAltText("Photo 1 du logement");
        expect(mainImage).toHaveAttribute("src", "/images/no-image.png");
    });
});
