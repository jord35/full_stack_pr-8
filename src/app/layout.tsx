import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar } from "@/components/layout/NavBar/NavBar";
import { Footer } from "@/components/layout/Footer/Footer";
import { MSWProvider } from "@/components/providers/MSWProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    // Template : "%s" est remplacé par le titre de chaque page
    default: "Kasa — Location d'appartements entre particuliers",
    template: "%s | Kasa",
  },
  description:
    "Kasa vous aide à trouver un lieu qui vous ressemble : réservez des logements uniques entre particuliers.",
  openGraph: {
    siteName: "Kasa",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} flex min-h-screen flex-col antialiased`}
      >
        {/* MSWProvider : démarre les mocks MSW si NEXT_PUBLIC_USE_MOCKS=true
            (déploiement autonome sans backend). Sinon, il ne fait rien. */}
        <MSWProvider>
          <NavBar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </MSWProvider>
      </body>
    </html>
  );
}
