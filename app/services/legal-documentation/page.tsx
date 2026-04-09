import type { Metadata } from "next";
import LegalDocumentationPage from "@/components/pages/LegalDocumentationPage";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Legal Documentation & Corporate Documents UAE",
  description:
    "POA, MOA, agreements, attestation, and corporate document support for UAE businesses—prepared and managed with professional oversight.",
  alternates: {
    canonical: `${SITE_URL}/services/legal-documentation`,
  },
  openGraph: {
    url: `${SITE_URL}/services/legal-documentation`,
  },
};

export default function Page() {
  return <LegalDocumentationPage />;
}
