export type FaqItem = {
  question: string;
  answer: string;
  category: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What is the cost of company formation in UAE?",
    answer:
      "The cost of company formation in UAE depends on the business type, location (mainland or freezone), and license requirements. It usually starts from a basic package and can increase based on services and approvals needed.",
    category: "Business Setup",
  },
  {
    question: "How long does it take to start a business in Dubai?",
    answer:
      "Business setup in Dubai usually takes between 5 to 10 working days. Fast-track options may reduce the time depending on approvals.",
    category: "Business Setup",
  },
  {
    question: "Can a foreigner start a business in UAE?",
    answer:
      "Yes, foreigners can start a business in UAE. Many freezones offer 100% foreign ownership, and mainland options are also available depending on the activity.",
    category: "Business Setup",
  },
  {
    question: "Which is better: mainland or freezone company in UAE?",
    answer:
      "Mainland companies allow you to operate anywhere in UAE, while freezone companies offer tax benefits and full ownership. The best option depends on your business needs.",
    category: "Business Setup",
  },
  {
    question: "What are the benefits of freezone company setup in UAE?",
    answer:
      "Freezone companies offer 100% ownership, tax benefits, easy setup process, and simplified business operations.",
    category: "Freezone",
  },
  {
    question: "Can I do business in UAE with a freezone license?",
    answer:
      "Yes, but freezone companies may need a local distributor to trade directly in the mainland UAE market.",
    category: "Freezone",
  },
  {
    question: "Do freezone companies require office space?",
    answer:
      "Many freezones offer flexible options including shared offices, virtual offices, and flexi-desk solutions.",
    category: "Freezone",
  },
  {
    question: "What services does a UAE visa consultancy provide?",
    answer:
      "A consultancy typically provides documentation preparation, eligibility guidance, application support, and coordination for submission through official UAE government channels or authorized entities. Travelaxis does not issue visas or guarantee approvals.",
    category: "UAE Visa Documentation",
  },
  {
    question: "Do I need a visa to start a business in UAE?",
    answer:
      "Most founders need a residence pathway aligned with their setup (for example investor or partner routes where applicable). Eligibility and final issuance are determined solely by UAE authorities.",
    category: "UAE Visa Documentation",
  },
  {
    question: "How long does it take to get a UAE visa?",
    answer:
      "Many applications fall in a typical range of several business days to a few weeks, depending on category and authority workload. Timelines are indicative only and not guaranteed.",
    category: "UAE Visa Documentation",
  },
  {
    question: "What documents are required for company formation in UAE?",
    answer:
      "Common documents include passport copy, business activity details, application forms, and sometimes proof of address.",
    category: "Documentation",
  },
  {
    question: "Do I need a local sponsor for company setup in UAE?",
    answer:
      "Some mainland businesses require a local service agent, while many freezone businesses allow full ownership without a sponsor.",
    category: "Documentation",
  },
  {
    question: "What is MOA and why is it important?",
    answer:
      "MOA (Memorandum of Association) is a legal document that defines business structure, ownership, and responsibilities.",
    category: "Documentation",
  },
  {
    question: "How long does company formation take?",
    answer:
      "Standard company formation typically takes 7-10 working days, while express formation can be completed in 3-5 working days.",
    category: "General",
  },
  {
    question: "What types of business structures do you support?",
    answer:
      "We support mainland company setup, freezone registration, and offshore incorporation, each with its unique advantages.",
    category: "General",
  },
  {
    question: "Do I need to be physically present in Dubai?",
    answer:
      "For certain processes, physical presence may be required. However, we minimize your travel needs by handling most procedures remotely.",
    category: "General",
  },
  {
    question: "What are the benefits of setting up in a freezone?",
    answer:
      "Freezones offer 100% foreign ownership, tax exemptions, full repatriation of profits, and no currency restrictions.",
    category: "Freezone",
  },
  {
    question: "How do you handle government approvals?",
    answer:
      "We have established relationships with government entities and coordinate all approvals through our expert team.",
    category: "General",
  },
  {
    question: "Why choose a professional consultancy for business setup?",
    answer:
      "A consultancy helps you avoid mistakes, saves time, ensures proper documentation, and simplifies the entire process.",
    category: "Why Choose Us",
  },
  {
    question: "Can I start a business in UAE remotely?",
    answer:
      "Yes, many processes can be completed remotely, depending on the type of business and approvals required.",
    category: "General",
  },
  {
    question: "Do you provide support after company formation?",
    answer:
      "Yes, ongoing support services include documentation, renewals, and business assistance.",
    category: "Why Choose Us",
  },
  {
    question: "What documents are required for a UAE visit visa?",
    answer:
      "Typically a passport valid for 6+ months, a passport-style photo, proof of funds, and a confirmed return ticket. The exact list depends on your sponsor route (airline, hotel, tour operator, or a UAE resident/citizen) — we confirm the precise checklist for your situation before you apply.",
    category: "UAE Visa Documentation",
  },
  {
    question: "Do you provide multiple-entry visa assistance?",
    answer:
      "Yes. UAE visit visas can be issued as single or multiple entry depending on the duration and route. We help you choose the right entry type for your travel pattern and prepare the documentation accordingly.",
    category: "UAE Visa Documentation",
  },
  {
    question: "How does Travelaxis visa documentation work?",
    answer:
      "We review your requirements, confirm the current document checklist for your visa category, help you prepare and organize everything accurately, and submit through the correct official channel — with updates at each stage.",
    category: "UAE Visa Documentation",
  },
  {
    question: "Can you help with international visa documentation?",
    answer:
      "Yes. Beyond the UAE, we support documentation for the UK, USA, Canada, Australia, Schengen Europe, and other regional destinations, primarily for UAE residents traveling, working, or relocating abroad.",
    category: "UAE Visa Documentation",
  },
  {
    question: "How long does visa processing take?",
    answer:
      "Timelines vary by visa category and the issuing authority's current workload — many applications fall in a range of several business days to a few weeks. These figures are indicative only; we confirm a realistic timeline once we review your specific case.",
    category: "UAE Visa Documentation",
  },
  {
    question: "Does Travelaxis guarantee visa approval?",
    answer:
      "No. We provide documentation preparation and consultancy support only — we are not a government authority and do not issue visas. Final approval decisions are made solely by the relevant government authority.",
    category: "UAE Visa Documentation",
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
