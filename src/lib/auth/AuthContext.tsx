"use client";

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { login as apiLogin, register as apiRegister } from "@/lib/api";
import type { User } from "@/lib/types";

interface AuthContextValue {
    /** Utilisateur connecté, ou null si non authentifié */
    user: User | null;
    /** Vrai si un utilisateur est connecté */
    isAuthenticated: boolean;
    /** Vrai pendant la restauration de la session au démarrage */
    isLoading: boolean;
    /** Connecte l'utilisateur et stocke le token */
    login: (email: string, password: string) => Promise<void>;
    /** Inscrit l'utilisateur et stocke le token */
    register: (name: string, email: string, password: string) => Promise<void>;
    /** Déconnecte l'utilisateur et supprime le token */
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TOKEN_KEY = "token";
const USER_KEY = "user";

/**
 * Fournit l'état d'authentification global à toute l'application.
 * Restaure la session depuis sessionStorage au démarrage.
 *
 * Note : on utilise sessionStorage (et non localStorage) pour le token,
 * afin que la session expire à la fermeture de l'onglet. localStorage
 * est réservé aux favoris (préférences persistantes).
 */
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Restaure la session au démarrage
    useEffect(() => {
        try {
            const storedUser = sessionStorage.getItem(USER_KEY);
            if (storedUser) {
                setUser(JSON.parse(storedUser) as User);
            }
        } catch {
            // sessionStorage non disponible ou JSON invalide
        } finally {
            setIsLoading(false);
        }
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        const response = await apiLogin(email, password);
        sessionStorage.setItem(TOKEN_KEY, response.token);
        sessionStorage.setItem(USER_KEY, JSON.stringify(response.user));
        setUser(response.user);
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        const response = await apiRegister(name, email, password);
        sessionStorage.setItem(TOKEN_KEY, response.token);
        sessionStorage.setItem(USER_KEY, JSON.stringify(response.user));
        setUser(response.user);
    }, []);

    const logout = useCallback(() => {
        sessionStorage.removeItem(TOKEN_KEY);
        sessionStorage.removeItem(USER_KEY);
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: user !== null,
                isLoading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

/**
 * Hook pour accéder à l'état d'authentification.
 * Doit être utilisé à l'intérieur d'un <AuthProvider>.
 */
export function useAuth(): AuthContextValue {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth doit être utilisé à l'intérieur d'un AuthProvider");
    }
    return context;
}
