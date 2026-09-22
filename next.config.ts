import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["trinity-gladly-footsie.ngrok-free.dev"],
  images: {
    qualities: [75, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
