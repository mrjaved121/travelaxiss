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
  "Visit Visa Documentation | Travelaxis Dubai & Lahore";
export const DEFAULT_DESCRIPTION =
  "Visit visa documentation for applicants in Pakistan and the UAE: Dubai, UK, USA, Schengen, Canada, Australia and more, from offices in Dubai and Lahore.";

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

/**
 * Editorial and business details that only the owner can supply. Everything
 * here is intentionally EMPTY: never fill it with a made-up name, licence
 * number or address. When a value is set, the site starts using it:
 *
 * - `reviewer`: article JSON-LD switches to a Person author and the blog byline
 *   reads "Reviewed by <name>, <jobTitle>". While unset, the author stays the
 *   Travelaxis organization and the byline stays "Travelaxis Consultancy Team".
 * - `licenceNumber`: added to the organization JSON-LD as its trade licence.
 * - `addresses`: full street addresses override the area-level ones
 *   (Al Qusais, Dubai / DHA Phase 8, Lahore) in the organization JSON-LD.
 */
export type SiteReviewer = {
  /** Real full name of the person who reviews the guides. */
  name: string;
  /** e.g. "Visa Documentation Consultant". */
  jobTitle?: string;
  /** Optional profile page (About page section or LinkedIn). */
  url?: string;
};

export type SiteAddress = {
  streetAddress: string;
  addressLocality: string;
  addressRegion?: string;
  postalCode?: string;
  /** ISO country code, e.g. "AE" or "PK". */
  addressCountry: string;
};

export type SiteBusinessConfig = {
  reviewer?: SiteReviewer;
  /** Trade licence number exactly as printed on the licence, with its issuing authority. */
  licenceNumber?: string;
  licenceAuthority?: string;
  addresses?: { dubai?: SiteAddress; lahore?: SiteAddress };
};

export const SITE_BUSINESS: SiteBusinessConfig = {
  reviewer: undefined,
  licenceNumber: undefined,
  licenceAuthority: undefined,
  addresses: undefined,
};

/** The reviewer, only when a real name has been entered. */
export const ARTICLE_REVIEWER: SiteReviewer | undefined = SITE_BUSINESS.reviewer?.name?.trim()
  ? SITE_BUSINESS.reviewer
  : undefined;
