export type Emirate = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroIntro: string;
  context: string[];
  notableZones: string[];
  faqs: { q: string; a: string }[];
};

export const emirates: Emirate[] = [
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    metaTitle: "Business Setup & Visa Documentation in Abu Dhabi | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, government approvals, and visa applications in Abu Dhabi — coordinated remotely from our Al Qusais, Dubai office.",
    heroIntro:
      "Abu Dhabi is the UAE's capital and largest emirate by area, home to major free zones like ADGM (Abu Dhabi Global Market) and Masdar City, a strong government and energy sector presence, and Abu Dhabi's own Department of Economic Development for mainland licensing. We support company formation, government approvals, legal documentation, and visa applications for businesses and residents in Abu Dhabi, coordinated remotely from our Al Qusais office.",
    context: [
      "The UAE's capital emirate, home to federal government institutions and major state-linked companies",
      "ADGM (Abu Dhabi Global Market) is a leading financial free zone on Al Maryah Island",
      "Masdar City and KIZAD (Khalifa Industrial Zone) serve clean-tech, industrial, and logistics activities",
      "Abu Dhabi DED handles mainland company licensing separately from Dubai's DED",
    ],
    notableZones: ["ADGM", "Masdar City", "KIZAD", "twofour54"],
    faqs: [
      {
        q: "Do you have an office in Abu Dhabi?",
        a: "No — our office is in Al Qusais, Dubai. We support Abu Dhabi-based clients remotely, coordinating document preparation and submission through the appropriate Abu Dhabi authority or free zone.",
      },
      {
        q: "Is Abu Dhabi DED the same as Dubai DED?",
        a: "No — each emirate operates its own Department of Economic Development. A Dubai mainland license does not automatically extend to Abu Dhabi, and vice versa.",
      },
      {
        q: "Can you help with ADGM company formation?",
        a: "Yes — we help prepare and organize documentation for ADGM and other Abu Dhabi free zone applications, though the license itself is issued by the relevant free zone authority.",
      },
    ],
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    metaTitle: "Business Setup & Visa Documentation in Sharjah | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Sharjah — coordinated from our Al Qusais, Dubai office, right at the Sharjah border.",
    heroIntro:
      "Sharjah directly borders Al Qusais, where our office is based, making it one of the emirates we support most conveniently. Known as the UAE's cultural capital, Sharjah offers generally lower-cost mainland and free zone licensing than Dubai — including SHAMS, SAIF Zone, and Hamriyah Free Zone — while remaining a short drive from central Dubai. We support company formation, trade licensing, and visa documentation for businesses and residents across Sharjah.",
    context: [
      "Directly borders Al Qusais, Dubai, where our office is located",
      "Home to SHAMS (Sharjah Media City), SAIF Zone, and Hamriyah Free Zone",
      "Generally lower licensing and office costs than equivalent Dubai packages",
      "Sharjah's own DED handles mainland licensing separately from Dubai's",
    ],
    notableZones: ["SHAMS", "SAIF Zone", "Hamriyah Free Zone"],
    faqs: [
      {
        q: "Do you have an office in Sharjah?",
        a: "No, but our Al Qusais office sits right on the Sharjah border, which means we're able to support Sharjah-based clients with in-person meetings by appointment as well as remotely.",
      },
      {
        q: "Is Sharjah cheaper than Dubai for company formation?",
        a: "Generally yes — Sharjah's free zones and mainland licensing tend to carry lower costs than equivalent Dubai packages, which is part of why many small and medium businesses choose it while staying close to Dubai's market.",
      },
      {
        q: "Can a Sharjah-licensed company trade in Dubai?",
        a: "Mainland companies can generally trade UAE-wide regardless of which emirate issued the license; free zone companies may have restrictions on direct mainland trading depending on the specific zone and activity.",
      },
    ],
  },
  {
    slug: "ajman",
    name: "Ajman",
    metaTitle: "Business Setup & Visa Documentation in Ajman | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Ajman — coordinated remotely from our Al Qusais, Dubai office.",
    heroIntro:
      "Ajman is the smallest UAE emirate by area, known for some of the most cost-effective company formation packages in the country through Ajman Free Zone (AFZA) and Ajman's mainland DED. It's a common choice for budget-conscious founders and small trading businesses who want a UAE presence without Dubai-level costs. We support company formation, trade licensing, and visa documentation for businesses and residents in Ajman.",
    context: [
      "The smallest UAE emirate by area, roughly 30–40 minutes from central Dubai",
      "Ajman Free Zone (AFZA) is known for low-cost, bundled setup packages",
      "Popular with solo founders, e-commerce sellers, and small trading businesses",
      "Ajman's mainland DED operates independently of Dubai's and Sharjah's",
    ],
    notableZones: ["Ajman Free Zone (AFZA)"],
    faqs: [
      {
        q: "Do you have an office in Ajman?",
        a: "No — our office is in Al Qusais, Dubai. We support Ajman-based clients remotely, coordinating document preparation and submission with AFZA or Ajman's mainland DED.",
      },
      {
        q: "Is Ajman Free Zone good for a small e-commerce business?",
        a: "AFZA is commonly used by small e-commerce and trading businesses given its cost-effective packages, though it's worth confirming your specific activity and visa needs against current package terms before committing.",
      },
      {
        q: "How far is Ajman from Dubai for in-person visits?",
        a: "Ajman is roughly 30–40 minutes from central Dubai by road, making periodic in-person visits to government offices or banks manageable for most clients.",
      },
    ],
  },
  {
    slug: "ras-al-khaimah",
    name: "Ras Al Khaimah",
    metaTitle: "Business Setup & Visa Documentation in Ras Al Khaimah (RAK) | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Ras Al Khaimah — coordinated remotely from our Al Qusais, Dubai office.",
    heroIntro:
      "Ras Al Khaimah (RAK) is a growing industrial and manufacturing hub in the UAE's north, home to RAKEZ (Ras Al Khaimah Economic Zone), one of the region's larger cost-effective free zones. RAK has invested heavily in infrastructure and tourism alongside its industrial base, making it an increasingly popular option for founders comparing costs against Dubai and Sharjah. We support company formation, trade licensing, and visa documentation for businesses and residents in RAK — see our dedicated RAKEZ free zone guide for zone-specific detail.",
    context: [
      "A growing industrial, manufacturing, and increasingly tourism-focused emirate in the UAE's north",
      "Home to RAKEZ, one of the UAE's larger and more cost-effective free zones",
      "RAK's mainland DED operates independently, alongside RAKEZ's own free zone licensing",
      "Roughly 45–60 minutes from central Dubai by road",
    ],
    notableZones: ["RAKEZ (Ras Al Khaimah Economic Zone)"],
    faqs: [
      {
        q: "Do you have an office in Ras Al Khaimah?",
        a: "No — our office is in Al Qusais, Dubai. We support RAK-based clients remotely, coordinating document preparation and submission with RAKEZ or RAK's mainland DED.",
      },
      {
        q: "What's the difference between this page and your RAKEZ free zone guide?",
        a: "This page covers Ras Al Khaimah as a location generally, including mainland options; our dedicated RAKEZ guide focuses specifically on that free zone's packages, activities, and process.",
      },
      {
        q: "Is RAK good for industrial or manufacturing activities?",
        a: "Yes — RAK has invested significantly in industrial infrastructure, and RAKEZ specifically supports a wide range of industrial and manufacturing activities alongside standard trading and service licenses.",
      },
    ],
  },
  {
    slug: "fujairah",
    name: "Fujairah",
    metaTitle: "Business Setup & Visa Documentation in Fujairah | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Fujairah — coordinated remotely from our Al Qusais, Dubai office.",
    heroIntro:
      "Fujairah is the only UAE emirate located entirely on the east coast, facing the Gulf of Oman rather than the Arabian Gulf — a strategic position for shipping and logistics businesses wanting to avoid the Strait of Hormuz. Fujairah Free Zone and Fujairah's mainland DED both support company formation, and the emirate's port is a major regional bunkering and cargo hub. We support company formation, trade licensing, and visa documentation for businesses and residents in Fujairah.",
    context: [
      "The only UAE emirate located entirely on the Gulf of Oman (east) coast",
      "Home to Fujairah Free Zone and a major regional port used for shipping and bunkering",
      "Strategically relevant for logistics businesses avoiding the Strait of Hormuz shipping route",
      "Roughly 1.5–2 hours from central Dubai by road, across the Hajar Mountains",
    ],
    notableZones: ["Fujairah Free Zone"],
    faqs: [
      {
        q: "Do you have an office in Fujairah?",
        a: "No — our office is in Al Qusais, Dubai. We support Fujairah-based clients remotely, coordinating document preparation and submission with Fujairah Free Zone or the mainland DED.",
      },
      {
        q: "Why would a business choose Fujairah over Dubai or Sharjah?",
        a: "Fujairah's east-coast port access is the main draw for shipping, logistics, and bunkering businesses specifically; for most other activities, proximity to Dubai's larger market usually matters more.",
      },
      {
        q: "Is Fujairah far from Dubai for occasional in-person visits?",
        a: "It's roughly 1.5–2 hours by road, which is manageable for occasional visits but worth factoring in if your business needs frequent in-person government or banking appointments.",
      },
    ],
  },
  {
    slug: "umm-al-quwain",
    name: "Umm Al Quwain",
    metaTitle: "Business Setup & Visa Documentation in Umm Al Quwain (UAQ) | Travelaxis",
    metaDescription:
      "Documentation and consultancy support for company formation, trade licensing, and visa applications in Umm Al Quwain — coordinated remotely from our Al Qusais, Dubai office.",
    heroIntro:
      "Umm Al Quwain (UAQ) is one of the UAE's smallest and quietest emirates, known for the UAQ Free Trade Zone's especially low-cost company formation packages, popular with e-commerce sellers, freelancers, and small trading businesses on a tight budget. We support company formation, trade licensing, and visa documentation for businesses and residents in Umm Al Quwain.",
    context: [
      "One of the UAE's smallest and least densely populated emirates",
      "Home to the UAQ Free Trade Zone, known for low-cost, bundled setup packages",
      "Popular with e-commerce sellers, freelancers, and small trading businesses",
      "Roughly 45–60 minutes from central Dubai by road",
    ],
    notableZones: ["UAQ Free Trade Zone"],
    faqs: [
      {
        q: "Do you have an office in Umm Al Quwain?",
        a: "No — our office is in Al Qusais, Dubai. We support UAQ-based clients remotely, coordinating document preparation and submission with the UAQ Free Trade Zone or mainland DED.",
      },
      {
        q: "Is UAQ Free Trade Zone good for a solo e-commerce seller?",
        a: "It's a commonly chosen option for solo founders and small e-commerce sellers given its cost-effective packages, though it's worth confirming visa allocation and activity approval against your specific plans first.",
      },
      {
        q: "Can a UAQ-licensed company sell on Noon or Amazon UAE?",
        a: "Yes — a UAQ trade license can support e-commerce activity the same way any other emirate's license can, provided the registered activity covers online trading.",
      },
    ],
  },
];
