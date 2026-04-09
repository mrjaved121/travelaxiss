import type { MetadataRoute } from "next";
import { blogData } from "@/components/data/blogContent";
import { SITE_URL } from "@/lib/seo/site";

export const dynamic = "force-static";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/services/company-formation",
  "/services/government-services",
  "/services/legal-documentation",
  "/services/business-support",
  "/why-business",
  "/faq",
  "/contact",
  "/blog",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: path === "" ? `${base}/` : `${base}${path}`,
    lastModified,
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" || path === "/contact" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = Object.keys(blogData).map(
    (slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }),
  );

  return [...staticEntries, ...blogEntries];
}
