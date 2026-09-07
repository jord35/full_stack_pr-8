"use client";

import { AuthProvider } from "@/lib/auth/AuthContext";
import { SignupContent } from "./SignupContent";

export default function SignupPage() {
    return (
        <AuthProvider>
            <SignupContent />
        </AuthProvider>
    );
}
