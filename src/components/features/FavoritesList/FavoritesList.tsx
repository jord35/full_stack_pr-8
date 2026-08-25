"use client";

import { useEffect, useState } from "react";
import type { Property } from "@/lib/types";
import { PropertyGrid } from "@/components/features/PropertyGrid/PropertyGrid";

export interface FavoritesListProps {
    /** Toutes les propriétés disponibles (chargées côté serveur) */
    properties: Property[];
}

/** Clé de stockage des favoris dans localStorage */
const FAVORITES_KEY = "favorites";

/**
 * Lit la liste des favoris depuis localStorage.
 * Retourne un tableau d'ids (string).
 */
function readFavorites(): string[] {
    try {
        const raw = localStorage.getItem(FAVORITES_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch {
        return [];
    }
}

/**
 * FavoritesList.
 * Composant client qui filtre les propriétés selon les favoris stockés
 * dans le localStorage, puis les affiche dans une PropertyGrid.
 *
 * La page Favoris n'est pas protégée : les favoris sont locaux au navigateur,
 * il n'est donc pas nécessaire d'être connecté pour les voir.
 */
export function FavoritesList({ properties }: FavoritesListProps) {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);

    // Au montage, on lit les favoris depuis le localStorage
    useEffect(() => {
        setFavoriteIds(readFavorites());
    }, []);

    // On filtre les propriétés dont l'id est dans les favoris
    const favoriteProperties = properties.filter((p) =>
        favoriteIds.includes(p.id)
    );

    if (favoriteProperties.length === 0) {
        return (
            <p className="text-center font-inter text-base text-grisDark">
                Vous n'avez pas encore de favoris.
            </p>
        );
    }

    return <PropertyGrid properties={favoriteProperties} />;
}
