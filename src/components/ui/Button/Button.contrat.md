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
- `primary` : bouton rouge (action principale, ex: "Réserver")
- `secondary` : bouton gris (action secondaire, ex: "Voir le logement")
- Accessible : focus visible avec anneau (ring)
