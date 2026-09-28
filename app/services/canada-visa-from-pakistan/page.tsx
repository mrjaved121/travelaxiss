import type { Metadata } from "next";
import CanadaVisaFromPakistanPage from "@/components/pages/CanadaVisaFromPakistanPage";
import { canadaVisaFaqs } from "@/components/data/canadaVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Visa from Pakistan – Visit & Study Routes",
  description:
    "Canada visa from Pakistan explained: visit visa vs study permit, official IRCC fees and documents, and who may charge for application help.",
  keywords: [
    "canada visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/canada-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/canada-visa-from-pakistan/`,
    title: "Canada Visa from Pakistan | Travelaxis",
    description:
      "Canada visit visa and study permit routes from Pakistan, with official IRCC information.",
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
            { name: "Canada Visa from Pakistan", path: "/services/canada-visa-from-pakistan" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: canadaVisaFaqs.map((faq) => ({
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
      <CanadaVisaFromPakistanPage />
    </>
  );
}
