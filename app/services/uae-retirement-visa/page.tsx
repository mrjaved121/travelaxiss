import type { Metadata } from "next";
import UaeRetirementVisaPage from "@/components/pages/UaeRetirementVisaPage";
import { uaeRetirementVisaFaqs } from "@/components/data/uaeRetirementVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Retirement Visa – Eligibility & Qualifying Routes",
  description:
    "UAE retirement visa guide: the three qualifying routes (property, savings, income), eligibility for those 55+, family inclusion, and documents needed.",
  keywords: ["retirement visa uae", "uae retirement residency", "retire in uae visa"],
  alternates: {
    canonical: `${SITE_URL}/services/uae-retirement-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-retirement-visa/`,
    title: "UAE Retirement Visa | Travelaxis",
    description:
      "Qualifying routes, eligibility, and documentation for the UAE retirement visa.",
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
            { name: "UAE Retirement Visa", path: "/services/uae-retirement-visa" },
          ]),
          serviceJsonLd({
            name: "UAE Retirement Visa Documentation",
            description:
              "Documentation support for UAE retirement visa applicants qualifying through property, savings, or income routes.",
            path: "/services/uae-retirement-visa",
            serviceType: "Retirement visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeRetirementVisaFaqs.map((faq) => ({
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
      <UaeRetirementVisaPage />
    </>
  );
}
