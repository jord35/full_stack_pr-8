import type { Meta, StoryObj } from "@storybook/nextjs";
import { StarCount } from "./StarCount";

const meta: Meta<typeof StarCount> = {
    title: "UI/StarCount",
    component: StarCount,
    tags: ["autodocs"],
    argTypes: {
        rating: {
            control: "number",
            description: "Note de l'hôte (entier ou décimal, ex: 5, 4.5)",
        },
    },
};

export default meta;
type Story = StoryObj<typeof StarCount>;

export const NoteEntiere: Story = {
    args: {
        rating: 5,
    },
};

export const NoteDecimale: Story = {
    args: {
        rating: 4.5,
    },
};

export const SansNote: Story = {
    args: {
        rating: undefined,
    },
};
