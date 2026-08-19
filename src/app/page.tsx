import { getProperties } from "@/lib/api";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { Header } from "@/components/ui/Header/Header";
import { PropertyGrid } from "@/components/features/PropertyGrid/PropertyGrid";

export default async function Home() {
  const properties = await getProperties();

  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8">
      {/* Header de la page d'accueil */}
      <section>
        <Header
          title="Chez vous, partout et ailleurs"
          description="Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux, sélectionnés avec soin par nos hôtes."
          sizeMobile="md"
          sizeDesktop="lg"
        />
      </section>

      {/* Bandeau d'accueil */}
      <section className="relative mt-10 h-56 w-full overflow-hidden rounded-lg xl:h-72">
        <ContentImage
          src="/images/mocks/home_img.png"
          alt="Bienvenue chez Kasa, la location d'appartements entre particuliers"
          fill
          className="object-cover"
        />
      </section>

      {/* Grille des logements */}
      <section className="mt-10">
        <PropertyGrid properties={properties} />
      </section>
    </main>
  );
}
