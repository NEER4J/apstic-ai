import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable cacheComponents for now to avoid strict prerender constraints
  // that are not required for this project.
  cacheComponents: false,
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
