import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using the Travelaxis website and engaging our UAE business and visa consultancy services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-2" style={{ color: "#111111" }}>
        Terms &amp; <span style={{ color: "#C9A24A" }}>Conditions</span>
      </h1>
      <p className="text-gray-600 text-sm mb-10">Last updated: April 9, 2026</p>
      <div className="space-y-6 text-gray-700">
        <p>
          By accessing this website or engaging Travelaxis for consultancy services, you agree to
          these terms. If you do not agree, please do not use our site or services.
        </p>
        <h2 className="text-xl font-semibold pt-4" style={{ color: "#111111" }}>
          Services
        </h2>
        <p>
          We provide professional consultancy relating to business setup, visas, and related
          processes in the UAE. Government and third-party decisions (approvals, timelines, fees) are
          outside our control.
        </p>
        <h2 className="text-xl font-semibold pt-4" style={{ color: "#111111" }}>
          No guarantee of outcomes
        </h2>
        <p>
          We do not guarantee visa grants, license approvals, or specific timelines. Final decisions
          rest with relevant authorities and institutions.
        </p>
        <h2 className="text-xl font-semibold pt-4" style={{ color: "#111111" }}>
          Limitation of liability
        </h2>
        <p>
          To the extent permitted by law, Travelaxis is not liable for indirect or consequential
          losses arising from use of this website or services. Our liability is limited to fees paid
          to us for the specific engagement, where applicable.
        </p>
        <h2 className="text-xl font-semibold pt-4" style={{ color: "#111111" }}>
          Governing law
        </h2>
        <p>
          These terms are governed by the laws of the United Arab Emirates. Disputes shall be
          subject to the courts of Dubai, UAE, unless otherwise agreed in writing.
        </p>
        <p className="pt-8">
          <Link href="/" className="text-sm font-medium underline" style={{ color: "#C9A24A" }}>
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
