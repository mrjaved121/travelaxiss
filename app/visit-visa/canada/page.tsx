import type { Metadata } from "next";
import VisitVisaCanadaPage from "@/components/pages/VisitVisaCanadaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Visit Visa from Pakistan – Fee & Requirements",
  description:
    "Canada visit visa from Pakistan: the official IRCC fee (CAD 100 + CAD 85 biometrics), tourist visa requirements, documents, and application support.",
  keywords: [
    "canada visit visa from pakistan",
    "canada visit visa fee from pakistan",
    "canada tourist visa requirements for pakistan",
    "canada visitor visa requirements",
    "canada trv pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/canada/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/canada/`,
    title: "Canada Visit Visa from Pakistan – Fee & Requirements | Travelaxis",
    description: "The official IRCC visitor visa fee, requirements and application support for applicants from Pakistan.",
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
            { name: "Canada Visitor Visa", path: "/visit-visa/canada" },
          ]),
          serviceJsonLd({
            name: "Canada Visitor Visa from Pakistan",
            description: "Requirements guidance and application support for the Canada Visitor Visa for applicants in Pakistan.",
            path: "/visit-visa/canada",
            serviceType: "Visit visa application assistance",
          }),
        ]}
      />
      <VisitVisaCanadaPage />
    </>
  );
}
