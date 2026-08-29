import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

/**
 * Visible breadcrumb trail for interior pages. "Home" is prepended automatically;
 * the last crumb renders as plain text (current page). Pair with breadcrumbJsonLd
 * in the route's metadata file so the visible trail and the structured data match.
 */
export default function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const items: Crumb[] = [{ name: "Home", href: "/" }, ...trail];

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 list-none p-0 m-0 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.name} className="flex items-center gap-x-1.5">
              {index > 0 && (
                <ChevronRight
                  className="w-3.5 h-3.5 shrink-0"
                  style={{ color: "#98A2B3" }}
                  aria-hidden
                />
              )}
              {isLast || !item.href ? (
                <span
                  className="font-medium"
                  style={{ color: "#1D2939" }}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="font-medium transition-colors hover:underline"
                  style={{ color: "#667085" }}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
