import type { Metadata } from "next";
import DubaiHubPage from "@/components/pages/DubaiHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Travelaxis Across Dubai – Areas We Serve | Travelaxis",
  description:
    "Travelaxis is based in Al Qusais, Dubai, and supports company formation, government services, legal documentation, and visa documentation for clients across Deira, Business Bay, Bur Dubai, JLT, and beyond.",
  alternates: {
    canonical: `${SITE_URL}/dubai/`,
  },
  openGraph: {
    url: `${SITE_URL}/dubai/`,
    title: "Travelaxis Across Dubai – Areas We Serve",
    description:
      "Company formation, government services, legal documentation, and visa documentation support for clients across Dubai.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Dubai", path: "/dubai" }]),
        ]}
      />
      <DubaiHubPage />
    </>
  );
}
