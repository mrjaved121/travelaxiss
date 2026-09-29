/**
 * Canonical site URL for metadata, sitemap, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://travelaxis.me).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://travelaxis.me"
).replace(/\/$/, "");

export const SITE_NAME = "Travelaxis";
/** Root layout default (home). */
export const DEFAULT_TITLE =
  "Visit & Study Visa Documentation | Travelaxis Dubai & Lahore";
export const DEFAULT_DESCRIPTION =
  "Visit and study visa documentation for applicants in Pakistan and the UAE: Dubai, UK, USA, Schengen/Germany, Australia and more, from offices in Dubai and Lahore.";

export const titleTemplate = `%s | ${SITE_NAME}`;

/**
 * Next's openGraph metadata field replaces (not merges) between segments, so
 * any page that declares its own `openGraph` object must re-list this image
 * itself — it won't fall back to the root layout's / app/opengraph-image.tsx's.
 */
export const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
};
