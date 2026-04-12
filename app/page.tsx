import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { professionalServiceJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Visa Consultancy UAE | Business Setup Dubai",
  description:
    "Professional visa consultancy and business setup services in UAE. Expert support for company formation, government approvals, and legal documentation in Dubai. 11+ years experience.",
  keywords: [
    "visa consultancy UAE",
    "business setup Dubai",
    "company formation UAE",
    "Dubai business services",
    "freezone company setup",
    "mainland company Dubai",
    "business consultancy UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  verification: {
    google: "zkDBpIKHKEwlOYkVQQ4OL-rcZna0NxhTkNqNn8VEYUE",
  },
  openGraph: {
    title: "Visa Consultancy UAE | Business Setup Dubai",
    description:
      "Professional visa consultancy and business setup services in UAE. Expert support for company formation and legal documentation in Dubai.",
    url: `${SITE_URL}/`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={professionalServiceJsonLd} />
      <HomePage />
    </>
  );
}
