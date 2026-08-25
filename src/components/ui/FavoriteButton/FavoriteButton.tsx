"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export interface FavoriteButtonProps {
    /** Identifiant du logement à mettre en favori */
    propertyId: string;
    /** Classes CSS additionnelles */
    className?: string;
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
 * FavoriteButton.
 * Bouton cœur permettant d'ajouter/retirer un logement dans les favoris.
 *
 * Comportement :
 * - Toggle du favori dans localStorage (ajout / retrait).
 * - Ne dépend pas de l'authentification : les favoris sont stockés
 *   localement dans le navigateur (localStorage), conformément au brief.
 *
 * État visuel : fond rouge (bg-mainRed) quand le logement est en favori.
 */
export function FavoriteButton({ propertyId, className = "" }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);

    // Au montage, on vérifie si le logement est déjà en favori
    useEffect(() => {
        setIsFavorite(readFavorites().includes(propertyId));
    }, [propertyId]);

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            // Empêche le clic de remonter au <Link> parent (la carte)
            // et d'éviter la navigation vers la page Détail Logement.
            e.stopPropagation();
            e.preventDefault();

            // Toggle du favori dans localStorage
            const favorites = readFavorites();
            const alreadyFavorite = favorites.includes(propertyId);
            const next = alreadyFavorite
                ? favorites.filter((id) => id !== propertyId)
                : [...favorites, propertyId];

            localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
            setIsFavorite(!alreadyFavorite);
        },
        [propertyId]
    );

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label={isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
            aria-pressed={isFavorite}
            className={`flex h-8 w-8 items-center justify-center rounded-[5px] transition-colors ${isFavorite ? "bg-mainRed" : "bg-white/80"
                } ${className}`}
        >
            <Image
                src="/icone/hart-dark_grey.svg"
                alt=""
                width={16}
                height={16}
                className={isFavorite ? "brightness-0 invert" : ""}
            />
        </button>
    );
}
