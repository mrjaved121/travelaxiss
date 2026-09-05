import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo/site";

const TARGET_PATH = "/visit-visa/";

export const metadata: Metadata = {
  title: "Redirecting…",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE_URL}${TARGET_PATH}` },
};

export default function Page() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET_PATH}`} />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-[#667085]">
          This page has moved.{" "}
          <Link href={TARGET_PATH} className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
            Continue to Visit Visa Services
          </Link>
          .
        </p>
      </section>
    </>
  );
}
