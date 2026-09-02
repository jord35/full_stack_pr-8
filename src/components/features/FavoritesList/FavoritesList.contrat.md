# Contrat du composant FavoritesList

## Rôle
Liste des **logements favoris** de l'utilisateur. C'est un composant **feature** : il lit les favoris stockés dans le `localStorage`, filtre les propriétés reçues, puis affiche le résultat dans une `PropertyGrid`.

> ⚠️ **Pas de story Storybook** : ce composant dépend du `localStorage` (état du navigateur), ce qui le rend difficile à isoler dans Storybook. Le contrat + les tests suffisent pour valider son comportement.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `properties` | `Property[]` | ✅ | Toutes les propriétés disponibles (chargées côté serveur) |

Le composant reçoit la **liste complète** des propriétés et ne garde que celles dont l'`id` est présent dans les favoris.

## Comportement

### Lecture des favoris
- Clé de stockage : `favorites` dans le `localStorage`.
- Au montage (`useEffect`), le composant lit le `localStorage` et stocke les ids favoris dans un état local.
- Si la valeur est absente ou invalide, il retourne une liste vide (sans erreur).

### Filtrage
- Il filtre `properties` en ne gardant que celles dont l'`id` est dans `favoriteIds`.
- Le résultat est passé à une `PropertyGrid`.

## États

| État | Comportement |
|------|--------------|
| **Aucun favori** | Affiche le message : *"Vous n'avez pas encore de favoris."* |
| **Avec favoris** | Affiche la `PropertyGrid` avec uniquement les logements favoris |

## Composants utilisés
- `PropertyGrid` (composant feature) pour afficher les logements favoris

## Dépendances
- `localStorage` (état du navigateur) — les favoris sont **locaux au navigateur**, non liés à un compte.
- `Property` (type) depuis `@/lib/types`

## Accessibilité
- Le message d'état vide est un simple paragraphe (`<p>`) avec un texte clair.
- La grille de logements hérite de l'accessibilité de `PropertyGrid`.

## Utilisation
- Page Favoris ([`page.tsx`](../../../app/favorites/page.tsx:1))

## Note de conception
La page Favoris n'est **pas protégée** : les favoris étant locaux au navigateur, il n'est pas nécessaire d'être connecté pour les voir. C'est une décision assumée (voir [`carnet-de-bord.md`](../../../../docs/carnet-de-bord.md:33)).
