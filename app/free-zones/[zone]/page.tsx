import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FreeZonePage from "@/components/pages/FreeZonePage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";
import { freeZones } from "@/components/data/freeZones";

export function generateStaticParams() {
  return freeZones.map((zone) => ({ zone: zone.slug }));
}

type Props = { params: Promise<{ zone: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { zone: zoneSlug } = await params;
  const zone = freeZones.find((z) => z.slug === zoneSlug);
  if (!zone) {
    return {
      title: "Free zone not found",
      robots: { index: false, follow: true },
    };
  }

  const url = `${SITE_URL}/free-zones/${zone.slug}/`;

  return {
    title: zone.metaTitle,
    description: zone.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      title: zone.metaTitle,
      description: zone.metaDescription,
      url,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function Page({ params }: Props) {
  const { zone: zoneSlug } = await params;
  const zone = freeZones.find((z) => z.slug === zoneSlug);
  if (!zone) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Free Zones", path: "/free-zones" },
            { name: zone.name, path: `/free-zones/${zone.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `${zone.name} Company Formation Documentation`,
            description: zone.metaDescription,
            serviceType: "Free zone company formation documentation consultancy",
            url: `${SITE_URL}/free-zones/${zone.slug}/`,
            areaServed: {
              "@type": "Place",
              name: zone.emirate,
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
            mainEntity: zone.faqs.map((faq) => ({
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
      <FreeZonePage zone={zone} />
    </>
  );
}
