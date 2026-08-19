# Contrat du composant PropertyCard

## Rôle
Carte affichant **un logement** dans la page d'accueil. C'est un composant **UI** réutilisable : il affiche une seule propriété, sans connaître la liste complète.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `property` | `Property` | ✅ | Le logement à afficher (voir [`types.ts`](../../../lib/types.ts:9)) |

Le composant reçoit **un objet `Property`** complet et en extrait ce qu'il affiche.

## Contenu affiché
La carte affiche **4 éléments** :
1. **Image** de couverture (`cover`) — via `ContentImage` (mode `fill` + `object-cover`)
2. **Titre** (`title`)
3. **Localisation** (`location`)
4. **Prix par nuit** (`price_per_night`)

Plus un **bouton cœur** (`FavoriteButton`) en haut à droite.

## Navigation
- Le **clic sur la carte** redirige vers la **page Détail Logement** : `/logements/{slug}`.
- La carte est donc enveloppée dans un `<Link>` (logique reprise du projet 7, voir [`ProjectCard.tsx`](../../../../../7eme_projet/frontend/src/components/features/ProjectCard.tsx:38)).
- Le bouton cœur **ne doit pas** déclencher la navigation (il a son propre comportement).

## Responsive
- La carte est **identique** sur mobile et desktop (même taille, même disposition).
- C'est le **parent** (`PropertyGrid`) qui gère le nombre de colonnes selon l'écran.

## Composants utilisés
- `ContentImage` (mode `fill` + `object-cover`) pour l'image
- `FavoriteButton` pour le bouton cœur

## Accessibilité
- L'image a un `alt` descriptif (obligatoire via `ContentImage`)
- Le titre utilise `<h2>` (ou `<h3>` selon le contexte)
- Le lien de la carte est navigable au clavier

## Utilisation
- Page d'accueil, via le composant `PropertyGrid`
