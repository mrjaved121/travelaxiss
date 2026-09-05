export type DubaiArea = {
  slug: string;
  name: string;
  fullLabel: string;
  isOffice: boolean;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  context: string[];
  faqs: { q: string; a: string }[];
};

export const dubaiAreas: DubaiArea[] = [
  {
    slug: "al-qusais",
    name: "Al Qusais",
    fullLabel: "Al Qusais, Dubai",
    isOffice: true,
    metaTitle: "Business Setup & Visa Documentation in Al Qusais, Dubai",
    metaDescription:
      "Travelaxis is based in Al Qusais, Dubai, offering company formation, government services, legal documentation, and visa documentation support in person and remotely.",
    heroIntro:
      "Al Qusais is where Travelaxis is actually based — a mixed residential and industrial district in Dubai, close to the Sharjah border, home to a large number of small and medium trading businesses. If you're in or near Al Qusais, you can visit our office directly by appointment for company formation, government services, legal documentation, or visa documentation support.",
    context: [
      "A mixed residential and light-industrial district in Dubai, bordering Sharjah",
      "Home to a large concentration of small and medium trading businesses",
      "Well served by Dubai Metro (Red Line) and major roads connecting to central Dubai",
      "Our office is located here — visits are by appointment",
    ],
    faqs: [
      {
        q: "Is Travelaxis's office actually in Al Qusais?",
        a: "Yes — our office is based in Al Qusais, Dubai, and this is where in-person consultations happen by appointment.",
      },
      {
        q: "Can I visit your Al Qusais office without an appointment?",
        a: "We recommend booking an appointment first so we can prepare for your specific case and avoid any wait.",
      },
      {
        q: "Do you only serve clients based in Al Qusais?",
        a: "No — we support clients across Dubai and the wider UAE. Al Qusais is simply where our office is physically located.",
      },
      {
        q: "Is Al Qusais well connected by public transport?",
        a: "Yes — Al Qusais is served by Dubai Metro's Red Line and sits on several major roads connecting to central Dubai, making it straightforward to reach for an in-person appointment.",
      },
      {
        q: "What kind of businesses are typically based in Al Qusais?",
        a: "Al Qusais has a large concentration of small and medium trading businesses alongside its residential population, reflecting its mixed residential and light-industrial character.",
      },
    ],
  },
  {
    slug: "deira",
    name: "Deira",
    fullLabel: "Deira, Dubai",
    isOffice: false,
    metaTitle: "Business Setup & Visa Documentation in Deira, Dubai",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Deira, Dubai — coordinated from our Al Qusais office.",
    heroIntro:
      "Deira is one of Dubai's oldest and busiest commercial districts, home to the Gold Souk, Spice Souk, and a dense concentration of trading and import/export businesses licensed through Dubai's Department of Economic Development. We support company formation, trade licensing documentation, and visa applications for businesses and residents in Deira, coordinated from our Al Qusais office — remotely or by appointment.",
    context: [
      "One of Dubai's oldest commercial districts, historically the city's main trading hub",
      "Home to the Gold Souk, Spice Souk, and Dubai Creek waterfront trading area",
      "A dense concentration of DED-licensed trading and import/export businesses",
      "We serve clients here remotely or by appointment from our Al Qusais office",
    ],
    faqs: [
      {
        q: "Do you have an office in Deira?",
        a: "No — our office is in Al Qusais. We support Deira-based clients remotely or by appointment, and coordinate submission through the appropriate typing center or government channel.",
      },
      {
        q: "Can you help with a trading license for a Deira-based business?",
        a: "Yes — we help prepare and organize the documentation for mainland trade licenses, including businesses operating in and around Deira, though the license itself is issued by Dubai's DED.",
      },
      {
        q: "Is Deira a good location for a trading company?",
        a: "Deira has a long-established trading and import/export ecosystem, which is why many trading businesses choose to be based there, though the right location depends on your specific activity and target market.",
      },
      {
        q: "Is Deira known for anything besides trading?",
        a: "Deira is home to Dubai's historic Gold Souk, Spice Souk, and the Dubai Creek waterfront — alongside its long-standing trading and import/export business community.",
      },
      {
        q: "What type of trade license do Deira businesses typically need?",
        a: "Most Deira-based businesses operate under a Dubai mainland trade license issued by Dubai's Department of Economic Development (DED), reflecting the area's DED-licensed trading and import/export focus.",
      },
    ],
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    fullLabel: "Business Bay, Dubai",
    isOffice: false,
    metaTitle: "Business Setup & Visa Documentation in Business Bay",
    metaDescription:
      "Documentation and consultancy support for company formation, government approvals, and visa applications in Business Bay, Dubai — from our Al Qusais office.",
    heroIntro:
      "Business Bay is a modern commercial district along the Dubai Water Canal, close to Downtown Dubai and DIFC, home to a large number of corporate towers and business centers. We support company formation, government approvals, legal documentation, and visa applications for businesses and professionals based in Business Bay, coordinated from our Al Qusais office — remotely or by appointment.",
    context: [
      "A modern business district along the Dubai Water Canal",
      "Close to Downtown Dubai and the Dubai International Financial Centre (DIFC)",
      "Home to a large concentration of corporate towers, business centers, and flexi-desk providers",
      "We serve clients here remotely or by appointment from our Al Qusais office",
    ],
    faqs: [
      {
        q: "Do you have an office in Business Bay?",
        a: "No — our office is in Al Qusais. We support Business Bay-based clients remotely or by appointment.",
      },
      {
        q: "Can you help set up a company with a Business Bay office address?",
        a: "Yes — we help prepare documentation for mainland or free zone company formation regardless of where your office or flexi-desk is located, including Business Bay.",
      },
      {
        q: "Is Business Bay mainland or free zone?",
        a: "Business Bay is part of Dubai mainland, licensed through Dubai's DED — it isn't a free zone itself, though it's close to DIFC, which operates under its own framework.",
      },
      {
        q: "Is Business Bay close to DIFC?",
        a: "Yes — Business Bay sits directly next to the Dubai International Financial Centre (DIFC), which is part of why many corporate and financial services firms choose the area.",
      },
      {
        q: "Are flexi-desk or shared office options available in Business Bay?",
        a: "Yes — Business Bay has a large number of business centers and flexi-desk providers, which can support the office requirement for certain trade licenses.",
      },
    ],
  },
  {
    slug: "bur-dubai",
    name: "Bur Dubai",
    fullLabel: "Bur Dubai, Dubai",
    isOffice: false,
    metaTitle: "Business Setup & Visa Documentation in Bur Dubai",
    metaDescription:
      "Documentation and consultancy support for company formation, legal documentation, and visa applications in Bur Dubai — from our Al Qusais office.",
    heroIntro:
      "Bur Dubai is a historic district on the western bank of Dubai Creek, home to Dubai Courts, a dense residential population, and a large number of small and medium businesses. We support company formation, legal documentation, and visa applications for businesses and residents in Bur Dubai, coordinated from our Al Qusais office — remotely or by appointment.",
    context: [
      "A historic district on the western bank of Dubai Creek",
      "Home to Dubai Courts and a dense, established residential community",
      "A large number of small and medium trading and service businesses",
      "We serve clients here remotely or by appointment from our Al Qusais office",
    ],
    faqs: [
      {
        q: "Do you have an office in Bur Dubai?",
        a: "No — our office is in Al Qusais. We support Bur Dubai-based clients remotely or by appointment.",
      },
      {
        q: "Can you help with visa documentation for a family living in Bur Dubai?",
        a: "Yes — we support family and dependent visa documentation for residents across Dubai, including Bur Dubai, coordinated through the appropriate GDRFA or ICP channel.",
      },
      {
        q: "Is Bur Dubai close to Dubai Courts and government offices?",
        a: "Yes — Bur Dubai is home to Dubai Courts and is within reach of several government service centers, which is part of why many long-established businesses and residents are based there.",
      },
      {
        q: "Is Bur Dubai mainly residential or commercial?",
        a: "Both — Bur Dubai combines a dense, long-established residential community with a large number of small and medium trading and service businesses.",
      },
      {
        q: "Why is Bur Dubai relevant for legal documentation needs?",
        a: "Bur Dubai is home to Dubai Courts, which is why many legal and documentation-related matters for UAE residents are connected to this area.",
      },
    ],
  },
  {
    slug: "jlt",
    name: "JLT",
    fullLabel: "Jumeirah Lakes Towers (JLT), Dubai",
    isOffice: false,
    metaTitle: "Business Setup & Visa Documentation in JLT, Dubai",
    metaDescription:
      "Documentation and consultancy support for company formation, DMCC free zone setup, and visa applications in JLT, Dubai — from our Al Qusais office.",
    heroIntro:
      "Jumeirah Lakes Towers (JLT) is a cluster of high-rise towers adjacent to the DMCC free zone, home to a large number of free zone companies and their employees. We support company formation, DMCC-related documentation, and visa applications for businesses and residents in JLT, coordinated from our Al Qusais office — remotely or by appointment.",
    context: [
      "A cluster of high-rise residential and commercial towers around a series of lakes",
      "Directly adjacent to the DMCC free zone, one of the UAE's largest free zones",
      "Home to a large number of free zone companies and their employees",
      "We serve clients here remotely or by appointment from our Al Qusais office",
    ],
    faqs: [
      {
        q: "Do you have an office in JLT?",
        a: "No — our office is in Al Qusais. We support JLT and DMCC-based clients remotely or by appointment, and coordinate submission through an authorized typing center convenient to you.",
      },
      {
        q: "Can you help with DMCC company formation?",
        a: "Yes — we help prepare and organize documentation for DMCC free zone company formation and related visa applications, though the license and visas are issued by DMCC and GDRFA/ICP respectively.",
      },
      {
        q: "Is there a typing center near JLT for visa transactions?",
        a: "Yes — several authorized typing centers operate near JLT and DMCC. See our dedicated guide on visa documentation and typing center support near JLT for more detail.",
      },
      {
        q: "Do I need a DMCC license to be based in JLT?",
        a: "No — while JLT is directly adjacent to and closely associated with DMCC, other free zones and mainland structures can also operate from the area.",
      },
      {
        q: "Is JLT mainly residential or commercial?",
        a: "Both — JLT is a mixed cluster of residential and commercial towers, with a large number of DMCC free zone companies and their employees based there.",
      },
    ],
  },
];
