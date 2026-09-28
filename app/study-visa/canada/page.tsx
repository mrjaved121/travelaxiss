import type { Metadata } from "next";
import StudyVisaCanadaPage from "@/components/pages/StudyVisaCanadaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Study Visa from Pakistan – Fees & Requirements",
  description:
    "Canada study visa from Pakistan: IRCC fees (CAD 150 + CAD 85 biometrics), Letter of Acceptance, proof of funds, documents, and application support.",
  keywords: [
    "canada study visa from pakistan",
    "canada study visa price in pakistan",
    "canada study permit fee",
    "canada study permit requirements",
    "ircc study permit pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/canada/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/canada/`,
    title: "Canada Study Visa from Pakistan – Fees & Requirements | Travelaxis",
    description: "Canada Study Permit requirements and application support for applicants from Pakistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Study Visa Services", path: "/services/study-visa" },
            { name: "Canada Study Visa", path: "/study-visa/canada" },
          ]),
          serviceJsonLd({
            name: "Canada Study Permit from Pakistan",
            description: "Requirements guidance and application support for the Canada Study Permit for applicants in Pakistan.",
            path: "/study-visa/canada",
            serviceType: "Study visa application assistance",
          }),
        ]}
      />
      <StudyVisaCanadaPage />
    </>
  );
}
