import type { Metadata } from "next";
import BlogPage from "@/components/pages/BlogPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogListingJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Blog - Business Setup & Company Formation UAE",
  description:
    "Expert insights and guides on company formation, business setup, visa services, and entrepreneurship in UAE and Dubai.",
  keywords: [
    "UAE business blog",
    "company formation guide",
    "Dubai business tips",
    "freezone setup guide",
    "UAE visa information",
  ],
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog | UAE Business & Visas",
    description:
      "Guides and articles on company formation, visas, and doing business in the UAE.",
    url: `${SITE_URL}/blog`,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogListingJsonLd()} />
      <BlogPage />
    </>
  );
}
