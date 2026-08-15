"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  PiggyBank,
  Wallet,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { uaeRetirementVisaFaqs } from "@/components/data/uaeRetirementVisaFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not a UAE government authority, bank, or property valuer, and we do not guarantee visa approval. All retirement visas are issued through official UAE government channels, subject to their rules and approvals.";

const routes: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Property Ownership",
    description: "Qualifying through ownership of UAE property meeting the current minimum value set by immigration authorities.",
    icon: Building2,
  },
  {
    title: "Savings or Bank Deposit",
    description: "Qualifying through savings held in a UAE bank meeting the current minimum threshold.",
    icon: PiggyBank,
  },
  {
    title: "Active Income",
    description: "Qualifying through verifiable income above the current minimum threshold, whether from a pension or other source.",
    icon: Wallet,
  },
];

const howWeHelp = [
  "Confirming which qualifying route actually fits your situation",
  "Current threshold figures for property, savings, or income — verified before you apply, not assumed",
  "A document checklist matched to your specific route",
  "Guidance on including a spouse or dependents on your application",
];

export default function UaeRetirementVisaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#1D63E0" }}>
              UAE Visa Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0F1B2D" }}>
              UAE <span style={{ color: "#1D63E0" }}>Retirement Visa</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The UAE retirement visa is a long-term residence option for people 55 and older who qualify through property, savings, or income — not employment. This guide covers the three qualifying routes, what documents each one needs, and how to bring your spouse along, so you can plan your retirement in the UAE with a clear picture of what's actually required.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#1D63E0" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#1D63E0" }}>
                Quick answer
              </p>
              <p className="text-gray-700 leading-relaxed">
                The UAE retirement visa is a renewable long-term residence visa for those 55 and above, granted through one of three routes: owning qualifying UAE property, holding sufficient savings, or having sufficient active income. Thresholds are set by UAE authorities and reviewed periodically — we confirm the current figures against your situation before you apply.
              </p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#1D63E0" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#1D63E0", color: "#FFFFFF" }}
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#1D63E0", color: "#1D63E0" }}
                aria-label="Chat with Travelaxis on WhatsApp about the UAE retirement visa (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-20" style={{ backgroundColor: "#1D63E0" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              Three Qualifying Routes
            </h2>
            <p className="text-lg text-white/75">
              You only need to meet one of these, not all three.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {routes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 border border-white/10"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                  aria-hidden
                >
                  <item.icon className="w-6 h-6" style={{ color: "#1D63E0" }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & family */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#0F1B2D" }}>
              Eligibility &amp; Bringing Family
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The retirement visa is generally aimed at applicants aged 55 and above. Beyond age, eligibility comes down entirely to meeting one of the three qualifying routes above — there's no employment or sponsor requirement the way most other UAE residence visas work. In many cases, a spouse and dependents can be included on the application, subject to meeting the relevant requirements for each. Because thresholds for property value, savings, and income are set by UAE authorities and reviewed periodically, we verify the current figures against your specific situation rather than work from numbers that may already be out of date.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you're not sure which route fits best — for example, you have property but aren't sure it meets the current value threshold — that's exactly the kind of question worth asking before you gather documents, not after.
            </p>
            <h2 className="text-2xl font-bold mb-3 mt-8" style={{ color: "#0F1B2D" }}>
              Renewing Your Retirement Visa
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Because the retirement visa is issued for a renewable term rather than a one-time grant, renewal means demonstrating you still meet your qualifying route at the time of renewal — not simply that you met it originally. If you qualified through savings, for example, the deposit generally needs to still be in place; if you qualified through property, you generally still need to hold it. Income-route holders typically need to show the income is ongoing rather than a one-off payment. Planning for renewal from the start — rather than treating the first approval as the end of the process — avoids an uncomfortable surprise a few years in.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              Documents by <span style={{ color: "#1D63E0" }}>Qualifying Route</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Exactly which documents you need depends on which of the three routes you're applying under — a property-based application and a savings-based application look quite different on paper, even though both lead to the same visa. Most applicants find one route is obviously the better fit once they compare all three: the property route suits those who already own suitable UAE real estate outright, the savings route suits those with liquid funds they're comfortable holding in a UAE account for the required period, and the income route suits retirees with an ongoing pension or investment income they can document. There's no advantage to applying through a route that's a stretch when a better-fitting one is available — a straightforward application under the route that clearly fits tends to move faster than a marginal one under a route you're only just able to qualify for.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="rounded-3xl p-6 bg-white">
                <h3 className="font-bold mb-3 text-sm" style={{ color: "#0F1B2D" }}>Property route</h3>
                <ul className="space-y-2">
                  {["Title deed showing ownership", "Current property valuation"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#1D63E0" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6 bg-white">
                <h3 className="font-bold mb-3 text-sm" style={{ color: "#0F1B2D" }}>Savings route</h3>
                <ul className="space-y-2">
                  {["Bank statements showing the deposit", "Confirmation of funds held for the required period"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#1D63E0" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl p-6 bg-white">
                <h3 className="font-bold mb-3 text-sm" style={{ color: "#0F1B2D" }}>Income route</h3>
                <ul className="space-y-2">
                  {["Pension or income statements", "Evidence the income is ongoing"].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#1D63E0" }} aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Every route also needs a valid passport, a medical fitness test, and an Emirates ID application, as with any UAE residence visa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#0F1B2D" }}>
              How Travelaxis <span style={{ color: "#1D63E0" }}>Helps</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#1D63E0" }} aria-hidden />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#EEF4FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#0F1B2D" }}>
              Frequently Asked <span style={{ color: "#1D63E0" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {uaeRetirementVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F1B2D" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related pages */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#0F1B2D" }}>
              Related <span style={{ color: "#1D63E0" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/blog/golden-visa-uae-guide", label: "Golden Visa UAE" },
                { href: "/services/uae-visa-extension-renewal", label: "UAE Visa Extension & Renewal" },
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#0F1B2D" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#1D63E0" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Planning Your Retirement in the UAE?</h2>
          <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
            Tell us which route fits your situation and we&apos;ll confirm exactly what you need.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#1D63E0]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#1D63E0" }}
              aria-label="Chat with Travelaxis on WhatsApp about the UAE retirement visa (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
