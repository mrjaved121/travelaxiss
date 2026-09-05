import type { Metadata } from "next";
import InternationalVisaServicesPage from "@/components/pages/InternationalVisaServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "International Visa Documentation – Saudi, Europe & More",
  description:
    "Visa documentation and consultancy support for Saudi Arabia, Europe, USA, Schengen, and other destinations — for UAE residents traveling or relocating abroad.",
  keywords: [
    "Saudi Arabia visa services",
    "USA visa services UAE",
    "Schengen visa services UAE",
    "African countries visas UAE",
    "Asian countries visas UAE",
    "international visa documentation UAE",
    "visa appointment booking UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/international-visas/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/international-visas/`,
    title: "International Visa Documentation | Travelaxis",
    description:
      "Documentation assistance and application guidance for Saudi Arabia, Europe, USA, Schengen, and other international destinations, through official channels.",
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
            { name: "International Visa Documentation", path: "/services/international-visas" },
          ]),
          serviceJsonLd({
            name: "International Visa Documentation & Consultancy",
            description:
              "Documentation assistance and application guidance for Saudi Arabia, Europe, USA, Schengen, and other African and Asian destination visas.",
            path: "/services/international-visas",
            serviceType: "International visa documentation consultancy",
          }),
        ]}
      />
      <InternationalVisaServicesPage />
    </>
  );
}
