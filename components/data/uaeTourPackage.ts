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

/**
 * A broader, non-exhaustive sample of real UAE attractions and experiences,
 * shown only as names (no photos, no prices) to demonstrate variety without
 * implying all of them fit in a 7-day trip. Customers pick what they want;
 * we don't quote per-attraction pricing here or claim a booking partnership.
 */
export const moreExperienceGroups: { category: string; items: string[] }[] = [
  {
    category: "Landmarks & Culture",
    items: ["The Palm Monorail", "Dubai Frame", "Al Shindagha Museum", "Global Village", "Qasr Al Watan, Abu Dhabi", "Old Dubai Walking Tour"],
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
    a: "Visit visa documentation support, airport pick-up and drop-off, a 4-star hotel stay for 7 days, and help arranging the attractions and day trips you want. The exact hotel, itinerary and attractions are customized to your dates and budget once you message us.",
  },
  {
    q: "Can I customize the itinerary and attractions?",
    a: "Yes. Tell us which attractions interest you — Burj Khalifa, Desert Safari, Dubai Mall, Ferrari World, Atlantis and others are all options — and we'll put together an itinerary around them, for individuals, couples, families or groups.",
  },
  {
    q: "How much does the package cost?",
    a: "Cost depends on your travel dates, group size, hotel category and which attractions you include, so we don't quote a fixed price here. Message us on WhatsApp with your travel plan and we'll confirm a quote for your exact trip.",
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
