import type { Metadata } from "next";
import VisitVisaPage from "@/components/pages/VisitVisaPage";
import { visitVisaFaqs } from "@/components/data/visitVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visit Visa Documentation | UAE, UK, USA, Canada & Australia",
  description:
    "Visit visa documentation support for the UAE, UK, USA, Canada, Australia, Saudi Arabia, and Schengen destinations. Document preparation for tourism, family, and business visits.",
  keywords: [
    "visit visa documentation",
    "uae visit visa",
    "visit visa from pakistan",
    "uk visit visa from pakistan",
    "canada visit visa from pakistan",
    "australia visitor visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/visit-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/visit-visa/`,
    title: "Visit Visa Documentation | Travelaxis",
    description:
      "Document preparation for visit visa applicants heading to the UAE, UK, USA, Canada, Australia, and other popular destinations.",
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
            { name: "Visit Visa", path: "/services/visit-visa" },
          ]),
          serviceJsonLd({
            name: "Visit Visa Documentation",
            description:
              "Document preparation and application support for visit visa applicants heading to the UAE, UK, USA, Canada, Australia, and other popular destinations.",
            path: "/services/visit-visa",
            serviceType: "Visit visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: visitVisaFaqs.map((faq) => ({
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
      <VisitVisaPage />
    </>
  );
}
