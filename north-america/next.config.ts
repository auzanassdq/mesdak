import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    remotePatterns: [new URL('https://flagcdn.com/w20/**')],
    // domains: ['flagcdn.com'],
  },
};

export default nextConfig;
