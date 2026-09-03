"use client";

import { Header } from "@/components/ui/Header/Header";
import { LoginForm } from "@/components/forms/LoginForm/LoginForm";
import { useAuth } from "@/lib/auth/AuthContext";
import { useAuthSubmit } from "@/lib/auth/useAuthSubmit";

export default function LoginPage() {
    const { login } = useAuth();
    const { isSubmitting, error, submit } = useAuthSubmit(
        async (values: { email: string; password: string }) => {
            await login(values.email, values.password);
        },
        "Erreur de connexion"
    );

    return (
        <main className="flex flex-1 flex-col items-center justify-center">
            <div className="mx-4 max-w-md rounded-[10px] bg-white px-4 py-8">
                <Header
                    title="Heureux de vous revoir"
                    description="Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques."
                    sizeMobile="md"
                    sizeDesktop="lg"
                />
                <LoginForm onSubmit={submit} isSubmitting={isSubmitting} error={error} />
            </div>
        </main>
    );
}
