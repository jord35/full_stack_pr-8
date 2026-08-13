import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// Nettoie le DOM après chaque test pour éviter les conflits entre tests
afterEach(() => {
    cleanup();
});
