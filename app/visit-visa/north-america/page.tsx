import type { Metadata } from "next";
import VisitVisaNorthAmericaPage from "@/components/pages/VisitVisaNorthAmericaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "North America Visit Visas – USA & Canada",
  description:
    "Visit visa documentation for the USA, plus an information guide to Canada's visitor visa and official IRCC fees.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/north-america/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/north-america/`,
    title: "North America Visit Visas | Travelaxis",
    description: "Visit visa documentation for the USA, and a Canada visitor visa information guide.",
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
