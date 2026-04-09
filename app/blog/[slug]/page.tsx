import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogDetailPage from "@/components/pages/BlogDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogData } from "@/components/data/blogContent";
import { blogPostingJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export function generateStaticParams() {
  return Object.keys(blogData).map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

const blogKeywords =
  "company formation UAE, business setup Dubai, freezone company, visa services, UAE business";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) {
    return {
      title: "Article not found",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/blog/${slug}/`;

  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blogKeywords.split(", ").map((k) => k.trim()),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      title: blog.metaTitle,
      description: blog.metaDescription,
      url,
      images: blog.image ? [{ url: blog.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: blog.image ? [blog.image] : undefined,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const blog = blogData[slug];
  if (!blog) {
    notFound();
  }

  return (
    <>
      <JsonLd data={blogPostingJsonLd(slug, blog)} />
      <BlogDetailPage slug={slug} />
    </>
  );
}
