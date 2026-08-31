import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { TagList } from "./TagList";

describe("TagList", () => {
    it("affiche le titre", () => {
        render(<TagList title="Équipements" items={["WIFI", "Frigo"]} />);
        expect(screen.getByRole("heading", { name: "Équipements" })).toBeInTheDocument();
    });

    it("affiche tous les tags de la liste", () => {
        render(<TagList title="Catégories" items={["Montmartre", "Batignolle", "Canal"]} />);
        expect(screen.getByText("Montmartre")).toBeInTheDocument();
        expect(screen.getByText("Batignolle")).toBeInTheDocument();
        expect(screen.getByText("Canal")).toBeInTheDocument();
    });
});
