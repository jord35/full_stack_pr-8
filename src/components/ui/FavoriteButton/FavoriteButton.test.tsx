import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FavoriteButton } from "./FavoriteButton";

// Mock de next/image : dans les tests, on remplace le composant Image
// par un simple <img> pour éviter de charger de vraies images optimisées.
// On retire la prop `fill` (booléen React) qui n'est pas un attribut HTML valide.
vi.mock("next/image", () => ({
    default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} />
    ),
}));

const FAVORITES_KEY = "favorites";

describe("FavoriteButton", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("affiche le bouton avec le label 'Ajouter aux favoris' par défaut", () => {
        render(<FavoriteButton propertyId="1" />);
        expect(
            screen.getByRole("button", { name: "Ajouter aux favoris" })
        ).toBeInTheDocument();
    });

    it("ajoute le logement dans le localStorage au clic", async () => {
        const user = userEvent.setup();
        render(<FavoriteButton propertyId="1" />);

        await user.click(screen.getByRole("button"));

        const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        expect(stored).toContain("1");
    });

    it("retire le logement du localStorage au second clic (toggle)", async () => {
        const user = userEvent.setup();
        render(<FavoriteButton propertyId="1" />);

        const button = screen.getByRole("button");
        await user.click(button); // ajoute
        await user.click(button); // retire

        const stored = JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
        expect(stored).not.toContain("1");
    });

    it("change l'état visuel (aria-pressed) quand le logement devient favori", async () => {
        const user = userEvent.setup();
        render(<FavoriteButton propertyId="1" />);

        const button = screen.getByRole("button");
        expect(button).toHaveAttribute("aria-pressed", "false");

        await user.click(button);
        expect(button).toHaveAttribute("aria-pressed", "true");
    });

    it("affiche le label 'Retirer des favoris' quand le logement est déjà en favori", () => {
        // On pré-remplit le localStorage avec le favori
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(["1"]));

        render(<FavoriteButton propertyId="1" />);
        expect(
            screen.getByRole("button", { name: "Retirer des favoris" })
        ).toBeInTheDocument();
    });
});
