import type { Metadata } from "next";
import { getProperties } from "@/lib/api";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { Header } from "@/components/ui/Header/Header";
import { PropertyGrid } from "@/components/features/PropertyGrid/PropertyGrid";
import { InfoCard } from "@/components/ui/InfoCard/InfoCard";

// URL de base du site (même source que le sitemap).
// On retire un éventuel slash final pour éviter les doubles slashes.
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001").replace(/\/+$/, "");

/**
 * Métadonnées de la page d'accueil.
 * Définit le titre, la description et l'image Open Graph (og:image) pour que,
 * quand on partage le lien, l'image principale de Kasa s'affiche en miniature.
 */
export const metadata: Metadata = {
  title: "Kasa — Location d'appartements entre particuliers",
  description:
    "Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes.",
  openGraph: {
    title: "Kasa — Location d'appartements entre particuliers",
    description:
      "Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes.",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/mocks/home_img.webp`,
        width: 1200,
        height: 630,
        alt: "Bienvenue chez Kasa, la location d'appartements entre particuliers",
      },
    ],
  },
};

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
      {/* Header de la page d'accueil */}
      <Header
        title={
          <>
            Chez vous,
            <br className="xl:hidden" /> partout et ailleurs
          </>
        }
        description="Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."
        sizeMobile="lg"
        sizeDesktop="lg"
      />

      {/* Contenu principal : bandeau d'accueil + grille des logements */}
      <section>
        <h2 className="sr-only">Découvrez nos hébergements</h2>
        <div className="relative mt-10 h-[458px] w-full overflow-hidden rounded-[20px]">
          <ContentImage
            src="/images/mocks/home_img.webp"
            alt="Bienvenue chez Kasa, la location d'appartements entre particuliers"
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="origin-center scale-160 object-cover xl:scale-100"
          />
        </div>
        <div className="mt-[50px]">
          <PropertyGrid properties={properties} />
        </div>
      </section>

      {/* Section "Comment ça marche" */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-noir">
          Comment ça marche ?
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-sm font-normal text-grisDark">
          Que vous partiez pour un week-end improvisé, des vacances en famille ou
          un voyage professionnel, Kasa vous aide à trouver un lieu qui vous
          ressemble.
        </p>

        <div className="mt-8 flex flex-col items-center gap-6 xl:flex-row xl:flex-wrap xl:justify-center">
          <InfoCard
            title="Recherchez"
            description="Entrez votre destination, vos dates et laissez Kasa faire le reste"
          />
          <InfoCard
            title="Réservez"
            description="Profitez d'une plateforme sécurisée et de profils d'hôtes vérifiés."
          />
          <InfoCard
            title="Vivez l'expérience"
            description="Installez-vous, profitez de votre séjour, et sentez-vous chez vous, partout."
          />
        </div>
      </section>
    </main>
  );
}
