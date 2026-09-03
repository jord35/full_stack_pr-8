"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button/Button";
import { NavLink } from "@/components/ui/NavLink/NavLink";
import { loginSchema, type LoginInput } from "@/lib/validators";

export interface LoginFormProps {
    /** Fonction appelée à la soumission avec les valeurs validées */
    onSubmit: (values: LoginInput) => void;
    /** Désactive le bouton pendant l'appel API */
    isSubmitting?: boolean;
    /** Message d'erreur global (ex: identifiants invalides renvoyés par le backend) */
    error?: string | null;
}

/**
 * Formulaire de connexion des utilisateurs existants.
 * Utilise react-hook-form + Zod (zodResolver) pour valider les champs
 * AVANT d'envoyer la requête, avec des messages d'erreur en français.
 */
export function LoginForm({
    onSubmit,
    isSubmitting = false,
    error = null,
}: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6">
            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-start">
                    <label htmlFor="email" className="text-sm font-medium text-noir">
                        Adresse email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        autoComplete="email"
                        aria-invalid={errors.email ? "true" : undefined}
                        className="mt-1 w-full rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                    {errors.email && (
                        <p className="mt-1 text-xs font-normal text-mainRed">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                <div className="flex w-full flex-col items-start">
                    <label htmlFor="password" className="text-sm font-medium text-noir">
                        Mot de passe
                    </label>
                    <input
                        id="password"
                        type="password"
                        {...register("password")}
                        autoComplete="current-password"
                        aria-invalid={errors.password ? "true" : undefined}
                        className="mt-1 w-full rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                    {errors.password && (
                        <p className="mt-1 text-xs font-normal text-mainRed">
                            {errors.password.message}
                        </p>
                    )}
                </div>
            </div>

            {error && (
                <p className="mt-4 text-center text-sm font-normal text-mainRed">{error}</p>
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
