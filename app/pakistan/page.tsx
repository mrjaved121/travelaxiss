import type { Metadata } from "next";
import PakistanHubPage from "@/components/pages/PakistanHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Services for Pakistani Nationals",
  description:
    "Travelaxis supports Pakistani nationals with UAE document attestation, visa documentation, and business setup — offices in Dubai and Lahore.",
  alternates: {
    canonical: `${SITE_URL}/pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/pakistan/`,
    title: "UAE Services for Pakistani Nationals | Travelaxis",
    description:
      "Document attestation, UAE visa documentation, and business setup support for clients in Pakistan.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "For Pakistan", path: "/pakistan" }]),
          pakistanOfficeJsonLd,
        ]}
      />
      <PakistanHubPage />
    </>
  );
}
