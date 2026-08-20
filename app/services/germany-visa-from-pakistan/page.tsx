import type { Metadata } from "next";
import GermanyVisaFromPakistanPage from "@/components/pages/GermanyVisaFromPakistanPage";
import { germanyVisaFaqs } from "@/components/data/germanyVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Germany Visa from Pakistan – EU Blue Card, Job Seeker, Student & Family",
  description:
    "Germany visa documentation for Pakistani applicants: EU Blue Card, Job Seeker Visa, Student/Ausbildung, and Family Reunification categories. Document checklists & how to apply.",
  keywords: [
    "germany visa from pakistan",
    "eu blue card from pakistan",
    "germany job seeker visa pakistan",
    "germany student visa from pakistan",
    "ausbildung visa pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/germany-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/germany-visa-from-pakistan/`,
    title: "Germany Visa from Pakistan | Travelaxis",
    description:
      "Document preparation for Germany EU Blue Card, Job Seeker, Student/Ausbildung, and Family Reunification visa applicants in Pakistan.",
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
            { name: "Germany Visa from Pakistan", path: "/services/germany-visa-from-pakistan" },
          ]),
          serviceJsonLd({
            name: "Germany Visa Documentation from Pakistan",
            description:
              "Document preparation and application support for Germany EU Blue Card, Job Seeker, Student/Ausbildung, and Family Reunification visa applicants in Pakistan.",
            path: "/services/germany-visa-from-pakistan",
            serviceType: "Germany visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: germanyVisaFaqs.map((faq) => ({
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
      <GermanyVisaFromPakistanPage />
    </>
  );
}
