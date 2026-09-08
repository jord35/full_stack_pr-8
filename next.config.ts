import type { NextConfig } from "next";

// Si NEXT_PUBLIC_USE_MOCKS=true, on utilise MSW (front autonome sans backend)
// et on désactive le proxy vers le backend local.
const useMocks = process.env.NEXT_PUBLIC_USE_MOCKS === "true";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-eu-west-1.amazonaws.com",
      },
    ],
  },
  // Proxy : redirige les appels API vers le back-end (port 3000).
  // Le navigateur ne parle qu'au serveur Next (même origine), donc pas de problème CORS.
  // Désactivé quand on utilise MSW (NEXT_PUBLIC_USE_MOCKS=true).
  async rewrites() {
    if (useMocks) {
      return [];
    }
    return [
      { source: "/api/:path*", destination: "http://localhost:3000/api/:path*" },
      { source: "/auth/:path*", destination: "http://localhost:3000/auth/:path*" },
    ];
  },
};

export default nextConfig;
