import { Header } from "@/components/ui/Header/Header";
import { ContentImage } from "@/components/ui/ContentImage/ContentImage";
import { MissionSection } from "@/components/features/MissionSection/MissionSection";

export default function AboutPage() {
    return (
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-12 p-8">
            <Header
                title="À propos"
                description="Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se sentir bien. Depuis notre création, nous mettons en relation des voyageurs en quête d'authenticité avec des hôtes passionnés qui aiment partager leur région et leurs bonnes adresses."
                sizeMobile="lg"
                sizeDesktop="lg"
            />

            {/* Bannière : maison en bois dans la forêt */}
            <div className="relative h-[458px] w-full overflow-hidden rounded-lg">
                <ContentImage
                    src="/images/mocks/image-4.png"
                    alt="Une magnifique maison en bois dans la forêt"
                    fill
                    className="object-cover"
                />
            </div>

            <MissionSection />
        </main>
    );
}
