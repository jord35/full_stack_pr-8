import type { Meta, StoryObj } from "@storybook/nextjs";
import { FavoriteButton } from "./FavoriteButton";
import { AuthProvider } from "@/lib/auth/AuthContext";

const meta: Meta<typeof FavoriteButton> = {
    title: "UI/FavoriteButton",
    component: FavoriteButton,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <AuthProvider>
                <Story />
            </AuthProvider>
        ),
    ],
    argTypes: {
        propertyId: {
            control: "text",
            description: "Identifiant du logement",
        },
    },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
    args: {
        propertyId: "c67ab8a7",
    },
};
