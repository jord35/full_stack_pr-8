import Image from "next/image";

export interface InfoLogementProps {
    /** Titre du logement */
    title: string;
    /** Localisation du logement (ex: "Île de France - Paris 17e") */
    location: string;
    /** Description du logement */
    description: string;
}

/**
 * InfoLogement.
 * Affiche les informations principales d'un logement : titre, localisation
 * (avec une icône d'épingle intégrée) et description.
 *
 * C'est un composant UI générique et réutilisable : il reçoit les données
 * en props et les affiche. Il est statique (pas d'état, pas d'interaction).
 */
export function InfoLogement({
    title,
    location,
    description,
}: InfoLogementProps) {
    return (
        <div>
            {/* Titre */}
            <h1 className="text-2xl font-medium text-noir">{title}</h1>

            {/* Localisation avec icône épingle */}
            <p className="mt-1 flex items-center gap-1 text-sm text-grisDark">
                <Image
                    src="/icone/location.svg"
                    alt=""
                    width={10}
                    height={13}
                    aria-hidden="true"
                />
                {location}
            </p>

            {/* Description */}
            <p className="mt-2 text-sm text-noir">{description}</p>
        </div>
    );
}
