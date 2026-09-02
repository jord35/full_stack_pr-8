# Contrat du composant InfoLogement

## Rôle
Affiche les **informations principales d'un logement** : le **titre**, la **localisation** (avec une icône d'épingle) et la **description**.

C'est un composant **UI** générique et réutilisable : il reçoit les données en props et les affiche, sans logique ni état.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| `title` | `string` | ✅ | Le titre du logement (ex: "Appartement cosy") |
| `location` | `string` | ✅ | La localisation (ex: "Île de France - Paris 17e") |
| `description` | `string` | ✅ | La description du logement |

## Structure visuelle

| Élément | Contenu | Style |
|---------|---------|-------|
| Titre | `title` | **Inter medium 24px** (`text-2xl font-medium`), couleur **noir** (`text-noir`) |
| Localisation | icône épingle + `location` | **Inter regular 14px** (`text-sm`), couleur **grisDark** (`text-grisDark`) |
| Description | `description` | **Inter regular 14px** (`text-sm`), couleur **noir** (`text-noir`) |

## Icône de localisation
- L'icône d'épingle ([`location.svg`](../../../public/icone/location.svg:1)) est **intégrée directement dans le composant** (pas une prop).
- Elle est **décorative** : `alt=""` + `aria-hidden="true"` (le texte de localisation est déjà lisible).

## Composant client ?
- **Non** : c'est un composant **statique** (pas d'état, pas d'interaction). Il peut être un composant serveur.

## Accessibilité
- Le titre est un **`<h1>`** (titre principal de la page Détail Logement).
- L'icône de localisation est décorative (masquée aux lecteurs d'écran).

## Utilisation
- Sur la page Détail Logement ([`logements/[slug]/page.tsx`](../../../app/logements/[slug]/page.tsx:1)) pour afficher le titre, la localisation et la description d'un logement.
