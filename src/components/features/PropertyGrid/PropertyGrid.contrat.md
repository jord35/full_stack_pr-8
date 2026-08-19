# Contrat du composant PropertyGrid

## Rôle
Grille affichant **toutes les propriétés** sous forme de cartes. C'est un composant **feature** : il orchestre la liste des logements et génère les `PropertyCard`.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `properties` | `Property[]` | ✅ | La liste des logements à afficher |

Le composant reçoit la **liste complète** et la transforme en grille de cartes.

## Responsive (mobile first, breakpoint `xl:` = 1280px)

C'est **ici** que la grille change selon l'écran — pas dans la carte (qui reste identique).

### Mobile (< 1280px)
- **1 colonne** : les cartes s'empilent verticalement (scroll).

### Desktop (>= 1280px)
- **3 colonnes** : les cartes s'affichent en grille de 3 à l'horizontale.

## Structure
- Utilise **CSS Grid** (`grid`) pour la mise en page.
- Génère une `PropertyCard` pour chaque élément de la liste (via `.map()`).

## Composants utilisés
- `PropertyCard` (composant UI) pour chaque logement

## États (à prévoir)
- **Chargement** : afficher un loader/skeleton pendant le chargement.
- **Erreur** : afficher un message si l'API échoue.
- **Vide** : afficher un message si aucune propriété.

> Ces états sont listés dans [`etapes.md`](../../../../docs/etapes.md:83) (étape 4).

## Accessibilité
- La grille utilise une liste sémantique (`<ul>` / `<li>`) ou des `role` appropriés.
- Chaque carte est navigable au clavier.

## Utilisation
- Page d'accueil ([`page.tsx`](../../../app/page.tsx:1))
