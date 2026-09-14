# Kasa — Front-end

Front-end de l'application **Kasa**, une plateforme de location de logements entre particuliers. Ce projet est développé avec **Next.js** et **React**, et utilise **Storybook** pour le développement et la documentation des composants.

## Description du projet

Kasa est une application web de réservation de logements. Le front-end consomme une API REST (back-end fourni séparément) pour afficher les logements, leurs détails, et gérer les favoris.

## Prérequis

- **Node.js** 18+ (recommandé)
- **npm**
- Le **back-end** Kasa doit tourner sur `http://localhost:3000`

> ⚠️ **Le back-end n'est pas fourni dans ce dépôt.**
> Il est fourni par OpenClassrooms dans le dépôt
> [`OpenClassrooms-Student-Center/dev-react-P12`](https://github.com/OpenClassrooms-Student-Center/dev-react-P12).
> Clonez-le et lancez-le **avant** ce front-end (référez-vous à son propre README
> pour les instructions d'installation et de lancement).

## Alternative sans back-end : mode MSW

Ce front-end peut néanmoins tourner **sans back-end** grâce à **MSW**
(*Mock Service Worker*), qui intercepte les requêtes réseau et renvoie des
données simulées. Pratique pour une démonstration ou un déploiement statique
(c'est ce mode qui est utilisé sur Vercel).

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
- **Microdonnées schema.org** : chaque page de logement embarque un bloc JSON-LD de type `Product` (avec `Offer` pour le prix et `AggregateRating` conditionnel) pour les résultats enrichis Google. Voir [`doc/metadonnees/`](doc/metadonnees/).
- **Open Graph** : la page d'accueil définit `og:image`, `og:title` et `og:description` pour afficher un aperçu (image + description) lors du partage d'un lien.

## Documentation du projet

Les éléments de documentation et de preuve sont regroupés dans le dossier [`doc/`](doc/), organisé **par thème** :

- **Accessibilité, performance & SEO** → [`doc/accessibilite-performance-seo/`](doc/accessibilite-performance-seo/)
- **Métadonnées & données structurées** → [`doc/metadonnees/`](doc/metadonnees/)

### Accessibilité, performance & SEO — [`doc/accessibilite-performance-seo/`](doc/accessibilite-performance-seo/)

Pour chaque page de l'application sont fournis :

- les rapports **Lighthouse** (*outil*) en versions **desktop** et **mobile** (PDF) ;
- les rapports **Wave** (*outil*) pour l'accessibilité (PNG).

| Page | Lighthouse desktop | Lighthouse mobile | Wave (accessibilité) |
|------|--------------------|-------------------|----------------------|
| Accueil | [PDF](doc/accessibilite-performance-seo/accueil/accueil-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/accueil/accueil-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/accueil/wave-accueil.png) |
| À propos | [PDF](doc/accessibilite-performance-seo/a-propos/a-propos-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/a-propos/a-propos-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/a-propos/wave-a-propos.png) |
| Favoris | [PDF](doc/accessibilite-performance-seo/favoris/favoris-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/favoris/favoris-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/favoris/wave-favoris.png) |
| Logement | [PDF](doc/accessibilite-performance-seo/logement/logement-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/logement/logement-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/logement/wave-logement.png) |
| Connexion | [PDF](doc/accessibilite-performance-seo/login/login-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/login/login-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/login/wave-login.png) |
| Inscription | [PDF](doc/accessibilite-performance-seo/signup/signup-desktop-lighthouse.pdf) | [PDF](doc/accessibilite-performance-seo/signup/signup-mobile-lighthouse.pdf) | [PNG](doc/accessibilite-performance-seo/signup/wave-signup.png) |

> Les rapports Lighthouse sont produits par le script [`lighthouse-reports/run-lighthouse.js`](../lighthouse-reports/run-lighthouse.js) situé à la racine du monorepo.

### Métadonnées & résultats enrichis — [`doc/metadonnees/`](doc/metadonnees/)

Balisage **schema.org** de type `Product` (JSON-LD) et preuves de validation
via le **Google Rich Results Test** et le validateur schema.org.
