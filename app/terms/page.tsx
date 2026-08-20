import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Travelaxis website and engaging our UAE business and visa documentation consultancy services.",
  alternates: {
    canonical: `${SITE_URL}/terms/`,
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white text-[#1D2939]">
      <JsonLd data={breadcrumbJsonLd([{ name: "Terms & Conditions", path: "/terms" }])} />
      <h1 className="page-title mb-2">
        Terms &amp; <span style={{ color: "#155EEF" }}>Conditions</span>
      </h1>
      <p className="text-[#667085] text-sm mb-10">Last updated: April 9, 2026</p>
      <div className="space-y-6 text-[#667085]">
        <p>
          By accessing this website or engaging Travelaxis for consultancy services, you agree to
          these terms. If you do not agree, please do not use our site or services.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          Services
        </h2>
        <p>
          We provide professional consultancy relating to business setup, UAE visa documentation and
          application guidance, and related processes. Government and third-party decisions
          (approvals, timelines, fees) are outside our control.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          No guarantee of outcomes
        </h2>
        <p>
          We do not guarantee visa grants, license approvals, or specific timelines. Final decisions
          rest with relevant authorities and institutions.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          Limitation of liability
        </h2>
        <p>
          To the extent permitted by law, Travelaxis is not liable for indirect or consequential
          losses arising from use of this website or services. Our liability is limited to fees paid
          to us for the specific engagement, where applicable.
        </p>
        <h2 className="section-title pt-4 text-[#1D2939]">
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of the United Arab Emirates. Disputes shall be
          subject to the courts of Dubai, UAE, unless otherwise agreed in writing.
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
