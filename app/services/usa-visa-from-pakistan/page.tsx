import type { Metadata } from "next";
import UsaVisaFromPakistanPage from "@/components/pages/UsaVisaFromPakistanPage";
import { usaVisaFaqs } from "@/components/data/usaVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "USA Visa from Pakistan – B1/B2 Visitor & F1 Student Visas",
  description:
    "USA visa documentation for Pakistani applicants: B1/B2 visitor and F1 student visas. DS-160, Embassy Islamabad interview prep, checklists & timelines.",
  keywords: [
    "usa visa from pakistan",
    "us visit visa from pakistan",
    "us student visa from pakistan",
    "b1 b2 visa from pakistan",
    "f1 visa from pakistan",
    "ds-160 pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/usa-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/usa-visa-from-pakistan/`,
    title: "USA Visa from Pakistan | Travelaxis",
    description:
      "Document preparation for USA B1/B2 visitor and F1 student visa applicants in Pakistan.",
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
            { name: "USA Visa from Pakistan", path: "/services/usa-visa-from-pakistan" },
          ]),
          serviceJsonLd({
            name: "USA Visa Documentation from Pakistan",
            description:
              "Document preparation and interview-readiness support for USA B1/B2 visitor and F1 student visa applicants in Pakistan.",
            path: "/services/usa-visa-from-pakistan",
            serviceType: "USA visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: usaVisaFaqs.map((faq) => ({
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
      <UsaVisaFromPakistanPage />
    </>
  );
}
