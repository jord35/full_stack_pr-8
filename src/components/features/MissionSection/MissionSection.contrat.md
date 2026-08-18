# Contrat du composant MissionSection

## Rôle
Section **spécifique** à la page À propos. Elle présente la mission de Kasa : une liste de 3 engagements, une image, et un texte de conclusion.

Ce composant n'est **pas réutilisable** : il est dédié à la page À propos.

## Structure
Le composant contient **3 blocs** :
1. **Mission** : titre "Notre mission est simple :" + liste à puces (3 engagements)
2. **Image** : photo de logement (via `ContentImage`)
3. **Texte de déballage** : paragraphe de conclusion

## Layout responsive (mobile first, breakpoint `xl:` = 1280px)

### Mobile (< 1280px)
Les 3 blocs s'empilent **verticalement** dans cet ordre :
1. Mission
2. Image
3. Texte de déballage

### Desktop (>= 1280px)
Le layout passe en **2 colonnes** :
- **Gauche** (50%) : Mission + Texte de déballage
- **Droite** (50%) : Image

## Composants utilisés
- `ContentImage` (mode `fill` + `object-cover`) pour l'image

## Accessibilité
- L'image a un `alt` descriptif : "L'image d'une magnifique maison avec de grandes baies vitrées"
- La liste utilise la balise sémantique `<ul>` avec `<li>`
- Le titre de section utilise `<h2>`

## Utilisation
- Page À propos ([`a-propos/page.tsx`](../../../app/a-propos/page.tsx:1))
