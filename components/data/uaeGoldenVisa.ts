// Verified 2026-09-29 against u.ae "Golden visa" (page updated 28 Jul 2026, table sourced from ICP).
export const GOLDEN_VISA_SOURCE =
  "https://u.ae/en/information-and-services/visa-and-emirates-id/residence-visas/golden-visa";

export const goldenVisaCategories: { category: string; duration: string; requirements: string }[] = [
  {
    category: "Investors (public investments or real estate)",
    duration: "10 years (public investments) · 5 years (real estate)",
    requirements:
      "Minimum capital of AED 2 million; property ownership, or a contribution to an establishment paying at least AED 250,000 a year in taxes.",
  },
  {
    category: "Entrepreneurs",
    duration: "5 years",
    requirements:
      "Proof of an innovative or technical project, documents proving the project's value, and a letter from a business incubator or the relevant authority in the emirate.",
  },
  {
    category: "Exceptional talent and rare specialisations",
    duration: "10 years",
    requirements:
      "Includes doctors, scientists, inventors, creatives in culture and arts, executives, athletes, PhD holders and specialists in priority scientific and engineering fields. Each subcategory has its own requirements, such as recommendation letters, practical experience or accredited degrees.",
  },
  {
    category: "Outstanding students",
    duration: "5 years (high-school achievers) · 10 years (top university students)",
    requirements: "Certificates of excellence and recommendation letters from the school or university.",
  },
  {
    category: "Humanitarian pioneers and frontline heroes",
    duration: "10 years",
    requirements:
      "Certificates of appreciation, documentation of humanitarian contribution, or at least 5 years of service.",
  },
];

export const goldenVisaFaqs: { q: string; a: string }[] = [
  {
    q: "What is the UAE Golden Visa?",
    a: "A long-term, renewable UAE residence visa valid for 5 or 10 years. You don't need a sponsor, you can stay outside the UAE for longer than the usual six months, and you can sponsor family members including your spouse and children.",
  },
  {
    q: "Can a Pakistani citizen get a UAE Golden Visa?",
    a: "Yes, if you meet the conditions of one of the eligible categories — investor, entrepreneur, exceptional talent, outstanding student, or humanitarian pioneer and frontline hero. Eligibility is based on the category, and the decision is made by the UAE authorities.",
  },
  {
    q: "How much investment do I need for a Golden Visa?",
    a: "For the investor category, the UAE government lists a minimum capital of AED 2 million, or a contribution to an establishment paying at least AED 250,000 a year in taxes. Public investments can qualify for 10 years and real estate for 5 years.",
  },
  {
    q: "Where do I apply?",
    a: "Through the UAE's official channels: ICP eServices (which include an eligibility check), GDRFA Dubai's Golden visa services, and for creatives a recommendation from the Ministry of Culture.",
  },
  {
    q: "Does Travelaxis guarantee a Golden Visa?",
    a: "No. The decision rests with the UAE authorities. We help you confirm your category and prepare a complete, consistent file.",
  },
];
