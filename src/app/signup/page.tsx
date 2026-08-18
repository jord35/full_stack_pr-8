"use client";

import { Header } from "@/components/ui/Header/Header";
import { SignupForm } from "@/components/forms/SignupForm/SignupForm";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAuthSubmit } from "@/lib/auth/useAuthSubmit";

export default function SignupPage() {
    const { register } = useAuth();
    const { isSubmitting, error, submit } = useAuthSubmit(
        async (values: { name: string; email: string; password: string }) => {
            await register(values.name, values.email, values.password);
        },
        "Erreur d'inscription"
    );

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <Header
                title="Rejoignez la communauté Kasa"
                description="Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d'autres voyageurs."
                sizeMobile="md"
                sizeDesktop="lg"
            />
            <SignupForm onSubmit={submit} isSubmitting={isSubmitting} error={error} />
        </main>
    );
}
