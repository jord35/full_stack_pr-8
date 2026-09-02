import type { Meta, StoryObj } from "@storybook/nextjs";
import { InfoLogement } from "./InfoLogement";

const meta: Meta<typeof InfoLogement> = {
    title: "UI/InfoLogement",
    component: InfoLogement,
    tags: ["autodocs"],
    parameters: {
        backgrounds: {
            default: "white",
            values: [{ name: "white", value: "#FFFFFF" }],
        },
    },
};

export default meta;
type Story = StoryObj<typeof InfoLogement>;

export const AppartementCosy: Story = {
    args: {
        title: "Appartement cosy",
        location: "Île de France - Paris 17e",
        description:
            "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    },
};
