import type { Metadata } from "next";
import CompanyFormationPage from "@/components/pages/CompanyFormationPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Company Formation in UAE – Complete Business Setup Services Dubai",
  description:
    "Start your business in UAE with expert company formation services. Mainland, freezone, offshore setup with fast approvals and full support.",
  keywords: [
    "company formation UAE",
    "business setup UAE",
    "start business Dubai",
    "UAE company registration",
    "trade license UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/company-formation`,
  },
  openGraph: {
    url: `${SITE_URL}/services/company-formation`,
    title:
      "Company Formation in UAE – Complete Business Setup Services Dubai",
    description:
      "Start your business in UAE with expert company formation services. Mainland, freezone, offshore setup with fast approvals and full support.",
  },
};

export default function Page() {
  return <CompanyFormationPage />;
}
