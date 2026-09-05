import type { Metadata } from "next";
import VisaServicesPage from "@/components/pages/VisaServicesPage";
import { visaServicesFaqs } from "@/components/data/visaServicesFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visa Documentation & Application Support | Dubai",
  description:
    "UAE visa consultancy and documentation support: investor, family, visit, renewal, and cancellation assistance, through official UAE channels.",
  keywords: [
    "UAE visa services",
    "visa documentation UAE",
    "UAE visa consultancy",
    "visa application support UAE",
    "UAE visa renewal support",
    "family visa UAE",
    "investor visa UAE",
    "visit visa UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/visa-services/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/visa-services/`,
    title: "UAE Visa Documentation & Consultancy | Travelaxis",
    description:
      "Documentation assistance and application guidance for UAE visas—investor, family, visit, renewals, and more—through official channels.",
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
            { name: "UAE Visa Services", path: "/services/visa-services" },
          ]),
          serviceJsonLd({
            name: "UAE Visa Documentation & Consultancy",
            description:
              "Documentation assistance and application guidance for investor, family, and visit visas, plus renewals and cancellations.",
            path: "/services/visa-services",
            serviceType: "Visa documentation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: visaServicesFaqs.map((faq) => ({
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
      <VisaServicesPage />
    </>
  );
}
