import type { Metadata } from "next";
import WorkVisaPage from "@/components/pages/WorkVisaPage";
import { workVisaFaqs } from "@/components/data/workVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Work Visa Documentation | UK, Canada, Germany, USA & Australia",
  description:
    "Work visa documentation support for the UK, Canada, and Germany, plus visitor and student documentation for the USA and Australia. Document preparation for applicants from Pakistan.",
  keywords: [
    "work visa documentation",
    "work visa documents pakistan",
    "uk skilled worker visa from pakistan",
    "canada work permit from pakistan",
    "germany eu blue card from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/work-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/work-visa/`,
    title: "Work Visa Documentation | Travelaxis",
    description:
      "Document preparation for work visa applicants heading to the UK, Canada, and Germany, plus visitor/student documentation for the USA and Australia.",
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
            { name: "Work Visa", path: "/services/work-visa" },
          ]),
          serviceJsonLd({
            name: "Work Visa Documentation",
            description:
              "Document preparation and application support for work visa applicants heading to the UK, Canada, and Germany, plus visitor/student documentation for the USA and Australia.",
            path: "/services/work-visa",
            serviceType: "Work visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: workVisaFaqs.map((faq) => ({
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
      <WorkVisaPage />
    </>
  );
}
