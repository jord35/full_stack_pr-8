import type { Meta, StoryObj } from "@storybook/nextjs";
import { ContentImage } from "./ContentImage";

const meta: Meta<typeof ContentImage> = {
    title: "UI/ContentImage",
    component: ContentImage,
    tags: ["autodocs"],
    args: {
        src: "/images/mocks/image-3.png",
        alt: "Photo de logement Kasa",
    },
};

export default meta;
type Story = StoryObj<typeof ContentImage>;

/** Mode dimensions fixes : l'image a une taille fixe (ex: avatar) */
export const DimensionsFixes: Story = {
    args: {
        width: 200,
        height: 150,
        className: "rounded-lg",
    },
};

/** Mode fill : l'image remplit son conteneur parent (ex: carte de logement) */
export const Fill: Story = {
    args: {
        fill: true,
        className: "object-cover",
    },
    decorators: [
        (Story) => (
            <div className="relative h-48 w-72 overflow-hidden rounded-lg">
                <Story />
            </div>
        ),
    ],
};
