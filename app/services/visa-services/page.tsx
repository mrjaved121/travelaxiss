import type { Metadata } from "next";
import VisaServicesPage from "@/components/pages/VisaServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title:
    "UAE Visa Documentation & Application Support | Consultancy Dubai | Travelaxis",
  description:
    "UAE visa consultancy and documentation support: investor, employment, family, visit, renewal, and cancellation assistance. Application guidance and coordination through official UAE channels.",
  keywords: [
    "UAE visa services",
    "visa documentation UAE",
    "UAE visa consultancy",
    "visa application support UAE",
    "UAE visa renewal support",
    "family visa UAE",
    "investor visa UAE",
    "employment visa UAE",
    "visit visa UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/visa-services`,
  },
  openGraph: {
    url: `${SITE_URL}/services/visa-services`,
    title: "UAE Visa Documentation & Consultancy | Travelaxis",
    description:
      "Documentation assistance and application guidance for UAE visas—investor, employment, family, visit, renewals, and more—through official channels.",
  },
};

export default function Page() {
  return <VisaServicesPage />;
}
