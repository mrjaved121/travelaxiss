import type { Metadata } from "next";
import ApplyPage from "@/components/pages/ApplyPage";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo/site";

const description =
  "Securely submit your visa documents to Travelaxis: passport, ID, bank statement and degree. Start your visit, job seeker, study or Golden Visa application.";

export const metadata: Metadata = {
  title: "Submit Your Visa Documents",
  description,
  alternates: {
    canonical: `${SITE_URL}/apply/`,
  },
  openGraph: {
    title: "Submit Your Visa Documents | Travelaxis",
    description,
    url: `${SITE_URL}/apply/`,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={[breadcrumbJsonLd([{ name: "Submit Documents", path: "/apply" }])]} />
      <ApplyPage />
    </>
  );
}
