import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "About Travelaxis | UAE Business & Visa Documentation Consultancy",
  description:
    "Learn how Travelaxis supports Dubai and UAE clients with company formation, regulatory coordination, and UAE visa documentation and consultancy—structured processes and client-focused support.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Travelaxis | UAE Business Consultancy",
    description:
      "Trusted UAE consultancy for business formation and visa documentation support in Dubai and the UAE.",
    url: `${SITE_URL}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
