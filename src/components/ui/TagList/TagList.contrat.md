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
| Couleur du texte | **Gris dark** (`text-grisDark`) |
| Typo | **Inter regular 12px** (`text-xs`) |
| Padding gauche/droite | **16px** (`px-4`) |
| Padding haut/bas | **8px** (`py-2`) |
| Largeur | **Auto** (s'adapte au contenu, pas de largeur fixe) |
| Border radius | **5px** (`rounded-[5px]`) |

## Disposition (responsive)

### Desktop (>= 1280px)
- **Grille** : **3 tags par colonne** (fixe), flux en colonnes (`xl:grid-flow-col`).
- Le **nombre de colonnes** augmente si besoin : `colonnes = ceil(items.length / 3)`.
- Exemple : 3 tags → 1 colonne, 6 → 2 colonnes, 9 → 3 colonnes, 12 → 4 colonnes.

### Mobile (< 1280px)
- **Flex wrap** (`flex flex-wrap`) : les tags s'enchaînent à leur **taille naturelle** (chacun tient sur une ligne), et passent à la ligne suivante si besoin.
- Chaque tag ne prend que la largeur de son contenu + padding (pas de contrainte de colonne étroite).

### Tableau comparatif

| Tags | Desktop (colonnes × tags/col) | Mobile (flex wrap) |
|------|-------------------------------|--------------------|
| 3 | 1 × 3 | 3 tags sur une ligne (si la place le permet) |
| 6 | 2 × 3 | 6 tags enroulés |
| 9 | 3 × 3 | 9 tags enroulés |
| 12 | 4 × 3 | 12 tags enroulés |
| 15 | 5 × 3 | 15 tags enroulés |

## Composant client ?

- **Non** : c'est un composant **statique** (pas d'état, pas d'interaction). Il peut être un composant serveur.

## Accessibilité

- Le titre est un **`<h2>`** (ou `<h3>`) pour la hiérarchie.
- Les tags sont des **`<span>`** (éléments non interactifs, pas des boutons).

## Utilisation

- Page Détail Logement (`/logements/[slug]`) : liste des **équipements** et liste des **catégories (tags)**.
