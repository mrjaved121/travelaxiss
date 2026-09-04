import type { Metadata } from "next";
import UaeVisitVisaFromPakistanPage from "@/components/pages/UaeVisitVisaFromPakistanPage";
import { uaeVisitVisaFromPakistanFaqs } from "@/components/data/uaeVisitVisaFromPakistanFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Dubai Visit Visa from Pakistan – Cost, Documents & Apply",
  description:
    "Apply for a Dubai/UAE visit visa from Pakistan. Clear requirements, sponsor routes, and what determines cost — from Travelaxis offices in Lahore & Dubai.",
  keywords: [
    "dubai visit visa from pakistan",
    "uae visit visa from pakistan",
    "dubai visit visa price in pakistan",
    "dubai visa fee for pakistani",
    "uae visit visa requirements from pakistan",
    "how to apply dubai visit visa from pakistan",
    "visit visa consultants in lahore",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uae-visit-visa-from-pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-visit-visa-from-pakistan/`,
    title: "Dubai Visit Visa from Pakistan | Travelaxis",
    description:
      "Requirements, sponsor routes, and document preparation for Dubai/UAE visit visa applicants in Pakistan.",
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
            { name: "Dubai Visit Visa from Pakistan", path: "/services/uae-visit-visa-from-pakistan" },
          ]),
          serviceJsonLd({
            name: "Dubai/UAE Visit Visa Documentation from Pakistan",
            description:
              "Document preparation and application support for Pakistani nationals applying for a Dubai/UAE visit visa, including sponsor-route guidance and financial-proof review.",
            path: "/services/uae-visit-visa-from-pakistan",
            serviceType: "Visit visa documentation consultancy",
          }),
          pakistanOfficeJsonLd,
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeVisitVisaFromPakistanFaqs.map((faq) => ({
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
      <UaeVisitVisaFromPakistanPage />
    </>
  );
}
