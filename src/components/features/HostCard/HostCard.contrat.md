# Contrat du composant HostCard

## Rôle
Carte "hôte" affichée sur la **page Détail Logement**. Elle présente **l'hôte** du logement et propose de le **contacter**.

C'est un composant **feature** : il est spécifique à la page Détail Logement et orchestre plusieurs éléments (image, avatar, note, boutons).

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `property` | `Property` | ✅ | Le logement à afficher (voir [`types.ts`](../../../lib/types.ts:9)) |

Le composant reçoit **un objet `Property`** complet et en extrait ce qu'il affiche.

## Structure

### 1. Titre
- **"Votre hôte"** en haut de la carte.

### 2. Zone hôte
| Élément | Source | Exemple |
|---------|--------|---------|
| **Avatar** de l'hôte | `property.host.picture` | photo de profil |
| **Nom** de l'hôte | `property.host.name` | "Nathalie Jean" |
| **StarCount** (note) | `property.rating_avg` | 5 |

- L'**avatar** et le **nom** sont affichés côte à côte.
- Le composant **StarCount** (cube dark-grey avec étoile + note en chiffres) est affiché à côté du nom.

> ℹ️ **Note** : on affiche `rating_avg` **tel que le renvoie le back-end** (c'est une moyenne, ex: `5`, `3`). On ne transforme pas la donnée.

### 3. Zone boutons (en bas)
Deux boutons côte à côte :
- **"Contacter l'hôte"** (variante `primary`)
- **"Envoyer un message"** (variante `secondary`)

Les **deux** boutons redirigent vers la page **Messages** (`/messages`).

## Navigation

- Le clic sur un bouton redirige vers la **page Messages** : `/messages`.
- La page Messages est protégée : si l'utilisateur n'est **pas connecté**, le layout le redirige vers **login**.
- Utilise le composant [`Button`](../../ui/Button/Button.tsx:10) (variantes `primary` / `secondary`).

## Composant client

- C'est un composant **client** (directive `"use client"`) car il gère la **navigation** vers la page Messages (via `useRouter()` ou `<Link>`).

## Composants utilisés

- [`Button`](../../ui/Button/Button.tsx:10) : les 2 boutons "Contacter l'hôte" et "Envoyer un message".
- [`ContentImage`](../../ui/ContentImage/ContentImage.tsx:26) : l'avatar de l'hôte.
- [`StarCount`](../../ui/StarCount/StarCount.contrat.md:1) : la note de l'hôte (cube dark-grey + étoile + chiffre).

## Accessibilité

- L'avatar doit avoir un **`alt`** descriptif (ex: nom de l'hôte).
- Les boutons doivent avoir un **texte visible** ("Contacter l'hôte", "Envoyer un message").

## Utilisation

- Page Détail Logement (`/logements/[slug]`).
