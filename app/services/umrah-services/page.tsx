import type { Metadata } from "next";
import UmrahServicesPage from "@/components/pages/UmrahServicesPage";
import { umrahFaqs } from "@/components/data/umrahFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Umrah Package From Dubai – Visa, Flights & Hotel",
  description:
    "Umrah packages from Dubai: visa documentation, bus or flight transport, and hotel coordination near the Haram, for individuals, families, and groups.",
  keywords: [
    "Umrah package from Dubai",
    "Umrah packages UAE",
    "Umrah visa Dubai",
    "Umrah travel packages UAE",
    "Umrah visa processing",
    "Umrah group packages Dubai",
    "Umrah by bus from Dubai",
    "Umrah flight and hotel booking",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/umrah-services/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/umrah-services/`,
    title: "Umrah Visa & Travel Coordination | Travelaxis",
    description:
      "Umrah visa documentation, flight booking, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
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
            { name: "Umrah Services", path: "/services/umrah-services" },
          ]),
          serviceJsonLd({
            name: "Umrah Package From Dubai",
            description:
              "Umrah visa documentation, flight or bus transport, hotel accommodation, and group travel coordination for pilgrims traveling from the UAE.",
            path: "/services/umrah-services",
            serviceType: "Umrah visa and travel coordination",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: umrahFaqs.map((faq) => ({
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
      <UmrahServicesPage />
    </>
  );
}
