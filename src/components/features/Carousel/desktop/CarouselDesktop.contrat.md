# Contrat du composant CarouselDesktop

> **Statut** : validé.
> Sous-composant **privé** du [`Carousel`](../Carousel.contrat.md:1) — version desktop.

## Rôle

Version **desktop** du carrousel : affiche les photos d'un logement avec une **grande image**
et **4 miniatures par page**, navigables via des **flèches** et une **pagination** (points).

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `pictures` | `string[]` | ✅ | Tableau des URLs des images du logement |

## Structure

- **Grande image** à gauche (l'image sélectionnée).
- **4 miniatures** par page à droite.
- **Flèches** et **points** en dessous pour naviguer entre les pages de miniatures.

## Navigation

- **Cliquer** sur une miniature → elle devient la grande image.
- **Flèches** : naviguent entre les **pages** de miniatures (groupes de 4).
- **Points** (pagination) : **1 point par page** de 4 miniatures.
- **Boucle** : naviguer après la dernière page revient à la première (et inversement).
- **Pas d'effet automatique** : le passage d'une page à l'autre se fait **au clic** uniquement.

## Règles des flèches et points

| Nombre d'images | Comportement |
|-----------------|--------------|
| **≤ 4** | Pas de flèches, pas de points (une seule page). |
| **> 4** (ex: 5) | 4 miniatures par page + points. Exemple avec 5 images : page 1 = 4 miniatures, page 2 = 1 miniature → 2 points. |

## Cas limites

| Nombre d'images | Comportement |
|-----------------|--------------|
| **0** | Affiche l'image de secours (`no-image.png`). |
| **1** | Affiche uniquement la grande image, **pas de miniatures**. |
| **2 à 4** | Affiche les miniatures, **pas de flèches ni de points** (une seule page). |
| **5 et +** | 4 miniatures par page + flèches + points. |

## Composant client

- C'est un composant **client** (directive `"use client"`) car il gère un état (image sélectionnée, page courante) et des interactions.

## Dépendances

- **Images** : utilise `ContentImage` (wrapper de `next/image`).
- **Icône flèche** : `arrow.svg`.
- **Image de secours** : `no-image.png` (cas 0 image).

## Utilisation

- Uniquement par le [`Carousel`](../Carousel.contrat.md:1) (composant parent).
