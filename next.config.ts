import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Emit `out/` for static hosts (e.g. DigitalOcean App Platform static site) */
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
