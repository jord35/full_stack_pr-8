import type { Meta, StoryObj } from "@storybook/nextjs";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
    title: "UI/Header",
    component: Header,
    tags: ["autodocs"],
    argTypes: {
        sizeMobile: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
        sizeDesktop: {
            control: "select",
            options: ["sm", "md", "lg"],
        },
    },
    args: {
        title: "Heureux de vous revoir",
        description: "Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques.",
        sizeMobile: "md",
        sizeDesktop: "lg",
    },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Login: Story = {
    args: {
        title: "Heureux de vous revoir",
        description: "Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques.",
        sizeMobile: "md",
        sizeDesktop: "lg",
    },
};

export const Signup: Story = {
    args: {
        title: "Créer un compte",
        description: "Rejoignez Kasa",
        sizeMobile: "md",
        sizeDesktop: "lg",
    },
};

export const Petit: Story = {
    args: {
        title: "Titre petit",
        description: "Description associée",
        sizeMobile: "sm",
        sizeDesktop: "sm",
    },
};

export const DescriptionMultiParagraphes: Story = {
    args: {
        title: "À propos",
        description: (
            <>
                <p>Premier paragraphe de la description.</p>
                <p className="mt-2">Deuxième paragraphe, séparé par un espacement.</p>
            </>
        ),
        sizeMobile: "lg",
        sizeDesktop: "lg",
    },
};
