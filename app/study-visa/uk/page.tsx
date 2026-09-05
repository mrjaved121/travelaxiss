import type { Metadata } from "next";
import StudyVisaUkPage from "@/components/pages/StudyVisaUkPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UK Study Visa from Pakistan – Requirements & Apply",
  description:
    "UK Student Visa requirements and application support for applicants from Pakistan — CAS, documents, process, and how Travelaxis can help.",
  keywords: [
    "uk study visa from pakistan",
    "uk student visa requirements",
    "uk cas visa pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/uk/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/uk/`,
    title: "UK Study Visa from Pakistan | Travelaxis",
    description: "UK Student Visa requirements and application support for applicants from Pakistan.",
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
            { name: "UK Study Visa", path: "/study-visa/uk" },
          ]),
          serviceJsonLd({
            name: "UK Study Visa from Pakistan",
            description: "Requirements guidance and application support for the UK Student Visa for applicants in Pakistan.",
            path: "/study-visa/uk",
            serviceType: "Study visa application assistance",
          }),
        ]}
      />
      <StudyVisaUkPage />
    </>
  );
}
