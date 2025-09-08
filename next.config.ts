import { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: false, // maybe jānoņem šis pirms deploymenta
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  experimental: {
    optimizeCss: false,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default config;
