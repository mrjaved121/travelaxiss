import type { Metadata } from "next";
import StudyVisaPage from "@/components/pages/StudyVisaPage";
import { studyVisaFaqs } from "@/components/data/studyVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Study Visa Documentation | UK, USA, Canada, Australia & Germany",
  description:
    "Study visa documentation support for the UK, USA, Canada, Australia, and Germany. Admission, financial, and attestation document preparation for students applying from Pakistan.",
  keywords: [
    "study visa documentation",
    "student visa documents pakistan",
    "uk study visa from pakistan",
    "canada study permit from pakistan",
    "australia student visa from pakistan",
    "germany student visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/study-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/study-visa/`,
    title: "Study Visa Documentation | Travelaxis",
    description:
      "Document preparation for study visa applicants heading to the UK, USA, Canada, Australia, and Germany.",
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
            { name: "Study Visa", path: "/services/study-visa" },
          ]),
          serviceJsonLd({
            name: "Study Visa Documentation",
            description:
              "Document preparation and application support for study visa applicants heading to the UK, USA, Canada, Australia, and Germany.",
            path: "/services/study-visa",
            serviceType: "Study visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: studyVisaFaqs.map((faq) => ({
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
      <StudyVisaPage />
    </>
  );
}
