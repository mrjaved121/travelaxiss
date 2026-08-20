import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Travelaxis privacy policy: how we handle your information when you use our website and consultancy services.",
  alternates: {
    canonical: `${SITE_URL}/privacy/`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-[#1D2939]">
      <JsonLd data={breadcrumbJsonLd([{ name: "Privacy Policy", path: "/privacy" }])} />
      <h1 className="page-title mb-2">
        Privacy <span style={{ color: "#155EEF" }}>Policy</span>
      </h1>
      <p className="text-[#667085] text-sm mb-10">Last updated: April 9, 2026</p>
      <div className="prose prose-gray max-w-none space-y-6 text-[#667085]">
        <p>
          Travelaxis (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy describes
          how we collect, use, and protect information when you visit our website or contact us for
          consultancy services in the UAE.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          Information we may collect
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Contact details you provide (name, email, phone, WhatsApp)</li>
          <li>Messages and documents you send for service enquiries</li>
          <li>Basic technical data such as browser type and approximate location (via analytics, if enabled)</li>
        </ul>
        <h2 className="section-title pt-4 text-[#1D2939]">
          How we use information
        </h2>
        <p>
          We use this information to respond to enquiries, provide consultancy coordination, and
          improve our services. We do not sell your personal data to third parties for marketing.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          Contact
        </h2>
        <p>
          For privacy-related requests, contact us at{" "}
          <a href="mailto:info@travelaxis.me" className="underline" style={{ color: "#155EEF" }}>
            info@travelaxis.me
          </a>
          .
        </p>
        <p className="pt-8">
          <Link href="/" className="text-sm font-medium underline" style={{ color: "#155EEF" }}>
            Return to Travelaxis home
          </Link>
        </p>
      </div>
    </div>
  );
}
