export type VisitVisaDestination = {
  slug: string;
  name: string;
  region: "Europe" | "Asia" | "Middle East" | "Oceania" | "Africa";
  description: string;
  officialLabel: string;
  officialUrl?: string;
};

export const newVisitVisaDestinations: VisitVisaDestination[] = [
  { slug: "austria", name: "Austria", region: "Europe", description: "Visit-visa application support for travel to Austria.", officialLabel: "Austrian authorities" },
  { slug: "belgium", name: "Belgium", region: "Europe", description: "Visit-visa application support for travel to Belgium.", officialLabel: "Belgian authorities" },
  { slug: "bulgaria", name: "Bulgaria", region: "Europe", description: "Visit-visa application support for travel to Bulgaria.", officialLabel: "Bulgarian authorities" },
  { slug: "croatia", name: "Croatia", region: "Europe", description: "Visit-visa application support for travel to Croatia.", officialLabel: "Croatian authorities" },
  { slug: "czechia", name: "Czechia", region: "Europe", description: "Visit-visa application support for travel to Czechia.", officialLabel: "Czech authorities" },
  { slug: "denmark", name: "Denmark", region: "Europe", description: "Visit-visa application support for travel to Denmark.", officialLabel: "Danish authorities" },
  { slug: "estonia", name: "Estonia", region: "Europe", description: "Visit-visa application support for travel to Estonia.", officialLabel: "Estonian authorities" },
  { slug: "finland", name: "Finland", region: "Europe", description: "Visit-visa application support for travel to Finland.", officialLabel: "Finnish authorities" },
  { slug: "france", name: "France", region: "Europe", description: "Visit-visa application support for travel to France.", officialLabel: "French authorities" },
  { slug: "germany", name: "Germany", region: "Europe", description: "Visit-visa application support for travel to Germany.", officialLabel: "German authorities" },
  { slug: "greece", name: "Greece", region: "Europe", description: "Visit-visa application support for travel to Greece.", officialLabel: "Greek authorities" },
  { slug: "hungary", name: "Hungary", region: "Europe", description: "Visit-visa application support for travel to Hungary.", officialLabel: "Hungarian authorities" },
  { slug: "iceland", name: "Iceland", region: "Europe", description: "Visit-visa application support for travel to Iceland.", officialLabel: "Icelandic authorities" },
  { slug: "italy", name: "Italy", region: "Europe", description: "Visit-visa application support for travel to Italy.", officialLabel: "Italian authorities" },
  { slug: "latvia", name: "Latvia", region: "Europe", description: "Visit-visa application support for travel to Latvia.", officialLabel: "Latvian authorities" },
  { slug: "liechtenstein", name: "Liechtenstein", region: "Europe", description: "Visit-visa application support for travel to Liechtenstein.", officialLabel: "Liechtenstein authorities" },
  { slug: "lithuania", name: "Lithuania", region: "Europe", description: "Visit-visa application support for travel to Lithuania.", officialLabel: "Lithuanian authorities" },
  { slug: "luxembourg", name: "Luxembourg", region: "Europe", description: "Visit-visa application support for travel to Luxembourg.", officialLabel: "Luxembourg authorities" },
  { slug: "malta", name: "Malta", region: "Europe", description: "Visit-visa application support for travel to Malta.", officialLabel: "Maltese authorities" },
  { slug: "netherlands", name: "Netherlands", region: "Europe", description: "Visit-visa application support for travel to the Netherlands.", officialLabel: "Dutch authorities" },
  { slug: "norway", name: "Norway", region: "Europe", description: "Visit-visa application support for travel to Norway.", officialLabel: "Norwegian authorities" },
  { slug: "poland", name: "Poland", region: "Europe", description: "Visit-visa application support for travel to Poland.", officialLabel: "Polish authorities" },
  { slug: "portugal", name: "Portugal", region: "Europe", description: "Visit-visa application support for travel to Portugal.", officialLabel: "Portuguese authorities" },
  { slug: "romania", name: "Romania", region: "Europe", description: "Visit-visa application support for travel to Romania.", officialLabel: "Romanian authorities" },
  { slug: "slovakia", name: "Slovakia", region: "Europe", description: "Visit-visa application support for travel to Slovakia.", officialLabel: "Slovak authorities" },
  { slug: "slovenia", name: "Slovenia", region: "Europe", description: "Visit-visa application support for travel to Slovenia.", officialLabel: "Slovenian authorities" },
  { slug: "spain", name: "Spain", region: "Europe", description: "Visit-visa application support for travel to Spain.", officialLabel: "Spanish authorities" },
  { slug: "sweden", name: "Sweden", region: "Europe", description: "Visit-visa application support for travel to Sweden.", officialLabel: "Swedish authorities" },
  { slug: "switzerland", name: "Switzerland", region: "Europe", description: "Visit-visa application support for travel to Switzerland.", officialLabel: "Swiss authorities" },
  { slug: "ireland", name: "Ireland", region: "Europe", description: "Visit-visa application support for travel to Ireland.", officialLabel: "Irish authorities" },
  { slug: "china", name: "China", region: "Asia", description: "Visit-visa application support for travel to China.", officialLabel: "Chinese authorities" },
  { slug: "japan", name: "Japan", region: "Asia", description: "Visit-visa application support for travel to Japan.", officialLabel: "Japanese authorities" },
  { slug: "hong-kong", name: "Hong Kong", region: "Asia", description: "Visit-visa application support for travel to Hong Kong.", officialLabel: "Hong Kong authorities" },
  { slug: "vietnam", name: "Vietnam", region: "Asia", description: "Visit-visa application support for travel to Vietnam.", officialLabel: "Vietnamese authorities" },
  { slug: "turkey", name: "Turkey", region: "Asia", description: "Visit-visa application support for travel to Turkey.", officialLabel: "Turkish authorities" },
  { slug: "south-korea", name: "South Korea", region: "Asia", description: "Visit-visa application support for travel to South Korea.", officialLabel: "South Korean authorities" },
  { slug: "cyprus", name: "Cyprus", region: "Asia", description: "Visit-visa application support for travel to Cyprus.", officialLabel: "Cypriot authorities" },
  { slug: "malaysia", name: "Malaysia", region: "Asia", description: "Visit-visa application support for travel to Malaysia.", officialLabel: "Malaysian authorities" },
  { slug: "saudi-arabia", name: "Saudi Arabia", region: "Middle East", description: "Visit-visa application support for travel to Saudi Arabia.", officialLabel: "Saudi authorities" },
  { slug: "qatar", name: "Qatar", region: "Middle East", description: "Visit-visa application support for travel to Qatar.", officialLabel: "Qatari authorities" },
  { slug: "new-zealand", name: "New Zealand", region: "Oceania", description: "Visit-visa application support for travel to New Zealand.", officialLabel: "New Zealand authorities" },
  { slug: "south-africa", name: "South Africa", region: "Africa", description: "Visit-visa application support for travel to South Africa.", officialLabel: "South African authorities" },
  { slug: "morocco", name: "Morocco", region: "Africa", description: "Visit-visa application support for travel to Morocco.", officialLabel: "Moroccan authorities" },
  { slug: "philippines", name: "Philippines", region: "Asia", description: "Visit-visa application support for travel to the Philippines.", officialLabel: "Philippine authorities" },
];

export function getNewVisitVisaDestination(slug: string) {
  return newVisitVisaDestinations.find((destination) => destination.slug === slug);
}
