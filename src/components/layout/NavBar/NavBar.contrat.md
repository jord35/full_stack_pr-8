# Contrat du composant NavBar

## Rôle
Barre de navigation principale de l'application. C'est un composant **layout** : il encadre le contenu en haut de chaque page.

Il contient :
- Le logo Kasa (composant `Logo`)
- Les liens de navigation (composant `NavLink`)
- Un **burger menu** sur mobile

## Liens de navigation

| Lien | Destination | Rendu |
|------|-------------|-------|
| Accueil | `/` | Texte (variante default) |
| À propos | `/a-propos` | Texte (variante default) |
| Ajouter un logement | `/ajouter-un-logement` | Texte (variante primary, rouge) |
| Favoris | `/favoris` | Icône cœur |
| Messagerie | `/messages` | Icône message |

## Comportement responsive (breakpoint 1280px)

### Mobile (< 1280px)
- Affiche le **logo S** (compact)
- Affiche un **burger menu** (bouton hamburger)
- Au clic sur le burger, un **menu déroulant vertical** s'ouvre avec tous les liens
- Le menu se ferme quand on clique sur un lien

### Desktop (>= 1280px)
- À gauche : **Accueil**, **À propos**
- **Logo** au centre
- À droite du logo : **Ajouter un logement** (rouge), **Favoris** (cœur), **Messagerie** (message)
- Le burger menu est masqué

## État React
- Utilise `useState` pour gérer l'ouverture/fermeture du menu mobile (`isOpen`)
- C'est un composant **client** (directive `"use client"`)

## Accessibilité
- Le bouton burger a un attribut `aria-label` descriptif
- Le menu mobile est navigable au clavier
