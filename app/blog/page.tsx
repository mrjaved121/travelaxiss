import type { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogListingJsonLd, breadcrumbJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Blog | UAE Business Setup & Visa Documentation Guides",
  description:
    "Expert insights on company formation, compliance, and UAE visa rules and documentation—for general information; not legal advice.",
  keywords: [
    "UAE business blog",
    "company formation guide",
    "UAE visa documentation",
    "visa application support UAE",
    "Dubai business tips",
    "freezone setup guide",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog/`,
  },
  openGraph: {
    title: "Blog | UAE Business & Visa Documentation",
    description:
      "Guides on company formation, compliance, and UAE visa documentation topics.",
    url: `${SITE_URL}/blog/`,
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
