import type { Metadata } from "next";
import CompanyFormationPage from "@/components/pages/CompanyFormationPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Company Formation UAE | Mainland & Freezone",
  description:
    "Mainland, freezone, and offshore company formation in the UAE. License processing, structure advice, and end-to-end setup support with Travelaxis.",
  alternates: {
    canonical: `${SITE_URL}/services/company-formation`,
  },
  openGraph: {
    url: `${SITE_URL}/services/company-formation`,
  },
};

export default function Page() {
  return <CompanyFormationPage />;
}
