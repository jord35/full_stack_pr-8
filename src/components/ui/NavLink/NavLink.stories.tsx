import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavLink } from "./NavLink";

const meta: Meta<typeof NavLink> = {
    title: "UI/NavLink",
    component: NavLink,
    tags: ["autodocs"],
    args: {
        href: "/",
        children: "Accueil",
    },
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
    args: {
        href: "/",
        children: "Accueil",
    },
};

export const Primary: Story = {
    args: {
        href: "/ajouter-un-logement",
        children: "Ajouter un logement",
        variant: "primary",
    },
};

export const AvecIcone: Story = {
    args: {
        href: "/favoris",
        children: "Favoris",
    },
};
