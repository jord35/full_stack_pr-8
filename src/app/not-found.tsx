import Link from "next/link";
import { Button } from "@/components/ui/Button/Button";

/**
 * Page 404 — page introuvable.
 * Affiche un grand "404", un message d'explication et deux boutons
 * de retour vers l'accueil (conformément à la maquette Figma).
 *
 * Composant serveur : pas de logique client nécessaire, la navigation
 * est gérée par des <Link> de next/link.
 */
export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <h1 className="text-[100px] font-black leading-none text-mainRed">
                404
            </h1>
            <p className="mt-4 max-w-md text-center text-sm text-noir">
                Il semble que la page que vous cherchez ait pris des vacances… ou
                {"n'ait jamais existé."}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
                <Link href="/">
                    <Button>Accueil</Button>
                </Link>
                <Link href="/">
                    <Button>Logement</Button>
                </Link>
            </div>
        </main>
    );
}
