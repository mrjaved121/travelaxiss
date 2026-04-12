import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Business Setup & UAE Visa Documentation Services | Travelaxis",
  description:
    "Company formation, government coordination, legal documentation, business support, and UAE visa documentation and consultancy—structured assistance for mainland, freezone, and offshore companies.",
  keywords: [
    "business setup UAE",
    "UAE visa documentation",
    "visa application support UAE",
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
    title: "Business Setup & UAE Visa Documentation | Travelaxis",
    description:
      "Company formation, government coordination, legal documentation, business support, and UAE visa documentation assistance.",
    url: `${SITE_URL}/services`,
  },
};

export default function Page() {
  return <ServicesPage />;
}
