import type { Metadata } from "next";
import UaeTourPackagePage from "@/components/pages/UaeTourPackagePage";
import { tourPackageFaqs } from "@/components/data/uaeTourPackage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visit Visa + Dubai Holiday Package",
  description:
    "UAE visit visa documentation plus a 7-day, 4-star hotel stay, airport pick-drop and Dubai tours. Message us on WhatsApp for your custom quote.",
  keywords: [
    "uae tour package",
    "dubai visit visa package",
    "dubai holiday package",
    "uae visit visa hotel package",
    "dubai tour and visa package",
  ],
  alternates: {
    canonical: `${SITE_URL}/uae-tour-package/`,
  },
  openGraph: {
    url: `${SITE_URL}/uae-tour-package/`,
    title: "UAE Visit Visa + Dubai Holiday Package | Travelaxis",
    description:
      "Visa documentation, airport transfers, a 4-star hotel stay and customizable Dubai tours — message us for a quote.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "UAE Tour Package", path: "/uae-tour-package" }]),
          serviceJsonLd({
            name: "UAE Visit Visa & Tour Package",
            description:
              "Visit visa documentation, airport pick-up and drop-off, a 4-star hotel stay and customizable Dubai/UAE attraction tours.",
            path: "/uae-tour-package",
            serviceType: "Visit visa and travel package coordination",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: tourPackageFaqs.map((faq) => ({
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
      <UaeTourPackagePage />
    </>
  );
}
