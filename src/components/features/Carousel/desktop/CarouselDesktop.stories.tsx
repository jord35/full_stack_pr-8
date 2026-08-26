import type { Meta, StoryObj } from "@storybook/nextjs";
import { CarouselDesktop } from "./CarouselDesktop";

// URLs d'exemple (images Kasa)
const IMG_1 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";
const IMG_2 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg";
const IMG_3 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg";
const IMG_4 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg";
const IMG_5 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg";
const IMG_6 =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg";

const meta: Meta<typeof CarouselDesktop> = {
    title: "Features/Carousel/Desktop",
    component: CarouselDesktop,
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CarouselDesktop>;

/** Plusieurs images (6) : active les flèches et la pagination. */
export const PlusieursImages: Story = {
    args: {
        pictures: [IMG_1, IMG_2, IMG_3, IMG_4, IMG_5, IMG_6],
    },
};

/** Une seule image : pas de miniatures, juste la grande image. */
export const UneImage: Story = {
    args: {
        pictures: [IMG_1],
    },
};

/** Quatre images : pas de flèches ni de points (une seule page). */
export const QuatreImages: Story = {
    args: {
        pictures: [IMG_1, IMG_2, IMG_3, IMG_4],
    },
};

/** Aucune image : affiche l'image de secours (no-image.png). */
export const AucuneImage: Story = {
    args: {
        pictures: [],
    },
};
