import type { Meta, StoryObj } from "@storybook/nextjs";
import { Footer } from "./Footer";

const meta: Meta<typeof Footer> = {
    title: "Layout/Footer",
    component: Footer,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#FFFFFF" }],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Mobile: Story = {
    parameters: {
        viewport: {
            defaultViewport: "mobile1",
        },
    },
};

export const Desktop: Story = {
    parameters: {
        viewport: {
            defaultViewport: "desktop",
        },
    },
};
