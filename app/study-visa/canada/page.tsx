import type { Metadata } from "next";
import StudyVisaCanadaPage from "@/components/pages/StudyVisaCanadaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Study Permit from Pakistan – Requirements & Apply",
  description:
    "Canada Study Permit requirements and application support for applicants from Pakistan — Letter of Acceptance, IRCC, documents, and how Travelaxis can help.",
  keywords: [
    "canada study visa from pakistan",
    "canada study permit requirements",
    "ircc study permit pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/canada/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/canada/`,
    title: "Canada Study Permit from Pakistan | Travelaxis",
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
