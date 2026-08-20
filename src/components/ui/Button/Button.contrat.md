# Contrat du composant Button

## Rôle
Bouton d'action réutilisable pour l'application Kasa.

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | requis | Contenu du bouton (texte, icône...) |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Style visuel du bouton |
| `className` | `string` | `""` | Classes CSS additionnelles |
| `...props` | `ButtonHTMLAttributes` | — | Attributs HTML natifs (onClick, disabled...) |

## Comportement
- `primary` : bouton rouge (`bg-mainRed`, hover `bg-darkOrange`) — action principale, ex: "Réserver"
- `secondary` : bouton gris clair (`bg-grisLight`, texte `text-noir`) — action secondaire, ex: "Voir le logement"
- Accessible : focus visible avec anneau (ring) utilisant `focus:ring-mainRed` (primary) ou `focus:ring-grisDark` (secondary)
- Les couleurs utilisent les **tokens de la palette Kasa** définis dans [`globals.css`](../../../app/globals.css:1)

## État désactivé
- Quand la prop `disabled` est `true`, le bouton est **non cliquable** (attribut HTML `disabled`).
- Visuellement, il devient **plus clair** (`disabled:opacity-50`) et le curseur devient **interdit** (`disabled:cursor-not-allowed`) pour indiquer clairement qu'il n'est pas fonctionnel.
- Le style désactivé est géré **dans le composant** (responsabilité unique) : les formulaires n'ont qu'à passer `disabled`.
- Exemple d'usage : dans un formulaire, désactiver le bouton tant que les conditions ne sont pas remplies (ex: case CGU non cochée).

## Dimensions
- **Largeur** : `w-[230px]`
- **Hauteur** : `h-[36px]`
- **Corner radius** : `rounded-[10px]`
