import type { Metadata } from "next";
import GovernmentServicesPage from "@/components/pages/GovernmentServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title:
    "Government Services UAE – Business Approvals & Regulatory Support Dubai",
  description:
    "Coordination support for UAE business approvals: documentation preparation and submission assistance for Dubai Chamber, customs registration, and regulatory steps—aiming to reduce avoidable delays.",
  keywords: [
    "government services UAE",
    "Dubai Chamber registration UAE",
    "customs registration UAE",
    "business approvals UAE",
    "government approvals Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/government-services`,
  },
  openGraph: {
    url: `${SITE_URL}/services/government-services`,
    title:
      "Government Services UAE – Business Approvals & Regulatory Support Dubai",
    description:
      "Coordination support for UAE business approvals: documentation preparation and submission assistance for Dubai Chamber, customs registration, and regulatory steps.",
  },
};

export default function Page() {
  return <GovernmentServicesPage />;
}
