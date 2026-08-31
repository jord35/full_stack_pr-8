# Contrat du composant StarCount

## Rôle
Petit badge qui affiche la **note** d'un hôte sous forme d'un **cube** avec une **étoile** et le **nombre d'étoiles** en chiffres (ex: 5, 4.5, 3).

C'est un composant **UI** réutilisable : il ne connaît pas le contexte (hôte, logement), il affiche juste une note.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `rating` | `number` | ❌ (optionnel) | La note à afficher (ex: 5, 4.5, 3). Accepte les **entiers** et les **décimaux** (float). |

## Structure visuelle

- Un **cube** (carré) avec un **rayon de 10px** (`rounded-[10px]`).
- Fond **dark-grey** (`bg-grisDark`).
- À l'intérieur : une **étoile** (icône [`star.svg`](../../../../public/icone/star.svg)) suivie du **nombre d'étoiles** en chiffres.

## Comportement

- Affiche la note **telle quelle**, sans arrondi ni transformation :
  - `5` → affiche `5`
  - `4.5` → affiche `4.5`
  - `1.7` → affiche `1.7`
- **Si `rating` est absent** (pas de note, ex: hôte nouveau) → le composant **ne rend rien** (retourne `null`).

## Composant client ?

- **Non** : c'est un composant **statique** (pas d'état, pas d'interaction). Il peut être un composant serveur.

## Accessibilité

- L'étoile est **décorative** (`aria-hidden="true"`).
- Le nombre est le **contenu textuel** visible (ex: "5", "4.5").

## Utilisation

- Dans le composant feature [`HostCard`](../../features/HostCard/HostCard.contrat.md:1) (page Détail Logement).
