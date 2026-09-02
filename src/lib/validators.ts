import { z } from "zod";

// ─── Connexion ───────────────────────────────────────────

export const loginSchema = z.object({
    email: z.string().min(1, "L'email est requis").email("Email invalide"),
    password: z.string().min(1, "Le mot de passe est requis"),
});

// ─── Inscription ─────────────────────────────────────────

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Le nom doit contenir au moins 2 caractères")
        .max(100, "Le nom ne peut pas dépasser 100 caractères"),
    email: z.string().min(1, "L'email est requis").email("Email invalide"),
    password: z
        .string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

// Schéma du formulaire d'inscription (champs du formulaire, avant concaténation)
export const signupFormSchema = z.object({
    firstName: z.string().min(1, "Le prénom est requis"),
    lastName: z.string().min(1, "Le nom est requis"),
    email: z.string().min(1, "L'email est requis").email("Email invalide"),
    password: z
        .string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

// ─── Types inférés ───────────────────────────────────────

export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type SignupFormInput = z.infer<typeof signupFormSchema>;
