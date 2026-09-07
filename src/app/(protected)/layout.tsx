"use client";

import { AuthProvider } from "@/lib/auth/AuthContext";
import { ProtectedContent } from "./ProtectedContent";

/**
 * Layout de protection des routes authentifiées.
 * Fournit le AuthProvider (nécessaire à useAuth) puis vérifie que
 * l'utilisateur est connecté avant d'afficher la page.
 *
 * Note : la NavBar et le Footer sont rendus par le layout racine (app/layout.tsx),
 * ce layout ne gère que l'authentification et la protection d'accès.
 */
export default function ProtectedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthProvider>
            <ProtectedContent>{children}</ProtectedContent>
        </AuthProvider>
    );
}
