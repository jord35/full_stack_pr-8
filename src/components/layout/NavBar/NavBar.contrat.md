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
| Ajouter un logement | `/ajouter-un-logement` | Desktop : texte (variante primary, rouge) / Mobile : lien stylé en bouton |
| Favoris | `/favorites` | Icône cœur |
| Messagerie | `/messages` | Icône message |

## Comportement responsive (breakpoint 1280px)

### Mobile (< 1280px)
- **Logo S** (compact) à **gauche**
- **Burger menu** (icône [`burger.svg`](../../../public/icone/burger.svg:1)) à **droite**
- Au clic sur le burger, le menu déroulant vertical s'ouvre et l'icône devient une **croix** ([`croix.svg`](../../../public/icone/croix.svg:1))
- Au clic sur la croix, le menu se referme
- Le menu se ferme aussi quand on clique sur un lien
- **Ordre du menu** : Accueil, À propos, Messagerie, Favoris, puis **Ajouter un logement** en bouton
- Typo des liens du menu : **Inter regular 24px, noir** (`text-2xl text-noir`)
- Bouton "Ajouter un logement" : lien `<Link>` stylé (200x36px, fond `mainRed`, radius 10, padding 32/8, Inter medium 14 blanc)

### Desktop (>= 1280px)
- À gauche : **Accueil**, **À propos**
- **Logo** au centre
- À droite du logo : **Ajouter un logement** (rouge), **Favoris** (cœur), **Messagerie** (message)
- Le burger menu est masqué

## État React
- Utilise `useState` pour gérer l'ouverture/fermeture du menu mobile (`isOpen`)
- C'est un composant **client** (directive `"use client"`)

## Couleurs
- La bordure inférieure utilise `border-grisLight`
- Le burger utilise l'icône [`burger.svg`](../../../public/icone/burger.svg:1) (gris dark), la croix [`croix.svg`](../../../public/icone/croix.svg:1) (noir)
- Les couleurs utilisent les **tokens de la palette Kasa** définis dans [`globals.css`](../../../app/globals.css:1)

## Accessibilité
- Le bouton burger/croix a un attribut `aria-label` descriptif qui change selon l'état (`Ouvrir le menu` / `Fermer le menu`)
- Le menu mobile est navigable au clavier
