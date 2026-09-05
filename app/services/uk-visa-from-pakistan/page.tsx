import type { Metadata } from "next";
import UkVisaFromPakistanPage from "@/components/pages/UkVisaFromPakistanPage";
import { ukVisaFaqs } from "@/components/data/ukVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UK Visa from Pakistan – Visit, Study & Family Routes",
  description:
    "Find the right UK visa route from Pakistan: Visit, Study, or Family & Spouse. Document checklists, timelines & how Travelaxis can help.",
  keywords: [
    "uk visa from pakistan",
    "uk visit visa from pakistan",
    "uk study visa from pakistan",
    "uk spouse visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uk-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uk-visa-from-pakistan/`,
    title: "UK Visa from Pakistan | Travelaxis",
    description:
      "Document preparation for UK Student, Visit, and Family visa applicants in Pakistan.",
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
            { name: "UK Visa from Pakistan", path: "/services/uk-visa-from-pakistan" },
          ]),
          serviceJsonLd({
            name: "UK Visa Documentation from Pakistan",
            description:
              "Document preparation and application support for UK Visit, Study, and Family visa applicants in Pakistan.",
            path: "/services/uk-visa-from-pakistan",
            serviceType: "UK visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ukVisaFaqs.map((faq) => ({
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
      <UkVisaFromPakistanPage />
    </>
  );
}
