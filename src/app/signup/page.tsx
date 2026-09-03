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
        <main className="flex flex-1 flex-col items-center justify-center">
            <div className="mx-4 max-w-md rounded-[10px] bg-white px-4 py-8">
                <Header
                    title={
                        <>
                            Rejoignez la
                            <br />
                            Communauté Kasa
                        </>
                    }
                    description="Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d'autres voyageurs."
                    sizeMobile="md"
                    sizeDesktop="lg"
                />
                <SignupForm onSubmit={submit} isSubmitting={isSubmitting} error={error} />
            </div>
        </main>
    );
}
