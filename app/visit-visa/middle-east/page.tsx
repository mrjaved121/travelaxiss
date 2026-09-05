import type { Metadata } from "next";
import VisitVisaMiddleEastPage from "@/components/pages/VisitVisaMiddleEastPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Middle East Visit Visas – UAE & Saudi Arabia",
  description:
    "Visit visa documentation for the UAE and Saudi Arabia, submitted through official channels.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/middle-east/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/middle-east/`,
    title: "Middle East Visit Visas | Travelaxis",
    description: "Visit visa documentation for the UAE and Saudi Arabia.",
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
          ]),
        ]}
      />
      <VisitVisaMiddleEastPage />
    </>
  );
}
