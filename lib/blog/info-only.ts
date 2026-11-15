/**
 * Travelaxis sells visit visa documentation only. Guides on anything else
 * (business setup, study, work, residence, Golden Visa, freelance visas) stay
 * online as free information, and must say so clearly instead of ending with a
 * sales call to action for a service we don't offer.
 */

export type BlogCta = { heading: string; text: string; label: string; href: string };

/** Posts whose closing box uses this heading are treated as information-only everywhere in the blog UI. */
export const INFO_ONLY_HEADING = "This Guide Is Free Information";

/** Blog categories that are information-only as a whole. */
export const INFO_ONLY_CATEGORIES = new Set(["Business Setup"]);

/**
 * UAE guides outside the "Business Setup" category that cover services we
 * don't sell (residence, work, student, Golden, investor and freelance visas).
 */
const INFO_ONLY_UAE_SLUGS = new Set([
  "how-to-cancel-employment-visa-uae",
  "uae-work-visa-age-limit",
  "uae-student-visa-guide",
  "uae-student-visa-from-pakistan",
  "uae-family-visa-from-pakistan",
  "family-sponsorship-income-requirements-uae",
  "software-engineer-golden-visa-uae-guide",
  "ai-specialist-golden-visa-uae-guide",
  "property-investor-golden-visa-uae-guide",
  "humanitarian-pioneers-visa-uae-documents-guide",
  "golden-visa-uae-guide",
  "uae-residence-visa-through-business",
  "investor-visa-uae-guide",
  "freelance-visa-uae-guide",
]);

const businessSetupCta: BlogCta = {
  heading: INFO_ONLY_HEADING,
  text: "Travelaxis offers visit visa documentation only. We don't offer business setup, company formation or licensing services, so confirm every requirement with the relevant UAE authority.",
  label: "See Visit Visa Support",
  href: "/visit-visa/",
};

const uaeNonVisitCta: BlogCta = {
  heading: INFO_ONLY_HEADING,
  text: "Travelaxis offers visit visa documentation only. We don't prepare residence, work, student, Golden Visa or freelance visa applications, so confirm every requirement on the official UAE government website.",
  label: "See Dubai Visit Visa Support",
  href: "/visit-visa/uae/",
};

/**
 * The closing box for a post: its own `cta` when it has one, the
 * information-only box for topics we don't sell, otherwise undefined (the
 * page then shows the default WhatsApp call to action).
 */
export function resolveBlogCta(
  slug: string,
  blog: { category?: string; cta?: BlogCta },
): BlogCta | undefined {
  if (blog.cta) return blog.cta;
  if (blog.category && INFO_ONLY_CATEGORIES.has(blog.category)) return businessSetupCta;
  if (INFO_ONLY_UAE_SLUGS.has(slug)) return uaeNonVisitCta;
  return undefined;
}

export function isInfoOnlyCta(cta?: BlogCta): boolean {
  return cta?.heading === INFO_ONLY_HEADING;
}
