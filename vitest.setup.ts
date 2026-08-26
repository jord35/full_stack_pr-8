import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";

// ─── Mock du localStorage ─────────────────────────────────
// Le localStorage n'existe pas dans l'environnement jsdom.
// On le simule avec un simple objet en mémoire pour que les
// composants qui l'utilisent (favoris) puissent être testés.
const localStorageMock = (() => {
    let store: Record<string, string> = {};

    return {
        getItem: (key: string) => store[key] ?? null,
        setItem: (key: string, value: string) => {
            store[key] = String(value);
        },
        removeItem: (key: string) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
    };
})();

// On remplace le localStorage global par notre mock
Object.defineProperty(window, "localStorage", {
    value: localStorageMock,
    writable: true,
});

// Nettoie le DOM et le localStorage après chaque test
// pour éviter les conflits entre tests.
afterEach(() => {
    cleanup();
    localStorageMock.clear();
});

// Vide le localStorage avant chaque test pour partir d'un état propre
beforeEach(() => {
    localStorageMock.clear();
});
