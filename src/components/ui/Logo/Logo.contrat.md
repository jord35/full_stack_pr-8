# Contrat du composant Logo

## Rôle
Affiche le logo Kasa. Il existe en deux versions :
- **Logo S** (`/logo/Logo-s.svg`) : version compacte, utilisée sur mobile
- **Logo classique** (`/logo/Logo.svg`) : version complète, utilisée sur desktop

Le composant **switche automatiquement** entre les deux versions selon la taille de l'écran.

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `className` | `string` | `""` | Classes CSS additionnelles |

## Comportement
- **Mobile** (écran < 1440px) : affiche le logo S (`Logo-s.svg`)
- **Desktop** (écran >= 1440px) : affiche le logo classique (`Logo.svg`)
- Le switch est géré par les classes responsive de Tailwind CSS

## Utilisation
- Barre de navigation (header)
- Footer

## Accessibilité
- L'image a un attribut `alt` descriptif ("Logo Kasa")
