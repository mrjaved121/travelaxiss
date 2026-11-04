import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VisitVisaCountryPage from "@/components/pages/VisitVisaCountryPage";
import { getNewVisitVisaDestination, newVisitVisaDestinations } from "@/lib/data/visit-visa-destinations";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

type PageProps = { params: Promise<{ country: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return newVisitVisaDestinations.map(({ slug }) => ({ country: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const destination = getNewVisitVisaDestination(country);
  if (!destination) return {};

  const title = `${destination.name} Visit Visa Support from Pakistan`;
  const description = `Travelaxis provides visit-visa application support for travel to ${destination.name}, including clear guidance on preparing your application through the relevant official process.`;

  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/visit-visa/${destination.slug}/` },
    openGraph: {
      title: `${destination.name} Visit Visa | Travelaxis`,
      description,
      url: `${SITE_URL}/visit-visa/${destination.slug}/`,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { country } = await params;
  const destination = getNewVisitVisaDestination(country);
  if (!destination) notFound();

  const path = `/visit-visa/${destination.slug}`;
  return (
    <>
      <JsonLd data={[
        breadcrumbJsonLd([
          { name: "Visit Visa Services", path: "/visit-visa" },
          { name: destination.region, path: "/visit-visa" },
          { name: `${destination.name} Visit Visa`, path },
        ]),
        serviceJsonLd({
          name: `${destination.name} Visit Visa Support`,
          description: destination.description,
          path,
          serviceType: "Visit visa application support",
        }),
      ]} />
      <VisitVisaCountryPage destination={destination} />
    </>
  );
}
