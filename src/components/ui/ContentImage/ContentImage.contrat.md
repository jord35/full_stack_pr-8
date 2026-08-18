# Contrat du composant ContentImage

## Rôle
Wrapper de `next/image` spécialisé pour les **images de contenu** (photos de logements, avatars d'hôtes). Il garantit :
- **Accessibilité** : l'attribut `alt` est **obligatoire** (TypeScript force sa présence)
- **Performance** : utilise `next/image` (optimisation automatique, lazy loading, prévention du CLS)

C'est un composant **générique** : il ne porte pas de style métier. Le style est passé **en surcouche** via `className` depuis la page qui l'utilise.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `src` | `string` | ✅ | URL ou chemin de l'image |
| `alt` | `string` | ✅ | Description de l'image (obligatoire pour l'accessibilité) |
| `fill` | `boolean` | optionnel | Mode remplissage : l'image remplit son conteneur parent |
| `width` | `number` | si pas `fill` | Largeur fixe (mode dimensions fixes) |
| `height` | `number` | si pas `fill` | Hauteur fixe (mode dimensions fixes) |
| `className` | `string` | optionnel | Classes CSS additionnelles (style en surcouche) |
| `sizes` | `string` | optionnel | Indique les tailles d'affichage pour l'optimisation responsive |

## Deux modes d'utilisation (contrainte de `next/image`)

`next/image` impose de choisir entre deux façons de dimensionner, **mutuellement exclusives** :

### Mode `fill`
- L'image **remplit** son conteneur parent (le parent définit la taille via CSS)
- Utilisé pour les **cartes de logements**, galeries
- Le `className` doit inclure `object-cover` (ou similaire) pour contrôler le recadrage
- Le conteneur parent doit avoir une taille définie (ex: `relative h-40 w-full`)

### Mode dimensions fixes
- On fournit `width` + `height` en dur
- Utilisé pour les **avatars**, petites images
- Exemple : `width={50} height={50}`

## Comportement
- Rend un élément `<img>` optimisé via `next/image`
- Le `alt` est **obligatoire** : impossible d'utiliser le composant sans description
- Le `className` est **fusionné** avec les classes internes du composant (pas de conflit)
- C'est un composant **présentationnel** : aucune logique, aucun état, aucune directive client nécessaire

## Accessibilité
- `alt` obligatoire et descriptif (le composant refuse de compiler sans lui)
- Utilise `next/image` : optimisation, lazy loading, prévention du CLS (pas de saut de mise en page)

## Utilisation
- Photos de couverture des logements (cartes, page détail)
- Avatars des hôtes
- **Ne pas utiliser** pour les icônes / logos (utiliser `next/image` directement)

## Configuration requise
- Les images distantes (S3) doivent être autorisées dans [`next.config.ts`](../../../../next.config.ts:1) via `images.remotePatterns`
