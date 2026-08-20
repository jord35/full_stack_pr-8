// Déclarations de types pour les imports "side-effect" de fichiers CSS.
// TypeScript ne connaît pas les fichiers .css : cette déclaration lui indique
// que tout import de fichier .css est valide (ex: import "./globals.css").
declare module "*.css";
