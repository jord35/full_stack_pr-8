import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["primary", "secondary"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Réserver",
        variant: "primary",
    },
};

export const Secondary: Story = {
    args: {
        children: "Voir le logement",
        variant: "secondary",
    },
};
