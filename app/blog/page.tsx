import type { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogListingJsonLd, breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Blog | Visa Documentation & UAE Guides",
  description:
    "Visa documentation guides for applicants from Pakistan, plus general information on UAE visas and business rules — not legal advice.",
  keywords: [
    "visa guides pakistan",
    "visit visa documentation",
    "study visa documentation",
    "dubai visit visa from pakistan",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    title: "Blog | Visa & UAE Guides",
    description:
      "Visa documentation guides and general UAE information.",
    url: `${SITE_URL}/blog/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Blog", path: "/blog" }]), blogListingJsonLd()]} />
      <BlogPage />
    </>
  );
}
