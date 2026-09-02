import { getProperties } from "@/lib/api";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { Header } from "@/components/ui/Header/Header";
import { PropertyGrid } from "@/components/features/PropertyGrid/PropertyGrid";
import { InfoCard } from "@/components/ui/InfoCard/InfoCard";

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
            src="/images/mocks/home_img.png"
            alt="Bienvenue chez Kasa, la location d'appartements entre particuliers"
            fill
            className="origin-center scale-160 object-cover xl:scale-100"
          />
        </div>
        <div className="mt-[50px]">
          <PropertyGrid properties={properties} />
        </div>
      </section>

      {/* Section "Comment ça marche" */}
      <section className="mt-16 text-center">
        <h2 className="font-inter text-2xl font-bold text-noir">
          Comment ça marche ?
        </h2>
        <p className="mx-auto mt-2 max-w-2xl font-inter text-sm font-normal text-grisDark">
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
