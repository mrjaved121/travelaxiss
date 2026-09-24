import Link from "next/link";
import type { ReactNode } from "react";

export type InlineLinkItem = { label: string; href: string };

/**
 * Renders a list of internal links inline within prose, e.g. "A, B, C, and D" —
 * used instead of card-grid "related pages" blocks so cross-links read as
 * natural contextual mentions rather than boilerplate navigation.
 */
export default function InlineLinkList({ items }: { items: InlineLinkItem[] }) {
  const nodes: ReactNode[] = [];
  items.forEach((item, i) => {
    if (i > 0) {
      if (items.length === 2) nodes.push(" and ");
      else if (i === items.length - 1) nodes.push(", and ");
      else nodes.push(", ");
    }
    nodes.push(
      <Link
        key={item.href}
        href={item.href}
        className="font-semibold underline-offset-2 hover:underline"
        style={{ color: "#155EEF" }}
      >
        {item.label}
      </Link>,
    );
  });
  return <>{nodes}</>;
}
