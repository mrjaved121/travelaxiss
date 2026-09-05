import type { Metadata } from "next";
import VisitVisaUsaPage from "@/components/pages/VisitVisaUsaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "USA Visit Visa from Pakistan – Requirements & Apply",
  description:
    "US B1/B2 Visitor visa requirements and application support for applicants from Pakistan — DS-160, interview prep, and how Travelaxis can help.",
  keywords: [
    "usa visit visa from pakistan",
    "b1/b2 visitor visa pakistan",
    "us visa requirements pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/usa/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/usa/`,
    title: "USA Visit Visa from Pakistan | Travelaxis",
    description: "US B1/B2 Visitor visa requirements and application support for applicants from Pakistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Visit Visa Services", path: "/visit-visa" },
            { name: "North America", path: "/visit-visa/north-america" },
            { name: "USA Visit Visa", path: "/visit-visa/usa" },
          ]),
          serviceJsonLd({
            name: "USA Visit Visa from Pakistan",
            description: "Requirements guidance and application support for the US B1/B2 Visitor visa for applicants in Pakistan.",
            path: "/visit-visa/usa",
            serviceType: "Visit visa application assistance",
          }),
        ]}
      />
      <VisitVisaUsaPage />
    </>
  );
}
