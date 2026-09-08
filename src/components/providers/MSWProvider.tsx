"use client";

import { useEffect, useState, type ReactNode } from "react";

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
 * Le worker est importé dynamiquement pour ne pas charger MSW inutilement
 * quand il n'est pas activé.
 */
export function MSWProvider({ children }: { children: ReactNode }) {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

        if (!useMocks) {
            setReady(true);
            return;
        }

        let cancelled = false;

        async function enableMocking() {
            const { worker } = await import("@/mocks/browser");
            await worker.start({
                onUnhandledRequest: "bypass",
            });
            if (!cancelled) {
                setReady(true);
            }
        }

        enableMocking();

        return () => {
            cancelled = true;
        };
    }, []);

    // Tant que MSW n'est pas prêt, on n'affiche rien pour éviter
    // que les appels API partent avant l'interception.
    if (!ready) {
        return null;
    }

    return <>{children}</>;
}
