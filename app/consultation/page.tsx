import type { Metadata } from "next";
import ConsultationPage from "@/components/pages/ConsultationPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Tell us about your visa or business-setup plans and we'll help you understand the next steps. Book a consultation with Travelaxis.",
  alternates: {
    canonical: `${SITE_URL}/consultation/`,
  },
  openGraph: {
    title: "Book a Consultation | Travelaxis",
    description:
      "Tell us about your visa or business-setup plans and we'll help you understand the next steps.",
    url: `${SITE_URL}/consultation/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Consultation", path: "/consultation" }]),
          professionalServiceJsonLd,
        ]}
      />
      <ConsultationPage />
    </>
  );
}
