import type { Metadata } from "next";
import CompanyFormationPage from "@/components/pages/CompanyFormationPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Company Formation in UAE – Complete Business Setup Services Dubai",
  description:
    "Expert UAE company formation: mainland, freezone, and offshore setup with structured documentation and full support—including guidance on residency-linked documentation where relevant.",
  keywords: [
    "company formation UAE",
    "business setup UAE",
    "start business Dubai",
    "UAE company registration",
    "trade license UAE",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/company-formation/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/company-formation/`,
    title:
      "Company Formation in UAE – Complete Business Setup Services Dubai",
    description:
      "Expert UAE company formation: mainland, freezone, and offshore setup with structured documentation and full support—including guidance on residency-linked documentation where relevant.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: "Company Formation", path: "/services/company-formation" },
          ]),
          serviceJsonLd({
            name: "Company Formation in UAE",
            description:
              "Mainland, freezone, and offshore company formation with structured documentation and full support.",
            path: "/services/company-formation",
            serviceType: "Company formation consultancy",
          }),
        ]}
      />
      <CompanyFormationPage />
    </>
  );
}
