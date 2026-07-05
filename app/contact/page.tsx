import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Contact Travelaxis | UAE Business & Visa Documentation Consultancy",
  description:
    "Contact our Dubai team for company formation, government coordination, and UAE visa documentation and consultancy. WhatsApp, phone, and email—Mon–Fri 9AM–6PM.",
  keywords: [
    "contact visa consultancy UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "Dubai business setup contact",
    "Travelaxis contact",
    "business consultancy Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Travelaxis | Dubai",
    description:
      "Get in touch for UAE business setup and visa documentation and consultancy support.",
    url: `${SITE_URL}/contact/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
      <ContactPage />
    </>
  );
}
