# Contrat du composant LoginForm

## Rôle
Formulaire de connexion des utilisateurs existants. C'est un composant **formulaire** : il collecte les identifiants (email + mot de passe) et les transmet au parent via `onSubmit`.

Il réutilise le composant [`Button`](../../ui/Button/Button.tsx:1) pour l'action de soumission.

En haut du formulaire, il affiche le composant [`Header`](../../ui/Header/Header.contrat.md:1) qui contient le titre et la description.

### Textes du Header (login)
- **Titre** : "Heureux de vous revoir"
- **Description** : "Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques."

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `onSubmit` | `(values: { email: string; password: string }) => void` | requis | Fonction appelée à la soumission avec les valeurs saisies |
| `isSubmitting` | `boolean` | `false` | Désactive le bouton et empêche la double soumission pendant l'appel API |
| `error` | `string \| null` | `null` | Message d'erreur à afficher (ex: "identifiants invalides") |

## Champs du formulaire

| Champ | Type d'input | Label | Attributs |
|-------|--------------|-------|-----------|
| `email` | `email` | "Adresse email" | `required`, `autoComplete="email"` |
| `password` | `password` | "Mot de passe" | `required`, `autoComplete="current-password"` |

### Style des inputs
- **Max width** : `max-w-[360px]`
- **Corner radius** : `rounded-[4px]`
- **Bordure** : `border-grisLight` (#F5F5F5)
- Les labels sont alignés à gauche par rapport aux inputs, les inputs sont centrés dans la page.

## Comportement
- À la soumission, appelle `onSubmit({ email, password })` avec les valeurs saisies.
- Pendant `isSubmitting === true` :
  - Le bouton est désactivé (via la prop `disabled` du [`Button`](../../ui/Button/Button.tsx:1)).
  - Le texte du bouton peut indiquer le chargement (ex: "Connexion...").
- Si `error` est fourni, un message d'erreur est affiché au-dessus du bouton.
- C'est un composant **client** (directive `"use client"`).

## Liens sous le formulaire
Deux liens sont affichés sous le bouton de soumission. Ils utilisent le composant [`NavLink`](../../ui/NavLink/NavLink.tsx:1) pour la navigation interne.

| Lien | Texte | Destination | Note |
|------|-------|-------------|------|
| **Lien 1** | "Mot de passe oublié ?" | Aucune (`href` non défini) | Page "mot de passe oublié" **non implémentée** dans Figma pour l'instant |
| **Lien 2** | "Pas encore de compte ? **Inscrivez-vous**" | `/signup` | Le mot "Inscrivez-vous" est le lien cliquable |

Précisions :
- Le lien "Inscrivez-vous" redirige vers la page d'inscription (`/signup`).
- Le lien "Mot de passe oublié ?" n'a pas de `href` défini tant que la page n'est pas implémentée.
- **Tout le texte des liens est en couleur `mainRed`** (via la prop `variant="primary"` du [`NavLink`](../../ui/NavLink/NavLink.tsx:1)).
- Le bouton de soumission est **centré horizontalement** dans le formulaire.

## Accessibilité
- Chaque input a un `<label>` associé (attribut `htmlFor` + `id`).
- Le mot de passe utilise `type="password"` pour masquer la saisie.
- `autoComplete` est renseigné pour permettre au navigateur de proposer les identifiants enregistrés.
- Le bouton de soumission est de type `submit` dans un élément `<form>`.

## Liens avec le back-end
- Les valeurs envoyées correspondent à la route `POST /auth/login` du back-end.
- Le service attend `{ email, password }` (voir [`authService.js`](../../../../back-end/services/authService.js:51)).
