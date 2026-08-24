import type { Meta, StoryObj } from "@storybook/nextjs";
import { InfoCard } from "./InfoCard";

const meta: Meta<typeof InfoCard> = {
    title: "UI/InfoCard",
    component: InfoCard,
    tags: ["autodocs"],
    args: {
        title: "Choisissez votre logement",
        description: "Parcourez notre sélection de logements et trouvez celui qui vous correspond.",
    },
};

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Default: Story = {
    args: {
        title: "Choisissez votre logement",
        description: "Parcourez notre sélection de logements et trouvez celui qui vous correspond.",
    },
};

export const Court: Story = {
    args: {
        title: "Réservez",
        description: "En quelques clics.",
    },
};
