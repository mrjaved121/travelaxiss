/**
 * Long-form guides shown on visit visa landing pages (the /visit-visa/ pillar, the
 * UK and Australia pages, and every /visit-visa/<country>/ page).
 *
 * Keys: "pillar" for /visit-visa/, otherwise the country slug used in the URL
 * ("uk", "australia", "france", "italy" …). A page with no entry shows no guide.
 *
 * Text fields support inline links written as [label](url), the same as blog posts.
 * The scheduled content task adds entries right after the `visitVisaGuides` line below.
 */

export type GuideSubsection =
  | { title: string; content: string }
  | { title: string; items: string[] };

export type GuideSection = {
  heading: string;
  /** One or more paragraphs; separate paragraphs with a blank line ("\n\n"). */
  content?: string;
  subsections?: GuideSubsection[];
  /** Numbered steps, e.g. "How to apply — step by step". */
  steps?: string[];
};

export type VisitVisaGuide = {
  /** Overrides the page's <title> on /visit-visa/<country>/ pages (≤ 60 characters). */
  metaTitle?: string;
  /** Overrides the meta description on /visit-visa/<country>/ pages (≤ 155 characters). */
  metaDescription?: string;
  /** Shown as "Last updated …", e.g. "December 2026". */
  updated: string;
  /** Answer-first opening paragraph: the direct answer to the page's main question. */
  intro: string;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
};

export const visitVisaGuides: Record<string, VisitVisaGuide> = {
};

export function getVisitVisaGuide(key: string): VisitVisaGuide | undefined {
  return visitVisaGuides[key];
}
