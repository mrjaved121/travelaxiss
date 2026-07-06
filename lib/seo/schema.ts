import { SITE_URL } from "./site";
import { blogDisplayDateToIso } from "./blog-dates";
import { faqItems } from "@/lib/data/faqs";
import { blogPostSummaries } from "@/components/data/blogIndex";

export const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Travelaxis",
  description:
    "UAE business setup, company formation, and visa documentation and consultancy services",
  url: SITE_URL,
  telephone: "+971589867555",
  email: "info@travelaxis.me",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Qusais",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.2048",
    longitude: "55.2708",
  },
  areaServed: {
    "@type": "Country",
    name: "United Arab Emirates",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

/** Reusable breadcrumb trail for any non-home page. `path` should include a leading slash, e.g. "/services/visa-services". */
export function breadcrumbJsonLd(
  trail: { name: string; path: string }[],
) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${item.path}/`,
    })),
  };
}

/** schema.org/Service for a specific service sub-page (e.g. company formation, visa documentation). */
export function serviceJsonLd({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE_URL}${path}/`,
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    provider: {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#organization`,
      name: "Travelaxis",
    },
  };
}

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
      "Articles on UAE business setup, company formation, visa documentation topics, and compliance.",
    numberOfItems: blogPostSummaries.length,
    itemListElement: blogPostSummaries.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: post.title,
      url: `${SITE_URL}/blog/${post.id}/`,
    })),
  };
}

/** FAQPage schema for a blog post's own embedded FAQ section(s), if any. Returns null when the post has no FAQs. */
export function blogFaqJsonLd(blog: {
  content?: { sections?: { faqs?: { question: string; answer: string }[] }[] };
}) {
  const faqs = (blog.content?.sections ?? []).flatMap(
    (section) => section.faqs ?? [],
  );
  if (faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
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
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}/`,
    },
  };
}
