export type Destination = {
  slug: string;
  name: string;
  pathways: string[];
  description: string;
  href: string;
  /** Set to true once the linked page has full destination content (Why X, pathways, process, FAQs). */
  ready: boolean;
};

/**
 * Each destination links to the strongest existing page for that market rather than a
 * duplicate URL, to avoid splitting SEO equity across two pages for the same topic.
 * Add a real photo (`image` field) per destination once professional photography is
 * available — do not substitute generic stock photography.
 */
export const destinations: Destination[] = [
  {
    slug: "uae",
    name: "United Arab Emirates",
    pathways: ["Work", "Business", "Residence"],
    description:
      "Company formation, employment visas, and residence pathways in Dubai and across the UAE.",
    href: "/dubai",
    ready: true,
  },
  {
    slug: "usa",
    name: "United States",
    pathways: ["Study", "Work", "Visit", "Immigration"],
    description: "Documentation and consultancy support for US visa applications from Pakistan.",
    href: "/services/usa-visa-from-pakistan",
    ready: true,
  },
  {
    slug: "canada",
    name: "Canada",
    pathways: ["Study", "Work", "Immigration"],
    description: "Documentation and consultancy support for Canadian visa applications from Pakistan.",
    href: "/services/canada-visa-from-pakistan",
    ready: true,
  },
  {
    slug: "uk",
    name: "United Kingdom",
    pathways: ["Study", "Work", "Visit"],
    description: "Documentation and consultancy support for UK visa applications from Pakistan.",
    href: "/services/uk-visa-from-pakistan",
    ready: true,
  },
  {
    slug: "australia",
    name: "Australia",
    pathways: ["Study", "Work", "Migration"],
    description: "Documentation and consultancy support for Australian visa applications from Pakistan.",
    href: "/services/australia-visa-from-pakistan",
    ready: true,
  },
  {
    slug: "germany",
    name: "Germany",
    pathways: ["Study", "Work", "Opportunity"],
    description: "German pathway guidance is coming soon — talk to our team about your options today.",
    href: "/consultation",
    ready: false,
  },
];
