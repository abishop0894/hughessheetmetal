import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['hughessheetmetal.s3.us-east-1.amazonaws.com'],
  },
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
}
}

export default nextConfig;
