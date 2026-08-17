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
        "inline-flex h-[36px] w-[230px] items-center justify-center rounded-[10px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses =
        variant === "primary"
            ? "bg-mainRed text-white hover:bg-darkOrange focus:ring-mainRed"
            : "bg-grisLight text-noir hover:bg-grisLight focus:ring-grisDark";

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
            {children}
        </button>
    );
}
