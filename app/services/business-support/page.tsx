import type { Metadata } from "next";
import BusinessSupportPage from "@/components/pages/BusinessSupportPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

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
    canonical: `${SITE_URL}/services/business-support/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/business-support/`,
    title:
      "Business Support Services UAE – Trademark, ISO, Banking & Compliance",
    description:
      "Get complete business support services in UAE. We help with trademark registration, ISO certification, bank account opening, and compliance.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: "Business Support", path: "/services/business-support" },
          ]),
          serviceJsonLd({
            name: "Business Support Services in UAE",
            description:
              "Trademark registration, ISO certification, corporate bank account opening, and compliance support for UAE businesses.",
            path: "/services/business-support",
            serviceType: "Business support and compliance services",
          }),
        ]}
      />
      <BusinessSupportPage />
    </>
  );
}
