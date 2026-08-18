import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/ui/Header/Header";
import { LoginForm } from "./LoginForm";

const meta: Meta<typeof LoginForm> = {
    title: "Forms/LoginForm",
    component: LoginForm,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="flex min-h-screen flex-col">
                <NavBar />
                <main className="flex flex-1 flex-col items-center justify-center p-8">
                    <Header
                        title="Heureux de vous revoir"
                        description="Connectez-vous pour retrouver vos réservations, vos annonces et tout ce qui rend vos séjours uniques."
                        sizeMobile="md"
                        sizeDesktop="lg"
                    />
                    <Story />
                </main>
                <Footer />
            </div>
        ),
    ],
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
