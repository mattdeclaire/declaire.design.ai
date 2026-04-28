import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to github.io/repo-name rather than a custom domain,
  // uncomment and set: basePath: "/repo-name"
};

export default nextConfig;
