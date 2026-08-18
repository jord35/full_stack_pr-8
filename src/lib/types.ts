/** Hôte (propriétaire) d'une propriété */
export interface Host {
    id: number;
    name: string;
    picture: string;
}

/** Propriété (logement) de Kasa */
export interface Property {
    id: string;
    slug: string;
    title: string;
    description: string;
    cover: string;
    location: string;
    price_per_night: number;
    rating_avg: number;
    ratings_count: number;
    host: Host;
    /** Champs présents uniquement dans le détail (GET /api/properties/:id) */
    pictures?: string[];
    equipments?: string[];
    tags?: string[];
}

/** Utilisateur de l'application Kasa */
export interface User {
    id: number;
    name: string;
    email: string;
    picture: string | null;
    role: string;
}

/** Réponse d'authentification (login/register) */
export interface AuthResponse {
    token: string;
    user: User;
}
