import type { Metadata } from "next";
import FAQPage from "@/components/pages/FAQPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqPageJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "FAQ - Business Setup Dubai | Visa Consultancy UAE",
  description:
    "Frequently asked questions about company formation, business setup, and visa consultancy services in Dubai UAE. Clear answers on freezone, mainland, and offshore companies.",
  keywords: [
    "Dubai business setup FAQ",
    "company formation questions UAE",
    "visa consultancy FAQ",
    "freezone setup questions",
    "mainland company FAQ",
  ],
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title: "FAQ | Business Setup & Visas UAE",
    description:
      "Answers to common questions about company formation and visas in the UAE.",
    url: `${SITE_URL}/faq`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <FAQPage />
    </>
  );
}
