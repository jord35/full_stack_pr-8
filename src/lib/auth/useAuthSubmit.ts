"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface UseAuthSubmitResult<T> {
    /** Vrai pendant la soumission */
    isSubmitting: boolean;
    /** Message d'erreur éventuel */
    error: string | null;
    /** Soumet le formulaire : appelle l'action, gère l'état et redirige */
    submit: (values: T) => Promise<void>;
}

/**
 * Hook qui encapsule la logique de soumission d'un formulaire d'authentification.
 * Gère isSubmitting, error et la redirection vers la page d'accueil après succès.
 *
 * @param action - Fonction d'authentification (login ou register)
 */
export function useAuthSubmit<T>(
    action: (values: T) => Promise<void>,
    errorMessage = "Erreur d'authentification"
): UseAuthSubmitResult<T> {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const submit = useCallback(
        async (values: T) => {
            setIsSubmitting(true);
            setError(null);
            try {
                await action(values);
                router.push("/");
            } catch (err) {
                setError(err instanceof Error ? err.message : errorMessage);
            } finally {
                setIsSubmitting(false);
            }
        },
        [action, errorMessage, router]
    );

    return { isSubmitting, error, submit };
}
