export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What does Travelaxis do?",
    answer:
      "We prepare visa documentation for applicants in Pakistan, India, Bangladesh and the UAE — Dubai, UK, USA, Schengen/Germany and Australia visit visas; UK, USA, Australia and Germany study visas; job seeker visas for the UAE, Germany, Austria and Sweden; and the UAE Golden Visa. We don't offer UAE business setup or government services. Applications are submitted through each country's official channels, and Travelaxis does not issue visas or guarantee approvals.",
    category: "General",
  },
  {
    question: "What documents are required for a UAE visit visa?",
    answer:
      "You'll usually need a passport valid for 6+ months, a passport-style photo, proof you can support yourself financially, and a confirmed return ticket. The exact list depends on your sponsor — an airline, hotel, tour operator, or a UAE resident/citizen. We confirm the exact checklist for your situation before you apply.",
    category: "Visit Visa",
  },
  {
    question: "Do you provide multiple-entry visa assistance?",
    answer:
      "Yes. A UAE visit visa can be single-entry (one trip) or multiple-entry (several trips), depending on how long you're staying and your travel plans. We help you choose the right one and prepare the paperwork for it.",
    category: "Visit Visa",
  },
  {
    question: "How does Travelaxis visa documentation work?",
    answer:
      "It's simple: we go over what you need, tell you exactly which documents to prepare, help you get everything ready and organized, and then submit your application through the correct government channel — keeping you updated the whole way.",
    category: "General",
  },
  {
    question: "Can you help with international visa documentation?",
    answer:
      "Yes. We help with visit visa paperwork for the UK, USA, Schengen countries including Germany, Australia and other destinations — for applicants in Pakistan as well as UAE residents travelling abroad. For Canada we only help with translation, travel bookings and using IRCC's online system, as we are not an authorized Canadian immigration representative.",
    category: "Visit Visa",
  },
  {
    question: "How long does visa processing take?",
    answer:
      "It depends on the visa type and how busy the issuing authority is — most applications take anywhere from a few business days to a few weeks. These are rough guides only; we give you a realistic timeline once we've reviewed your specific case.",
    category: "General",
  },
  {
    question: "Does Travelaxis guarantee visa approval?",
    answer:
      "No, and you should be careful of anyone who promises this. We prepare your documents and guide you through the process, but we are not a government authority — we don't issue visas. The final decision is always made by the relevant government authority.",
    category: "General",
  },
  {
    question: "Do you help with study visa documentation for applicants in Pakistan?",
    answer:
      "Yes. We help prepare study visa documentation for the UK, USA (F1), Australia, and Germany, including university admission evidence and financial proof. Documents are submitted through each country's official visa channels. We don't arrange university admission.",
    category: "Study Visa",
  },
];

const homepageFaqQuestions = [
  "What documents are required for a UAE visit visa?",
  "Do you provide multiple-entry visa assistance?",
  "How does Travelaxis visa documentation work?",
  "Can you help with international visa documentation?",
  "How long does visa processing take?",
  "Does Travelaxis guarantee visa approval?",
];

/** Curated subset of faqItems shown on the homepage; keep in sync with the FAQPage JSON-LD in app/page.tsx. */
export const homepageFaqs = faqItems.filter((f) => homepageFaqQuestions.includes(f.question));
