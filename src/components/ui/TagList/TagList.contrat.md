# Contrat du composant TagList

## Rôle
Affiche une **liste de tags** (petits éléments) sous forme de **grille**, avec un **titre** au-dessus.

C'est un composant **UI** réutilisable : il reçoit un titre et une liste de chaînes, et les affiche en grille de tags.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | Le titre affiché au-dessus de la grille (ex: "Équipements", "Catégories") |
| `items` | `string[]` | ✅ | La liste des tags à afficher |

## Structure visuelle d'un tag

| Propriété | Valeur |
|-----------|--------|
| Background | **Gris clair** (`bg-grisLight`) |
| Padding gauche/droite | **16px** (`px-4`) |
| Padding haut/bas | **8px** (`py-2`) |
| Largeur | **100px** (`w-[100px]`) |
| Hauteur | **33px** (`h-[33px]`) |
| Border radius | **5px** (`rounded-[5px]`) |

## Disposition (grille responsive)

La grille s'adapte à l'écran pour ne **jamais déborder en largeur** :

### Desktop
- **3 tags par colonne** (fixe).
- Le **nombre de colonnes** augmente si besoin : `colonnes = ceil(items.length / 3)`.
- Exemple : 3 tags → 1 colonne, 6 → 2 colonnes, 9 → 3 colonnes, 12 → 4 colonnes.

### Mobile
- **3 colonnes maximum** (fixe).
- Le **nombre de tags par colonne** augmente si besoin : `tags_par_colonne = ceil(items.length / 3)`.
- Exemple : 3 tags → 1 par colonne, 6 → 2 par colonne, 9 → 3 par colonne, 12 → 4 par colonne.

### Tableau comparatif

| Tags | Desktop (colonnes × tags/col) | Mobile (colonnes × tags/col) |
|------|-------------------------------|------------------------------|
| 3 | 1 × 3 | 3 × 1 |
| 6 | 2 × 3 | 3 × 2 |
| 9 | 3 × 3 | 3 × 3 |
| 12 | 4 × 3 | 3 × 4 |
| 15 | 5 × 3 | 3 × 5 |

## Composant client ?

- **Non** : c'est un composant **statique** (pas d'état, pas d'interaction). Il peut être un composant serveur.

## Accessibilité

- Le titre est un **`<h2>`** (ou `<h3>`) pour la hiérarchie.
- Les tags sont des **`<span>`** (éléments non interactifs, pas des boutons).

## Utilisation

- Page Détail Logement (`/logements/[slug]`) : liste des **équipements** et liste des **catégories (tags)**.
