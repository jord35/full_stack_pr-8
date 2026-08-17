# Contrat du composant NavLink

## Rôle
Affiche un lien de navigation interne. Contrairement à un bouton, un lien **redirige** vers une autre page sans recharger le navigateur (navigation client-side grâce à `next/link`).

Il est réutilisable pour :
- Les liens texte (Accueil, À propos, Ajouter un logement)
- Les liens icône (Favoris, Messagerie)

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `href` | `string` | requis | La destination du lien (ex: `/`, `/a-propos`) |
| `children` | `ReactNode` | requis | Le contenu affiché (texte ou icône) |
| `variant` | `"default" \| "primary"` | `"default"` | `default` = texte noir, `primary` = texte rouge |
| `className` | `string` | `""` | Classes CSS additionnelles |
| `onClick` | `MouseEventHandler` | `undefined` | Gestionnaire de clic (ex: fermer le menu mobile) |

## Comportement
- Rend un élément `<a>` via `next/link` (navigation sans rechargement)
- La variante `default` applique la couleur noire (`text-noir`)
- La variante `primary` applique la couleur rouge (`text-mainRed`, utilisée pour "Ajouter un logement")
- Le `children` étant flexible, il peut contenir du texte **ou** une icône
- Les couleurs utilisent les **tokens de la palette Kasa** définis dans [`globals.css`](../../../app/globals.css:1)

## Utilisation
- Barre de navigation (NavBar)
- Footer

## Accessibilité
- Utilise `next/link` qui gère correctement la navigation
- Le contenu (texte ou icône avec `alt`) doit être descriptif
