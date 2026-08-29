import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type RelatedLink = { href: string; label: string };

/**
 * "Explore other services" cross-link row shown near the foot of a category page,
 * linking to sibling category hubs so visitors can move sideways without the nav.
 */
export default function RelatedLinks({
  heading = "Explore other services",
  links,
}: {
  heading?: string;
  links: RelatedLink[];
}) {
  return (
    <section
      aria-labelledby="related-links-heading"
      className="py-16"
      style={{ backgroundColor: "#F5F8FF" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-links-heading" className="subsection-title mb-6">
          {heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between gap-3 rounded-2xl bg-white p-5 transition-all hover:-translate-y-0.5 hover:shadow-md card-hover"
              style={{ border: "1px solid var(--card-line)" }}
            >
              <span className="font-semibold text-[0.9375rem]" style={{ color: "#1D2939" }}>
                {link.label}
              </span>
              <ArrowUpRight
                className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: "#155EEF" }}
                aria-hidden
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
