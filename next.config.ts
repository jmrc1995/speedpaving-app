import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.experiments = { layers: true }; // Ensure Webpack is fully enabled
    return config;
  },
};

export default nextConfig;
