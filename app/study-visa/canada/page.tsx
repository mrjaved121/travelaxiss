import type { Metadata } from "next";
import StudyVisaCanadaPage from "@/components/pages/StudyVisaCanadaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Study Visa from Pakistan – Fees & Requirements",
  description:
    "Canada study visa from Pakistan: IRCC fees (CAD 150 + CAD 85 biometrics), Letter of Acceptance, proof of funds, documents, and how to apply online.",
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
    description: "Canada study permit fees, requirements and how to apply online from Pakistan.",
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
        ]}
      />
      <StudyVisaCanadaPage />
    </>
  );
}
