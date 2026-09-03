"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button/Button";
import { NavLink } from "@/components/ui/NavLink/NavLink";
import { signupFormSchema, type SignupFormInput } from "@/lib/validators";

export interface SignupFormValues {
    name: string;
    email: string;
    password: string;
}

export interface SignupFormProps {
    /** Fonction appelée à la soumission avec les valeurs validées */
    onSubmit: (values: SignupFormValues) => void;
    /** Désactive le bouton pendant l'appel API */
    isSubmitting?: boolean;
    /** Message d'erreur à afficher */
    error?: string | null;
}

/**
 * Formulaire d'inscription des nouveaux utilisateurs.
 * Utilise react-hook-form + Zod (zodResolver) pour valider les champs
 * AVANT d'envoyer la requête, avec des messages d'erreur en français.
 * Le prénom et le nom sont concaténés en un champ `name` à la soumission.
 */
export function SignupForm({
    onSubmit,
    isSubmitting = false,
    error = null,
}: SignupFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignupFormInput>({
        resolver: zodResolver(signupFormSchema),
    });

    const handleFormSubmit = (values: SignupFormInput) => {
        const name = `${values.firstName} ${values.lastName}`.trim();
        onSubmit({ name, email: values.email, password: values.password });
    };

    return (
        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate className="mt-6">
            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex w-full flex-col items-start">
                    <label htmlFor="lastName" className="text-sm font-medium text-noir">
                        Nom
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        {...register("lastName")}
                        autoComplete="family-name"
                        aria-invalid={errors.lastName ? "true" : undefined}
                        className="mt-1 w-full rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                    {errors.lastName && (
                        <p className="mt-1 text-xs font-normal text-mainRed">
                            {errors.lastName.message}
                        </p>
                    )}
                </div>

                <div className="flex w-full flex-col items-start">
                    <label htmlFor="firstName" className="text-sm font-medium text-noir">
                        Prénom
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        {...register("firstName")}
                        autoComplete="given-name"
                        aria-invalid={errors.firstName ? "true" : undefined}
                        className="mt-1 w-full rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                    {errors.firstName && (
                        <p className="mt-1 text-xs font-normal text-mainRed">
                            {errors.firstName.message}
                        </p>
                    )}
                </div>

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
                        autoComplete="new-password"
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

            <div className="mt-4 flex items-center justify-center gap-2">
                <input
                    id="acceptCgu"
                    type="checkbox"
                    className="h-4 w-4"
                />
                <label htmlFor="acceptCgu" className="text-xs font-normal text-grisDark">
                    {"J'accepte les "}
                    <NavLink href="/docs/cgu" className="font-normal text-grisDark underline">
                        {"conditions générales d'utilisation"}
                    </NavLink>
                </label>
            </div>

            {error && (
                <p className="mt-4 text-center text-sm font-normal text-mainRed">{error}</p>
            )}

            <div className="mt-6 flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Inscription..." : "S'inscrire"}
                </Button>
            </div>

            <div className="mt-4 flex justify-center text-sm">
                <p className="font-normal text-mainRed">
                    Déjà membre ?{" "}
                    <NavLink href="/login" variant="primary" className="font-medium">
                        Se connecter
                    </NavLink>
                </p>
            </div>
        </form>
    );
}
