"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink } from "@/components/ui/NavLink/NavLink";

/**
 * Barre de navigation principale.
 * Mobile (< 1280px) : logo à gauche + burger menu à droite.
 * Desktop (>= 1280px) : À propos à gauche, logo au centre, liens à droite.
 */
export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="w-full border-b border-grisLight">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
                {/* Mobile : logo à gauche */}
                <div className="flex items-center xl:hidden">
                    <Link href="/" onClick={closeMenu} aria-label="Accueil Kasa">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop : Accueil + À propos à gauche */}
                <div className="hidden items-center gap-6 xl:flex">
                    <NavLink href="/" className="text-lg font-medium">
                        Accueil
                    </NavLink>
                    <NavLink href="/a-propos" className="text-lg font-medium">
                        À propos
                    </NavLink>
                </div>

                {/* Desktop : logo au centre */}
                <div className="hidden xl:block">
                    <Link href="/" onClick={closeMenu} aria-label="Accueil Kasa">
                        <Logo />
                    </Link>
                </div>

                {/* Desktop : liens de droite */}
                <div className="hidden items-center gap-6 xl:flex">
                    <NavLink
                        href="/ajouter-un-logement"
                        variant="primary"
                        className="text-lg font-medium"
                    >
                        Ajouter un logement
                    </NavLink>
                    <NavLink href="/favorites" aria-label="Voir les favoris">
                        <Image
                            src="/icone/hart-main_red.svg"
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

                {/* Mobile : burger (fermé) / croix (ouvert) à droite */}
                <button
                    type="button"
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center xl:hidden"
                >
                    {isOpen ? (
                        <Image
                            src="/icone/croix.svg"
                            alt="Fermer le menu"
                            width={26}
                            height={26}
                        />
                    ) : (
                        <Image
                            src="/icone/burger.svg"
                            alt="Ouvrir le menu"
                            width={29}
                            height={21}
                        />
                    )}
                </button>
            </nav>

            {/* Menu mobile déroulant */}
            {isOpen && (
                <div className="flex flex-col gap-6 border-t border-grisLight px-4 py-6 xl:hidden">
                    <NavLink
                        href="/"
                        onClick={closeMenu}
                        className="text-2xl font-normal text-noir"
                    >
                        Accueil
                    </NavLink>
                    <NavLink
                        href="/a-propos"
                        onClick={closeMenu}
                        className="text-2xl font-normal text-noir"
                    >
                        À propos
                    </NavLink>
                    <NavLink
                        href="/messages"
                        onClick={closeMenu}
                        className="text-2xl font-normal text-noir"
                    >
                        Messagerie
                    </NavLink>
                    <NavLink
                        href="/favorites"
                        onClick={closeMenu}
                        className="text-2xl font-normal text-noir"
                    >
                        Favoris
                    </NavLink>

                    {/* Ajouter un logement : lien stylé en bouton */}
                    <Link
                        href="/ajouter-un-logement"
                        onClick={closeMenu}
                        className="inline-flex h-[36px] w-[200px] items-center justify-center rounded-[10px] bg-mainRed px-8 py-2 text-sm font-medium text-white"
                    >
                        Ajouter un logement
                    </Link>
                </div>
            )}
        </header>
    );
}
