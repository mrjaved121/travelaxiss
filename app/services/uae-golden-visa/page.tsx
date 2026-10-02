import type { Metadata } from "next";
import UaeGoldenVisaPage from "@/components/pages/UaeGoldenVisaPage";
import { goldenVisaFaqs } from "@/components/data/uaeGoldenVisa";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Golden Visa from Pakistan – Categories & Requirements",
  description:
    "UAE Golden Visa for Pakistani applicants: 5 or 10-year residence, the investor, talent, student and humanitarian categories, and the documents needed.",
  keywords: [
    "uae golden visa from pakistan",
    "golden visa for pakistani",
    "uae golden visa requirements",
    "dubai golden visa pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uae-golden-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-golden-visa/`,
    title: "UAE Golden Visa from Pakistan | Travelaxis",
    description: "Golden Visa categories, requirements and documentation support for Pakistani applicants.",
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
            { name: "UAE Golden Visa", path: "/services/uae-golden-visa" },
          ]),
          serviceJsonLd({
            name: "UAE Golden Visa Documentation from Pakistan",
            description: "Documentation support for UAE Golden Visa applicants from Pakistan, across the investor, entrepreneur, talent, student and humanitarian categories.",
            path: "/services/uae-golden-visa",
            serviceType: "Golden Visa documentation",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: goldenVisaFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <UaeGoldenVisaPage />
    </>
  );
}
