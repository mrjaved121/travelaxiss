import type { Metadata } from "next";
import VisitVisaNorthAmericaPage from "@/components/pages/VisitVisaNorthAmericaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "North America Visit Visas – USA & Canada",
  description:
    "Visit visa documentation for the USA and Canada, submitted through each country's own official process.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/north-america/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/north-america/`,
    title: "North America Visit Visas | Travelaxis",
    description: "Visit visa documentation for the USA and Canada.",
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
            { name: "North America", path: "/visit-visa/north-america" },
          ]),
        ]}
      />
      <VisitVisaNorthAmericaPage />
    </>
  );
}
