# Contrat du composant CarouselMobile

> **Statut** : validé.
> Sous-composant **privé** du [`Carousel`](../Carousel.contrat.md:1) — version mobile.

## Rôle

Version **mobile** du carrousel : affiche les photos d'un logement avec une **grande image**
et un **carrousel défilant** de miniatures.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `pictures` | `string[]` | ✅ | Tableau des URLs des images du logement |

## Structure

- **Grande image** en haut (l'image sélectionnée).
- **Carrousel défilant** de miniatures en dessous (scroll horizontal).

## Navigation

- L'utilisateur **scrolle horizontalement** les miniatures pour les parcourir.
- **Cliquer** sur une miniature → elle devient la grande image.
- **Pas de flèches** en mobile.
- **Défilement automatique** : quand le carrousel n'a **pas été touché**, il défile
  automatiquement (les miniatures défilent de gauche à droite de manière fluide).
  Le défilement automatique **s'arrête dès que l'utilisateur interagit** avec le carrousel.

## Cas limites

| Nombre d'images | Comportement |
|-----------------|--------------|
| **0** | Affiche l'image de secours (`no-image.png`). |
| **1** | Affiche uniquement la grande image, **pas de carrousel**. |
| **2 à 3** | Carrousel **plus petit** (taille adaptée au nombre d'images) pour rester bien centré sans casser le cadrage. |
| **4 et +** | Carrousel défilant avec toutes les miniatures. |

## Composant client

- C'est un composant **client** (directive `"use client"`) car il gère un état (image sélectionnée) et des interactions (scroll, défilement auto).

## Dépendances

- **Images** : utilise `ContentImage` (wrapper de `next/image`).
- **Image de secours** : `no-image.png` (cas 0 image).

## Utilisation

- Uniquement par le [`Carousel`](../Carousel.contrat.md:1) (composant parent).
