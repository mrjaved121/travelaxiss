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
  "UAE Business Setup & Visa Documentation Support | Travelaxis Dubai";
export const DEFAULT_DESCRIPTION =
  "Premium UAE consultancy: company formation, government coordination, legal documentation, and UAE visa documentation and application guidance. Expert support in Dubai.";

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
