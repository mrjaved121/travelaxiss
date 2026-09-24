import type { Metadata } from "next";
import StudyVisaGermanyPage from "@/components/pages/StudyVisaGermanyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Germany Study Visa from Pakistan – Requirements & Apply",
  description:
    "Germany Student/Ausbildung visa requirements and application support for applicants from Pakistan — admission letter, documents, process, and how Travelaxis can help.",
  keywords: [
    "germany study visa from pakistan",
    "germany student visa requirements",
    "ausbildung visa pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/study-visa/germany/`,
  },
  openGraph: {
    url: `${SITE_URL}/study-visa/germany/`,
    title: "Germany Study Visa from Pakistan | Travelaxis",
    description: "Germany Student/Ausbildung visa requirements and application support for applicants from Pakistan.",
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
            { name: "Germany Study Visa", path: "/study-visa/germany" },
          ]),
          serviceJsonLd({
            name: "Germany Study Visa from Pakistan",
            description: "Requirements guidance and application support for the Germany Student/Ausbildung visa for applicants in Pakistan.",
            path: "/study-visa/germany",
            serviceType: "Study visa application assistance",
          }),
        ]}
      />
      <StudyVisaGermanyPage />
    </>
  );
}
