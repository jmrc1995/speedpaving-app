import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.experiments = { layers: true }; // Ensure Webpack is fully enabled
    return config;
  },
  images: {
    domains: ['speedpaving.com'], // if loading externally
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
};

export default nextConfig;
