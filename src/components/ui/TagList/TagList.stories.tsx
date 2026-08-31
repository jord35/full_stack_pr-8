import type { Meta, StoryObj } from "@storybook/nextjs";
import { TagList } from "./TagList";

const meta: Meta<typeof TagList> = {
    title: "UI/TagList",
    component: TagList,
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "Titre affiché au-dessus de la grille",
        },
        items: {
            control: "object",
            description: "Liste des tags à afficher",
        },
    },
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Equipements: Story = {
    args: {
        title: "Équipements",
        items: ["WIFI", "Frigo", "Micro-Ondes", "Douche italienne", "Équipements de base"],
    },
};

export const Categories: Story = {
    args: {
        title: "Catégories",
        items: ["Montmartre", "Batignolle"],
    },
};

// ─── Stories pour tester la grille responsive selon le nombre de tags ───

export const UnTag: Story = {
    args: {
        title: "1 tag",
        items: ["WIFI"],
    },
};

export const TroisTags: Story = {
    args: {
        title: "3 tags",
        items: ["WIFI", "Frigo", "Micro-Ondes"],
    },
};

export const SixTags: Story = {
    args: {
        title: "6 tags",
        items: ["WIFI", "Frigo", "Micro-Ondes", "Douche italienne", "Équipements de base", "Parking"],
    },
};

export const NeufTags: Story = {
    args: {
        title: "9 tags",
        items: [
            "WIFI", "Frigo", "Micro-Ondes",
            "Douche italienne", "Équipements de base", "Parking",
            "Sèche cheveux", "Machine à laver", "Télévision",
        ],
    },
};

export const DixTags: Story = {
    args: {
        title: "10 tags",
        items: [
            "WIFI", "Frigo", "Micro-Ondes",
            "Douche italienne", "Équipements de base", "Parking",
            "Sèche cheveux", "Machine à laver", "Télévision", "Cuisine équipée",
        ],
    },
};
