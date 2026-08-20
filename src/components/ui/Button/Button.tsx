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
    disabled = false,
    ...props
}: ButtonProps) {
    const baseClasses =
        "inline-flex h-[36px] w-[230px] items-center justify-center rounded-[10px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses =
        variant === "primary"
            ? "bg-mainRed text-white hover:bg-darkOrange focus:ring-mainRed"
            : "bg-grisLight text-noir hover:bg-grisLight focus:ring-grisDark";
    // État désactivé : opacité réduite + curseur interdit pour indiquer visuellement
    // que le bouton n'est pas fonctionnel. Géré ici (dans le composant), pas dans les formulaires.
    const disabledClasses = "disabled:cursor-not-allowed disabled:opacity-50";

    return (
        <button
            className={`${baseClasses} ${variantClasses} ${disabledClasses} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
