import type { Metadata } from "next";
import EmiratesHubPage from "@/components/pages/EmiratesHubPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Travelaxis Across the UAE – Emirates We Serve | Travelaxis",
  description:
    "Travelaxis is based in Al Qusais, Dubai, and supports company formation, government services, legal documentation, and visa documentation for clients across Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain.",
  alternates: {
    canonical: `${SITE_URL}/emirates/`,
  },
  openGraph: {
    url: `${SITE_URL}/emirates/`,
    title: "Travelaxis Across the UAE – Emirates We Serve",
    description:
      "Company formation, government services, legal documentation, and visa documentation support for clients across every UAE emirate.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Emirates", path: "/emirates" }]),
        ]}
      />
      <EmiratesHubPage />
    </>
  );
}
