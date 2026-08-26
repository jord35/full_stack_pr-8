import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import FavoritesPage from "./page";
import type { Property } from "@/lib/types";

// Mock de next/image : on remplace le composant Image par un simple <img>.
// On retire la prop `fill` (booléen React) qui n'est pas un attribut HTML valide.
vi.mock("next/image", () => ({
    default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} />
    ),
}));

// Mock de l'API : on remplace getProperties par une fonction qui
// retourne des données factices, pour éviter un vrai appel réseau.
vi.mock("@/lib/api", () => ({
    getProperties: vi.fn(),
}));

import { getProperties } from "@/lib/api";

const FAVORITES_KEY = "favorites";

const properties: Property[] = [
    {
        id: "1",
        slug: "appartement-paris",
        title: "Appartement Paris",
        description: "Un bel appartement à Paris",
        cover: "/images/mocks/image-3.png",
        location: "Paris",
        price_per_night: 120,
        rating_avg: 4.5,
        ratings_count: 10,
        host: { id: 1, name: "Marie", picture: "" },
    },
];

describe("Page Favoris (test d'intégration)", () => {
    beforeEach(() => {
        localStorage.clear();
        vi.mocked(getProperties).mockResolvedValue(properties);
    });

    it("affiche le titre 'Vos favoris' (Header)", async () => {
        render(await FavoritesPage());

        expect(
            screen.getByRole("heading", { name: "Vos favoris" })
        ).toBeInTheDocument();
    });

    it("affiche la description du Header", async () => {
        render(await FavoritesPage());

        expect(
            screen.getByText(/Retrouvez ici tous les logements que vous avez aimés/)
        ).toBeInTheDocument();
    });

    it("affiche les logements favoris ensemble avec le Header", async () => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(["1"]));

        render(await FavoritesPage());

        // Le Header ET la liste des favoris sont affichés ensemble
        expect(
            screen.getByRole("heading", { name: "Vos favoris" })
        ).toBeInTheDocument();
        expect(screen.getByText("Appartement Paris")).toBeInTheDocument();
    });

    it("affiche un message quand il n'y a aucun favori", async () => {
        render(await FavoritesPage());

        expect(
            screen.getByText("Vous n'avez pas encore de favoris.")
        ).toBeInTheDocument();
    });
});
