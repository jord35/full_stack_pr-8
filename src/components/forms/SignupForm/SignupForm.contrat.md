# Contrat du composant SignupForm

## Rôle
Formulaire d'inscription des nouveaux utilisateurs. C'est un composant **formulaire** : il collecte les informations (prénom, nom, email, mot de passe) et les transmet au parent via `onSubmit`.

Il réutilise le composant [`Button`](../../ui/Button/Button.tsx:1) pour l'action de soumission.

Le composant [`Header`](../../ui/Header/Header.contrat.md:1) (titre + description) est affiché **par la page** au-dessus du formulaire, pas par le formulaire lui-même.

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `onSubmit` | `(values: { name: string; email: string; password: string }) => void` | requis | Fonction appelée à la soumission avec les valeurs saisies |
| `isSubmitting` | `boolean` | `false` | Désactive le bouton et empêche la double soumission pendant l'appel API |
| `error` | `string \| null` | `null` | Message d'erreur à afficher (ex: "email déjà enregistré") |

## Champs du formulaire

| Champ | Type d'input | Label | Attributs |
|-------|--------------|-------|-----------|
| `firstName` | `text` | "Prénom" | `required`, `autoComplete="given-name"` |
| `lastName` | `text` | "Nom" | `required`, `autoComplete="family-name"` |
| `email` | `email` | "Adresse email" | `required`, `autoComplete="email"` |
| `password` | `password` | "Mot de passe" | `required`, `minLength={6}`, `autoComplete="new-password"` |

### Style des inputs
- **Max width** : `max-w-[360px]`
- **Corner radius** : `rounded-[4px]`
- **Bordure** : `border-grisLight` (#F5F5F5)
- Les labels sont alignés à gauche par rapport aux inputs, les inputs sont centrés dans la page.

## Case à cocher CGU
- Texte : "J'accepte les **conditions générales d'utilisation**"
- Le lien "conditions générales d'utilisation" est **souligné** et pointe vers [`cgu.md`](../../../docs/cgu.md:1) (document à compléter).
- **Typographie** : Inter regular, `text-xs` (12px), couleur `grisDark`.
- **Règle** : si la case n'est pas cochée, le bouton "S'inscrire" est **désactivé** (`disabled`).

## Comportement
- À la soumission, appelle `onSubmit({ name, email, password })` où `name` = **prénom + nom concaténés** (ex: "Jean Dupont").
- Validation côté client : le mot de passe doit faire **au moins 6 caractères** (cohérent avec le back-end).
- Pendant `isSubmitting === true` :
  - Le bouton est désactivé (via la prop `disabled` du [`Button`](../../ui/Button/Button.tsx:1)).
  - Le texte du bouton peut indiquer le chargement (ex: "Inscription...").
- Si `error` est fourni, un message d'erreur est affiché au-dessus du bouton.
- C'est un composant **client** (directive `"use client"`).

## Lien sous le formulaire
- Phrase : "Déjà membre ? **Se connecter**"
- Le lien "Se connecter" redirige vers `/login` (via [`NavLink`](../../ui/NavLink/NavLink.tsx:1) avec `variant="primary"`).

## Accessibilité
- Chaque input a un `<label>` associé (attribut `htmlFor` + `id`).
- Le mot de passe utilise `type="password"` pour masquer la saisie.
- `autoComplete` est renseigné pour permettre au navigateur de proposer les informations enregistrées.
- Le bouton de soumission est de type `submit` dans un élément `<form>`.

## Liens avec le back-end
- Les valeurs envoyées correspondent à la route `POST /auth/register` du back-end.
- Le service attend `{ name, email, password }` (voir [`authService.js`](../../../../back-end/services/authService.js:28)).
- Le mot de passe doit faire au moins 6 caractères (voir [`authService.js`](../../../../back-end/services/authService.js:35)).
