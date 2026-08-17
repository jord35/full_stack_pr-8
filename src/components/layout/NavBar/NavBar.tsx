"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink } from "@/components/ui/NavLink/NavLink";

/**
 * Barre de navigation principale.
 * Mobile (< 1280px) : burger menu + logo S.
 * Desktop (>= 1280px) : À propos à gauche, logo au centre, liens à droite.
 */
export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="w-full border-b border-grisLight">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Espace réservé à gauche en mobile pour équilibrer le burger */}
                <div className="xl:hidden" />

                {/* Accueil + À propos : visibles en desktop, à gauche */}
                <div className="hidden items-center gap-6 xl:flex">
                    <NavLink href="/" className="text-lg font-medium">
                        Accueil
                    </NavLink>
                    <NavLink href="/a-propos" className="text-lg font-medium">
                        À propos
                    </NavLink>
                </div>

                {/* Logo : au centre */}
                <Link href="/" onClick={closeMenu} aria-label="Accueil Kasa">
                    <Logo />
                </Link>

                {/* Liens de droite : visibles en desktop */}
                <div className="hidden items-center gap-6 xl:flex">
                    <NavLink
                        href="/ajouter-un-logement"
                        variant="primary"
                        className="text-lg font-medium"
                    >
                        Ajouter un logement
                    </NavLink>
                    <NavLink href="/favoris" aria-label="Voir les favoris">
                        <Image
                            src="/icone/favori.svg"
                            alt="Favoris"
                            width={22}
                            height={20}
                        />
                    </NavLink>
                    <NavLink href="/messages" aria-label="Voir la messagerie">
                        <Image
                            src="/icone/messagerie.svg"
                            alt="Messagerie"
                            width={22}
                            height={18}
                        />
                    </NavLink>
                </div>

                {/* Burger menu : visible en mobile, caché en desktop */}
                <button
                    type="button"
                    aria-label="Ouvrir le menu"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 xl:hidden"
                >
                    <span className="block h-0.5 w-6 bg-noir" />
                    <span className="block h-0.5 w-6 bg-noir" />
                    <span className="block h-0.5 w-6 bg-noir" />
                </button>
            </nav>

            {/* Menu mobile déroulant */}
            {isOpen && (
                <div className="flex flex-col gap-4 border-t border-gray-200 px-4 py-4 xl:hidden">
                    <NavLink href="/" onClick={closeMenu}>
                        Accueil
                    </NavLink>
                    <NavLink href="/a-propos" onClick={closeMenu}>
                        À propos
                    </NavLink>
                    <NavLink
                        href="/ajouter-un-logement"
                        variant="primary"
                        onClick={closeMenu}
                    >
                        Ajouter un logement
                    </NavLink>
                    <NavLink href="/favoris" onClick={closeMenu}>
                        Favoris
                    </NavLink>
                    <NavLink href="/messages" onClick={closeMenu}>
                        Messagerie
                    </NavLink>
                </div>
            )}
        </header>
    );
}
