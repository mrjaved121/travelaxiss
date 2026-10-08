"use client";

import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Plane,
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { canadaVisaFaqs } from "@/components/data/canadaVisaFaqs";

/** Next Link with motion props, so the route cards get trailing-slash hrefs and client-side navigation (a plain motion.a emits the raw path). */
const MotionLink = motion.create(Link);

const WHATSAPP_HREF = "https://wa.me/971589867555";

const disclaimer =
  "Travelaxis is not an authorized Canadian immigration representative. IRCC only allows CICC-licensed consultants, Canadian lawyers and paralegals, and Québec notaries to charge for advising on, completing or submitting a Canada application, so this page is general information only. Our paid help for Canada is limited to document translation, travel bookings, and help scanning, uploading and navigating IRCC's online system.";

const IRCC_PROCESSING_TIMES_HREF = "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html";

const routeCards: {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  cta: string;
}[] = [
  {
    title: "Visit Visa",
    description: "Tourist, family-visit and business-visit visas: the official IRCC fee and document list.",
    icon: Plane,
    href: "/visit-visa/canada",
    cta: "See Canada Visit Visa requirements",
  },
  {
    title: "Study Permit",
    description: "Fees and requirements for students admitted to a Designated Learning Institution (DLI) in Canada.",
    icon: GraduationCap,
    href: "/study-visa/canada",
    cta: "See Canada Study Permit requirements",
  },
];

const timelineRows = [
  { doc: "Visit Visa", authority: "IRCC", turnaround: "See IRCC's current processing times" },
  { doc: "Study Permit", authority: "IRCC, after your DLI acceptance", turnaround: "See IRCC's current processing times" },
];

const howWeHelp = [
  "Translating your documents into English or French",
  "Booking flights and hotels for your trip",
  "Scanning and uploading your documents, and showing you how to use IRCC's online system",
];


export default function CanadaVisaFromPakistanPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={false} animate={{ opacity: 1, y: 0 }}>
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: "#0A4D8C" }}>
              Canada Visa Information
            </p>
            <h1 className="page-title mb-6">
              Canada Visa <span style={{ color: "#0A4D8C" }}>from Pakistan</span>
            </h1>
            <p className="lead text-[#52606D] mb-6 leading-relaxed">
              A Canada visa application from Pakistan is made online with IRCC, and IRCC publishes every form and instruction free, so you can apply yourself. Pick your route below — Visit or Study — for the official IRCC fee and document list.
            </p>
            <p className="text-sm text-[#52606D] leading-relaxed border-l-4 pl-4 mb-8" style={{ borderColor: "#0A4D8C" }}>
              {disclaimer}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#routes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: "#0A4D8C", color: "#FFFFFF" }}
              >
                <span>Choose My Route</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold border-2 transition-all hover:opacity-90"
                style={{ borderColor: "#0A4D8C", color: "#0A4D8C" }}
                aria-label="Chat with Travelaxis on WhatsApp about Canada visas (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" aria-hidden />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route cards */}
      <section id="routes" className="py-20 scroll-mt-24" style={{ backgroundColor: "#0A4D8C" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <h2 className="section-title mb-4" style={{ color: "#FFFFFF" }}>
              Which Canada Visa Do You Need?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {routeCards.map((item, index) => (
              <MotionLink
                key={item.title}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-3xl p-6 md:p-8 border border-white/10 block transition-colors hover:bg-white/[0.08]"
                style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#FFFFFF" }}
                  aria-hidden
                >
                  <item.icon className="w-6 h-6" style={{ color: "#0A4D8C" }} />
                </div>
                <h3 className="subsection-title mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#FFFFFF" }}>
                  {item.cta}
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </span>
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Timelines + pricing */}
      <section className="py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 max-w-3xl"
          >
            <h2 className="section-title mb-4">
              Compare <span style={{ color: "#0A4D8C" }}>Timelines by Route</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-[#E6E1D8] shadow-sm mb-4 max-w-4xl overflow-hidden bg-white"
          >
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-normal">Visa Category</TableHead>
                  <TableHead className="whitespace-normal">Processed By</TableHead>
                  <TableHead className="whitespace-normal">Typical Timeline*</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {timelineRows.map((row) => (
                  <TableRow key={row.doc}>
                    <TableCell className="whitespace-normal font-medium" style={{ color: "#0F2A43" }}>
                      {row.doc}
                    </TableCell>
                    <TableCell className="whitespace-normal text-[#52606D]">{row.authority}</TableCell>
                    <TableCell className="whitespace-normal text-[#52606D]">{row.turnaround}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
          <p className="text-sm text-[#52606D] max-w-4xl mb-12">
            *IRCC publishes current processing times, which change often with application volumes. Check them on{" "}
            <a href={IRCC_PROCESSING_TIMES_HREF} target="_blank" rel="noopener noreferrer" className="font-semibold underline-offset-2 hover:underline" style={{ color: "#0A4D8C" }}>
              IRCC&apos;s processing times page
            </a>{" "}
            before you plan your travel dates.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl p-8 max-w-4xl bg-white"
          >
            <h3 className="subsection-title mb-3">
              What determines your total cost
            </h3>
            <p className="text-[#52606D] leading-relaxed mb-4">
              IRCC government fees are fixed and set directly by Canadian authorities, varying by permit type. The visit visa and study permit pages list the current amounts. If you use our translation, travel booking or upload help, that is charged separately. We confirm both before you commit to anything.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90 font-semibold"
              style={{ backgroundColor: "#0A4D8C", color: "#FFFFFF" }}
              aria-label="Ask Travelaxis about translation or travel bookings for Canada on WhatsApp (opens in a new tab)"
            >
              <span>Ask About Translation or Bookings</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </a>
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
            <h2 className="section-title mb-6">
              What Travelaxis <span style={{ color: "#0A4D8C" }}>Can Help With</span>
            </h2>
            <ul className="space-y-3">
              {howWeHelp.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#0A4D8C" }} aria-hidden />
                  <span className="text-[#52606D]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="section-title mb-4">
              Frequently Asked <span style={{ color: "#0A4D8C" }}>Questions</span>
            </h2>
          </motion.div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E6E1D8]">
            <Accordion type="single" collapsible className="w-full">
              {canadaVisaFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E6E1D8]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: "#0F2A43" }}
                  >
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#52606D] text-base leading-relaxed">
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
            <h2 className="section-title mb-6 text-center">
              Related <span style={{ color: "#0A4D8C" }}>Pages</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { href: "/visit-visa/canada", label: "Canada Visit Visa" },
                { href: "/study-visa/canada", label: "Canada Study Permit" },
                { href: "/visit-visa/uae", label: "Dubai Visit Visa from Pakistan" },
                { href: "/pakistan", label: "UAE Services for Clients in Pakistan" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-3xl p-4 text-center shadow-sm hover:shadow-md transition-shadow bg-white font-semibold"
                  style={{ color: "#0F2A43" }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#0A4D8C" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Planning a Trip to Canada?</h2>
          <p className="lead mb-4 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Ask us about document translation, travel bookings, or help using IRCC&apos;s online system.
          </p>
          <p className="text-sm text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/visit-visa/canada"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-[#F5A524] text-[#3B2600] shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-105 hover:shadow-md"
            >
              <span>See the Official Requirements</span>
              <ArrowRight className="w-5 h-5" aria-hidden />
            </Link>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white transition-all hover:opacity-90"
              style={{ color: "#0A4D8C" }}
              aria-label="Chat with Travelaxis on WhatsApp about Canada visas (opens in a new tab)"
            >
              <span>WhatsApp Now</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
