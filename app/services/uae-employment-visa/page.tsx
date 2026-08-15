import type { Metadata } from "next";
import UaeEmploymentVisaPage from "@/components/pages/UaeEmploymentVisaPage";
import { uaeEmploymentVisaFaqs } from "@/components/data/uaeEmploymentVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Employment & Labour Visa – Process, Cost & Requirements",
  description:
    "UAE employment and labour visa guide: full process, age limits, requirements, who legally pays, and sponsorship explained. Documentation support included.",
  keywords: [
    "uae employment visa",
    "uae employment visa requirements",
    "uae employment visa age limit",
    "labour visa cost in uae",
    "visa sponsorship uae",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uae-employment-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-employment-visa/`,
    title: "UAE Employment & Labour Visa | Travelaxis",
    description:
      "Process, cost, age limits, and requirements for UAE employment and labour visas.",
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
            { name: "UAE Employment & Labour Visa", path: "/services/uae-employment-visa" },
          ]),
          serviceJsonLd({
            name: "UAE Employment & Labour Visa Documentation",
            description:
              "Documentation support for UAE employment and labour visa applicants, covering work permit, medical, Emirates ID, and visa stamping stages.",
            path: "/services/uae-employment-visa",
            serviceType: "Employment visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeEmploymentVisaFaqs.map((faq) => ({
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
      <UaeEmploymentVisaPage />
    </>
  );
}
