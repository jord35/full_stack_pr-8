import { ContentImage } from "@/components/ui/ContentImage/ContentImage";

/**
 * MissionSection.
 * Section spécifique à la page À propos : présente la mission de Kasa.
 * Contient 3 blocs : la mission (1,2,3), une image, et un texte de déballage.
 *
 * Layout responsive (mobile first, breakpoint xl: = 1280px) :
 * - Mobile : mission -> image -> texte (vertical, ordre DOM naturel)
 * - Desktop : mission + texte empilés à gauche, image à droite (via CSS Grid)
 */
export function MissionSection() {
    return (
        <section className="grid gap-8 xl:grid-cols-2">
            {/* Bloc 1 : mission (1,2,3) */}
            <div className="flex flex-col gap-6 xl:col-start-1 xl:row-start-1">
                <h2 className="font-inter text-2xl font-bold text-mainRed">Notre mission est simple :</h2>

                <ul className="flex list-disc flex-col gap-3 pl-5 font-inter text-base text-noir">
                    <li>{"Offrir une plateforme fiable et simple d'utilisation"}</li>
                    <li>Proposer des hébergements variés et de qualité</li>
                    <li>Favoriser des échanges humains et chaleureux entre hôtes et voyageurs</li>
                </ul>
            </div>

            {/* Bloc 2 : image */}
            <div className="relative h-64 w-full overflow-hidden rounded-lg xl:col-start-2 xl:row-start-1 xl:row-span-2 xl:h-full">
                <ContentImage
                    src="/images/mocks/image-3.png"
                    alt="L'image d'une magnifique maison avec de grandes baies vitrées"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Bloc 3 : texte de déballage */}
            <div className="xl:col-start-1 xl:row-start-2">
                <p className="font-inter text-base text-mainRed">
                    Que vous cherchiez un appartement cosy en centre-ville, une maison en bord de mer
                    ou un chalet à la montagne, Kasa vous accompagne pour que chaque séjour devienne
                    un souvenir inoubliable.
                </p>
            </div>
        </section>
    );
}
