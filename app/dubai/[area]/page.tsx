import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DubaiAreaPage from "@/components/pages/DubaiAreaPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";
import { dubaiAreas } from "@/components/data/dubaiAreas";

export function generateStaticParams() {
  return dubaiAreas.map((area) => ({ area: area.slug }));
}

type Props = { params: Promise<{ area: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area: areaSlug } = await params;
  const area = dubaiAreas.find((a) => a.slug === areaSlug);
  if (!area) {
    return {
      title: "Area not found",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/dubai/${area.slug}/`;

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: area.metaTitle,
      description: area.metaDescription,
      url,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const { area: areaSlug } = await params;
  const area = dubaiAreas.find((a) => a.slug === areaSlug);
  if (!area) {
    notFound();
  }

  const faqs = [...area.faqs];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Dubai", path: "/dubai" },
            { name: area.name, path: `/dubai/${area.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Business Setup & Visa Documentation in ${area.name}, Dubai`,
            description: area.metaDescription,
            serviceType: "Business setup and visa documentation consultancy",
            url: `${SITE_URL}/dubai/${area.slug}/`,
            areaServed: {
              "@type": "Place",
              name: area.fullLabel,
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
      <DubaiAreaPage area={area} />
    </>
  );
}
