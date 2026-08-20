"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const HIDDEN_ON = ["/visa-finder", "/consultation"];

/** Sticky bottom "Check Eligibility" bar shown only on mobile, above the site's fixed WhatsApp button. */
export default function MobileStickyCta() {
  const pathname = usePathname();
  if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return null;
  }

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40"
      style={{
        backgroundColor: "#FFFFFF",
        borderTop: "1px solid var(--card-line)",
        paddingBottom: "env(safe-area-inset-bottom, 0px)",
      }}
    >
      <div className="px-4 py-3">
        <Link
          href="/visa-finder"
          className="btn w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full transition-all hover:opacity-90"
          style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
        >
          <span>Check Eligibility</span>
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
