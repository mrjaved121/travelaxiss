import type { Metadata } from "next";
import VisaServicesPage from "@/components/pages/VisaServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visa Services | Investor, Employment & Family Visas",
  description:
    "UAE visa consultancy: investor and partner visas, employment visas, family sponsorship, visit and tourist visas, renewals, and cancellations. Expert support with Travelaxis.",
  alternates: {
    canonical: `${SITE_URL}/services/visa-services`,
  },
  openGraph: {
    url: `${SITE_URL}/services/visa-services`,
    title: "UAE Visa Services | Travelaxis",
    description:
      "Complete UAE visa support—investor, employment, family, visit, renewals, and more.",
  },
};

export default function Page() {
  return <VisaServicesPage />;
}
