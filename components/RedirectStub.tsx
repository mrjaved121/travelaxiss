import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/seo/site";

/**
 * Static-export redirect for a retired URL: instant meta refresh (Google treats it as a
 * permanent redirect), canonical to the target, noindex. Retired routes keep their folder
 * and render only this, so old indexed or bookmarked links don't 404.
 */
export function redirectMetadata(targetPath: string): Metadata {
  return {
    title: "Redirecting…",
    robots: { index: false, follow: true },
    alternates: { canonical: `${SITE_URL}${targetPath}` },
  };
}

export default function RedirectStub({ targetPath, label }: { targetPath: string; label: string }) {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${targetPath}`} />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-[#52606D]">
          This page has moved.{" "}
          <Link href={targetPath} className="font-semibold underline-offset-2 hover:underline" style={{ color: "#0A4D8C" }}>
            Continue to {label}
          </Link>
          .
        </p>
      </section>
    </>
  );
}
