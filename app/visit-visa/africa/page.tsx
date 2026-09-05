import type { Metadata } from "next";
import VisitVisaAfricaPage from "@/components/pages/VisitVisaAfricaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Africa Visit Visas – South Africa & More",
  description:
    "Visit visa documentation support for African destination countries, most commonly South Africa.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/africa/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/africa/`,
    title: "Africa Visit Visas | Travelaxis",
    description: "Visit visa documentation support for African destination countries.",
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
            { name: "Africa", path: "/visit-visa/africa" },
          ]),
        ]}
      />
      <VisitVisaAfricaPage />
    </>
  );
}
