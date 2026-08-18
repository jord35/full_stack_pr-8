"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button/Button";
import { NavLink } from "@/components/ui/NavLink/NavLink";

export interface LoginFormValues {
    email: string;
    password: string;
}

export interface LoginFormProps {
    /** Fonction appelée à la soumission avec les valeurs saisies */
    onSubmit: (values: LoginFormValues) => void;
    /** Désactive le bouton pendant l'appel API */
    isSubmitting?: boolean;
    /** Message d'erreur à afficher */
    error?: string | null;
}

/**
 * Formulaire de connexion des utilisateurs existants.
 * Affiche le Header, les champs email/password, le bouton et les liens.
 */
export function LoginForm({
    onSubmit,
    isSubmitting = false,
    error = null,
}: LoginFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="font-inter">
            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex flex-col items-start">
                    <label htmlFor="email" className="text-sm font-medium text-noir">
                        Adresse email
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                        className="mt-1 max-w-[360px] rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                </div>

                <div className="flex flex-col items-start">
                    <label htmlFor="password" className="text-sm font-medium text-noir">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        className="mt-1 max-w-[360px] rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                </div>
            </div>

            {error && (
                <p className="mt-4 text-sm font-normal text-mainRed">{error}</p>
            )}

            <div className="mt-6 flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Connexion..." : "Se connecter"}
                </Button>
            </div>

            <div className="mt-4 flex flex-col items-center gap-2 text-sm">
                <NavLink href="#" variant="primary" className="font-normal">
                    Mot de passe oublié ?
                </NavLink>
                <p className="font-normal text-mainRed">
                    Pas encore de compte ?{" "}
                    <NavLink href="/signup" variant="primary" className="font-medium">
                        Inscrivez-vous
                    </NavLink>
                </p>
            </div>
        </form>
    );
}
