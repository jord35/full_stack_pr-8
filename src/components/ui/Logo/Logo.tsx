import Image from "next/image";

export interface LogoProps {
    /** Classes CSS additionnelles */
    className?: string;
}

/**
 * Logo Kasa.
 * Affiche le logo S (compact) sur mobile et le logo classique sur desktop (>= 1280px).
 */
export function Logo({ className = "" }: LogoProps) {
    return (
        <div className={className}>
            {/* Logo S : visible en mobile, caché en desktop */}
            <Image
                src="/logo/Logo-s.svg"
                alt="Logo Kasa"
                width={47}
                height={54}
                className="block xl:hidden"
            />
            {/* Logo classique : caché en mobile, visible en desktop */}
            <Image
                src="/logo/Logo.svg"
                alt="Logo Kasa"
                width={113}
                height={40}
                className="hidden xl:block"
            />
        </div>
    );
}
