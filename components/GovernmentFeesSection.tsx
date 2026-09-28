import type { ReactNode } from "react";

type FeeRow = { item: string; amount: string };

type Props = {
  heading: string;
  intro: ReactNode;
  rows: FeeRow[];
  note: ReactNode;
  sourceLabel: string;
  sourceHref: string;
  className?: string;
};

/**
 * Official government fee table. Only list amounts copied from the linked
 * official source — never estimates, PKR conversions or Travelaxis charges.
 */
export default function GovernmentFeesSection({ heading, intro, rows, note, sourceLabel, sourceHref, className = "bg-white" }: Props) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-3">{heading}</h2>
        <p className="text-[#667085] leading-relaxed mb-6">{intro}</p>
        <div className="rounded-3xl overflow-hidden bg-white" style={{ border: "1px solid var(--card-line)" }}>
          <table className="w-full text-sm">
            <thead>
              <tr style={{ backgroundColor: "#F5F8FF" }}>
                <th scope="col" className="text-left font-semibold px-5 py-3" style={{ color: "#1D2939" }}>Fee</th>
                <th scope="col" className="text-right font-semibold px-5 py-3" style={{ color: "#1D2939" }}>Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.item} style={{ borderTop: "1px solid var(--card-line)" }}>
                  <td className="px-5 py-3 text-[#667085]">{row.item}</td>
                  <td className="px-5 py-3 text-right font-semibold whitespace-nowrap" style={{ color: "#1D2939" }}>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-[#667085] mt-4 leading-relaxed">
          {note} Source:{" "}
          <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#155EEF" }}>
            {sourceLabel}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
