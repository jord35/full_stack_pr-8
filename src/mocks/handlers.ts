import { http, HttpResponse } from "msw";
import properties from "./data/properties.json";

/**
 * Mocks MSW pour le déploiement sans backend.
 * Permet au front-end de fonctionner de façon autonome (Vercel) en
 * interceptant les appels API et en servant des données factices.
 */

// Utilisateur factice retourné par les mocks d'authentification
const mockUser = {
    id: 1,
    name: "Utilisateur Kasa",
    email: "user@kasa.fr",
    picture: null,
    role: "user",
};

export const handlers = [
    // ─── Propriétés ─────────────────────────────────────────
    // Liste des propriétés
    http.get("/api/properties", () => {
        return HttpResponse.json(properties);
    }),

    // Détail d'une propriété
    http.get("/api/properties/:id", ({ params }) => {
        const property = properties.find((p) => p.id === params.id);
        if (!property) {
            return new HttpResponse(null, { status: 404 });
        }
        return HttpResponse.json(property);
    }),

    // ─── Authentification ───────────────────────────────────
    // Connexion : retourne un token + un utilisateur factice
    http.post("/auth/login", async ({ request }) => {
        const body = (await request.json()) as { email?: string; password?: string };
        if (!body.email || !body.password) {
            return HttpResponse.json(
                { message: "Email et mot de passe requis" },
                { status: 400 }
            );
        }
        return HttpResponse.json({
            token: "mock-token-kasa",
            user: { ...mockUser, email: body.email },
        });
    }),

    // Inscription : retourne un token + un utilisateur factice
    http.post("/auth/register", async ({ request }) => {
        const body = (await request.json()) as {
            name?: string;
            email?: string;
            password?: string;
        };
        if (!body.name || !body.email || !body.password) {
            return HttpResponse.json(
                { message: "Nom, email et mot de passe requis" },
                { status: 400 }
            );
        }
        return HttpResponse.json({
            token: "mock-token-kasa",
            user: { ...mockUser, name: body.name, email: body.email },
        });
    }),
];
