import type { Metadata } from "next";
import VisitVisaPage from "@/components/pages/VisitVisaPage";
import { visitVisaFaqs } from "@/components/data/visitVisaFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visit Visa Services | UK, USA, Canada, Australia & UAE",
  description:
    "Explore destination-specific visit visa requirements and get help preparing your application — for the UK, USA, Canada, Australia, UAE, and more.",
  keywords: [
    "visit visa services",
    "visit visa requirements from pakistan",
    "uk visit visa from pakistan",
    "canada visit visa from pakistan",
    "australia visitor visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/visit-visa/`,
  },
  openGraph: {
    url: `${SITE_URL}/visit-visa/`,
    title: "Visit Visa Services | Travelaxis",
    description:
      "Destination-specific visit visa requirements guidance and application support for the UK, USA, Canada, Australia, UAE, and more.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Visit Visa Services", path: "/visit-visa" }]),
          serviceJsonLd({
            name: "Visit Visa Services",
            description:
              "Destination-specific visit visa requirements guidance and application support for the UK, USA, Canada, Australia, UAE, and other popular destinations.",
            path: "/visit-visa",
            serviceType: "Visit visa application assistance",
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
