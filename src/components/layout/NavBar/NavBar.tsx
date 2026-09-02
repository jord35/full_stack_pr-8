"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo/Logo";
import { NavLink } from "@/components/ui/NavLink/NavLink";

/**
 * Barre de navigation principale.
 * Mobile (< 1280px) : logo à gauche + burger menu à droite.
 * Desktop (>= 1280px) : barre de 782px centrée contenant tous les liens.
 */
export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="w-full">
            {/* ===== MOBILE (< 1280px) : logo à gauche + burger à droite ===== */}
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 xl:hidden">
                <div className="flex items-center">
                    <Link href="/" onClick={closeMenu} aria-label="Accueil Kasa">
                        <Logo />
                    </Link>
                </div>

                {/* Burger (fermé) / croix (ouvert) */}
                <button
                    type="button"
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex h-10 w-10 items-center justify-center"
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

            {/* ===== DESKTOP (>= 1280px) : barre de 782px centrée ===== */}
            <nav className="hidden items-center justify-center xl:flex">
                <div className="flex h-[56px] w-[782px] items-center justify-center gap-[50px] px-[80px]">
                    <NavLink href="/" className="text-sm font-medium">
                        Accueil
                    </NavLink>
                    <NavLink href="/a-propos" className="text-sm font-medium">
                        À propos
                    </NavLink>
                    <Link href="/" aria-label="Accueil Kasa">
                        <Logo />
                    </Link>
                    <NavLink
                        href="/ajouter-un-logement"
                        variant="primary"
                        className="text-sm font-medium"
                    >
                        + Ajouter un logement
                    </NavLink>

                    {/* Groupe des deux icônes (cœur, bordure, messagerie) */}
                    <div className="flex items-center gap-3">
                        <NavLink href="/favorites" aria-label="Voir les favoris">
                            <Image
                                src="/icone/hart-main_red.svg"
                                alt="Favoris"
                                width={20}
                                height={18}
                            />
                        </NavLink>
                        {/* Bordure verticale courte, centrée, entre cœur et messagerie */}
                        <span
                            aria-hidden="true"
                            className="h-[10px] w-px bg-mainRed"
                        />
                        <NavLink href="/messages" aria-label="Voir la messagerie">
                            <Image
                                src="/icone/messagerie.svg"
                                alt="Messagerie"
                                width={22}
                                height={18}
                            />
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* ===== Menu mobile déroulant ===== */}
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
