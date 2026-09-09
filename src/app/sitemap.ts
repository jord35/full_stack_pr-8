import type { MetadataRoute } from "next";
import { getProperties } from "@/lib/api";

/**
 * Sitemap du site Kasa.
 * Génère la liste des URLs publiques indexables pour les moteurs de recherche.
 *
 * Pages incluses :
 * - Pages statiques publiques : / (accueil), /a-propos
 * - Pages dynamiques : /logements/[slug] (une URL par logement)
 *
 * Pages EXCLUES (non indexables) :
 * - /login, /signup : pages d'authentification, pas de contenu utile à indexer
 * - /favorites : page vide par défaut (aucun favori sans action utilisateur),
 *   donc sans intérêt à indexer. Ce n'est PAS une page protégée.
 * - /messages, /ajouter-un-logement : pages protégées (connexion requise)
 *
 * L'URL de base vient de NEXT_PUBLIC_SITE_URL (voir .env.local), avec un
 * fallback sur localhost pour le développement local.
 */
// URL de base du site. On retire un éventuel slash final pour éviter
// les doubles slashes dans les URLs générées (ex: https://site.com//a-propos).
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001").replace(/\/+$/, "");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Pages statiques publiques indexables
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: `${SITE_URL}/`,
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${SITE_URL}/a-propos`,
            changeFrequency: "monthly",
            priority: 0.8,
        },
    ];

    // Pages dynamiques : une URL par logement (récupérés depuis l'API)
    let propertyPages: MetadataRoute.Sitemap = [];
    try {
        const properties = await getProperties();
        propertyPages = properties.map((p) => ({
            url: `${SITE_URL}/logements/${p.slug}`,
            changeFrequency: "weekly",
            priority: 0.7,
        }));
    } catch {
        // Si l'API est indisponible, on retourne au moins les pages statiques
        // plutôt que de faire échouer tout le sitemap.
    }

    return [...staticPages, ...propertyPages];
}
