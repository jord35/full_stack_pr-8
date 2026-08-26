import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CarouselMobile } from "./CarouselMobile";

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

describe("CarouselMobile", () => {
    it("affiche la première image comme grande image par défaut", () => {
        render(<CarouselMobile pictures={[IMG_1, IMG_2]} />);
        const mainImage = screen.getByAltText("Photo 1 du logement");
        expect(mainImage).toHaveAttribute("src", IMG_1);
    });

    it("affiche un carrousel de miniatures quand il y a plusieurs images", () => {
        render(<CarouselMobile pictures={[IMG_1, IMG_2, IMG_3]} />);
        expect(screen.getByRole("button", { name: "Voir la photo 1" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Voir la photo 2" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Voir la photo 3" })).toBeInTheDocument();
    });

    it("change la grande image quand on clique sur une miniature", async () => {
        const user = userEvent.setup();
        render(<CarouselMobile pictures={[IMG_1, IMG_2]} />);

        await user.click(screen.getByRole("button", { name: "Voir la photo 2" }));

        const mainImage = screen.getByAltText("Photo 2 du logement");
        expect(mainImage).toHaveAttribute("src", IMG_2);
    });

    it("n'affiche pas de carrousel quand il n'y a qu'une seule image", () => {
        render(<CarouselMobile pictures={[IMG_1]} />);
        expect(screen.queryByRole("button", { name: "Voir la photo 1" })).not.toBeInTheDocument();
    });

    it("affiche l'image de secours quand il n'y a aucune image", () => {
        render(<CarouselMobile pictures={[]} />);
        const mainImage = screen.getByAltText("Photo 1 du logement");
        expect(mainImage).toHaveAttribute("src", "/images/no-image.png");
    });
});
