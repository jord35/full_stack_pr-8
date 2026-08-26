# Contrat du composant HostCard

## Rôle
Carte "haute" affichée sur la **page Détail Logement**, au-dessus du titre de l'annonce. Elle présente **l'hôte** du logement et propose de le **contacter**.

C'est un composant **feature** : il est spécifique à la page Détail Logement et orchestre plusieurs éléments (image, avatar, note, boutons).

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `property` | `Property` | ✅ | Le logement à afficher (voir [`types.ts`](../../../lib/types.ts:9)) |

Le composant reçoit **un objet `Property`** complet et en extrait ce qu'il affiche.

## Contenu affiché

La carte affiche **2 zones** :

### 1. Zone hôte (en haut)
| Élément | Source | Exemple |
|---------|--------|---------|
| **Image** du logement | `property.cover` | photo de couverture |
| **Avatar** de l'hôte | `property.host.picture` | photo de profil |
| **Nom** de l'hôte | `property.host.name` | "Nathalie Jean" |
| **Note** (étoiles) | `property.rating_avg` | 5 |

> ℹ️ **Note** : on affiche `rating_avg` **tel que le renvoie le back-end** (c'est une moyenne, ex: `5`, `3`). On ne transforme pas la donnée.

### 2. Zone boutons (en bas)
Deux boutons **"Contacter l'hôte"** côte à côte :
- Les **deux** boutons redirigent vers la **page Messages** (`/messages`).
- C'est un **MVP** : on ne différencie pas encore les deux boutons (même action).

## Navigation

- Le clic sur un bouton redirige vers la **page Messages** : `/messages`.
- Utilise le composant [`Button`](../../ui/Button/Button.tsx:10) (variantes `primary` / `secondary`).

## Composant client

- C'est un composant **client** (directive `"use client"`) car il gère la **navigation** vers la page Messages (via `useRouter()` ou `<Link>`).

## Composants utilisés

- [`Button`](../../ui/Button/Button.tsx:10) : les 2 boutons "Contacter l'hôte".
- [`ContentImage`](../../ui/ContentImage/ContentImage.tsx:26) : image de couverture + avatar.

## Accessibilité

- L'image et l'avatar doivent avoir un **`alt`** descriptif (ex: nom de l'hôte pour l'avatar).
- Les boutons doivent avoir un **texte visible** ("Contacter l'hôte").

## Utilisation

- Page Détail Logement (`/logements/[slug]`).
