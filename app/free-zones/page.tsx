import type { Metadata } from "next";
import FreeZonesHubPage from "@/components/pages/FreeZonesHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Free Zone Company Formation | IFZA, DMCC, Meydan & More | Travelaxis",
  description:
    "Documentation support for company formation across the UAE's major free zones — IFZA, DMCC, Meydan Free Zone, RAKEZ, SHAMS, and JAFZA.",
  alternates: {
    canonical: `${SITE_URL}/free-zones/`,
  },
  openGraph: {
    url: `${SITE_URL}/free-zones/`,
    title: "UAE Free Zone Company Formation | Travelaxis",
    description:
      "Documentation support for company formation across the UAE's major free zones.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[breadcrumbJsonLd([{ name: "Free Zones", path: "/free-zones" }])]}
      />
      <FreeZonesHubPage />
    </>
  );
}
