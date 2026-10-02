import type { Metadata } from "next";
import UaeHubPage from "@/components/pages/UaeHubPage";
import { uaeHubFaqs } from "@/components/data/uaeHubFaqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "UAE Visa Services from Pakistan – Visit, Job Seeker & Golden",
  description:
    "Compare UAE visit visa, job seeker visa and Golden Visa routes for Pakistani applicants, and find the one that fits your situation.",
  keywords: [
    "uae visa services",
    "uae visa services from pakistan",
    "which uae visa do i need",
    "uae visit visa vs job seeker visa",
  ],
  alternates: {
    canonical: `${SITE_URL}/uae/`,
  },
  openGraph: {
    url: `${SITE_URL}/uae/`,
    title: "UAE Visa Services from Pakistan | Travelaxis",
    description:
      "Visit visa, job seeker visa and Golden Visa documentation support for the UAE, from our Dubai and Lahore offices.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "UAE Visa Services", path: "/uae" }]),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: uaeHubFaqs.map((faq) => ({
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
      <UaeHubPage />
    </>
  );
}
