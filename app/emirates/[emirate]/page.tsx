import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EmiratePage from "@/components/pages/EmiratePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";
import { emirates } from "@/components/data/emirates";

export function generateStaticParams() {
  return emirates.map((emirate) => ({ emirate: emirate.slug }));
}

type Props = { params: Promise<{ emirate: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { emirate: emirateSlug } = await params;
  const emirate = emirates.find((e) => e.slug === emirateSlug);
  if (!emirate) {
    return {
      title: "Emirate not found",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/emirates/${emirate.slug}/`;

  return {
    title: emirate.metaTitle,
    description: emirate.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: emirate.metaTitle,
      description: emirate.metaDescription,
      url,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const { emirate: emirateSlug } = await params;
  const emirate = emirates.find((e) => e.slug === emirateSlug);
  if (!emirate) {
    notFound();
  }

  const faqs = [...emirate.faqs];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Emirates", path: "/emirates" },
            { name: emirate.name, path: `/emirates/${emirate.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Business Setup & Visa Documentation in ${emirate.name}`,
            description: emirate.metaDescription,
            serviceType: "Business setup and visa documentation consultancy",
            url: `${SITE_URL}/emirates/${emirate.slug}/`,
            areaServed: {
              "@type": "Place",
              name: emirate.name,
            },
            provider: {
              "@type": "ProfessionalService",
              "@id": `${SITE_URL}/#organization`,
              name: "Travelaxis",
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          },
        ]}
      />
      <EmiratePage emirate={emirate} />
    </>
  );
}
