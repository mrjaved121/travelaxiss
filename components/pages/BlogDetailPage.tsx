'use client';

import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Building2, Plane, FileText, BadgeCheck, CalendarDays } from "lucide-react";
import { motion } from "motion/react";
import { blogData } from "../data/blogContent";
import { blogIsoDayToDisplay } from "@/lib/seo/blog-dates";

/**
 * Renders body text with `[label](url)` markdown-style links inline —
 * external links (http...) open in a new tab, internal ones (/path) use
 * next/link. Everything else in the string passes through as plain text.
 */
function linkifyText(text: string) {
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const [, label, url] = match;
    const isExternal = /^https?:\/\//.test(url);
    nodes.push(
      isExternal ? (
        <a
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline-offset-2 hover:underline"
          style={{ color: '#155EEF' }}
        >
          {label}
        </a>
      ) : (
        <Link
          key={key++}
          href={url}
          className="font-semibold underline-offset-2 hover:underline"
          style={{ color: '#155EEF' }}
        >
          {label}
        </Link>
      ),
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }
  return nodes;
}

const categoryIcons: Record<string, typeof FileText> = {
  "Business Setup": Building2,
  "UAE Visa Documentation": Plane,
};

export default function BlogDetailPage({ slug }: { slug: string }) {
  const blog = blogData[slug || ""];

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4" role="alert">
        <div className="text-center max-w-md">
          <h1 className="page-title mb-4">Blog Not Found</h1>
          <p className="text-[#667085] mb-6">We could not find that article. It may have been moved or removed.</p>
          <Link href="/blog" className="font-semibold" style={{ color: '#155EEF' }}>
            Return to the Travelaxis blog listing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article aria-labelledby="blog-article-title">
      {/* Back Button */}
      <section className="py-6" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 hover:underline"
            style={{ color: '#155EEF' }}
          >
            <ArrowLeft className="w-4 h-4" aria-hidden />
            <span>Back to all Travelaxis blog articles</span>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="mb-4">
              <span className="px-4 py-2 rounded-full text-sm font-semibold" style={{ backgroundColor: '#155EEF', color: '#FFFFFF' }}>
                {blog.category}
              </span>
            </div>
            
            <h1 id="blog-article-title" className="page-title mb-6">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#667085] mb-6">
              <div className="flex items-center space-x-2">
                <BadgeCheck className="w-5 h-5" style={{ color: '#155EEF' }} aria-hidden />
                <span>Reviewed by the Travelaxis Consultancy Team</span>
              </div>
              {blog.date && (
                <div className="flex items-center space-x-2">
                  <CalendarDays className="w-5 h-5" aria-hidden />
                  <span>
                    {blog.dateModifiedIso
                      ? `Updated ${blogIsoDayToDisplay(blog.dateModifiedIso)}`
                      : `Published ${blog.date}`}
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" aria-hidden />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full h-64 md:h-96 rounded-3xl shadow-lg flex items-center justify-center"
            style={{ backgroundColor: '#F5F8FF' }}
          >
            {(() => {
              const CategoryIcon = categoryIcons[blog.category] ?? FileText;
              return <CategoryIcon className="w-24 h-24 md:w-32 md:h-32" style={{ color: '#155EEF' }} aria-hidden />;
            })()}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="rounded-3xl p-6 mb-10 border-l-4 shadow-sm not-prose" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: '#155EEF' }}>
                Quick Answer
              </p>
              <p className="text-[#667085] leading-relaxed">
                {linkifyText(blog.content.intro)}
              </p>
            </div>

            {blog.content.sections.map((section: any, sectionIdx: number) => (
              <div key={sectionIdx} className="mb-12">
                <h2 className="section-title mb-6">
                  {section.heading}
                </h2>

                {section.content && (
                  <p className="lead text-[#667085] leading-relaxed mb-6">
                    {linkifyText(section.content)}
                  </p>
                )}

                {section.subsections && (
                  <div className="space-y-8">
                    {section.subsections.map(
                      (
                        sub: {
                          title: string;
                          content?: string;
                          items?: string[];
                        },
                        idx: number
                      ) => (
                        <div key={idx}>
                          <h3
                            className="subsection-title mb-4"
                          >
                            {sub.title}
                          </h3>
                          {sub.content && (
                            <p className="text-[#667085] leading-relaxed mb-4">
                              {linkifyText(sub.content)}
                            </p>
                          )}
                          {sub.items && (
                            <ul className="space-y-2 mb-4">
                              {sub.items.map((item: string, i: number) => (
                                <li
                                  key={i}
                                  className="flex items-start space-x-3 text-[#667085]"
                                >
                                  <span className="text-[#155EEF]" aria-hidden>👉</span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}

                {section.columnCompare && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: "#F5F8FF" }}
                    >
                      <h3
                        className="subsection-title mb-4"
                        style={{ color: "#155EEF" }}
                      >
                        {section.columnCompare.left.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.columnCompare.left.items.map(
                          (item: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "#155EEF" }}
                              ></div>
                              <span className="text-[#667085]">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                    <div
                      className="rounded-2xl p-6"
                      style={{ backgroundColor: "#F5F8FF" }}
                    >
                      <h3
                        className="subsection-title mb-4"
                        style={{ color: "#155EEF" }}
                      >
                        {section.columnCompare.right.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.columnCompare.right.items.map(
                          (item: string, idx: number) => (
                            <li
                              key={idx}
                              className="flex items-start space-x-3"
                            >
                              <div
                                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: "#155EEF" }}
                              ></div>
                              <span className="text-[#667085]">{item}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}

                {/* E-Commerce What You Can Do */}
                {section.ecommerceWhatYouCanDo && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceWhatYouCanDo.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Growth Reasons */}
                {section.ecommerceGrowthReasons && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceGrowthReasons.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Who Can Start */}
                {section.ecommerceWhoCanStart && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceWhoCanStart.map((who: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{who}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce License Types */}
                {section.ecommerceLicenseTypes && (
                  <div className="space-y-6">
                    {section.ecommerceLicenseTypes.map((type: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                        <h3 className="subsection-title mb-3" style={{ color: '#155EEF' }}>
                          🟩 {type.number}. {type.name}
                        </h3>
                        <p className="text-[#667085] font-semibold mb-2">Benefits:</p>
                        <ul className="space-y-2">
                          {type.benefits.map((benefit: string, bidx: number) => (
                            <li key={bidx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                              <span className="text-[#667085]">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Steps */}
                {section.ecommerceSteps && (
                  <div className="space-y-6">
                    {section.ecommerceSteps.map((stepItem: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6 shadow-md" style={{ backgroundColor: '#F5F8FF' }}>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#155EEF' }}>
                            <span className="font-bold" style={{ color: '#FFFFFF' }}>{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="subsection-title mb-2">
                              {stepItem.step}
                            </h3>
                            <p className="text-[#667085]">{stepItem.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Documents */}
                {section.ecommerceDocuments && (
                  <div className="space-y-6">
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Personal Documents
                      </h3>
                      <ul className="space-y-2">
                        {section.ecommerceDocuments.personalDocuments.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Business Documents
                      </h3>
                      <ul className="space-y-2">
                        {section.ecommerceDocuments.businessDocuments.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* E-Commerce Business Ideas */}
                {section.ecommerceBusinessIdeas && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceBusinessIdeas.map((idea: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{idea}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Payment Gateways */}
                {section.ecommercePaymentGateways && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommercePaymentGateways.map((gateway: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{gateway}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Logistics */}
                {section.ecommerceLogistics && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceLogistics.map((logistic: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{logistic}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Marketing */}
                {section.ecommerceMarketing && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceMarketing.map((strategy: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{strategy}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Mistakes */}
                {section.ecommerceMistakes && (
                  <div className="space-y-3">
                    {section.ecommerceMistakes.map((mistake: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#FFFFFF', borderColor: '#1D2939' }}>
                        <span style={{ color: '#1D2939' }}>❌</span>
                        <span className="text-[#667085] font-semibold">{mistake}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* E-Commerce Tips */}
                {section.ecommerceTips && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.ecommerceTips.map((tip: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>✅</span>
                        <span className="text-[#667085] font-semibold">{tip}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Why UAE Best For E-Commerce */}
                {section.whyUAEBestForEcommerce && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.whyUAEBestForEcommerce.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance Visa What You Can Do */}
                {section.freelanceVisaWhatYouCanDo && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.freelanceVisaWhatYouCanDo.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance Eligible Professionals */}
                {section.freelanceEligibleProfessionals && (
                  <div>
                    <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                      🟩 Eligible Professionals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.freelanceEligibleProfessionals.map((prof: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                          <span style={{ color: '#155EEF' }}>🟩</span>
                          <span className="text-[#667085] font-semibold">{prof}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Freelance Other Eligible */}
                {section.freelanceOtherEligible && (
                  <div>
                    <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                      🟩 Other Eligible Individuals
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {section.freelanceOtherEligible.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                          <span style={{ color: '#155EEF' }}>🟩</span>
                          <span className="text-[#667085] font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Freelance Visa Benefits */}
                {section.freelanceVisaBenefits && (
                  <div className="space-y-6">
                    {section.freelanceVisaBenefits.map((item: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6 border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <h3 className="subsection-title mb-2" style={{ color: '#155EEF' }}>
                          ✅ {item.number}. {item.title}
                        </h3>
                        <p className="text-[#667085]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance License Types */}
                {section.freelanceLicenseTypes && (
                  <div className="space-y-6">
                    {section.freelanceLicenseTypes.map((type: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                        <h3 className="subsection-title mb-3" style={{ color: '#155EEF' }}>
                          🟩 {type.name}
                        </h3>
                        <p className="text-[#667085] font-semibold mb-2">For:</p>
                        <ul className="space-y-2">
                          {type.forWhom.map((item: string, fidx: number) => (
                            <li key={fidx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                              <span className="text-[#667085]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance Visa Steps */}
                {section.freelanceVisaSteps && (
                  <div className="space-y-6">
                    {section.freelanceVisaSteps.map((stepItem: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6 shadow-md" style={{ backgroundColor: '#F5F8FF' }}>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#155EEF' }}>
                            <span className="font-bold" style={{ color: '#FFFFFF' }}>{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="subsection-title mb-2">
                              {stepItem.step}
                            </h3>
                            <p className="text-[#667085]">{stepItem.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance Visa Documents */}
                {section.freelanceVisaDocuments && (
                  <div className="space-y-6">
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Personal Documents
                      </h3>
                      <ul className="space-y-2">
                        {section.freelanceVisaDocuments.personalDocuments.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Professional Documents
                      </h3>
                      <ul className="space-y-2">
                        {section.freelanceVisaDocuments.professionalDocuments.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Additional Documents
                      </h3>
                      <ul className="space-y-2">
                        {section.freelanceVisaDocuments.additionalDocuments.map((doc: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Freelance vs Company */}
                {section.freelanceVsCompany && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Freelance Visa
                      </h3>
                      <ul className="space-y-2">
                        {section.freelanceVsCompany.freelanceVisa.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                      <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                        🟩 Company Setup
                      </h3>
                      <ul className="space-y-2">
                        {section.freelanceVsCompany.companySetup.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#155EEF' }}></div>
                            <span className="text-[#667085]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Freelance Mistakes */}
                {section.freelanceMistakes && (
                  <div className="space-y-3">
                    {section.freelanceMistakes.map((mistake: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#FFFFFF', borderColor: '#1D2939' }}>
                        <span style={{ color: '#1D2939' }}>❌</span>
                        <span className="text-[#667085] font-semibold">{mistake}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Freelance Tips */}
                {section.freelanceTips && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.freelanceTips.map((tip: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>✅</span>
                        <span className="text-[#667085] font-semibold">{tip}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Best Freelance Skills */}
                {section.bestFreelanceSkills && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.bestFreelanceSkills.map((skill: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{skill}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Why UAE Best For Freelancers */}
                {section.whyUAEBestForFreelancers && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.whyUAEBestForFreelancers.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping How It Works */}
                {section.dropshippingHowItWorks && (
                  <div>
                    <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                      🟩 How It Works
                    </h3>
                    <div className="space-y-3">
                      {section.dropshippingHowItWorks.map((item: string, idx: number) => (
                        <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                          <span style={{ color: '#155EEF' }}>🟩</span>
                          <span className="text-[#667085] font-semibold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Dropshipping Example */}
                {section.dropshippingExample && (
                  <div className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                    <h3 className="subsection-title mb-4" style={{ color: '#155EEF' }}>
                      🟩 Example
                    </h3>
                    <div className="space-y-2">
                      <p className="text-[#667085]">You sell product for <strong>{section.dropshippingExample.productPrice}</strong></p>
                      <p className="text-[#667085]">Supplier charges <strong>{section.dropshippingExample.supplierCost}</strong></p>
                      <p className="text-[#667085] font-bold" style={{ color: '#155EEF' }}>👉 Your profit = {section.dropshippingExample.profit}</p>
                    </div>
                  </div>
                )}

                {/* Dropshipping Popular Reasons */}
                {section.dropshippingPopularReasons && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingPopularReasons.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Who Can Start */}
                {section.dropshippingWhoCanStart && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingWhoCanStart.map((who: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{who}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Steps */}
                {section.dropshippingSteps && (
                  <div className="space-y-6">
                    {section.dropshippingSteps.map((stepItem: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6 shadow-md" style={{ backgroundColor: '#F5F8FF' }}>
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#155EEF' }}>
                            <span className="font-bold" style={{ color: '#FFFFFF' }}>{idx + 1}</span>
                          </div>
                          <div className="flex-1">
                            <h3 className="subsection-title mb-2">
                              {stepItem.step}
                            </h3>
                            <p className="text-[#667085]">{stepItem.description}</p>
                            {stepItem.note && (
                              <p className="text-[#667085] italic mt-2">👉 {stepItem.note}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Best Products */}
                {section.dropshippingBestProducts && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingBestProducts.map((product: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{product}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Payment Methods */}
                {section.dropshippingPaymentMethods && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingPaymentMethods.map((method: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{method}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Shipping */}
                {section.dropshippingShipping && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingShipping.map((shipping: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{shipping}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Marketing Strategies */}
                {section.dropshippingMarketingStrategies && (
                  <div className="space-y-6">
                    {section.dropshippingMarketingStrategies.map((item: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6 border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <h3 className="subsection-title mb-2" style={{ color: '#155EEF' }}>
                          🟩 {item.strategy}
                        </h3>
                        <p className="text-[#667085]">{item.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Mistakes */}
                {section.dropshippingMistakes && (
                  <div className="space-y-3">
                    {section.dropshippingMistakes.map((mistake: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#FFFFFF', borderColor: '#1D2939' }}>
                        <span style={{ color: '#1D2939' }}>❌</span>
                        <span className="text-[#667085] font-semibold">{mistake}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Tips */}
                {section.dropshippingTips && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingTips.map((tip: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>✅</span>
                        <span className="text-[#667085] font-semibold">{tip}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Dropshipping Challenges */}
                {section.dropshippingChallenges && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.dropshippingChallenges.map((challenge: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#FFFFFF', borderColor: '#1D2939' }}>
                        <span style={{ color: '#1D2939' }}>⚠️</span>
                        <span className="text-[#667085] font-semibold">{challenge}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Why UAE Best For Dropshipping */}
                {section.whyUAEBestForDropshipping && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {section.whyUAEBestForDropshipping.map((reason: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-3 p-4 rounded-2xl border-l-4" style={{ backgroundColor: '#F5F8FF', borderColor: '#155EEF' }}>
                        <span style={{ color: '#155EEF' }}>🟩</span>
                        <span className="text-[#667085] font-semibold">{reason}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* FAQs */}
                {section.faqs && (
                  <div className="space-y-4">
                    {section.faqs.map((faq: any, idx: number) => (
                      <div key={idx} className="rounded-2xl p-6" style={{ backgroundColor: '#F5F8FF' }}>
                        <h3 className="subsection-title mb-2 flex items-start" style={{ color: '#155EEF' }}>
                          <span className="mr-2" aria-hidden>❓</span>
                          {faq.question}
                        </h3>
                        <p className="text-[#667085] pl-7">{linkifyText(faq.answer)}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.note && (
                  <p className="text-[#667085] italic mt-4">👉 {section.note}</p>
                )}

                {section.relatedLinks && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {section.relatedLinks.map((link: { label: string; href: string }, idx: number) => (
                      <Link
                        key={idx}
                        href={link.href}
                        className="flex items-center justify-between gap-2 rounded-2xl p-4 card-hover transition-all duration-200 hover:-translate-y-1"
                        style={{ backgroundColor: '#F5F8FF', border: "1px solid var(--card-line)" }}
                      >
                        <span className="font-semibold" style={{ color: '#1D2939' }}>{link.label}</span>
                        <ArrowLeft className="w-4 h-4 flex-shrink-0 rotate-180" style={{ color: '#155EEF' }} aria-hidden />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: '#FFFFFF' }}>Ready to Start Your Business?</h2>
          <p className="lead mb-8" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get expert guidance for your company formation in UAE
          </p>
          <a
            href="https://wa.me/971589867555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            aria-label="Contact Travelaxis on WhatsApp about UAE business setup (opens in a new tab)"
          >
            Contact Us on WhatsApp
            <ArrowLeft className="w-5 h-5 rotate-180" aria-hidden />
          </a>
        </motion.div>
      </section>

      {/* Share Section */}
      <section className="py-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-t border-b py-6" style={{ borderColor: '#F5F8FF' }}>
            <div className="flex items-center space-x-2">
              <Share2 className="w-5 h-5" style={{ color: '#155EEF' }} aria-hidden />
              <span className="font-semibold" style={{ color: '#1D2939' }}>Share this article</span>
            </div>
            <Link 
              href="/blog"
              className="font-semibold hover:underline"
              style={{ color: '#155EEF' }}
            >
              View all Travelaxis blog articles
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}