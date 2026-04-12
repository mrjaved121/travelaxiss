import type { Metadata } from "next";
import BusinessSupportPage from "@/components/pages/BusinessSupportPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title:
    "Business Support Services UAE – Trademark, ISO, Banking & Compliance",
  description:
    "Get complete business support services in UAE. We help with trademark registration, ISO certification, bank account opening, and compliance.",
  keywords: [
    "business support services UAE",
    "trademark registration UAE",
    "ISO certification UAE",
    "bank account opening UAE",
    "business compliance UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/business-support`,
  },
  openGraph: {
    url: `${SITE_URL}/services/business-support`,
    title:
      "Business Support Services UAE – Trademark, ISO, Banking & Compliance",
    description:
      "Get complete business support services in UAE. We help with trademark registration, ISO certification, bank account opening, and compliance.",
  },
};

export default function Page() {
  return <BusinessSupportPage />;
}
