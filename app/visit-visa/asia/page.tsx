import type { Metadata } from "next";
import VisitVisaAsiaPage from "@/components/pages/VisitVisaAsiaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Asia Visit Visas – Indonesia, China, Japan & More",
  description:
    "Documentation assistance for visit and business visa applications across Asian destination countries.",
  alternates: {
    canonical: `${SITE_URL}/visit-visa/asia/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/asia/`,
    title: "Asia Visit Visas | Travelaxis",
    description: "Documentation assistance for visit visa applications across Asian destinations.",
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
            { name: "Asia", path: "/visit-visa/asia" },
          ]),
        ]}
      />
      <VisitVisaAsiaPage />
    </>
  );
}
