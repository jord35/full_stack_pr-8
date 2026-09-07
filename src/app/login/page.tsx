"use client";

import { AuthProvider } from "@/lib/auth/AuthContext";
import { LoginContent } from "./LoginContent";

export default function LoginPage() {
    return (
        <AuthProvider>
            <LoginContent />
        </AuthProvider>
    );
}
