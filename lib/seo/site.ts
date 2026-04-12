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
