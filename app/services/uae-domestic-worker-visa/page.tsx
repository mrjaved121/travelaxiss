import type { Metadata } from "next";
import UaeDomesticWorkerVisaPage from "@/components/pages/UaeDomesticWorkerVisaPage";
import { uaeDomesticWorkerVisaFaqs } from "@/components/data/uaeDomesticWorkerVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Domestic Worker Visa – Tadbeer Sponsorship Guide",
  description:
    "UAE domestic worker visa sponsorship explained: the Tadbeer-channel process, sponsor eligibility, required documents, and how to avoid informal-arrangement risks.",
  keywords: ["domestic worker visa uae", "tadbeer center uae", "maid visa uae", "housemaid visa uae sponsor"],
  alternates: {
    canonical: `${SITE_URL}/services/uae-domestic-worker-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-domestic-worker-visa/`,
    title: "UAE Domestic Worker Visa | Travelaxis",
    description:
      "Tadbeer-channel sponsorship, eligibility, and documentation for UAE domestic worker visas.",
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
            { name: "UAE Domestic Worker Visa", path: "/services/uae-domestic-worker-visa" },
          ]),
          serviceJsonLd({
            name: "UAE Domestic Worker Visa Documentation",
            description:
              "Documentation support for households sponsoring a domestic worker in the UAE through the Tadbeer channel.",
            path: "/services/uae-domestic-worker-visa",
            serviceType: "Domestic worker visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeDomesticWorkerVisaFaqs.map((faq) => ({
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
      <UaeDomesticWorkerVisaPage />
    </>
  );
}
