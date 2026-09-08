import type { AuthResponse, Property } from "./types";
import mockProperties from "@/mocks/data/properties.json";

/**
 * Module API — Toutes les fonctions d'appel au backend Kasa.
 *
 * Détection du contexte d'exécution :
 * - Côté serveur (Server Component) : URL absolue, car Node.js a besoin d'une adresse
 *   complète pour faire le fetch (une URL relative provoquerait "Invalid URL").
 * - Côté client (navigateur) : URL relative, pour passer par le proxy Next.js
 *   (voir next.config.ts) qui redirige /api et /auth vers le back-end (port 3000),
 *   ce qui évite les problèmes CORS.
 *
 * Mode mocks (NEXT_PUBLIC_USE_MOCKS=true) :
 * - Utilisé pour un déploiement autonome (Vercel) sans backend.
 * - Les pages SERVEUR (accueil, logement) chargent les données au moment du rendu
 *   serveur, AVANT que MSW (côté client) ne soit actif. On retourne donc les
 *   données mockées directement ici, sans fetch.
 */
const API_URL = typeof window === "undefined" ? "http://localhost:3000" : "";

// Si NEXT_PUBLIC_USE_MOCKS=true, on sert les données mockées (front autonome).
const USE_MOCKS = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

// ─── Helpers ─────────────────────────────────────────────

/** Gère la réponse API : parse le JSON, ou throw une erreur */
async function handleResponse<T>(res: Response): Promise<T> {
    if (!res.ok) {
        const body = await res.json().catch(() => ({ message: "Erreur inconnue" }));
        const message =
            body.message || body.error || `Erreur ${res.status}`;
        throw new Error(message);
    }
    return res.json() as Promise<T>;
}

// ─── Properties ──────────────────────────────────────────

/** Liste des propriétés : GET /api/properties */
export async function getProperties(): Promise<Property[]> {
    // Mode mocks : retourne les données mockées sans appel réseau
    if (USE_MOCKS) {
        return mockProperties as Property[];
    }
    const res = await fetch(`${API_URL}/api/properties`);
    return handleResponse<Property[]>(res);
}

/** Détail d'une propriété : GET /api/properties/:id */
export async function getProperty(id: string): Promise<Property> {
    // Mode mocks : retourne le logement mocké correspondant à l'id
    if (USE_MOCKS) {
        const property = (mockProperties as Property[]).find((p) => p.id === id);
        if (!property) {
            throw new Error("Logement introuvable");
        }
        return property;
    }
    const res = await fetch(`${API_URL}/api/properties/${id}`);
    return handleResponse<Property>(res);
}

// ─── Auth ────────────────────────────────────────────────

/** Connexion : POST /auth/login */
export async function login(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });
    return handleResponse<AuthResponse>(res);
}

/** Inscription : POST /auth/register */
export async function register(name: string, email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
    });
    return handleResponse<AuthResponse>(res);
}
