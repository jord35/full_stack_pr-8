import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { FavoritesList } from "./FavoritesList";
import type { Property } from "@/lib/types";

// Mock de next/image : on remplace le composant Image par un simple <img>.
// On retire la prop `fill` (booléen React) qui n'est pas un attribut HTML valide.
vi.mock("next/image", () => ({
    default: ({ fill: _fill, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { fill?: boolean }) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...props} />
    ),
}));

const FAVORITES_KEY = "favorites";

// Données de test : deux propriétés factices
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
    {
        id: "2",
        slug: "maison-lyon",
        title: "Maison Lyon",
        description: "Une maison à Lyon",
        cover: "/images/mocks/image-4.png",
        location: "Lyon",
        price_per_night: 90,
        rating_avg: 4.2,
        ratings_count: 8,
        host: { id: 2, name: "Paul", picture: "" },
    },
];

describe("FavoritesList", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("affiche un message quand il n'y a aucun favori", () => {
        render(<FavoritesList properties={properties} />);
        expect(
            screen.getByText("Vous n'avez pas encore de favoris.")
        ).toBeInTheDocument();
    });

    it("affiche uniquement les propriétés présentes dans les favoris", () => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(["1"]));

        render(<FavoritesList properties={properties} />);

        // La propriété 1 (favori) est affichée
        expect(screen.getByText("Appartement Paris")).toBeInTheDocument();
        // La propriété 2 (non favori) n'est PAS affichée
        expect(screen.queryByText("Maison Lyon")).not.toBeInTheDocument();
    });

    it("affiche plusieurs propriétés quand plusieurs favoris existent", () => {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(["1", "2"]));

        render(<FavoritesList properties={properties} />);

        expect(screen.getByText("Appartement Paris")).toBeInTheDocument();
        expect(screen.getByText("Maison Lyon")).toBeInTheDocument();
    });
});
