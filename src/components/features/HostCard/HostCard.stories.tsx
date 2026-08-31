import type { Meta, StoryObj } from "@storybook/nextjs";
import { HostCard } from "./HostCard";
import type { Property } from "@/lib/types";

const property: Property = {
    id: "c67ab8a7",
    slug: "appartement-cosy",
    title: "Appartement cosy",
    description: "Votre maison loin de chez vous.",
    cover: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    location: "Ile de France - Paris 17e",
    price_per_night: 182,
    rating_avg: 5,
    ratings_count: 0,
    host: {
        id: 1,
        name: "Nathalie Jean",
        picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
};

const meta: Meta<typeof HostCard> = {
    title: "Features/HostCard",
    component: HostCard,
    tags: ["autodocs"],
    parameters: {
        // Active les mocks du routeur Next.js pour useRouter() (navigation vers /messages).
        nextjs: {
            appDirectory: true,
        },
    },
};

export default meta;
type Story = StoryObj<typeof HostCard>;

export const Default: Story = {
    args: {
        property,
    },
};
