import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /** Emit `out/` for static hosts (e.g. DigitalOcean App Platform static site) */
  output: "export",
  /**
   * Emit `out/contact/index.html` instead of `out/contact.html` so static hosts
   * that map `/contact` → `/contact/index.html` can serve pages (extensionless URLs missing .html is otherwise a common 404 cause).
   */
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
