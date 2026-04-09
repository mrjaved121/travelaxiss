import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Travelaxis: trusted visa consultancy and business formation experts serving Dubai and the UAE with structured processes and client-focused support.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About Travelaxis | UAE Business Consultancy",
    description:
      "Trusted visa consultancy and business formation experts in Dubai and the UAE.",
    url: `${SITE_URL}/about`,
  },
};

export default function Page() {
  return <AboutPage />;
}
