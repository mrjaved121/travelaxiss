"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackEvent } from "@/lib/seo/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: "whatsapp_click" | "phone_click";
  location: string;
  children: ReactNode;
};

/** Plain <a> that records a WhatsApp/phone click; lets the rest of the homepage stay a server component. */
export default function TrackedLink({ event, location, children, ...rest }: Props) {
  return (
    <a {...rest} onClick={() => trackEvent(event, { page: location })}>
      {children}
    </a>
  );
}
