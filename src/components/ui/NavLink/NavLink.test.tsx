import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
    it("affiche le contenu passé en children", () => {
        render(<NavLink href="/">Accueil</NavLink>);
        expect(screen.getByRole("link", { name: "Accueil" })).toBeInTheDocument();
    });

    it("pointe vers la bonne destination via href", () => {
        render(<NavLink href="/a-propos">À propos</NavLink>);
        const link = screen.getByRole("link", { name: "À propos" });
        expect(link).toHaveAttribute("href", "/a-propos");
    });

    it("applique la variante default (texte noir) par défaut", () => {
        render(<NavLink href="/">Accueil</NavLink>);
        const link = screen.getByRole("link", { name: "Accueil" });
        expect(link.className).toContain("text-noir");
    });

    it("applique la variante primary (texte rouge)", () => {
        render(
            <NavLink href="/ajouter-un-logement" variant="primary">
                Ajouter un logement
            </NavLink>
        );
        const link = screen.getByRole("link", { name: "Ajouter un logement" });
        expect(link.className).toContain("text-mainRed");
    });

    it("ajoute les classes CSS additionnelles via className", () => {
        render(
            <NavLink href="/" className="font-bold">
                Accueil
            </NavLink>
        );
        const link = screen.getByRole("link", { name: "Accueil" });
        expect(link.className).toContain("font-bold");
    });
});
