import { CheckCircle, XCircle } from "lucide-react";

/**
 * IRCC only lets authorized representatives (CICC-licensed consultants, Canadian lawyers/paralegals,
 * Québec notaries) charge for advising on, completing or submitting a Canada application — "in Canada
 * or abroad". Travelaxis is not one, so Canada pages are information only and paid help is limited to
 * what IRCC lists as help that needs no representative. Source checked 2026-09-28:
 * https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html
 */
export const IRCC_REPRESENTATIVES_HREF =
  "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigration-citizenship-representative/learn-about-representatives.html";

export const CANADA_REP_FAQ = {
  q: "Can Travelaxis prepare or submit my Canada application?",
  a: "No. IRCC only allows authorized representatives — CICC-licensed immigration consultants, Canadian lawyers and paralegals, and Québec notaries — to charge for advising on, filling out or submitting a Canada application, including visitor visas and study permits, and it may return or refuse an application that uses an unauthorized paid representative. Travelaxis is not an authorized representative, so our paid help for Canada is limited to document translation, travel bookings, and help scanning, uploading and navigating IRCC's online system. IRCC publishes all forms and instructions free, so you can apply yourself.",
};

const canHelp = [
  "Translating your documents into English or French",
  "Booking flights and hotels for your trip",
  "Scanning and uploading your documents, and showing you how to use IRCC's online system",
];

const cannotHelp = [
  "Advising you on which visa or program to apply for",
  "Filling out, checking or submitting your application",
  "Dealing with IRCC on your behalf",
];

export default function CanadaHelpNotice({ id = "canada-help", className = "bg-white" }: { id?: string; className?: string }) {
  return (
    <section id={id} className={`py-16 scroll-mt-24 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title mb-3">What Travelaxis Can and Can&apos;t Do for Canada</h2>
        <p className="text-[#52606D] leading-relaxed mb-6">
          IRCC only allows authorized representatives — CICC-licensed consultants, Canadian lawyers and
          paralegals, and Québec notaries — to charge for advice on a Canada application or for filling it
          out and submitting it. Travelaxis is not an authorized representative, so this page is general
          information. You can apply yourself: IRCC publishes every form and instruction free.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-3xl p-6" style={{ backgroundColor: "#F7F3EC", border: "1px solid var(--card-line)" }}>
            <h3 className="subsection-title mb-3">We can help with</h3>
            <ul className="space-y-2">
              {canHelp.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#52606D]">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl p-6" style={{ backgroundColor: "#F7F3EC", border: "1px solid var(--card-line)" }}>
            <h3 className="subsection-title mb-3">We don&apos;t</h3>
            <ul className="space-y-2">
              {cannotHelp.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#52606D]">
                  <XCircle className="w-5 h-5 flex-shrink-0" style={{ color: "#52606D" }} aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-sm text-[#52606D] mt-6 leading-relaxed">
          If you want paid help with the application itself, use an authorized representative and check
          their status first. Source:{" "}
          <a href={IRCC_REPRESENTATIVES_HREF} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#0A4D8C" }}>
            IRCC — Learn about representatives
          </a>
          .
        </p>
      </div>
    </section>
  );
}
