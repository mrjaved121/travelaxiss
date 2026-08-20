import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import BlogDetailPage from "@/components/pages/BlogDetailPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogData } from "@/components/data/blogContent";
import { blogRedirects } from "@/components/data/blogRedirects";
import { blogFaqJsonLd, blogHowToJsonLd, blogPostingJsonLd, breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export function generateStaticParams() {
  const slugs = new Set([...Object.keys(blogData), ...Object.keys(blogRedirects)]);
  return [...slugs].map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

const blogKeywords =
  "company formation UAE, business setup Dubai, freezone company, UAE visa documentation, visa application support UAE, UAE business";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const target = blogRedirects[slug];
  if (target) {
    const url = `${SITE_URL}/blog/${target}/`;
    return {
      title: "Redirecting…",
      robots: { index: false, follow: true },
      alternates: { canonical: url },
    };
  }

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
      images: [blog.image ? { url: blog.image } : DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [blog.image ?? DEFAULT_OG_IMAGE.url],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const target = blogRedirects[slug];
  if (target) {
    const targetPath = `/blog/${target}/`;
    return (
      <>
        <meta httpEquiv="refresh" content={`0; url=${targetPath}`} />
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <p className="text-gray-600">
            This guide has moved.{" "}
            <Link href={targetPath} className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
              Continue to the current page
            </Link>
            .
          </p>
        </section>
      </>
    );
  }

  const blog = blogData[slug];
  if (!blog) {
    notFound();
  }

  const faqSchema = blogFaqJsonLd(blog);
  const howToSchema = blogHowToJsonLd(blog);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Blog", path: "/blog" },
            { name: blog.title, path: `/blog/${slug}` },
          ]),
          blogPostingJsonLd(slug, blog),
          ...(faqSchema ? [faqSchema] : []),
          ...(howToSchema ? [howToSchema] : []),
        ]}
      />
      <BlogDetailPage slug={slug} />
    </>
  );
}
