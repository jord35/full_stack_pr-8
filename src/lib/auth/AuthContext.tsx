"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { login as apiLogin, register as apiRegister } from "@/lib/api";
import type { User } from "@/lib/types";

interface AuthContextValue {
    /** Utilisateur connecté, ou null si non authentifié */
    user: User | null;
    /** Vrai si un utilisateur est connecté */
    isAuthenticated: boolean;
    /** Connecte l'utilisateur et stocke le token */
    login: (email: string, password: string) => Promise<void>;
    /** Inscrit l'utilisateur et stocke le token */
    register: (name: string, email: string, password: string) => Promise<void>;
    /** Déconnecte l'utilisateur et supprime le token */
    logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const TOKEN_KEY = "token";

/**
 * Fournit l'état d'authentification global à toute l'application.
 * Restaure la session depuis localStorage au démarrage.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const login = useCallback(async (email: string, password: string) => {
        const response = await apiLogin(email, password);
        localStorage.setItem(TOKEN_KEY, response.token);
        setUser(response.user);
    }, []);

    const register = useCallback(async (name: string, email: string, password: string) => {
        const response = await apiRegister(name, email, password);
        localStorage.setItem(TOKEN_KEY, response.token);
        setUser(response.user);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                isAuthenticated: user !== null,
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
