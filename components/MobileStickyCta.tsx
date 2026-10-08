"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, MessageCircle } from "lucide-react";
import { trackEvent } from "@/lib/seo/analytics";

const HIDDEN_ON = ["/visa-finder", "/consultation"];
const WHATSAPP_HREF = `https://wa.me/971589867555?text=${encodeURIComponent(
  "Hello Travelaxis, I need help with a visit visa."
)}`;

/**
 * Mobile-only bottom bar: "Check requirements" (→ home hero picker) + WhatsApp.
 * Replaces the floating WhatsApp bubble on mobile so the two never stack.
 */
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
      <div className="flex gap-2 px-4 py-3">
        <Link
          href="/#check-requirements"
          className="btn flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-4 text-[0.9375rem] font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#0A4D8C", color: "#FFFFFF" }}
        >
          <span className="whitespace-nowrap">Get my checklist</span>
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Link>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("whatsapp_click", { page: `mobile_bar${pathname}` })}
          className="btn flex h-12 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] font-semibold transition-all hover:opacity-90"
          style={{ backgroundColor: "#25D366", color: "#073B1E" }}
          aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
        >
          <MessageCircle className="w-5 h-5" aria-hidden />
          <span className="whitespace-nowrap">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
