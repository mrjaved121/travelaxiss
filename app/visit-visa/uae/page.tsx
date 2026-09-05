import type { Metadata } from "next";
import VisitVisaUaePage from "@/components/pages/VisitVisaUaePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visit Visa from Pakistan – Requirements & Apply",
  description:
    "UAE visit visa durations, sponsor routes, and document requirements for applicants from Pakistan — plus how Travelaxis can help.",
  keywords: [
    "uae visit visa from pakistan",
    "dubai visit visa from pakistan",
    "uae visa requirements pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/uae/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/uae/`,
    title: "UAE Visit Visa from Pakistan | Travelaxis",
    description: "UAE visit visa durations, sponsor routes, and document requirements for applicants from Pakistan.",
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
            { name: "Middle East", path: "/visit-visa/middle-east" },
            { name: "UAE Visit Visa", path: "/visit-visa/uae" },
          ]),
          serviceJsonLd({
            name: "UAE Visit Visa from Pakistan",
            description: "Requirements guidance and application support for the UAE visit visa for applicants in Pakistan.",
            path: "/visit-visa/uae",
            serviceType: "Visit visa application assistance",
          }),
          pakistanOfficeJsonLd,
        ]}
      />
      <VisitVisaUaePage />
    </>
  );
}
