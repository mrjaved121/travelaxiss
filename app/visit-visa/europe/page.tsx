import type { Metadata } from "next";
import VisitVisaEuropePage from "@/components/pages/VisitVisaEuropePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Europe Visit Visas – UK & Schengen Countries",
  description:
    "Visit visa documentation for the UK and all 18 Schengen member states, submitted through each country's own official process.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/europe/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/europe/`,
    title: "Europe Visit Visas | Travelaxis",
    description: "Visit visa documentation for the UK and all Schengen member states.",
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
            { name: "Europe", path: "/visit-visa/europe" },
          ]),
        ]}
      />
      <VisitVisaEuropePage />
    </>
  );
}
