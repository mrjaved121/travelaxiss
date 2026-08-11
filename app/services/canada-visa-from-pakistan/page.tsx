import type { Metadata } from "next";
import CanadaVisaFromPakistanPage from "@/components/pages/CanadaVisaFromPakistanPage";
import { canadaVisaFaqs } from "@/components/data/canadaVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Canada Visa from Pakistan – Study, Work, Visit & Spouse Permits",
  description:
    "Canada visa documentation for Pakistani applicants: study permit, work permit, visit visa, and spouse open work permit. Checklists, timelines & how to apply.",
  keywords: [
    "canada visa from pakistan",
    "canada visit visa from pakistan",
    "canada study visa from pakistan",
    "canada work permit from pakistan",
    "canada spouse visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/canada-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/canada-visa-from-pakistan/`,
    title: "Canada Visa from Pakistan | Travelaxis",
    description:
      "Document preparation for Canada study permit, work permit, visit visa, and spouse open work permit applicants in Pakistan.",
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
          serviceJsonLd({
            name: "Canada Visa Documentation from Pakistan",
            description:
              "Document preparation and application support for Canada study permit, work permit, visit visa, and spouse open work permit applicants in Pakistan.",
            path: "/services/canada-visa-from-pakistan",
            serviceType: "Canada visa documentation consultancy",
          }),
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
