import type { Metadata } from "next";
import DestinationsPage from "@/components/pages/DestinationsPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Destinations | Travelaxis",
  description:
    "Explore visa and immigration pathways for the UAE, USA, Canada, UK, Australia, and Germany with Travelaxis.",
  alternates: {
    canonical: `${SITE_URL}/destinations/`,
  },
  openGraph: {
    title: "Destinations | Travelaxis",
    description:
      "Explore visa and immigration pathways for the UAE, USA, Canada, UK, Australia, and Germany with Travelaxis.",
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
