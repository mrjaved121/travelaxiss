import type { Metadata } from "next";
import VisitVisaSchengenPage from "@/components/pages/VisitVisaSchengenPage";
import { schengenVisitVisaFaqs } from "@/components/data/schengenVisitVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Schengen & Germany Visit Visa from Pakistan – Requirements",
  description:
    "Schengen and Germany visit visa from Pakistan: €90 fee, which embassy to apply to, Islamabad/Karachi waiting lists, document checklist and processing time.",
  keywords: [
    "schengen visa from pakistan",
    "germany visit visa from pakistan",
    "germany tourist visa from pakistan",
    "schengen visa fee pakistan",
    "germany visit visa requirements pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/schengen/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/schengen/`,
    title: "Schengen & Germany Visit Visa from Pakistan | Travelaxis",
    description: "The official Schengen fee, where to apply, German Mission appointments and documents for applicants from Pakistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Visit Visa Services", path: "/visit-visa" },
            { name: "Europe", path: "/visit-visa/europe" },
            { name: "Schengen Visit Visa", path: "/visit-visa/schengen" },
          ]),
          serviceJsonLd({
            name: "Schengen & Germany Visit Visa from Pakistan",
            description: "Requirements guidance and document preparation for Schengen short-stay visit visas, including Germany, for applicants in Pakistan.",
            path: "/visit-visa/schengen",
            serviceType: "Visit visa application assistance",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: schengenVisitVisaFaqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          },
        ]}
      />
      <VisitVisaSchengenPage />
    </>
  );
}
