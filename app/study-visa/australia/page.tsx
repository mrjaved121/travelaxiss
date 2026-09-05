import type { Metadata } from "next";
import StudyVisaAustraliaPage from "@/components/pages/StudyVisaAustraliaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Australia Student Visa from Pakistan – Requirements & Apply",
  description:
    "Australia Subclass 500 Student Visa requirements and application support for applicants from Pakistan — CoE, GTE, documents, and how Travelaxis can help.",
  keywords: [
    "australia student visa from pakistan",
    "subclass 500 visa requirements",
    "australia study visa pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/australia/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/australia/`,
    title: "Australia Student Visa from Pakistan | Travelaxis",
    description: "Australia Subclass 500 Student Visa requirements and application support for applicants from Pakistan.",
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
            { name: "Australia Study Visa", path: "/study-visa/australia" },
          ]),
          serviceJsonLd({
            name: "Australia Student Visa from Pakistan",
            description: "Requirements guidance and application support for the Australia Subclass 500 Student Visa for applicants in Pakistan.",
            path: "/study-visa/australia",
            serviceType: "Study visa application assistance",
          }),
        ]}
      />
      <StudyVisaAustraliaPage />
    </>
  );
}
