import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Business Setup Services UAE - Company Formation Dubai",
  description:
    "Complete business setup services in UAE including company formation, government approvals, legal documentation, and business support. Expert assistance for mainland, freezone, and offshore companies.",
  keywords: [
    "business setup UAE",
    "company formation Dubai",
    "government services UAE",
    "legal documentation Dubai",
    "freezone company setup",
    "mainland company formation",
  ],
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
  openGraph: {
    title: "Business Setup Services UAE | Travelaxis",
    description:
      "Company formation, government approvals, legal documentation, and ongoing business support in the UAE.",
    url: `${SITE_URL}/services`,
  },
};

export default function Page() {
  return <ServicesPage />;
}
