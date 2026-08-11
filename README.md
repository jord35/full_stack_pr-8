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
