import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavBar } from "./NavBar";

const meta: Meta<typeof NavBar> = {
    title: "Layout/NavBar",
    component: NavBar,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#FFFFFF" }],
        },
    },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

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
