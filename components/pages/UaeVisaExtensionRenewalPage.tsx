"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock,
  RefreshCw,
  ArrowLeftRight,
  Search,
  CheckCircle,
  AlertTriangle,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { uaeVisaExtensionFaqs } from "@/components/data/uaeVisaExtensionFaqs";

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "We provide documentation assistance and consultancy support only. We are not GDRFA or ICP, and we do not guarantee approval or processing times. All extensions, renewals, and status changes are decided by the relevant UAE government authority.";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Visit Visa Extension",
    description: "Adding time to a short-stay visit visa without changing its category — available for some visa types, not others.",
    icon: Clock,
  },
  {
    title: "Residence Visa Renewal",
    description: "Reissuing a residence visa nearing its expiry date, typically tied to your employer, sponsor, or investor status.",
    icon: RefreshCw,
  },
  {
    title: "Status Change",
    description: "Converting from one visa category to another — for example visit visa to residence visa — without leaving the UAE.",
    icon: ArrowLeftRight,
  },
  {
    title: "Status & Number Lookup",
    description: "Checking your current visa or residence status, visa number, or reprinting a visa copy through official channels.",
    icon: Search,
  },
];

const timelineRows = [
  { doc: "Visit Visa Extension", authority: "GDRFA / ICP", turnaround: "Typically a few working days, where eligible" },
  { doc: "Residence Visa Renewal", authority: "GDRFA / ICP", turnaround: "Start 30 days before expiry as general practice" },
  { doc: "Status Change", authority: "GDRFA / ICP", turnaround: "Varies by category, often several working days" },
];

const howWeHelp = [
  "We confirm whether extension, renewal, or status change actually applies to your visa",
  "A document checklist prepared before your current visa's expiry, not after",
  "Status and visa-number checks through official channels on your behalf",
  "Clear guidance on realistic timelines so you're not caught off guard by an expiry date",
];

export default function UaeVisaExtensionRenewalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#155EEF" }}>
              UAE Visa Documentation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#071A2B" }}>
              UAE Visa Extension &amp; <span style={{ color: "#155EEF" }}>Renewal</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              &quot;Extension,&quot; &quot;renewal,&quot; and &quot;status change&quot; get used interchangeably, but they&apos;re three different processes with different documents and different rules. Getting the wrong one confused with the right one is one of the most common reasons UAE visa deadlines get missed. This guide separates all three clearly, plus how to check your current status before you assume you know what it says.
            </p>
            <div className="rounded-3xl p-6 mb-8 border-l-4 bg-white shadow-sm" style={{ borderColor: "#155EEF" }}>
              <p className="text-sm font-semibold uppercase tracking-wide mb-2" style={{ color: "#155EEF" }}>
                Quick answer
              </p>
              <p className="text-gray-700 leading-relaxed">
                Extension adds time to a visit visa; renewal reissues a residence visa before it expires; status change converts one visa category into another without leaving the UAE. Not every visa qualifies for every option — eligibility depends on your specific visa category and current GDRFA/ICP rules, which we confirm before you apply.
              </p>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#155EEF", color: "#FFFFFF" }}
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </Link>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#155EEF", color: "#155EEF" }}
                aria-label="Chat with Travelaxis on WhatsApp about UAE visa extension and renewal (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#FFFFFF" }}>
              Four Things We Help With
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
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
                  <item.icon className="w-6 h-6" style={{ color: "#155EEF" }} />
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

      {/* Timelines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#071A2B" }}>
              Typical <span style={{ color: "#155EEF" }}>Timelines</span>
            </h2>
            <p className="text-lg text-gray-600">
              As general practice, start any renewal well before your current visa's expiry date — waiting until the final days removes your margin for error if a document needs correction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-100 shadow-sm mb-4 max-w-4xl overflow-hidden"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Process</TableHead>
                  <TableHead className="whitespace-normal">Handled By</TableHead>
                  <TableHead className="whitespace-normal">Typical Timeline*</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timelineRows.map((row) => (
                  <TableRow key={row.doc}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#071A2B" }}>
                      {row.doc}
                    </TableCell>
                    <TableCell className="whitespace-normal text-gray-600">{row.authority}</TableCell>
                    <TableCell className="whitespace-normal text-gray-600">{row.turnaround}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-gray-500 max-w-4xl">
            *General guidance, not a guarantee — actual timelines depend on your visa category, document completeness, and current authority workload.
          </p>
        </div>
      </section>

      {/* Urgent processing */}
      <section className="py-16" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 border border-gray-100 shadow-sm bg-white"
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#071A2B" }}>
              What &quot;Urgent&quot; Actually Means
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Some UAE authorities offer priority channels for certain transactions, but there's no universal guarantee of speed — how fast a request moves depends on the transaction type and current volume at the relevant authority. The single most reliable way to avoid needing to rush is submitting a complete file well ahead of any deadline. If your situation is genuinely time-sensitive, tell us early — we&apos;ll tell you honestly what's realistic rather than promise a timeline we can&apos;t control.
            </p>
            <p className="text-gray-600 leading-relaxed">
              What actually causes most delays isn't the authority's processing speed at all — it's a document coming back for correction partway through, which resets the clock in a way that feels much slower than if the file had been complete the first time. A passport photo in the wrong format, a form filled out with a name that doesn't exactly match your Emirates ID, or a supporting document that's expired by the time it's reviewed — these small mismatches are the real reason "urgent" requests so often aren't. We check for exactly this kind of mismatch before anything is submitted.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Checking status */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#071A2B" }}>
              Checking Your Visa <span style={{ color: "#155EEF" }}>Status &amp; Number</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A surprising number of renewal problems trace back to someone acting on an assumption about their own visa status instead of actually checking it. Your UAE visa number, residence status, and remaining validity are all available through GDRFA's or ICP's official smart-service portals, using your passport number, Emirates ID number, or application reference — no need to guess based on when you think you applied.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              This matters most in three situations: confirming a residence visa hasn't already lapsed before you travel, verifying a status change actually went through before you rely on it, and getting an official visa copy reprinted when the original is lost or a government office requests a fresh one. Each of these is a lookup, not an application — but they're commonly confused with each other, which is part of why status questions come up so often.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              If you&apos;re not sure what your current status actually shows, or the portal result doesn&apos;t match what you expected, that&apos;s worth resolving before you make travel plans or sign anything that assumes a particular visa status — we can pull and interpret it for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="py-16" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: "#071A2B" }}>
              Common Mistakes
            </h2>
            <div className="space-y-3">
              {[
                "Waiting until the final days before expiry to start a renewal",
                "Assuming a visit visa can be extended without checking the specific category first",
                "Confusing a status change with a simple renewal, and preparing the wrong documents",
                "Relying on a remembered expiry date instead of checking current official status",
              ].map((m) => (
                <div key={m} className="flex items-center gap-3 p-4 rounded-lg border-l-4 bg-white" style={{ borderColor: "#A23F35" }}>
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: "#A23F35" }} aria-hidden />
                  <span className="text-gray-700 text-sm font-medium">{m}</span>
                </div>
              ))}
            </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "#071A2B" }}>
              How Travelaxis <span style={{ color: "#155EEF" }}>Helps</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#155EEF" }} aria-hidden />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#EAF1FF" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#071A2B" }}>
              Frequently Asked <span style={{ color: "#155EEF" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-gray-100">
            <Accordion type="single" collapsible className="w-full">
              {uaeVisaExtensionFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-gray-200">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#071A2B" }}
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
            <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: "#071A2B" }}>
              Related <span style={{ color: "#155EEF" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { href: "/services/uae-visit-visa", label: "UAE Visit & Tourist Visa" },
                { href: "/services/visa-services", label: "UAE Visa Documentation & Consultancy" },
                { href: "/services/uae-employment-visa", label: "UAE Employment & Labour Visa" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#071A2B" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#155EEF" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don&apos;t Let a Deadline Catch You Off Guard</h2>
          <p className="text-white/90 text-lg mb-4 max-w-2xl mx-auto">
            Tell us your current visa type and expiry date, and we&apos;ll confirm exactly what applies to your case.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#155EEF" }}
              aria-label="Chat with Travelaxis on WhatsApp about UAE visa extension and renewal (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
