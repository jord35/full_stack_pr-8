/**
 * État de chargement global (App Router).
 * Next.js affiche ce composant automatiquement pendant qu'une page serveur
 * (ex: la page d'accueil qui fait `await getProperties()`) charge ses données.
 *
 * C'est un simple loader (spinner) en couleur mainRed, centré dans la page.
 */
export default function Loading() {
    return (
        <div className="flex min-h-[50vh] items-center justify-center">
            <div
                role="status"
                aria-label="Chargement"
                className="h-12 w-12 animate-spin rounded-full border-4 border-grisLight border-t-mainRed"
            />
        </div>
    );
}
