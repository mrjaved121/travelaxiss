// Facts verified 2026-09-29 against each country's official page (linked as `source`).
// Re-check the source before changing any figure; never add a country without an official source.

export type JobSeekerCountry = {
  slug: string;
  country: string;
  name: string;
  status: "open" | "closed";
  summary: string;
  facts: { label: string; value: string }[];
  documents?: string[];
  notes?: string[];
  source: { label: string; href: string };
};

export const jobSeekerCountries: JobSeekerCountry[] = [
  {
    slug: "uae",
    country: "United Arab Emirates",
    name: "UAE jobseeker visit visa",
    status: "open",
    summary:
      "A visit visa for one trip that lets you look for work in the UAE without a host or sponsor in the country.",
    facts: [
      { label: "Validity", value: "60, 90 or 120 days, single entry" },
      { label: "Sponsor needed", value: "No host or sponsor in the UAE" },
      {
        label: "Who qualifies",
        value:
          "MOHRE skill level 1, 2 or 3, or a graduate of one of the world's top 500 universities within the last 2 years — with a bachelor's degree or equivalent",
      },
      { label: "Money", value: "You must meet the financial guarantee set by the authorities" },
      { label: "Apply through", value: "ICP online services, or GDRFA Dubai" },
    ],
    documents: ["A coloured photo", "A copy of your passport", "Your qualification certificate, attested"],
    notes: ["The visa lets you search for work, not work. Once you accept an offer, your employer applies for your employment visa."],
    source: {
      label: "UAE government — Jobseeker visit visa",
      href: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Visit-visa/jobseeker-visit-visa",
    },
  },
  {
    slug: "germany",
    country: "Germany",
    name: "Germany Opportunity Card (Chancenkarte)",
    status: "open",
    summary:
      "Germany's job-search route for people with a recognised university degree or vocational qualification who want to find a job in Germany.",
    facts: [
      { label: "Who it is for", value: "Holders of a recognised university degree or vocational qualification" },
      {
        label: "Apply from Pakistan",
        value:
          "Online through the German Missions' Consular Services Portal — Islamabad, or the Karachi portal for applicants from Sindh and Balochistan",
      },
      { label: "Apply from India", value: "Through the German mission responsible for where you live" },
    ],
    notes: [
      "Eligibility is assessed on qualifications, language skills, experience, age and links to Germany. Use the official Make it in Germany self-check to see whether you qualify before you apply.",
    ],
    source: {
      label: "German Missions in Pakistan — Employment, training and jobseeker visas",
      href: "https://pakistan.diplo.de/pk-en/service/4-work-jobseeker-1676106",
    },
  },
  {
    slug: "austria",
    country: "Austria",
    name: "Austria job-seeker visa (very highly qualified workers)",
    status: "open",
    summary:
      "A six-month visa to look for work in Austria, for very highly qualified people who score enough points and don't yet have a job offer.",
    facts: [
      { label: "Validity", value: "Six months" },
      { label: "Points", value: "At least 70 points on Austria's criteria for very highly qualified workers" },
      {
        label: "Where to apply",
        value: "In person at the Austrian embassy or consulate in your home country, or where you legally live (category D visa)",
      },
      { label: "Work", value: "Employment is not permitted on this visa" },
      { label: "After a job offer", value: "Apply for the Red-White-Red Card while the visa is still valid" },
    ],
    documents: [
      "Valid passport",
      "Photo (45 x 35 mm), not older than six months",
      "Proof of accommodation",
      "Health insurance covering all risks",
      "Proof you can support yourself",
      "Evidence for each points criterion — degree, work experience, language certificates",
    ],
    notes: ["Documents not in German or English need translations into German or English."],
    source: {
      label: "Migration.gv.at — Very Highly Qualified Workers",
      href: "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers/",
    },
  },
  {
    slug: "sweden",
    country: "Sweden",
    name: "Sweden residence permit to look for work (highly qualified)",
    status: "open",
    summary:
      "A residence permit for people with a master's-level (second-cycle) degree who want to come to Sweden to look for work or explore starting a business.",
    facts: [
      { label: "Validity", value: "Up to nine months, never longer than your passport" },
      {
        label: "Degree",
        value: "Second-cycle qualification — e.g. a 60 or 120-credit master's, a professional degree of 60–330 credits, or a PhD",
      },
      { label: "Money", value: "Bank assets of at least SEK 13,000 for each month applied for, plus money for your return journey" },
      { label: "Insurance", value: "Comprehensive health insurance valid for care in Sweden" },
      { label: "Fee", value: "SEK 2,200" },
      { label: "When to apply", value: "You must apply and receive a decision before you enter Sweden" },
    ],
    documents: [
      "Copies of your passport",
      "Your degree certificate and the list of subjects in your education",
      "Bank statements showing you can support yourself",
      "Proof of comprehensive health insurance",
      "A signed power of attorney letting the Swedish Council for Higher Education (UHR) verify your study documents",
    ],
    source: {
      label: "Swedish Migration Agency — Look for work or start a business",
      href: "https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-or-start-a-business.html",
    },
  },
  {
    slug: "portugal",
    country: "Portugal",
    name: "Portugal job-seeking visa — no longer accepted",
    status: "closed",
    summary:
      "Since 23 October 2025, Portuguese consulates and visa centres no longer accept job-seeking visa applications, and existing appointments were cancelled.",
    facts: [
      { label: "Status", value: "Closed since 23 October 2025 (Law No. 61/2025)" },
      { label: "Replacement", value: "A new skilled job seeker visa, which opens only once it has been regulated" },
    ],
    notes: ["Be careful of anyone still selling Portugal job-seeker visa appointments."],
    source: {
      label: "Portugal visa portal — change in the job-seeking visa regime",
      href: "https://vistos.mne.gov.pt/en/highlights/change-in-the-regime-regarding-work-seeking-visa-applications",
    },
  },
];

export const jobSeekerFaqs: { q: string; a: string }[] = [
  {
    q: "What is a job seeker visa?",
    a: "A visa or permit that lets you travel to a country to look for work and attend interviews before you have a job offer. It usually does not let you work — once you get an offer, you or your employer apply for a work permit.",
  },
  {
    q: "Which countries offer a job seeker visa to applicants from Pakistan and India?",
    a: "The UAE (jobseeker visit visa, 60/90/120 days), Germany (Opportunity Card), Austria (job-seeker visa for very highly qualified workers, six months) and Sweden (residence permit to look for work, up to nine months, for master's-level graduates). Portugal stopped accepting job-seeking visa applications on 23 October 2025.",
  },
  {
    q: "How long is the UAE job seeker visa?",
    a: "You choose 60, 90 or 120 days when you apply. It is a single-entry visit visa for one trip, and you don't need a host or sponsor in the UAE.",
  },
  {
    q: "Can I work on a job seeker visa?",
    a: "Generally no. The UAE visa is for searching for work, and Austria's official page says employment is not permitted on its job-seeker visa. You need a separate work permit once you accept an offer.",
  },
  {
    q: "Does Travelaxis find me a job?",
    a: "No. We are a documentation and consultancy service, not a recruitment agency or employer. We help you check the conditions and prepare a complete, correctly organised file — we don't source jobs or guarantee a visa.",
  },
];
