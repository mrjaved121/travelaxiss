import type { Metadata } from "next";
import BusinessSupportPage from "@/components/pages/BusinessSupportPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Ongoing Business Support UAE",
  description:
    "Retainer and ongoing support for UAE companies: compliance touchpoints, documentation, and operational assistance after formation.",
  alternates: {
    canonical: `${SITE_URL}/services/business-support`,
  },
  openGraph: {
    url: `${SITE_URL}/services/business-support`,
  },
};

export default function Page() {
  return <BusinessSupportPage />;
}
