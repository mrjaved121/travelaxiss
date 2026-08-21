import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "UAE Visa Services & Documentation | Travelaxis Dubai",
  description:
    "Professional UAE visa services in Dubai, including visit visa assistance, visa documentation, multiple-entry visas, and application support. Contact Travelaxis today.",
  keywords: [
    "UAE visa services Dubai",
    "UAE visit visa",
    "Dubai visit visa",
    "visa documentation Dubai",
    "UAE visa assistance",
    "multiple entry visa UAE",
    "multiple entry visa Dubai",
    "UAE visa application support",
    "UAE visa documentation",
    "international visa documentation",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  verification: {
    google: "zkDBpIKHKEwlOYkVQQ4OL-rcZna0NxhTkNqNn8VEYUE",
  },
  openGraph: {
    title: "UAE Visa Services & Documentation | Travelaxis",
    description:
      "Visit visas, multiple-entry visas, visa documentation, and application support in Dubai — plus international visa documentation for major destinations.",
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
