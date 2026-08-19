import type { Meta, StoryObj } from "@storybook/nextjs";
import { PropertyCard } from "./PropertyCard";
import { AuthProvider } from "@/lib/auth/AuthContext";
import type { Property } from "@/lib/types";

const sampleProperty: Property = {
    id: "c67ab8a7",
    slug: "appartement-cosy",
    title: "Appartement cosy",
    description:
        "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    location: "Ile de France - Paris 17e",
    price_per_night: 182,
    rating_avg: 5,
    ratings_count: 0,
    host: {
        id: 1,
        name: "Nathalie Jean",
        picture:
            "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
};

const meta: Meta<typeof PropertyCard> = {
    title: "UI/PropertyCard",
    component: PropertyCard,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <AuthProvider>
                <Story />
            </AuthProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof PropertyCard>;

export const Default: Story = {
    args: {
        property: sampleProperty,
    },
};
