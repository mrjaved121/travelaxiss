import type { ReactNode } from "react";

type Props = {
  heading: string;
  intro: ReactNode;
  items: string[];
  note: ReactNode;
  sourceLabel: string;
  sourceHref: string;
  className?: string;
};

/**
 * Describes the official government fee components for a visa, without quoting
 * any amount — site policy is not to publish prices on any page, since fees are
 * reviewed periodically by the issuing government and a stale figure here would
 * be misleading. Always link to the official fee page for the current amount.
 */
export default function GovernmentFeesSection({ heading, intro, items, note, sourceLabel, sourceHref, className = "bg-white" }: Props) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-3">{heading}</h2>
        <p className="text-[#667085] leading-relaxed mb-6">{intro}</p>
        <ul className="grid sm:grid-cols-2 gap-3 mb-4">
          {items.map((item) => (
            <li key={item} className="text-[#667085] text-sm rounded-xl p-4" style={{ backgroundColor: "#F5F8FF", border: "1px solid var(--card-line)" }}>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-sm text-[#667085] leading-relaxed">
          {note} We don&apos;t quote an amount here since it&apos;s reviewed periodically — check the current fee on{" "}
          <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
            {sourceLabel}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
