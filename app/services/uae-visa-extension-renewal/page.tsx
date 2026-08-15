import type { Metadata } from "next";
import UaeVisaExtensionRenewalPage from "@/components/pages/UaeVisaExtensionRenewalPage";
import { uaeVisaExtensionFaqs } from "@/components/data/uaeVisaExtensionFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visa Extension & Renewal – Status Change Explained",
  description:
    "UAE visa extension, residence visa renewal, and status change explained clearly — plus how to check your visa status, number, and copy. Timelines & documents.",
  keywords: [
    "visa extension uae",
    "uae visa renewal",
    "uae tourist visa extension",
    "urgent uae visa",
    "visa status change uae",
    "uae residence visa status",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/uae-visa-extension-renewal/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/uae-visa-extension-renewal/`,
    title: "UAE Visa Extension & Renewal | Travelaxis",
    description:
      "Visit visa extension, residence visa renewal, and status change — clearly explained, with documents and timelines.",
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
            { name: "UAE Visa Extension & Renewal", path: "/services/uae-visa-extension-renewal" },
          ]),
          serviceJsonLd({
            name: "UAE Visa Extension & Renewal Documentation",
            description:
              "Documentation support for UAE visit visa extension, residence visa renewal, and status change applications.",
            path: "/services/uae-visa-extension-renewal",
            serviceType: "Visa extension and renewal consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeVisaExtensionFaqs.map((faq) => ({
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
      <UaeVisaExtensionRenewalPage />
    </>
  );
}
