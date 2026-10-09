import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Contact Us – Visit Visa Help, Dubai & Lahore",
  description:
    "Contact our Dubai and Lahore team about visit and study visa documentation. WhatsApp, phone, and email—Mon–Fri 9AM–6PM.",
  keywords: [
    "contact visa consultancy UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "Travelaxis contact",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Travelaxis | Dubai",
    description:
      "Get in touch about visit and study visa documentation support.",
    url: `${SITE_URL}/contact/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Contact", path: "/contact" }]),
          professionalServiceJsonLd,
          pakistanOfficeJsonLd,
        ]}
      />
      <ContactPage />
    </>
  );
}
