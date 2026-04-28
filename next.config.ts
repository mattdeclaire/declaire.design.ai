import type { NextConfig } from "next";
import withExportImages from "next-export-optimize-images";

const nextConfig: NextConfig = {
  output: "export",
  // If deploying to github.io/repo-name rather than a custom domain,
  // uncomment and set: basePath: "/repo-name"
};

export default withExportImages(nextConfig);
