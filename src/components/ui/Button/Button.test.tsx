import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
    it("affiche le contenu passé en children", () => {
        render(<Button>Réserver</Button>);
        expect(screen.getByRole("button", { name: "Réserver" })).toBeInTheDocument();
    });

    it("applique la classe de la variante primary par défaut", () => {
        render(<Button>Réserver</Button>);
        const button = screen.getByRole("button", { name: "Réserver" });
        expect(button).toHaveClass("bg-mainRed");
    });

    it("applique la classe de la variante secondary", () => {
        render(<Button variant="secondary">Voir le logement</Button>);
        const button = screen.getByRole("button", { name: "Voir le logement" });
        expect(button).toHaveClass("bg-grisLight");
    });

    it("déclenche onClick au clic", async () => {
        const user = userEvent.setup();
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Réserver</Button>);
        await user.click(screen.getByRole("button", { name: "Réserver" }));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("est désactivé quand la prop disabled est passée", () => {
        render(<Button disabled>Réserver</Button>);
        expect(screen.getByRole("button", { name: "Réserver" })).toBeDisabled();
    });

    it("applique le style visuel désactivé (opacité réduite + curseur interdit)", () => {
        render(<Button disabled>Réserver</Button>);
        const button = screen.getByRole("button", { name: "Réserver" });
        expect(button).toHaveClass("disabled:opacity-50");
        expect(button).toHaveClass("disabled:cursor-not-allowed");
    });
});
