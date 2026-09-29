import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visit & Study Visa Services – Dubai, UK, USA, Schengen",
  description:
    "Visit and study visa documentation for applicants in Pakistan and the UAE: Dubai, UK, USA, Schengen/Germany, Australia and more, through official channels.",
  keywords: [
    "visa services",
    "dubai visit visa from pakistan",
    "uk visa from pakistan",
    "usa visa from pakistan",
    "schengen visa from pakistan",
    "australia visa from pakistan",
    "study visa documentation pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/`,
  },
  openGraph: {
    title: "Visit & Study Visa Services | Travelaxis",
    description:
      "Visit and study visa documentation for Dubai, the UK, USA, Schengen/Germany, Australia and more.",
    url: `${SITE_URL}/services/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Services", path: "/services" }])} />
      <ServicesPage />
    </>
  );
}
