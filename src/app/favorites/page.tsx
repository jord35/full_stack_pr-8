import { getProperties } from "@/lib/api";
import { Header } from "@/components/ui/Header/Header";
import { FavoritesList } from "@/components/features/FavoritesList/FavoritesList";

/**
 * Page Favoris.
 * Affiche les logements mis en favoris par l'utilisateur.
 *
 * Les favoris sont stockés dans le `localStorage` (local au navigateur),
 * conformément au brief (étape 6). La page n'est donc PAS protégée :
 * il n'est pas nécessaire d'être connecté pour voir ses favoris.
 *
 * Cette page est un composant serveur : elle charge les propriétés depuis
 * l'API, puis délègue le filtrage par favoris au composant client
 * <FavoritesList> (qui lit le localStorage).
 */
export default async function FavoritesPage() {
    const properties = await getProperties();

    return (
        <main className="flex min-h-screen flex-col items-center p-8">
            <Header
                title="Vos favoris"
                description={
                    "Retrouvez ici tous les logements que vous avez aimés.\n" +
                    "Prêts à réserver ? Un simple clic et votre prochain séjour est en route."
                }
                sizeMobile="lg"
                sizeDesktop="lg"
            />
            <div className="mt-8 w-full max-w-7xl">
                <FavoritesList properties={properties} />
            </div>
        </main>
    );
}
