# Contrat du composant FavoriteButton

## Rôle
Bouton **cœur** permettant d'ajouter/retirer un logement dans les **favoris** de l'utilisateur. C'est un composant **UI** réutilisable (utilisé sur la carte d'accueil, et plus tard sur la page Détail Logement).

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `propertyId` | `string` | ✅ | L'identifiant du logement à mettre en favori |

## Comportement au clic

### Cas 1 : utilisateur **connecté**
- Ajoute le logement dans les **favoris** (stockés dans `localStorage`).
- Si le logement est **déjà** en favori → on le **retire** (toggle).
- Le bouton change d'apparence selon l'état.

### Cas 2 : utilisateur **non connecté**
- **Redirige** vers la page `/login`.
- N'ajoute rien aux favoris.

## États visuels

| État | Apparence |
|------|-----------|
| Non favori | Cœur vide / contour |
| Favori | **Fond rouge** (`bg-mainRed`) + cœur blanc |

> Au clic, quand le logement devient favori, le bouton passe en **fond rouge**.

## Dépendances
- **Authentification** : utilise le contexte d'auth (`AuthContext`) pour savoir si l'utilisateur est connecté.
- **Favoris** : utilise `localStorage` pour persister les choix (cohérent avec le brief, étape 6).
- **Icône** : utilise l'icône cœur existante [`favori.svg`](../../../../public/icone/favori.svg:1).

## Composant client
- C'est un composant **client** (directive `"use client"`) car il gère un état et des interactions.

## Accessibilité
- Le bouton a un `aria-label` descriptif (ex: "Ajouter aux favoris" / "Retirer des favoris").
- L'état favori/non-favori est visible visuellement (couleur) ET annoncé (aria-label).

## Utilisation
- `PropertyCard` (page d'accueil)
- Plus tard : page Détail Logement
