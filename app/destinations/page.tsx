import type { Metadata } from "next";
import DestinationsPage from "@/components/pages/DestinationsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Explore Visa Destinations by Region",
  description:
    "Find visa application support by region and travel purpose — visit visa, study visa, and UAE residency destinations.",
  alternates: {
    canonical: `${SITE_URL}/destinations/`,
  },
  openGraph: {
    title: "Explore Visa Destinations | Travelaxis",
    description:
      "Find visa application support by region and travel purpose.",
    url: `${SITE_URL}/destinations/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Destinations", path: "/destinations" }]),
          professionalServiceJsonLd,
        ]}
      />
      <DestinationsPage />
    </>
  );
}
