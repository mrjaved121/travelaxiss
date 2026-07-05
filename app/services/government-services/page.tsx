import type { Metadata } from "next";
import GovernmentServicesPage from "@/components/pages/GovernmentServicesPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title:
    "Government Services UAE – Business Approvals & Regulatory Support Dubai",
  description:
    "Coordination support for UAE business approvals: documentation preparation and submission assistance for Dubai Chamber, customs registration, and regulatory steps—aiming to reduce avoidable delays.",
  keywords: [
    "government services UAE",
    "Dubai Chamber registration UAE",
    "customs registration UAE",
    "business approvals UAE",
    "government approvals Dubai",
  ],
  alternates: {
    canonical: `${SITE_URL}/services/government-services/`,
  },
  openGraph: {
    url: `${SITE_URL}/services/government-services/`,
    title:
      "Government Services UAE – Business Approvals & Regulatory Support Dubai",
    description:
      "Coordination support for UAE business approvals: documentation preparation and submission assistance for Dubai Chamber, customs registration, and regulatory steps.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Services", path: "/services" },
            { name: "Government Services", path: "/services/government-services" },
          ]),
          serviceJsonLd({
            name: "Government Services in UAE",
            description:
              "Coordination and documentation support for UAE business approvals, Dubai Chamber registration, and customs registration.",
            path: "/services/government-services",
            serviceType: "Government liaison and approvals coordination",
          }),
        ]}
      />
      <GovernmentServicesPage />
    </>
  );
}
