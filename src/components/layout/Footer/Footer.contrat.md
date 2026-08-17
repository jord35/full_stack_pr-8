# Contrat du composant Footer

## Rôle
Pied de page principal de l'application. C'est un composant **layout** : il encadre le contenu en bas de chaque page.

Il contient :
- Le **logo S** à gauche (image directe `Logo-s.svg`)
- Le **texte de copyright** à droite

## Contenu

| Élément | Position | Description |
|---------|----------|-------------|
| Logo S | Gauche | Image directe `/logo/Logo-s.svg` (toujours le logo compact) |
| Copyright | Droite | Texte "© 2025 Kasa. All rights reserved" |

## Comportement
- **Pas de liens** pour l'instant (le logo n'est pas cliquable)
- Le footer utilise **toujours le logo S** (`Logo-s.svg`), quelle que soit la taille d'écran
- On n'utilise pas le composant `Logo` (qui fait un switch responsive) car le footer veut un logo fixe
- Le layout est identique sur toutes les tailles d'écran (pas de breakpoint spécifique)

## Couleurs
- La bordure supérieure utilise `border-grisLight`
- Le texte de copyright utilise `text-grisDark`
- Les couleurs utilisent les **tokens de la palette Kasa** définis dans [`globals.css`](../../../app/globals.css:1)

## Évolution possible
- Ajouter un lien sur le logo pour retourner à l'accueil (à faire de façon atomique sur le composant `Logo` si demandé)

## Accessibilité
- Le texte de copyright est dans un élément `<p>` (paragraphe)
- Le footer utilise la balise sémantique `<footer>`
