import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { StarCount } from "./StarCount";

describe("StarCount", () => {
    it("affiche la note entière (ex: 5)", () => {
        render(<StarCount rating={5} />);
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("affiche la note décimale (ex: 4.5)", () => {
        render(<StarCount rating={4.5} />);
        expect(screen.getByText("4.5")).toBeInTheDocument();
    });

    it("n'affiche rien quand il n'y a pas de note", () => {
        const { container } = render(<StarCount />);
        expect(container).toBeEmptyDOMElement();
    });
});
