import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    /** Contenu du bouton */
    children: ReactNode;
    /** Variante visuelle du bouton */
    variant?: "primary" | "secondary";
}

export function Button({
    children,
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const baseClasses =
        "inline-flex items-center justify-center rounded px-4 py-2 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses =
        variant === "primary"
            ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
}
