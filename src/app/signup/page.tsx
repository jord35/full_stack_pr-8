import { SignupForm } from "@/components/forms/SignupForm/SignupForm";

export default function SignupPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-8">
            <SignupForm
                onSubmit={(values) => {
                    console.log("Signup submit", values);
                }}
            />
        </main>
    );
}
