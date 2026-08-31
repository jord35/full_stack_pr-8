import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BackButton } from "./BackButton";

// ─── Mock du routeur Next.js ─────────────────────────────────
// Le composant BackButton utilise useRouter() de next/navigation.
// Dans un test, on ne lance pas un vrai navigateur : on SIMULE le
// routeur avec des fonctions espionnables (vi.fn()).
// - back() : revient à la page précédente (accueil OU favoris)
// - push() : navigue vers une URL (fallback vers l'accueil)
const mockBack = vi.fn();
const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
    useRouter: () => ({
        back: mockBack,
        push: mockPush,
    }),
}));

describe("BackButton", () => {
    // On réinitialise les espions avant chaque test pour partir
    // d'un état propre (les appels précédents ne comptent pas).
    beforeEach(() => {
        mockBack.mockClear();
        mockPush.mockClear();
    });

    it("appelle router.back() quand il y a une page précédente", async () => {
        // Situation : on vient d'une autre page (accueil OU favoris).
        // window.history.length > 1 signifie qu'il y a un historique.
        Object.defineProperty(window, "history", {
            value: { length: 2 },
            writable: true,
        });

        const user = userEvent.setup();
        render(<BackButton />);
        await user.click(screen.getByRole("button", { name: "Retour" }));

        // On revient d'où on vient (accueil → accueil, favoris → favoris)
        expect(mockBack).toHaveBeenCalledTimes(1);
        expect(mockPush).not.toHaveBeenCalled();
    });

    it("appelle router.push('/') quand il n'y a pas de page précédente (fallback)", async () => {
        // Situation : arrivée directe sur la page (URL tapée, lien partagé).
        // window.history.length === 1 signifie qu'il n'y a pas d'historique.
        Object.defineProperty(window, "history", {
            value: { length: 1 },
            writable: true,
        });

        const user = userEvent.setup();
        render(<BackButton />);
        await user.click(screen.getByRole("button", { name: "Retour" }));

        // Fallback : on renvoie vers l'accueil
        expect(mockPush).toHaveBeenCalledWith("/");
        expect(mockBack).not.toHaveBeenCalled();
    });

    it("a un label accessible 'Retour' (aria-label)", () => {
        render(<BackButton />);
        expect(screen.getByRole("button", { name: "Retour" })).toBeInTheDocument();
    });
});
