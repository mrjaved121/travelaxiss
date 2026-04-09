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
  "Visa Consultancy UAE | Business Setup Dubai | Travelaxis";
export const DEFAULT_DESCRIPTION =
  "Professional visa consultancy, company formation, and government services in the UAE. Expert support in Dubai.";

export const titleTemplate = `%s | ${SITE_NAME}`;
