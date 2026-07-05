import type { Metadata } from "next";
import UmrahServicesPage from "@/components/pages/UmrahServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Umrah Visa & Travel Coordination | Dubai Consultancy | Travelaxis",
  description:
    "Umrah visa documentation, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE. Arranged through licensed travel partners and official channels.",
  keywords: [
    "Umrah services UAE",
    "Umrah visa Dubai",
    "Umrah travel packages UAE",
    "Umrah visa processing",
    "Umrah group packages Dubai",
    "Umrah flight and hotel booking",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/umrah-services/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/umrah-services/`,
    title: "Umrah Visa & Travel Coordination | Travelaxis",
    description:
      "Umrah visa documentation, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: "Umrah Services", path: "/services/umrah-services" },
          ]),
          serviceJsonLd({
            name: "Umrah Visa & Travel Coordination",
            description:
              "Umrah visa documentation, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
            path: "/services/umrah-services",
            serviceType: "Umrah visa and travel coordination",
          }),
        ]}
      />
      <UmrahServicesPage />
    </>
  );
}
