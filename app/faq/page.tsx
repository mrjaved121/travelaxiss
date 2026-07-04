import type { Metadata } from "next";
import FAQPage from "@/components/pages/FAQPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "FAQ | UAE Business Setup & Visa Documentation Support",
  description:
    "Frequently asked questions about company formation, business setup, and UAE visa documentation and application guidance in Dubai. Clear answers on freezone, mainland, and offshore companies.",
  keywords: [
    "Dubai business setup FAQ",
    "company formation questions UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "visa consultancy FAQ",
    "freezone setup questions",
    "mainland company FAQ",
  ],
  alternates: {
    canonical: `${SITE_URL}/faq/`,
  },
  openGraph: {
    title: "FAQ | UAE Business & Visa Documentation",
    description:
      "Answers to common questions about company formation and UAE visa documentation support.",
    url: `${SITE_URL}/faq/`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }]), faqPageJsonLd()]} />
      <FAQPage />
    </>
  );
}
