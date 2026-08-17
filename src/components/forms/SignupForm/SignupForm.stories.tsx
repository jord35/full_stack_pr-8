import type { Meta, StoryObj } from "@storybook/nextjs";
import { SignupForm } from "./SignupForm";

const meta: Meta<typeof SignupForm> = {
    title: "Forms/SignupForm",
    component: SignupForm,
    tags: ["autodocs"],
    args: {
        onSubmit: (values) => console.log("SignupForm submit", values),
        isSubmitting: false,
        error: null,
    },
};

export default meta;
type Story = StoryObj<typeof SignupForm>;

export const Default: Story = {
    args: {
        onSubmit: (values) => console.log("SignupForm submit", values),
        isSubmitting: false,
        error: null,
    },
};

export const EnChargement: Story = {
    args: {
        onSubmit: (values) => console.log("SignupForm submit", values),
        isSubmitting: true,
        error: null,
    },
};

export const AvecErreur: Story = {
    args: {
        onSubmit: (values) => console.log("SignupForm submit", values),
        isSubmitting: false,
        error: "Email déjà enregistré",
    },
};
