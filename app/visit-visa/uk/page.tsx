import type { Metadata } from "next";
import VisitVisaUkPage from "@/components/pages/VisitVisaUkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UK Visit Visa from Pakistan – Requirements & Apply",
  description:
    "UK Standard Visitor visa requirements and application support for applicants from Pakistan — documents, process, and how Travelaxis can help.",
  keywords: [
    "uk visit visa from pakistan",
    "uk standard visitor visa",
    "uk visa requirements pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/uk/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/uk/`,
    title: "UK Visit Visa from Pakistan | Travelaxis",
    description: "UK Standard Visitor visa requirements and application support for applicants from Pakistan.",
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
            { name: "Europe", path: "/visit-visa/europe" },
            { name: "UK Visit Visa", path: "/visit-visa/uk" },
          ]),
          serviceJsonLd({
            name: "UK Visit Visa from Pakistan",
            description: "Requirements guidance and application support for the UK Standard Visitor visa for applicants in Pakistan.",
            path: "/visit-visa/uk",
            serviceType: "Visit visa application assistance",
          }),
        ]}
      />
      <VisitVisaUkPage />
    </>
  );
}
