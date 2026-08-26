# Contrat du composant Carousel

> **Statut** : validé.
> Ce composant est un **orchestrateur** : il ne contient pas de logique propre,
> il délègue le rendu à deux sous-composants selon l'écran.

## Rôle

Composant **feature** qui affiche les **photos d'un logement** sous forme de galerie interactive.
Il est le **point d'entrée public** : c'est lui qu'on importe dans la page.

Il ne fait que **choisir** quel sous-composant afficher selon l'écran :
- **Mobile** : [`CarouselMobile`](./mobile/CarouselMobile.contrat.md:1)
- **Desktop** : [`CarouselDesktop`](./desktop/CarouselDesktop.contrat.md:1)

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `pictures` | `string[]` | ✅ | Tableau des URLs des images du logement |

## Comportement

- Rend les deux sous-composants (Mobile + Desktop).
- Les masque selon l'écran via **CSS responsive** :
  - Mobile : visible en dessous du breakpoint `xl` (`xl:hidden`)
  - Desktop : visible à partir du breakpoint `xl` (`hidden xl:block`)
- **Aucune logique propre** : tout le comportement est délégué aux sous-composants.

## Pourquoi cette architecture ?

- **Séparation des responsabilités** : chaque sous-composant gère sa logique (mobile = scroll, desktop = flèches/pagination).
- **Testabilité** : chaque brique est testable indépendamment.
- **Cohésion** : les sous-composants sont **privés** au Carousel (créés uniquement pour lui), donc imbriqués dans son dossier.

## Composant client

- C'est un composant **client** (directive `"use client"`) car il rend des sous-composants qui gèrent des états et des interactions.

## Dépendances

- [`CarouselMobile`](./mobile/CarouselMobile.contrat.md:1) : version mobile.
- [`CarouselDesktop`](./desktop/CarouselDesktop.contrat.md:1) : version desktop.

## Utilisation

- Page Détail Logement (`/logements/[slug]`).
