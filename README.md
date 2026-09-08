# Kasa — Front-end

Front-end de l'application **Kasa**, une plateforme de location de logements entre particuliers. Ce projet est développé avec **Next.js** et **React**, et utilise **Storybook** pour le développement et la documentation des composants.

## Description du projet

Kasa est une application web de réservation de logements. Le front-end consomme une API REST (back-end fourni séparément) pour afficher les logements, leurs détails, et gérer les favoris.

## Prérequis

- **Node.js** 18+ (recommandé)
- **npm**
- Le **back-end** Kasa doit tourner sur `http://localhost:3000` (voir le dossier `back-end/`)

## Installation

```bash
npm install
```

## Lancement du projet

### Serveur de développement (Next.js)

```bash
npm run dev
```

Ouvrez [http://localhost:3001](http://localhost:3001) (ou le port configuré) pour voir l'application.

### Storybook (développement des composants)

```bash
npm run storybook
```

Ouvrez [http://localhost:6006](http://localhost:6006) pour explorer les composants.

### Build de production

```bash
npm run build
npm start
```

## Structure du projet

```
src/
├── app/          # Pages (App Router de Next.js)
├── components/   # Composants React (avec stories Storybook)
└── mocks/        # Données mockées (MSW) pour le développement sans back-end
```

## Documentation des composants

Les composants sont documentés avec **Storybook** et des fichiers `*.contrat.md` qui décrivent le contrat (props, comportement) de chaque composant.

## Tests

Les tests unitaires sont écrits avec **Vitest** et **Testing Library**.

```bash
npm test
```

Ils couvrent notamment : le carrousel (desktop + mobile), les favoris, les boutons, la navigation, les notes (StarCount) et les tags.

## Lint

Le lint est assuré par **ESLint** (config Next.js).

```bash
npm run lint
```

## Variables d'environnement

| Variable | Description | Défaut |
|----------|-------------|--------|
| `NEXT_PUBLIC_SITE_URL` | URL publique du site (utilisée pour le sitemap et les métadonnées Open Graph) | `http://localhost:3001` |

Copier le fichier `.env.local` (ou le créer) et adapter la valeur en production :

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

## Fonctionnalités SEO

Le projet intègre plusieurs optimisations pour le référencement :

- **Sitemap** : généré automatiquement à `/sitemap.xml` (fichier [`src/app/sitemap.ts`](src/app/sitemap.ts)). Il liste les pages publiques indexables (accueil, à propos) et toutes les pages logement (`/logements/[slug]`).
- **Microdonnées schema.org** : chaque page de logement embarque un bloc JSON-LD de type `LodgingBusiness` (titre, description, image, prix, localisation, note) pour les résultats enrichis Google.
- **Open Graph** : la page d'accueil définit `og:image`, `og:title` et `og:description` pour afficher un aperçu (image + description) lors du partage d'un lien.
