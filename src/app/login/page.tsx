import { LoginForm } from "@/components/forms/LoginForm/LoginForm";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <LoginForm
                onSubmit={(values) => {
                    console.log("Login submit", values);
                }}
            />
        </main>
    );
}
