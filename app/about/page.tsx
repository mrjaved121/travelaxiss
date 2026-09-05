import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "About Travelaxis | Dubai Visa & Business Consultancy",
  description:
    "Learn how Travelaxis supports Dubai and UAE clients with company formation, regulatory coordination, and visa documentation — structured, client-focused support.",
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title: "About Travelaxis | UAE Business Consultancy",
    description:
      "Trusted UAE consultancy for business formation and visa documentation support in Dubai and the UAE.",
    url: `${SITE_URL}/about/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <AboutPage />
    </>
  );
}
