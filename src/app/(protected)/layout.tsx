"use client";

import { useAuth } from "@/lib/auth/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Layout de protection des routes authentifiées.
 * Vérifie que l'utilisateur est connecté avant d'afficher la page.
 * - Si non connecté : redirige vers /login
 * - Si connecté : affiche la page
 *
 * Note : la NavBar et le Footer sont rendus par le layout racine (app/layout.tsx),
 * ce layout ne gère que la protection d'accès.
 */
export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push("/login");
        }
    }, [isLoading, isAuthenticated, router]);

    // Pendant la restauration de session, on n'affiche rien
    if (isLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-500">Chargement...</p>
            </div>
        );
    }

    // Si non connecté, on n'affiche rien (la redirection est en cours)
    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex flex-1 flex-col">{children}</main>
        </div>
    );
}
