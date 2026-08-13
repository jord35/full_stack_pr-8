import Image from "next/image";

/**
 * Pied de page principal.
 * Logo S à gauche (toujours le logo compact, quelle que soit la taille d'écran),
 * texte de copyright à droite.
 * Pas de liens pour l'instant.
 */
export function Footer() {
    return (
        <footer className="w-full border-t border-gray-200">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6">
                <Image
                    src="/logo/Logo-s.svg"
                    alt="Logo Kasa"
                    width={47}
                    height={54}
                />
                <p className="text-sm text-gray-600">
                    © 2025 Kasa. All rights reserved
                </p>
            </div>
        </footer>
    );
}
