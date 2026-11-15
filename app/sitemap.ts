import type { MetadataRoute } from "next";
import { blogData } from "@/components/data/blogContent";
import {
  blogDisplayDateToDate,
  blogIsoDayToDate,
} from "@/lib/seo/blog-dates";
import { SITE_URL } from "@/lib/seo/site";
import { newVisitVisaDestinations } from "@/lib/data/visit-visa-destinations";

export const dynamic = "force-static";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/services/international-visas",
  "/services/uk-visa-from-pakistan",
  "/services/canada-visa-from-pakistan",
  "/services/australia-visa-from-pakistan",
  "/services/usa-visa-from-pakistan",
  "/services/germany-visa-from-pakistan",
  "/services/study-visa",
  "/visit-visa",
  "/visit-visa/uk",
  "/visit-visa/usa",
  "/visit-visa/canada",
  "/visit-visa/australia",
  "/visit-visa/uae",
  "/uae-tour-package",
  "/visit-visa/europe",
  "/visit-visa/schengen",
  "/job-seeker-visa",
  "/services/uae-golden-visa",
  "/services/freelance-visa-dubai",
  "/visit-visa/north-america",
  "/visit-visa/middle-east",
  "/visit-visa/asia",
  "/visit-visa/oceania",
  "/visit-visa/africa",
  "/study-visa/uk",
  "/study-visa/usa",
  "/study-visa/canada",
  "/study-visa/australia",
  "/study-visa/germany",
  "/destinations",
  "/pakistan",
  "/uae",
  "/faq",
  "/contact",
  "/consultation",
  "/apply",
  "/visa-finder",
  "/success-stories",
  "/blog",
  "/privacy",
  "/terms",
];

/**
 * Real "last changed" dates for the static pages (yyyy-MM-dd). The sitemap used
 * to stamp every static URL with the build time, so each deploy told crawlers
 * that all pages had changed. Now a page keeps a fixed date until its content
 * is actually edited: when you change a page's content, add or update its path
 * here. Pages not listed use STATIC_PAGES_LAST_REVIEWED (the 8 Nov 2026 site-wide
 * content revision).
 */
const STATIC_PAGES_LAST_REVIEWED = "2026-11-08";
const staticPageLastModified: Record<string, string> = {
  // "/visit-visa/uae": "2026-12-01",
};

/** Match `trailingSlash: true` in next.config (canonical URLs use trailing slash). */
function toSitemapUrl(base: string, path: string): string {
  if (!path || path === "") return `${base}/`;
  const withSlash = path.endsWith("/") ? path : `${path}/`;
  return `${base}${withSlash}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const staticPagesModified = blogIsoDayToDate(STATIC_PAGES_LAST_REVIEWED);

  /** The date shown on each post's page: "Updated" date when set, else the published date. */
  const blogModified = (slug: string): Date => {
    const post = blogData[slug] as { date?: string; dateModifiedIso?: string };
    return post.dateModifiedIso
      ? blogIsoDayToDate(post.dateModifiedIso)
      : blogDisplayDateToDate(post.date ?? "April 9, 2026");
  };
  const blogSlugs = Object.keys(blogData);
  /** The blog listing changes whenever a post is published or revised. */
  const newestBlogModified = blogSlugs
    .map(blogModified)
    .reduce((latest, d) => (d > latest ? d : latest), staticPagesModified);

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: toSitemapUrl(base, path),
    lastModified:
      path === "/blog"
        ? newestBlogModified
        : staticPageLastModified[path]
          ? blogIsoDayToDate(staticPageLastModified[path])
          : staticPagesModified,
    changeFrequency: path.startsWith("/blog") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/services" || path === "/contact" ? 0.9 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: blogModified(slug),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const countryEntries: MetadataRoute.Sitemap = newVisitVisaDestinations.map((destination) => ({
    url: `${base}/visit-visa/${destination.slug}/`,
    lastModified: staticPagesModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...countryEntries, ...blogEntries];
}
