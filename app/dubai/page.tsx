import type { Metadata } from "next";
import DubaiHubPage from "@/components/pages/DubaiHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Travelaxis Across Dubai – Areas We Serve",
  description:
    "Company formation, government services, legal documentation, and visa documentation support for clients across Dubai, from our Al Qusais office.",
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
