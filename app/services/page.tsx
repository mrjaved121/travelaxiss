import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Business Setup, UAE Visa & Attestation Services",
  description:
    "Company formation, UAE visa documentation, document attestation, and international visa documentation — structured assistance for individuals and companies.",
  keywords: [
    "business setup UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "company formation Dubai",
    "government services UAE",
    "legal documentation Dubai",
    "freezone company setup",
    "mainland company formation",
    "uae document attestation from pakistan",
    "uk visa from pakistan",
    "canada visa from pakistan",
    "australia visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/`,
  },
  openGraph: {
    title: "Business Setup, UAE Visa & Attestation Services | Travelaxis",
    description:
      "Company formation, UAE visa documentation, document attestation from Pakistan, and UK/Canada/Australia visa documentation assistance.",
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
