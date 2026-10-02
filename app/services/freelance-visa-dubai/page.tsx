import type { Metadata } from "next";
import FreelanceVisaPage from "@/components/pages/FreelanceVisaPage";
import { freelanceVisaFaqs } from "@/components/data/freelanceVisaUae";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Freelance Visa in Dubai & UAE | Cost & Apply",
  description:
    "UAE freelance visa: GoFreelance permit cost, Establishment Card, Emirates ID and residence visa for Dubai and Abu Dhabi. Verified fees, eligibility, how to apply.",
  keywords: [
    "freelance visa dubai",
    "freelance visa uae",
    "freelance permit dubai cost",
    "freelance visa abu dhabi",
    "gofreelance dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/freelance-visa-dubai/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/freelance-visa-dubai/`,
    title: "Freelance Visa in Dubai & UAE | Travelaxis",
    description:
      "Freelance permit, Establishment Card, Emirates ID and residence visa documentation for Dubai and Abu Dhabi.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: "Freelance Visa", path: "/services/freelance-visa-dubai" },
          ]),
          serviceJsonLd({
            name: "UAE Freelance Visa Documentation",
            description:
              "Freelance permit, Establishment Card, Emirates ID and residence visa documentation support for Dubai and Abu Dhabi freelancers.",
            path: "/services/freelance-visa-dubai",
            serviceType: "Freelance Visa & Permit",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: freelanceVisaFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          },
        ]}
      />
      <FreelanceVisaPage />
    </>
  );
}
