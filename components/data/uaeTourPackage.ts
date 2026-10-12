export const tourPackageIncludes: string[] = [
  "UAE visit visa documentation and application support",
  "Airport pick-up and drop-off",
  "4-star hotel stay, 7 days / 6 nights",
  "Help arranging your day-trips and attraction tickets",
];

export const attractionOptions: { name: string; description: string; image: string }[] = [
  { name: "Burj Khalifa", description: "At The Top observation deck, the world's tallest building.", image: "/images/burj-khalifa.webp" },
  { name: "Desert Safari", description: "Dune bashing, a BBQ dinner and entertainment under the stars.", image: "/images/desert-safari.webp" },
  { name: "Dubai Mall", description: "Shopping, the Dubai Aquarium and the Dubai Fountain show.", image: "/images/dubai-mall.webp" },
  { name: "Ferrari World", description: "Abu Dhabi's indoor theme park, home to the world's fastest roller coaster.", image: "/images/ferrari-world.webp" },
  { name: "Atlantis, The Palm", description: "Aquaventure Waterpark and The Lost Chambers Aquarium.", image: "/images/atlantis-palm.webp" },
];

export type TourPackageTier = {
  name: string;
  tagline: string;
  includes: string[];
  notIncluded: string[];
};

/** The two package tiers. Flights are deliberately excluded from both. */
export const tourPackageTiers: TourPackageTier[] = [
  {
    name: "Standard Package",
    tagline: "Visa + Hotel + Transfers",
    includes: [
      "UAE visit visa documentation and application support",
      "4-star hotel, 7 days / 6 nights",
      "Airport pick-up and drop-off",
      "Tours and attractions can be added to your quote",
    ],
    notIncluded: ["Flights", "Tours and attraction tickets", "Travel insurance", "Meals and personal expenses"],
  },
  {
    name: "Gold Package",
    tagline: "Visa + Hotel + Transfers + Tours",
    includes: [
      "Everything in the Standard Package",
      "Dubai City Tour",
      "Desert Safari with BBQ dinner",
      "Abu Dhabi City Tour with Sheikh Zayed Grand Mosque",
      "Dhow Cruise dinner",
      "Burj Khalifa observation deck ticket",
      "Hotel pick-up for each tour",
    ],
    notIncluded: ["Flights", "Travel insurance", "Meals other than tour dinners", "Personal expenses"],
  },
];

/**
 * Sample 7-day plan shown on the page. It's a starting point the customer can
 * change, not a fixed list of what every quote includes.
 */
export const sampleItinerary: { day: string; title: string; description: string }[] = [
  {
    day: "Day 1",
    title: "Arrival & Hotel Check-In",
    description: "Airport pick-up on arrival and transfer to your 4-star hotel. The rest of the day is yours to settle in.",
  },
  {
    day: "Day 2",
    title: "Dubai City Tour",
    description: "Old and new Dubai in one day: the Al Fahidi Historical District, an abra ride across Dubai Creek, the Deira gold and spice souks, and photo stops along Jumeirah.",
  },
  {
    day: "Day 3",
    title: "Desert Safari with BBQ Dinner",
    description: "Afternoon pick-up for dune bashing, camel riding and sandboarding, followed by a BBQ dinner and live shows at a desert camp.",
  },
  {
    day: "Day 4",
    title: "Abu Dhabi City Tour",
    description: "A day trip to the capital: Sheikh Zayed Grand Mosque, Heritage Village and the Corniche. Ferrari World can be added as an upgrade.",
  },
  {
    day: "Day 5",
    title: "Burj Khalifa, Dubai Mall & Dhow Cruise",
    description: "The Burj Khalifa observation deck and Dubai Mall by day, then a dinner cruise on a traditional dhow in the evening.",
  },
  {
    day: "Day 6",
    title: "Shopping & Global Village",
    description: "A free day for shopping at Dragon Mart or the malls, then Global Village in the evening (open seasonally, typically October to May).",
  },
  {
    day: "Day 7",
    title: "Check-Out & Departure",
    description: "Hotel check-out and transfer to the airport for your flight home.",
  },
];

