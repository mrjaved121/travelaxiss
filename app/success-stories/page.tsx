import type { Metadata } from "next";
import SuccessStoriesPage from "@/components/pages/SuccessStoriesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "Genuine client stories from people Travelaxis has helped with UAE visas, business setup, and documentation support.",
  alternates: {
    canonical: `${SITE_URL}/success-stories/`,
  },
  openGraph: {
    title: "Success Stories | Travelaxis",
    description:
      "Genuine client stories from people Travelaxis has helped with UAE visas, business setup, and documentation support.",
    url: `${SITE_URL}/success-stories/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Success Stories", path: "/success-stories" }]),
          professionalServiceJsonLd,
        ]}
      />
      <SuccessStoriesPage />
    </>
  );
}
