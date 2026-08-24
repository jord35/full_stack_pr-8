export interface InfoCardProps {
    /** Titre de la carte */
    title: string;
    /** Description de la carte */
    description: string;
}

/**
 * InfoCard.
 * Carte d'information affichée dans la section "Comment ça marche"
 * de la page d'accueil. Fond dark orange, avec un titre et une description.
 *
 * C'est un composant purement présentationnel : il reçoit des props
 * et les affiche, sans logique ni état.
 */
export function InfoCard({ title, description }: InfoCardProps) {
    return (
        <div className="flex h-[199px] w-[342px] flex-col rounded-lg bg-darkOrange px-[22px] pt-[44px] text-left">
            <h3 className="font-inter text-lg font-medium text-blanc">
                {title}
            </h3>
            <p className="mt-[17px] font-inter text-xs font-normal text-blanc">
                {description}
            </p>
        </div>
    );
}