/** Options a customer can tick in the quote form. */
export const formAttractionChoices: string[] = [
  "Dubai City Tour",
  "Burj Khalifa",
  "Dubai Mall",
  "Desert Safari",
  "Dhow Cruise",
  "Abu Dhabi & Grand Mosque",
  "Global Village",
  "Ferrari World",
  "Atlantis, The Palm",
];

/**
 * A broader, non-exhaustive sample of real UAE attractions and experiences,
 * shown only as names (no photos, no prices) to demonstrate variety without
 * implying all of them fit in a 7-day trip. Customers pick what they want;
 * we don't quote per-attraction pricing here or claim a booking partnership.
 */
export const moreExperienceGroups: { category: string; items: string[] }[] = [
  {
    category: "Landmarks & Culture",
    items: ["Sheikh Zayed Grand Mosque, Abu Dhabi", "Global Village", "Dubai Frame", "Al Fahidi Historical District", "Deira Gold & Spice Souks", "Dragon Mart", "The Palm Monorail", "Al Shindagha Museum", "Qasr Al Watan, Abu Dhabi"],
  },
  {
    category: "Theme Parks & Waterparks",
    items: ["IMG Worlds of Adventure", "Ski Dubai", "The Green Planet", "Warner Bros World Abu Dhabi", "Yas Waterworld", "Dubai Aquarium & Underwater Zoo"],
  },
  {
    category: "Desert & Adventure",
    items: ["Premium Desert Safari", "Desert Buggy Driving", "Overnight Desert Safari & Hot Air Balloon", "Skydive Dubai", "Dubai Helicopter Tour"],
  },
  {
    category: "Boats, Yachts & Water",
    items: ["Dhow Cruise Dinner (Marina or Creek)", "Dubai Marina Yacht Tour", "Jet Ski Dubai", "Kayaking in Dubai", "Parasailing"],
  },
  {
    category: "Family & Kids",
    items: ["Dubai Safari Park", "KidZania Dubai Mall", "Butterfly Garden", "Miracle Garden", "Dubai Dolphinarium"],
  },
];

export const tourPackageFaqs: { q: string; a: string }[] = [
  {
    q: "What exactly is included in the UAE tour package?",
    a: "There are two options. The Standard Package covers visit visa documentation, a 4-star hotel for 7 days / 6 nights, and airport pick-up and drop-off. The Gold Package adds a Dubai City Tour, Desert Safari with BBQ dinner, an Abu Dhabi tour with Sheikh Zayed Grand Mosque, a Dhow Cruise dinner and a Burj Khalifa ticket. The exact hotel and itinerary are confirmed for your dates once you message us.",
  },
  {
    q: "Can I customize the itinerary and attractions?",
    a: "Yes. The day-by-day plan on this page is a starting point. Swap days, add Ferrari World or Atlantis, or drop anything you don't want, and we'll rebuild the itinerary around your choices, for individuals, couples, families or groups.",
  },
  {
    q: "How much does the package cost?",
    a: "Cost depends on your travel dates, group size, hotel category and which attractions you include, so we don't quote a fixed price here. Message us on WhatsApp with your travel plan and we'll confirm a quote for your exact trip.",
  },
  {
    q: "Are flights included in the package?",
    a: "No, neither package includes flights. They cover your visit visa documentation, airport pick-up and drop-off, a 4-star hotel stay and, with Gold, your tours. You book your own flights, so you're free to choose the airline, departure city and dates that suit you.",
  },
  {
    q: "Do I need a visit visa to travel to the UAE?",
    a: "Most nationalities need a UAE visit visa arranged before travel, through a sponsor such as a tour operator, hotel, airline or UAE resident. We handle the documentation side of this as part of the package.",
  },
  {
    q: "Can Travelaxis guarantee my visa will be approved?",
    a: "No consultancy can guarantee approval — the decision rests with UAE immigration authorities. We help you prepare a complete, correctly organized application, which is the biggest factor within your control.",
  },
  {
    q: "Is this available for private groups and families, not just solo travelers?",
    a: "Yes. The package works for solo travelers, couples, families and private groups. Let us know your group size and we'll tailor the hotel rooms, transport and itinerary accordingly.",
  },
];
