import type { Meta, StoryObj } from "@storybook/nextjs";
import { PropertyGrid } from "./PropertyGrid";
import { AuthProvider } from "@/lib/auth/AuthContext";
import type { Property } from "@/lib/types";

const sampleProperties: Property[] = [
    {
        id: "c67ab8a7",
        slug: "appartement-cosy",
        title: "Appartement cosy",
        description: "Votre maison loin de chez vous.",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
        location: "Ile de France - Paris 17e",
        price_per_night: 182,
        rating_avg: 5,
        ratings_count: 0,
        host: { id: 1, name: "Nathalie Jean", picture: "" },
    },
    {
        id: "0979876d",
        slug: "appartement-de-standing-10e",
        title: "Appartement de Standing - 10e",
        description: "Ce loft entièrement rénové.",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
        location: "Ile de France - Paris 10e",
        price_per_night: 133,
        rating_avg: 5,
        ratings_count: 0,
        host: { id: 3, name: "Franck Maher", picture: "" },
    },
    {
        id: "d60ca600",
        slug: "appartement-moderne-sur-parc",
        title: "Appartement moderne sur parc",
        description: "Respirer en plein coeur de Paris ? C'est possible !",
        cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg",
        location: "Ile de France - Paris 11e",
        price_per_night: 103,
        rating_avg: 3,
        ratings_count: 0,
        host: { id: 2, name: "Julie Marchand", picture: "" },
    },
];

const meta: Meta<typeof PropertyGrid> = {
    title: "Features/PropertyGrid",
    component: PropertyGrid,
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
type Story = StoryObj<typeof PropertyGrid>;

export const Default: Story = {
    args: {
        properties: sampleProperties,
    },
};

export const Empty: Story = {
    args: {
        properties: [],
    },
};
