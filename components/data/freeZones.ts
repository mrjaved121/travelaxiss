export type FreeZone = {
  slug: string;
  name: string;
  fullName: string;
  emirate: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  knownFor: string[];
  bestFor: string[];
  faqs: { q: string; a: string }[];
};

export const freeZones: FreeZone[] = [
  {
    slug: "ifza",
    name: "IFZA",
    fullName: "International Free Zone Authority (IFZA)",
    emirate: "Dubai",
    metaTitle: "IFZA Company Formation – Documentation & Setup Guide",
    metaDescription:
      "Documentation support for IFZA (International Free Zone Authority) company formation in Dubai — activity selection, licensing paperwork, and visa documentation.",
    heroIntro:
      "IFZA (International Free Zone Authority) is one of Dubai's most popular free zones for startups, consultants, and SMEs, known for competitively priced packages and a wide range of licensable activities. We help you prepare the documentation for IFZA company formation — the license itself is issued by IFZA, not by us.",
    knownFor: [
      "Competitively priced setup packages compared to many other Dubai free zones",
      "A broad range of licensable commercial, consultancy, and general trading activities",
      "Flexible office options, including virtual and flexi-desk packages",
      "Located in Dubai Silicon Oasis, with straightforward remote registration for many applicants",
    ],
    bestFor: [
      "Startups and solo founders wanting a low-cost, fast setup",
      "Consultants and service businesses without a need for a large office",
      "Founders based outside the UAE registering remotely",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of IFZA?",
        a: "No. IFZA is an independent free zone authority. We are a documentation and consultancy service that helps prepare and organize your IFZA application — the license is issued by IFZA directly.",
      },
      {
        q: "How much does IFZA company formation cost?",
        a: "Package pricing is set by IFZA and changes periodically, so we recommend confirming current pricing directly or through us before budgeting — we can request an up-to-date quote for your specific activity.",
      },
      {
        q: "Can I set up an IFZA company without visiting the UAE?",
        a: "In many cases yes, using power of attorney for signing, though this depends on your specific activity and current IFZA requirements.",
      },
      {
        q: "How many visas can I get with an IFZA license?",
        a: "Visa quota depends on the specific package and office/flexi-desk option chosen — we'll confirm the right package for your visa needs.",
      },
      {
        q: "Where is IFZA physically located?",
        a: "IFZA is based in Dubai Silicon Oasis, though most applicants register remotely without needing to visit in person.",
      },
      {
        q: "Does IFZA support general trading activities?",
        a: "Yes — IFZA licenses a broad range of commercial, consultancy, and general trading activities, which is part of why it's popular across many business types.",
      },
    ],
  },
  {
    slug: "dmcc",
    name: "DMCC",
    fullName: "Dubai Multi Commodities Centre (DMCC)",
    emirate: "Dubai",
    metaTitle: "DMCC Company Formation – Documentation & Setup Guide",
    metaDescription:
      "Documentation support for DMCC (Dubai Multi Commodities Centre) company formation in JLT — one of the world's most awarded free zones for trading and business.",
    heroIntro:
      "DMCC (Dubai Multi Commodities Centre), based in Jumeirah Lakes Towers (JLT), is one of the world's most awarded free zones and a long-established hub for commodities trading, though it now licenses a wide range of general business activities. We help you prepare the documentation for DMCC company formation — the license itself is issued by DMCC, not by us.",
    knownFor: [
      "A long track record as one of the world's most awarded free zones",
      "Historically strong for commodities trading, now covering a wide range of activities",
      "Based in JLT, with direct access to the Almas Tower and DMCC's own facilities",
      "A large, established business community with strong networking opportunities",
    ],
    bestFor: [
      "Trading, commodities, and logistics businesses",
      "Companies wanting a globally recognized free zone name for credibility",
      "Businesses planning a genuine physical presence in JLT",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of DMCC?",
        a: "No. DMCC is an independent free zone authority. We are a documentation and consultancy service that helps prepare your DMCC application — the license is issued by DMCC directly.",
      },
      {
        q: "Is DMCC more expensive than other Dubai free zones?",
        a: "DMCC packages are often positioned at a higher price point than budget-focused free zones, reflecting its established reputation and JLT location — we can help you compare against other options based on your budget.",
      },
      {
        q: "Do I need a DMCC company if my business is based in JLT?",
        a: "Not necessarily — other free zones and mainland structures can also operate from JLT, but DMCC is the free zone directly associated with the area. See our JLT area guide for broader documentation support in that location.",
      },
      {
        q: "What activities does DMCC support beyond commodities trading?",
        a: "DMCC now licenses a wide range of activities including consultancy, technology, and general trading, well beyond its original commodities focus — we can confirm whether your specific activity is supported.",
      },
      {
        q: "What is the Almas Tower?",
        a: "Almas Tower is DMCC's flagship building in JLT, housing many of the free zone's own facilities and a large concentration of DMCC-licensed companies.",
      },
      {
        q: "Does DMCC offer networking opportunities for member companies?",
        a: "Yes — DMCC has a large, established business community and regularly runs networking and industry events for its licensed companies.",
      },
    ],
  },
  {
    slug: "meydan-free-zone",
    name: "Meydan Free Zone",
    fullName: "Meydan Free Zone",
    emirate: "Dubai",
    metaTitle: "Meydan Free Zone Company Formation – Documentation Guide",
    metaDescription:
      "Documentation support for Meydan Free Zone company formation in Dubai — flexible packages, 100% ownership, and streamlined setup for startups and SMEs.",
    heroIntro:
      "Meydan Free Zone is a Dubai free zone known for flexible, streamlined packages aimed at startups, freelancers, and small businesses, with 100% foreign ownership. We help you prepare the documentation for Meydan Free Zone company formation — the license itself is issued by Meydan Free Zone, not by us.",
    knownFor: [
      "Streamlined, package-based setup aimed at startups and small businesses",
      "100% foreign ownership across its licensed activities",
      "Flexible office and visa package combinations",
      "A relatively fast, straightforward application process",
    ],
    bestFor: [
      "First-time founders wanting a simple, fast setup",
      "Freelancers and consultants without a need for a large physical office",
      "Businesses wanting to bundle a small visa quota with their license",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of Meydan Free Zone?",
        a: "No. Meydan Free Zone is an independent free zone authority. We help prepare and organize your application — the license is issued by Meydan Free Zone directly.",
      },
      {
        q: "How is Meydan Free Zone different from IFZA?",
        a: "Both are popular, competitively priced Dubai free zones aimed at startups and SMEs; the right fit depends on your specific activity list, package pricing, and visa needs at the time you apply — we can help compare current options.",
      },
      {
        q: "Can I get a visa through Meydan Free Zone?",
        a: "Yes, subject to the package you choose and its visa quota — we'll help confirm the right package for your visa requirements.",
      },
      {
        q: "Is Meydan Free Zone suitable for e-commerce businesses?",
        a: "Many e-commerce and online business activities are supported — we'll confirm your specific activity is on their current licensable list before applying.",
      },
      {
        q: "How long does Meydan Free Zone company formation typically take?",
        a: "Meydan Free Zone is known for a relatively fast, streamlined application process compared to some other free zones, though exact timelines depend on your activity and current processing volumes.",
      },
      {
        q: "Does Meydan Free Zone require a physical office?",
        a: "Package options vary — some Meydan Free Zone packages include flexible or virtual office arrangements rather than requiring a dedicated physical space.",
      },
    ],
  },
  {
    slug: "rakez",
    name: "RAKEZ",
    fullName: "Ras Al Khaimah Economic Zone (RAKEZ)",
    emirate: "Ras Al Khaimah",
    metaTitle: "RAKEZ Company Formation – Documentation & Setup Guide",
    metaDescription:
      "Documentation support for RAKEZ (Ras Al Khaimah Economic Zone) company formation — cost-effective setup for commercial, industrial, and freelance businesses.",
    heroIntro:
      "RAKEZ (Ras Al Khaimah Economic Zone) is known for cost-effective company formation, covering commercial, industrial, and free zone activities across a range of business sizes. We help you prepare the documentation for RAKEZ company formation — the license itself is issued by RAKEZ, not by us.",
    knownFor: [
      "Generally lower setup and renewal costs compared to many Dubai free zones",
      "A wide range of activities, including industrial and manufacturing licenses",
      "Both free zone and non-free-zone (RAK mainland-equivalent) options",
      "Located in Ras Al Khaimah, roughly 45–60 minutes from central Dubai",
    ],
    bestFor: [
      "Cost-conscious startups and SMEs",
      "Industrial, manufacturing, and warehousing businesses",
      "Businesses that don't need a Dubai-specific address",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of RAKEZ?",
        a: "No. RAKEZ is an independent free zone authority in Ras Al Khaimah. We help prepare and organize your application — the license is issued by RAKEZ directly.",
      },
      {
        q: "Can I set up a RAKEZ company while living in Dubai?",
        a: "Yes — many RAKEZ license holders live and work across the UAE; the free zone's physical location doesn't restrict where you personally reside.",
      },
      {
        q: "Is RAKEZ cheaper than Dubai free zones?",
        a: "RAKEZ is generally positioned as a cost-effective option, though exact pricing depends on your activity and package — we can help compare current costs against Dubai-based alternatives.",
      },
      {
        q: "Does RAKEZ support industrial and manufacturing activities?",
        a: "Yes — RAKEZ is a common choice for industrial, manufacturing, and warehousing businesses in addition to standard commercial and consultancy activities.",
      },
      {
        q: "Does RAKEZ offer a mainland-equivalent option?",
        a: "Yes — alongside its free zone licenses, RAKEZ offers a non-free-zone option that functions similarly to mainland licensing within Ras Al Khaimah.",
      },
      {
        q: "Is RAKEZ only for large industrial companies?",
        a: "No — RAKEZ covers a wide range of business sizes, from small commercial and consultancy setups to larger industrial and manufacturing operations.",
      },
    ],
  },
  {
    slug: "shams",
    name: "SHAMS",
    fullName: "Sharjah Media City (SHAMS)",
    emirate: "Sharjah",
    metaTitle: "SHAMS Free Zone Company Formation – Documentation Guide",
    metaDescription:
      "Documentation support for SHAMS (Sharjah Media City) company formation and freelance permits — affordable setup for creatives, consultants, and freelancers.",
    heroIntro:
      "SHAMS (Sharjah Media City) is a Sharjah-based free zone known for affordable company and freelance permit packages, popular with content creators, consultants, and media professionals. We help you prepare the documentation for SHAMS company or freelance permit applications — the license itself is issued by SHAMS, not by us.",
    knownFor: [
      "Competitively priced packages, including dedicated freelance permits",
      "A strong focus on media, creative, and consultancy activities",
      "Located in Sharjah, a short distance from Dubai",
      "A relatively fast setup process for individual freelancers",
    ],
    bestFor: [
      "Freelancers in media, design, content, and consultancy fields",
      "Solo founders wanting the lowest-cost entry point",
      "Businesses not needing a Dubai-specific address",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of SHAMS?",
        a: "No. SHAMS is an independent free zone authority in Sharjah. We help prepare and organize your application — the license is issued by SHAMS directly.",
      },
      {
        q: "Can I get a freelance permit through SHAMS?",
        a: "Yes — SHAMS offers freelance permits alongside standard company licenses, commonly used by media and creative professionals. See our Freelance Visa guide for the broader documentation process.",
      },
      {
        q: "Can I live in Dubai with a SHAMS license?",
        a: "Yes — your residence isn't restricted to Sharjah based on where your license is issued.",
      },
      {
        q: "Is SHAMS only for media businesses?",
        a: "Media and creative activities are a strong focus, but SHAMS also licenses a range of consultancy and commercial activities — we can confirm whether your specific activity is supported.",
      },
      {
        q: "How fast is SHAMS company or freelance permit setup?",
        a: "SHAMS is known for a relatively fast setup process, particularly for individual freelance permits, though exact timelines depend on your specific activity and documentation.",
      },
      {
        q: "Does SHAMS support consultancy activities beyond media?",
        a: "Yes — while media and creative work is SHAMS's strongest focus, it also licenses a range of consultancy and commercial activities.",
      },
    ],
  },
  {
    slug: "jafza",
    name: "JAFZA",
    fullName: "Jebel Ali Free Zone (JAFZA)",
    emirate: "Dubai",
    metaTitle: "JAFZA Company Formation – Documentation & Setup Guide",
    metaDescription:
      "Documentation support for JAFZA (Jebel Ali Free Zone) company formation — a major free zone for trading, logistics, and manufacturing.",
    heroIntro:
      "JAFZA (Jebel Ali Free Zone) is one of the region's oldest and largest free zones, built around direct access to Jebel Ali Port, and widely used for trading, logistics, and manufacturing. We help you prepare the documentation for JAFZA company formation — the license itself is issued by JAFZA, not by us.",
    knownFor: [
      "One of the largest and longest-established free zones in the region",
      "Direct access to Jebel Ali Port, one of the world's busiest ports",
      "Strong for trading, logistics, warehousing, and manufacturing",
      "A wide range of office and warehouse facility options",
    ],
    bestFor: [
      "Import/export and logistics businesses needing port access",
      "Manufacturing and warehousing operations",
      "Larger, more established businesses beyond early-stage startups",
    ],
    faqs: [
      {
        q: "Is Travelaxis affiliated with or part of JAFZA?",
        a: "No. JAFZA is an independent free zone authority. We help prepare and organize your application — the license is issued by JAFZA directly.",
      },
      {
        q: "Is JAFZA suitable for a small startup?",
        a: "JAFZA is generally better suited to trading, logistics, and manufacturing businesses needing port access or warehouse space rather than early-stage startups on a tight budget, though this depends on your specific plans.",
      },
      {
        q: "Does JAFZA offer warehouse and logistics facilities?",
        a: "Yes — JAFZA is widely used specifically for its warehousing, logistics, and Jebel Ali Port access, alongside standard office packages.",
      },
      {
        q: "How does JAFZA compare to DMCC for trading businesses?",
        a: "Both are well-established free zones for trading; JAFZA is more geared toward logistics, warehousing, and port-based trade, while DMCC is centered on commodities and general business in JLT — the right fit depends on your specific trade flows.",
      },
      {
        q: "What kind of office or facility options does JAFZA offer?",
        a: "JAFZA offers a wide range of options, from standard offices to large warehouse and logistics facilities, reflecting its focus on trading, logistics, and manufacturing businesses.",
      },
      {
        q: "Is JAFZA good for a business that just needs a standard office, not a warehouse?",
        a: "Yes — JAFZA does offer standard office packages alongside its warehouse and logistics facilities, though founders with simpler, lower-budget needs sometimes find other Dubai free zones a better fit.",
      },
    ],
  },
];
