import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { MissionSection } from "./MissionSection";

const meta: Meta<typeof MissionSection> = {
    title: "Features/MissionSection",
    component: MissionSection,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="flex min-h-screen flex-col">
                <NavBar />
                <main className="mx-auto w-full max-w-7xl flex-1 p-8">
                    <Story />
                </main>
                <Footer />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof MissionSection>;

export const Default: Story = {};

/** Vue mobile : les 3 blocs s'empilent verticalement */
export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

/** Vue desktop : mission + texte à gauche, image à droite */
export const Desktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: "desktop",
        },
    },
};
