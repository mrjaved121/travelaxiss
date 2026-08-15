import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";
import { homepageFaqs } from "@/lib/data/faqs";

export const metadata: Metadata = {
  title: "UAE Business Setup & Visa Documentation Support | Travelaxis Dubai",
  description:
    "Premium UAE consultancy for company formation, government coordination, legal documentation, and visa documentation support. 11+ years in Dubai.",
  keywords: [
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
    title: "UAE Business Setup & Visa Documentation Support | Travelaxis",
    description:
      "Company formation, compliance, and UAE visa documentation and consultancy—expert support in Dubai.",
    url: `${SITE_URL}/`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          professionalServiceJsonLd,
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
