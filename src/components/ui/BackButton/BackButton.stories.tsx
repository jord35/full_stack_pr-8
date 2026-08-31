import type { Meta, StoryObj } from "@storybook/nextjs";
import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
    title: "UI/BackButton",
    component: BackButton,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
    args: {},
};
