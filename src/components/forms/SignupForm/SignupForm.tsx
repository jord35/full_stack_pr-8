"use client";

import { useState } from "react";
import { Header } from "@/components/ui/Header/Header";
import { Button } from "@/components/ui/Button/Button";
import { NavLink } from "@/components/ui/NavLink/NavLink";

export interface SignupFormValues {
    name: string;
    email: string;
    password: string;
}

export interface SignupFormProps {
    /** Fonction appelée à la soumission avec les valeurs saisies */
    onSubmit: (values: SignupFormValues) => void;
    /** Désactive le bouton pendant l'appel API */
    isSubmitting?: boolean;
    /** Message d'erreur à afficher */
    error?: string | null;
}

/**
 * Formulaire d'inscription des nouveaux utilisateurs.
 * Affiche le Header, les champs (nom, prénom, email, mot de passe),
 * la case CGU, le bouton et le lien vers la connexion.
 */
export function SignupForm({
    onSubmit,
    isSubmitting = false,
    error = null,
}: SignupFormProps) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [acceptedCgu, setAcceptedCgu] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const name = `${firstName} ${lastName}`.trim();
        onSubmit({ name, email, password });
    };

    return (
        <form onSubmit={handleSubmit} className="font-inter">
            <Header
                title="Rejoignez la communauté Kasa"
                description="Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d'autres voyageurs."
                sizeMobile="md"
                sizeDesktop="lg"
            />

            <div className="mt-6 flex flex-col items-center gap-4">
                <div className="flex flex-col items-start">
                    <label htmlFor="firstName" className="text-sm font-medium text-noir">
                        Prénom
                    </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        autoComplete="given-name"
                        className="mt-1 max-w-[360px] rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                </div>

                <div className="flex flex-col items-start">
                    <label htmlFor="lastName" className="text-sm font-medium text-noir">
                        Nom
                    </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        autoComplete="family-name"
                        className="mt-1 max-w-[360px] rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                </div>

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
                        minLength={6}
                        autoComplete="new-password"
                        className="mt-1 max-w-[360px] rounded-[4px] border border-grisLight px-3 py-2 text-sm font-medium text-noir"
                    />
                </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2">
                <input
                    id="acceptCgu"
                    type="checkbox"
                    checked={acceptedCgu}
                    onChange={(e) => setAcceptedCgu(e.target.checked)}
                    className="h-4 w-4"
                />
                <label htmlFor="acceptCgu" className="text-xs font-normal text-grisDark">
                    J'accepte les{" "}
                    <NavLink href="/docs/cgu" className="font-normal text-grisDark underline">
                        conditions générales d'utilisation
                    </NavLink>
                </label>
            </div>

            {error && (
                <p className="mt-4 text-center text-sm font-normal text-mainRed">{error}</p>
            )}

            <div className="mt-6 flex justify-center">
                <Button type="submit" disabled={isSubmitting || !acceptedCgu}>
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
