# Contrat du composant BackButton

## Rôle
Flèche de retour affichée en haut de la **page Détail Logement**. Elle permet à l'utilisateur de **revenir d'où il vient** : si on est arrivé depuis l'accueil, on revient à l'accueil ; si on est arrivé depuis les favoris, on revient aux favoris.

C'est un composant **UI** réutilisable : il ne connaît pas la page sur laquelle il est posé.

## Props

| Prop | Type | Requis ? | Description |
|------|------|----------|-------------|
| *(aucune)* | — | — | Le composant n'a pas besoin de props : il utilise l'historique du navigateur |

## Comportement

### Retour intelligent ("back with fallback")
Le composant utilise le **pattern "back with fallback"** (retour avec solution de repli) :

```
S'il y a une page précédente dans l'historique  →  router.back()   (revenir d'où on vient)
Sinon (arrivée directe sur la page)            →  router.push("/") (aller à l'accueil)
```

- **`router.back()`** : revient à la page précédente dans l'historique du navigateur. C'est le comportement "revenir d'où on vient" : accueil → accueil, favoris → favoris.
- **Fallback** : si l'utilisateur arrive **directement** sur la page (URL tapée, lien partagé), il n'y a pas de page précédente. On le renvoie alors à l'accueil (`/`).

### Pourquoi ce pattern ?
- Sans fallback, `router.back()` ne ferait **rien** si l'utilisateur arrive directement sur la page (pas de page précédente).
- Le fallback garantit qu'on ne reste **jamais bloqué** sur la page.

## Composant client

- C'est un composant **client** (directive `"use client"`) car il utilise `useRouter()` de Next.js, qui dépend du **navigateur** (l'historique de navigation n'existe pas côté serveur).

## Accessibilité

- Le bouton doit avoir un **label accessible** (ex: `aria-label="Retour"`) car il ne contient qu'une icône (flèche), sans texte visible.
- Il doit être **navigable au clavier** (c'est un `<button>` natif).

## Utilisation

- Page Détail Logement (`/logements/[slug]`).
