import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "About Us – Visit Visa Help, Dubai & Lahore",
  description:
    "Learn how Travelaxis supports applicants in Pakistan and the UAE with visit visa documentation — structured, client-focused support.",
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title: "About Travelaxis | Visa Documentation Consultancy",
    description:
      "Visit visa documentation support from our Dubai and Lahore offices.",
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
