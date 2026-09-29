import type { Metadata } from "next";
import PakistanHubPage from "@/components/pages/PakistanHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, pakistanOfficeJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visa Services for Pakistani Nationals – Visit & Study",
  description:
    "Visit and study visa documentation for Pakistani nationals: Dubai, UK, USA, Schengen/Germany and Australia — offices in Dubai and Lahore.",
  keywords: [
    "visa services for pakistanis",
    "dubai visit visa from pakistan",
    "uk visa from pakistan",
    "canada visa from pakistan",
    "australia visa from pakistan",
    "usa visa from pakistan",
    "germany visa from pakistan",
    "schengen visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/pakistan/`,
  },
  openGraph: {
    url: `${SITE_URL}/pakistan/`,
    title: "Visa Services for Pakistani Nationals | Travelaxis",
    description:
      "Visit and study visa documentation for clients in Pakistan.",
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
