import type { Metadata } from "next";
import GovernmentServicesPage from "@/components/pages/GovernmentServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Government Services & Approvals UAE",
  description:
    "Government relations and approval support in the UAE: Dubai Chamber, licensing, and related services handled with clear processes.",
  alternates: {
    canonical: `${SITE_URL}/services/government-services`,
  },
  openGraph: {
    url: `${SITE_URL}/services/government-services`,
  },
};

export default function Page() {
  return <GovernmentServicesPage />;
}
