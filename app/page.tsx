import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "Visa Services in Dubai & Pakistan | Travelaxis",
  description:
    "Get clear visa documentation and application support for the UAE and international destinations from Travelaxis offices in Dubai and Lahore.",
  keywords: [
    "visa services Dubai",
    "UAE visa documentation",
    "visa application support Dubai",
    "visa consultancy Dubai",
    "visa services for Pakistanis",
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
    title: "Visa Services in Dubai & Pakistan | Travelaxis",
    description:
      "Clear visa documentation and application support for the UAE and international destinations, from Travelaxis offices in Dubai and Lahore.",
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
