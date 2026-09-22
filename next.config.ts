import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["trinity-gladly-footsie.ngrok-free.dev"],
  images: {
    qualities: [75, 95],
  },
};

export default nextConfig;
