import { SITE_URL } from "./site";
import { blogDisplayDateToIso } from "./blog-dates";
import { faqItems } from "@/lib/data/faqs";
import { blogPostSummaries } from "@/components/data/blogIndex";

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Travelaxis",
  description:
    "Professional visa consultancy and business setup services in UAE",
  url: SITE_URL,
  telephone: "+971589867555",
  email: "info@travelaxis.me",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2048",
    longitude: "55.2708",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1789",
  },
};

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

type BlogEntry = {
  title: string;
  metaDescription: string;
  image: string;
  /** Display date from blog data, e.g. "April 9, 2026" */
  date?: string;
  /** Optional ISO yyyy-MM-dd when content was revised; defaults to published date */
  dateModifiedIso?: string;
};

export function blogListingJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Travelaxis Blog",
    description:
      "Articles on UAE business setup, company formation, visas, and compliance.",
    numberOfItems: blogPostSummaries.length,
    itemListElement: blogPostSummaries.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.id}/`,
    })),
  };
}

export function blogPostingJsonLd(slug: string, blog: BlogEntry) {
  const datePublished = blog.date
    ? blogDisplayDateToIso(blog.date)
    : blogDisplayDateToIso("April 9, 2026");
  const dateModified =
    blog.dateModifiedIso && /^\d{4}-\d{2}-\d{2}$/.test(blog.dateModifiedIso)
      ? blog.dateModifiedIso
      : datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription,
    image: blog.image,
    datePublished,
    dateModified,
    author: {
      "@type": "Organization",
      name: "Travelaxis",
    },
    publisher: {
      "@type": "Organization",
      name: "Travelaxis",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}/`,
    },
  };
}
