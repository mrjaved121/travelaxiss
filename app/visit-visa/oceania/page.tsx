import type { Metadata } from "next";
import VisitVisaOceaniaPage from "@/components/pages/VisitVisaOceaniaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Oceania Visit Visas – Australia",
  description:
    "Visit visa documentation for Australia, submitted through the Department of Home Affairs.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/oceania/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/oceania/`,
    title: "Oceania Visit Visas | Travelaxis",
    description: "Visit visa documentation for Australia.",
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
          ]),
        ]}
      />
      <VisitVisaOceaniaPage />
    </>
  );
}
