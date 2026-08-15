import type { Metadata } from "next";
import AttestationPage from "@/components/pages/AttestationPage";
import { attestationFaqs } from "@/components/data/attestationFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Document Attestation from Pakistan (HEC, MOFA, Embassy)",
  description:
    "Degree, marriage & experience certificate attestation for the UAE from Pakistan: the full HEC/IBCC → MOFA → Embassy → MOFAIC chain, timelines & charges.",
  keywords: [
    "degree attestation for uae",
    "hec attestation for dubai",
    "mofa attestation pakistan",
    "uae embassy attestation islamabad",
    "uae attestation charges in pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/attestation/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/attestation/`,
    title: "UAE Document Attestation from Pakistan | Travelaxis",
    description:
      "The full HEC/IBCC → MOFA → UAE Embassy → MOFAIC attestation chain, timelines, and charges for Pakistani nationals.",
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
            { name: "UAE Document Attestation", path: "/services/attestation" },
          ]),
          serviceJsonLd({
            name: "UAE Document Attestation from Pakistan",
            description:
              "Degree, marriage, birth, and experience certificate attestation for the UAE, covering the HEC/IBCC, MOFA, UAE Embassy, and MOFAIC chain for Pakistani nationals.",
            path: "/services/attestation",
            serviceType: "Document attestation consultancy",
          }),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: attestationFaqs.map((faq) => ({
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
      <AttestationPage />
    </>
  );
}
