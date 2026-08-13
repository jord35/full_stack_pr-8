import type { Meta, StoryObj } from "@storybook/nextjs";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
    title: "UI/Logo",
    component: Logo,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Mobile: Story = {
    args: {},
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

export const Desktop: Story = {
    args: {},
    parameters: {
        viewport: {
            defaultViewport: "desktop",
        },
    },
};
