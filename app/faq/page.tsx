import type { Metadata } from "next";
import FAQPage from "@/components/pages/FAQPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "FAQ | Visit & Study Visa Documentation Support",
  description:
    "Frequently asked questions about visit and study visa documentation for Dubai, the UK, USA, Schengen, Australia and Germany.",
  keywords: [
    "visa documentation FAQ",
    "dubai visit visa questions",
    "study visa documentation pakistan",
    "visa consultancy FAQ",
  ],
  alternates: {
    canonical: `${SITE_URL}/faq/`,
  },
  openGraph: {
    title: "FAQ | Visit & Study Visa Documentation",
    description:
      "Answers to common questions about visit and study visa documentation support.",
    url: `${SITE_URL}/faq/`,
    images: [DEFAULT_OG_IMAGE],
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
