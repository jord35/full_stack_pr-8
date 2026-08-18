import type { Meta, StoryObj } from "@storybook/nextjs";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/ui/Header/Header";
import { SignupForm } from "./SignupForm";

const meta: Meta<typeof SignupForm> = {
    title: "Forms/SignupForm",
    component: SignupForm,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <div className="flex min-h-screen flex-col">
                <NavBar />
                <main className="flex flex-1 flex-col items-center justify-center p-8">
                    <Header
                        title="Rejoignez la communauté Kasa"
                        description="Créez votre compte et commencez à voyager autrement : réservez des logements uniques, découvrez de nouvelles destinations et partagez vos propres lieux avec d'autres voyageurs."
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
