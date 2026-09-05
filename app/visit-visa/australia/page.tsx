import type { Metadata } from "next";
import VisitVisaAustraliaPage from "@/components/pages/VisitVisaAustraliaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Australia Visitor Visa from Pakistan – Requirements",
  description:
    "Australia Visitor Visa (Subclass 600) requirements and application support for applicants from Pakistan — documents, process, and how Travelaxis can help.",
  keywords: [
    "australia visit visa from pakistan",
    "subclass 600 pakistan",
    "australia visitor visa requirements",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/australia/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/australia/`,
    title: "Australia Visitor Visa from Pakistan | Travelaxis",
    description: "Australia Visitor Visa (Subclass 600) requirements and application support for applicants from Pakistan.",
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
            { name: "Oceania", path: "/visit-visa/oceania" },
            { name: "Australia Visitor Visa", path: "/visit-visa/australia" },
          ]),
          serviceJsonLd({
            name: "Australia Visitor Visa from Pakistan",
            description: "Requirements guidance and application support for the Australia Visitor Visa (Subclass 600) for applicants in Pakistan.",
            path: "/visit-visa/australia",
            serviceType: "Visit visa application assistance",
          }),
        ]}
      />
      <VisitVisaAustraliaPage />
    </>
  );
}
