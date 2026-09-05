import type { Metadata } from "next";
import LegalDocumentationPage from "@/components/pages/LegalDocumentationPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Legal Documentation Services UAE – MOA, POA & Attestation",
  description:
    "Get professional legal documentation services in UAE. We handle MOA, POA, attestation, contracts, and legal translation with full compliance.",
  keywords: [
    "legal documentation UAE",
    "MOA POA UAE",
    "certificate attestation UAE",
    "legal translation UAE",
    "business legal services UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/legal-documentation/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/legal-documentation/`,
    title: "Legal Documentation Services UAE – MOA, POA & Attestation | Travelaxis",
    description:
      "Get professional legal documentation services in UAE. We handle MOA, POA, attestation, contracts, and legal translation with full compliance.",
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
            { name: "Legal Documentation", path: "/services/legal-documentation" },
          ]),
          serviceJsonLd({
            name: "Legal Documentation Services in UAE",
            description:
              "MOA/POA preparation, certificate attestation, legal translation, and notarization support for UAE businesses.",
            path: "/services/legal-documentation",
            serviceType: "Legal documentation services",
          }),
        ]}
      />
      <LegalDocumentationPage />
    </>
  );
}
