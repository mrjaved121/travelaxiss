/**
 * Process facts verified against gofreelance.ae (TECOM's official Dubai freelance
 * platform, covering Dubai Media City, Dubai Internet City, Dubai Design District
 * and Dubai Knowledge Park) and twofour54.com (Abu Dhabi). Per site policy, no
 * price or fee amount is published on any page — cost components are described,
 * current figures are the applicant's/consultant's to confirm directly with the
 * issuing authority or with us.
 */

export const FREELANCE_SOURCE_GOFREELANCE = "https://gofreelance.ae/";
export const FREELANCE_SOURCE_TWOFOUR54 =
  "https://www.twofour54.com/en/news-and-updates/highlights/how-to-obtain-your-freelance-work-permit-in-abu-dhabi/";
export const FREELANCE_SOURCE_MOHRE = "https://www.mohre.gov.ae/en/";

export const dubaiCostComponents: string[] = [
  "GoFreelance package (annual)",
  "Residence visa (1 or 2-year options)",
  "Establishment Card",
  "Health insurance and the medical fitness test (priced separately)",
];

export const dubaiActivityGroups = ["Tech", "Media", "Education", "Design"];

export const freelanceVisaFaqs: { q: string; a: string }[] = [
  {
    q: "Can I get a UAE residence visa through a freelance permit?",
    a: "Yes. A GoFreelance permit in Dubai lets you apply for your own 1 or 2-year residence visa — no employer or company needed. After your permit, Establishment Card and medical test, your Emirates ID and residence visa are issued.",
  },
  {
    q: "How much does a freelance visa cost in Dubai?",
    a: "The total is made up of the GoFreelance package, the residence visa, the Establishment Card, and separately priced health insurance and a medical test. We don't quote fee amounts here since free zones update them — check gofreelance.ae or message us for the current figure for your activity.",
  },
  {
    q: "Does Abu Dhabi offer a freelance visa?",
    a: "Yes. twofour54 issues a Sole Proprietor freelance permit for media, creative and tech professionals, and ADDED offers a mainland freelance licence. Neither publishes a standing public fee schedule, so we confirm the current cost for your activity before you apply.",
  },
  {
    q: "Can I work for multiple clients on a freelance visa?",
    a: "Yes. A freelance permit lets you invoice and work for multiple clients within your approved activity, unlike an employment visa, which ties you to one employer. You can also work as an independent contractor at a client's premises.",
  },
  {
    q: "Do I need a sponsor for a UAE freelance visa?",
    a: "No. The freelance permit makes you self-sponsored, so you don't need an employer or local partner to live and work in the UAE. You still need valid health insurance and a UAE phone number to apply for the visa.",
  },
  {
    q: "How long does a UAE freelance visa take?",
    a: "GoFreelance's own process is register, apply in 3 steps, then pay — often a matter of days once your documents are ready. Adding the entry permit, medical test and Emirates ID typically brings the full process to a few weeks.",
  },
];
