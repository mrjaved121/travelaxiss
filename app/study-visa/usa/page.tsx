import type { Metadata } from "next";
import StudyVisaUsaPage from "@/components/pages/StudyVisaUsaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "USA F1 Student Visa from Pakistan – Requirements & Apply",
  description:
    "USA F1 Student Visa requirements and application support for applicants from Pakistan — I-20, SEVIS, documents, and how Travelaxis can help.",
  keywords: [
    "usa student visa from pakistan",
    "f1 visa from pakistan",
    "us study visa requirements",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/usa/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/usa/`,
    title: "USA F1 Student Visa from Pakistan | Travelaxis",
    description: "USA F1 Student Visa requirements and application support for applicants from Pakistan.",
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
            { name: "USA Study Visa", path: "/study-visa/usa" },
          ]),
          serviceJsonLd({
            name: "USA F1 Student Visa from Pakistan",
            description: "Requirements guidance and application support for the USA F1 Student Visa for applicants in Pakistan.",
            path: "/study-visa/usa",
            serviceType: "Study visa application assistance",
          }),
        ]}
      />
      <StudyVisaUsaPage />
    </>
  );
}
