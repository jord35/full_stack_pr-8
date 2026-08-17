import Link from "next/link";
import type { MouseEventHandler, ReactNode } from "react";

export interface NavLinkProps {
    /** Destination du lien */
    href: string;
    /** Contenu affiché (texte ou icône) */
    children: ReactNode;
    /** Variante de style : default (noir) ou primary (rouge) */
    variant?: "default" | "primary";
    /** Classes CSS additionnelles */
    className?: string;
    /** Gestionnaire de clic (ex: fermer le menu mobile) */
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const variantClasses: Record<"default" | "primary", string> = {
    default: "text-noir",
    primary: "text-mainRed",
};

/**
 * Lien de navigation interne.
 * Utilise next/link pour une navigation sans rechargement de page.
 */
export function NavLink({
    href,
    children,
    variant = "default",
    className = "",
    onClick,
}: NavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`${variantClasses[variant]} ${className}`}
        >
            {children}
        </Link>
    );
}
