import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Visa, Document & Business Setup Services | Travelaxis",
  description:
    "Travelaxis provides visa application support, document preparation, attestation, and business setup services from our Dubai and Lahore offices. Find the service that fits your plans.",
  keywords: [
    "visa services",
    "visa application support",
    "visa document preparation",
    "study visa support",
    "visit visa support",
    "certificate attestation",
    "UAE residency visa documentation",
    "business setup Dubai",
    "company formation UAE",
    "Travelaxis",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  verification: {
    google: "zkDBpIKHKEwlOYkVQQ4OL-rcZna0NxhTkNqNn8VEYUE",
  },
  openGraph: {
    title: "Visa, Document & Business Setup Services | Travelaxis",
    description:
      "Visa application support, document preparation, attestation, and business setup services from Travelaxis — with offices in Dubai and Lahore.",
    url: `${SITE_URL}/`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceJsonLd,
          pakistanOfficeJsonLd,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homepageFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />
      <HomePage />
    </>
  );
}
