import type { Metadata } from "next";
import UaeVisitVisaPage from "@/components/pages/UaeVisitVisaPage";
import { uaeVisitVisaFaqs } from "@/components/data/uaeVisitVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visit & Tourist Visa – Duration, Sponsors & Documents",
  description:
    "UAE visit visa guide: 14/30/60/90-day durations, sponsor routes (airline, hotel, tour operator, resident), documents, extension options, and cost.",
  keywords: [
    "uae visit visa",
    "uae tourist visa",
    "apply for visit visa uae",
    "uae visit visa charges",
    "uae multiple entry visa",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uae-visit-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-visit-visa/`,
    title: "UAE Visit & Tourist Visa | Travelaxis",
    description:
      "Duration options, sponsor routes, documents, and cost for UAE visit and tourist visas.",
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
            { name: "UAE Visit & Tourist Visa", path: "/services/uae-visit-visa" },
          ]),
          serviceJsonLd({
            name: "UAE Visit & Tourist Visa Documentation",
            description:
              "Documentation support for UAE visit and tourist visas across 14/30/60/90-day durations and all sponsor routes.",
            path: "/services/uae-visit-visa",
            serviceType: "Visit visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeVisitVisaFaqs.map((faq) => ({
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
      <UaeVisitVisaPage />
    </>
  );
}
