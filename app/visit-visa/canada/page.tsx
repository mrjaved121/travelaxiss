import type { Metadata } from "next";
import VisitVisaCanadaPage from "@/components/pages/VisitVisaCanadaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Visit Visa from Pakistan – Fee & Requirements",
  description:
    "Canada visit visa from Pakistan: the official IRCC fee (CAD 100 + CAD 85 biometrics), tourist visa requirements, documents, and how to apply online.",
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
    description: "The official IRCC visitor visa fee, requirements and how to apply online from Pakistan.",
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
        ]}
      />
      <VisitVisaCanadaPage />
    </>
  );
}
