import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "UAE Visa Documentation & Business Setup Support | Travelaxis Dubai",
  description:
    "UAE visa documentation and consultancy: visit, employment, family, investor & golden visa support, plus company formation and government coordination. 11+ years in Dubai.",
  keywords: [
    "uae visa",
    "travel visa uae",
    "uae visit visa",
    "visa consultancy UAE",
    "UAE visa documentation",
    "visa application support UAE",
    "business setup Dubai",
    "company formation UAE",
    "Dubai business services",
    "freezone company setup",
    "mainland company Dubai",
    "business consultancy UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  verification: {
    google: "zkDBpIKHKEwlOYkVQQ4OL-rcZna0NxhTkNqNn8VEYUE",
  },
  openGraph: {
    title: "UAE Visa Documentation & Business Setup Support | Travelaxis",
    description:
      "Visit, employment, family, investor, and golden visa documentation, plus company formation and government coordination in Dubai.",
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
