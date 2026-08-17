import type { Meta, StoryObj } from "@storybook/nextjs";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "Forms/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    args: {
        onSubmit: (values) => console.log("LoginForm submit", values),
        isSubmitting: false,
        error: null,
    },
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
    args: {
        onSubmit: (values) => console.log("LoginForm submit", values),
        isSubmitting: false,
        error: null,
    },
};

export const EnChargement: Story = {
    args: {
        onSubmit: (values) => console.log("LoginForm submit", values),
        isSubmitting: true,
        error: null,
    },
};

export const AvecErreur: Story = {
    args: {
        onSubmit: (values) => console.log("LoginForm submit", values),
        isSubmitting: false,
        error: "Identifiants invalides",
    },
};
