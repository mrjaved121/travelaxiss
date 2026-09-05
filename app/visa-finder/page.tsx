import type { Metadata } from "next";
import VisaFinderPage from "@/components/pages/VisaFinderPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, professionalServiceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visa Finder – Explore Your Visa Pathway Options",
  description:
    "Answer a few simple questions and discover which visa pathways may be worth exploring for your profile — a free starting point, not an official eligibility check.",
  alternates: {
    canonical: `${SITE_URL}/visa-finder/`,
  },
  openGraph: {
    title: "Visa Finder – Explore Your Visa Pathway Options | Travelaxis",
    description:
      "Answer a few simple questions and discover which visa pathways may be worth exploring for your profile.",
    url: `${SITE_URL}/visa-finder/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Visa Finder", path: "/visa-finder" }]),
          professionalServiceJsonLd,
        ]}
      />
      <VisaFinderPage />
    </>
  );
}
