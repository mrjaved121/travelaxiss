import type { ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { getVisitVisaGuide } from "@/lib/data/visit-visa-guides";

/** Renders [label](url) links inside guide text. External links open in a new tab. */
function linkify(text: string): ReactNode[] {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const [, label, url] = match;
    const cls = "font-semibold text-teal-800 underline-offset-2 hover:underline";
    nodes.push(
      /^https?:\/\//.test(url) ? (
        <a key={key++} href={url} target="_blank" rel="noopener noreferrer" className={cls}>
          {label}
        </a>
      ) : (
        <Link key={key++} href={url} className={cls}>
          {label}
        </Link>
      )
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Paragraphs({ text }: { text: string }) {
  return (
    <>
      {text.split(/\n\s*\n/).map((p, i) => (
        <p key={i} className="mt-4 text-base leading-relaxed text-slate first:mt-0">
          {linkify(p.trim())}
        </p>
      ))}
    </>
  );
}

/**
 * Long-form guide block for a visit visa page. Renders nothing when the page has no
 * entry in lib/data/visit-visa-guides.ts.
 */
export default function VisitVisaGuide({ guideKey, faqSchema = true }: { guideKey: string; faqSchema?: boolean }) {
  const guide = getVisitVisaGuide(guideKey);
  if (!guide) return null;

  return (
    <section aria-label="Guide" className="bg-white py-14 sm:py-16">
      {faqSchema && guide.faqs.length > 0 ? (
        <JsonLd
          data={[
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((f) => ({
                "@type": "Question",
                name: f.question,
                acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
              })),
            },
          ]}
        />
      ) : null}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-slate">Last updated {guide.updated}</p>
        <div className="mt-3 rounded-2xl border border-teal-100 bg-teal-50 p-5 text-lg leading-relaxed text-navy">
          {linkify(guide.intro)}
        </div>

        {guide.sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">{section.heading}</h2>
            <div className="mt-4">
              {section.content ? <Paragraphs text={section.content} /> : null}
              {section.steps ? (
                <ol className="mt-4 space-y-3">
                  {section.steps.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full bg-teal-700 text-sm font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-base leading-relaxed text-slate">{linkify(step)}</span>
                    </li>
                  ))}
                </ol>
              ) : null}
              {section.subsections?.map((sub) => (
                <div key={sub.title} className="mt-6">
                  <h3 className="text-lg font-bold text-navy">{sub.title}</h3>
                  {"items" in sub ? (
                    <ul className="mt-3 space-y-2">
                      {sub.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-base leading-relaxed text-slate">
                          <CheckCircle2 className="mt-1 size-4 shrink-0 text-teal-700" aria-hidden />
                          <span>{linkify(item)}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-2">
                      <Paragraphs text={sub.content} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {guide.faqs.length > 0 ? (
          <div className="mt-12">
            <h2 className="text-2xl font-extrabold tracking-tight text-navy">Frequently asked questions</h2>
            <div className="mt-4 space-y-3">
              {guide.faqs.map((f) => (
                <details key={f.question} className="group rounded-xl border border-line bg-white px-5 py-4">
                  <summary className="cursor-pointer list-none font-semibold text-navy">{f.question}</summary>
                  <p className="mt-2 text-base leading-relaxed text-slate">{linkify(f.answer)}</p>
                </details>
              ))}
            </div>
          </div>
        ) : null}
      </article>
    </section>
  );
}
