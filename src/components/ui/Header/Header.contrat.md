# Contrat du composant Header

## Rôle
En-tête réutilisable. Il affiche le **titre** (un `<h1>`) et une **description** en haut d'une page ou d'un formulaire.

C'est un composant **présentationnel** : il ne fait que recevoir des props et les afficher, sans logique ni état. Il est partagé entre le [`LoginForm`](../../forms/LoginForm/LoginForm.contrat.md:1) et le [`SignupForm`](../../forms/SignupForm/SignupForm.contrat.md:1).

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | requis | Le titre principal, rendu dans un `<h1>`. Peut contenir du JSX (ex: `<br />` pour un retour à la ligne) |
| `description` | `string` | requis | La description, rendue sous le titre |
| `sizeMobile` | `"sm" \| "md" \| "lg"` | requis | Taille du titre sur mobile (< breakpoint) |
| `sizeDesktop` | `"sm" \| "md" \| "lg"` | requis | Taille du titre sur desktop (>= breakpoint) |

## Tailles prédéfinies

| Valeur | Classe Tailwind | Usage |
|--------|-----------------|-------|
| `"sm"` | `text-sm` | Titre petit |
| `"md"` | `text-2xl` | Titre moyen |
| `"lg"` | `text-3xl` | Titre grand |

Les tailles utilisent les **classes Tailwind natives**. Le mapping entre les valeurs (`sm`/`md`/`lg`) et les classes est **centralisé dans le composant**.

## Comportement
- Rend un `<h1>` contenant `title`, avec une taille qui dépend de `sizeMobile` (mobile) et `sizeDesktop` (desktop).
- Le `<h1>` est en **gras** (`font-bold`) et en couleur **`mainRed`**.
- Rend une description (paragraphe) contenant `description`, sous le titre.
- Le titre et la description sont **centrés horizontalement** (`text-center`).
- Sur **desktop**, la description a une **largeur max de 488px** (`xl:max-w-[488px]`) pour former un bloc lisible. Sur mobile, elle s'adapte naturellement.
- Le responsive est géré dans le composant : la taille mobile s'applique en dessous du breakpoint, la taille desktop au-dessus.
- C'est un composant **présentationnel** : aucune logique, aucun état, aucune directive client nécessaire.

## Accessibilité
- Le `<h1>` est le titre principal de la page (un seul `<h1>` par page).
- La description est un texte lisible associé au titre.

## Utilisation
- En haut du [`LoginForm`](../../forms/LoginForm/LoginForm.contrat.md:1) (ex: title "Heureux de vous revoir", description "Connectez-vous pour retrouver vos réservations...").
- En haut du [`SignupForm`](../../forms/SignupForm/SignupForm.contrat.md:1) (ex: title "Créer un compte", description "Rejoignez Kasa").
