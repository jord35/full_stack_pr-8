import type { NextConfig } from "next";

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
  async rewrites() {
    return [
      { source: "/api/:path*", destination: "http://localhost:3000/api/:path*" },
      { source: "/auth/:path*", destination: "http://localhost:3000/auth/:path*" },
    ];
  },
};

export default nextConfig;
