import type { MetadataRoute } from "next";
import { blogData } from "@/components/data/blogContent";
import { dubaiAreas } from "@/components/data/dubaiAreas";
import { freeZones } from "@/components/data/freeZones";
import { emirates } from "@/components/data/emirates";
import {
  blogDisplayDateToDate,
  blogIsoDayToDate,
} from "@/lib/seo/blog-dates";
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
  "/services/visa-services",
  "/services/international-visas",
  "/services/umrah-services",
  "/services/attestation",
  "/services/uk-visa-from-pakistan",
  "/services/canada-visa-from-pakistan",
  "/services/australia-visa-from-pakistan",
  "/services/usa-visa-from-pakistan",
  "/services/germany-visa-from-pakistan",
  "/services/visit-visa",
  "/services/study-visa",
  "/services/uae-visit-visa",
  "/services/uae-visit-visa-from-pakistan",
  "/services/uae-visa-extension-renewal",
  "/services/uae-retirement-visa",
  "/dubai",
  "/free-zones",
  "/emirates",
  "/destinations",
  "/pakistan",
  "/why-business",
  "/faq",
  "/contact",
  "/consultation",
  "/visa-finder",
  "/success-stories",
  "/blog",
  "/privacy",
  "/terms",
];

/** Match `trailingSlash: true` in next.config (canonical URLs use trailing slash). */
function toSitemapUrl(base: string, path: string): string {
  if (!path || path === "") return `${base}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${base}${withSlash}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const siteFallbackModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: toSitemapUrl(base, path),
    lastModified: siteFallbackModified,
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" || path === "/contact" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = Object.keys(blogData).map(
    (slug) => {
      const post = blogData[slug] as { date?: string; dateModifiedIso?: string };
      const displayDate = post.date ?? "April 9, 2026";
      const lastModified = post.dateModifiedIso
        ? blogIsoDayToDate(post.dateModifiedIso)
        : blogDisplayDateToDate(displayDate);

      return {
        url: `${base}/blog/${slug}/`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      };
    },
  );

  const dubaiAreaEntries: MetadataRoute.Sitemap = dubaiAreas.map((area) => ({
    url: `${base}/dubai/${area.slug}/`,
    lastModified: siteFallbackModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const freeZoneEntries: MetadataRoute.Sitemap = freeZones.map((zone) => ({
    url: `${base}/free-zones/${zone.slug}/`,
    lastModified: siteFallbackModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const emirateEntries: MetadataRoute.Sitemap = emirates.map((emirate) => ({
    url: `${base}/emirates/${emirate.slug}/`,
    lastModified: siteFallbackModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries, ...dubaiAreaEntries, ...freeZoneEntries, ...emirateEntries];
}
