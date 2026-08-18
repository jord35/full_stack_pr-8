import type { AuthResponse, Property } from "./types";

/**
 * Module API — Toutes les fonctions d'appel au backend Kasa.
 *
 * Base URL : NEXT_PUBLIC_API_URL (défaut: http://localhost:3000)
 */

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

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
    const res = await fetch(`${API_URL}/api/properties`);
    return handleResponse<Property[]>(res);
}

/** Détail d'une propriété : GET /api/properties/:id */
export async function getProperty(id: string): Promise<Property> {
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
