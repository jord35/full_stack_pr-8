# Contrat du composant InfoCard

## Rôle
Carte d'information affichée dans la section **"Comment ça marche"** de la page d'accueil. C'est un composant **UI présentationnel** : il reçoit des props et les affiche, sans logique ni état.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | Le titre de la carte |
| `description` | `string` | ✅ | La description de la carte |

## Contenu affiché
La carte affiche **2 éléments** :
1. **Titre** (`title`) — rendu dans un `<h3>`
2. **Description** (`description`) — rendue dans un `<p>` sous le titre

## Style

| Élément | Valeur |
|---------|--------|
| Largeur | `342px` (`w-[342px]`) |
| Hauteur | `199px` (`h-[199px]`) |
| Fond | `darkOrange` (`#842c16`) |
| Coins arrondis | `rounded-lg` |
| Titre | Inter medium 18px (`text-lg font-medium`) |
| Description | Inter regular 12px (`text-xs font-normal`) |
| Couleur du texte | `blanc` (`#ffffff`) |

## Comportement
- Le contenu est **centré verticalement** (`justify-center`).
- Le padding horizontal est de `24px` (`px-6`).
- C'est un composant **présentationnel** : aucune logique, aucun état, aucune directive client nécessaire.

## Accessibilité
- Le titre utilise `<h3>` (niveau adapté à une carte dans une section).
- Le texte est en blanc sur fond sombre (`darkOrange`), ce qui garantit un bon contraste.

## Utilisation
- Page d'accueil, section "Comment ça marche".
