"use client";

import { useEffect, type ReactNode } from "react";

/**
 * MSWProvider.
 *
 * Démarre le worker MSW (Mock Service Worker) pour intercepter les appels API
 * et servir des données mockées. Permet au front-end de fonctionner de façon
 * autonome (ex: déploiement sur Vercel sans backend).
 *
 * Activation :
 * - MSW est démarré UNIQUEMENT si la variable d'environnement
 *   NEXT_PUBLIC_USE_MOCKS est définie à "true".
 * - En développement local avec le vrai backend, on ne démarre pas MSW
 *   (le proxy Next.js redirige vers localhost:3000).
 *
 * IMPORTANT : ce composant affiche TOUJOURS ses enfants (le contenu de la page).
 * MSW est démarré en parallèle, sans bloquer le rendu. Si le service worker
 * MSW ne se charge pas (ex: navigateur, Lighthouse), la page s'affiche quand
 * même — les données viennent alors des mocks côté serveur (voir api.ts).
 *
 * Le worker est importé dynamiquement pour ne pas charger MSW inutilement
 * quand il n'est pas activé.
 */
export function MSWProvider({ children }: { children: ReactNode }) {
    useEffect(() => {
        const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

        if (!useMocks) {
            return;
        }

        async function enableMocking() {
            try {
                const { worker } = await import("@/mocks/browser");
                await worker.start({
                    onUnhandledRequest: "bypass",
                });
            } catch (err) {
                // Si MSW ne peut pas démarrer (service worker indisponible),
                // on ne bloque pas l'affichage : la page continue de fonctionner
                // grâce aux mocks côté serveur (voir api.ts).
                console.warn("MSW n'a pas pu démarrer:", err);
            }
        }

        enableMocking();
    }, []);

    // On affiche toujours le contenu, sans attendre MSW.
    return <>{children}</>;
}
