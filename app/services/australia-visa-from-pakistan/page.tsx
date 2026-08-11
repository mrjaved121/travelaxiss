import type { Metadata } from "next";
import AustraliaVisaFromPakistanPage from "@/components/pages/AustraliaVisaFromPakistanPage";
import { australiaVisaFaqs } from "@/components/data/australiaVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Australia Visa from Pakistan – Visitor, Student & Partner Visas",
  description:
    "Australia visa documentation for Pakistani applicants: Visitor (600), Student (500), and Partner/Family visas. Checklists, timelines & how to apply.",
  keywords: [
    "australia visa from pakistan",
    "australia visit visa from pakistan",
    "australia student visa from pakistan",
    "australia partner visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/australia-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/australia-visa-from-pakistan/`,
    title: "Australia Visa from Pakistan | Travelaxis",
    description:
      "Document preparation for Australia Visitor, Student, and Partner/Family visa applicants in Pakistan.",
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
            { name: "Australia Visa from Pakistan", path: "/services/australia-visa-from-pakistan" },
          ]),
          serviceJsonLd({
            name: "Australia Visa Documentation from Pakistan",
            description:
              "Document preparation and application support for Australia Visitor, Student, and Partner/Family visa applicants in Pakistan.",
            path: "/services/australia-visa-from-pakistan",
            serviceType: "Australia visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: australiaVisaFaqs.map((faq) => ({
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
      <AustraliaVisaFromPakistanPage />
    </>
  );
}
