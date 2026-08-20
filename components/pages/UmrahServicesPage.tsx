'use client';

import Link from "next/link";
import {
  ArrowRight,
  FileStack,
  Plane,
  Hotel,
  Users,
  Bus,
  ShieldCheck,
  Headset,
  CalendarRange,
} from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { umrahFaqs } from "@/components/data/umrahFaqs";

const categories: { title: string; description: string; icon: LucideIcon }[] = [
  {
    title: "Umrah Visa Processing",
    description:
      "Documentation and application support for Umrah visas, arranged through licensed travel partners and official Saudi channels.",
    icon: FileStack,
  },
  {
    title: "Flight Booking & Reservations",
    description:
      "Return flight arrangements coordinated for individual pilgrims and groups traveling from the UAE.",
    icon: Plane,
  },
  {
    title: "Hotel & Accommodation",
    description:
      "Accommodation arrangements coordinated near Makkah and Madinah for the duration of your stay.",
    icon: Hotel,
  },
  {
    title: "Group & Family Packages",
    description:
      "Coordinated travel arrangements for families and groups traveling together, with a single point of contact throughout.",
    icon: Users,
  },
];

const travelOptions: {
  title: string;
  price?: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "By Bus",
    price: "Starting from AED 1,199",
    description:
      "Comfortable coach travel to Makkah and Madinah — a lower-cost option for pilgrims traveling from the UAE.",
    icon: Bus,
  },
  {
    title: "By Air",
    description:
      "Direct or connecting flights to Jeddah or Madinah, coordinated for individual pilgrims and groups.",
    icon: Plane,
  },
];

const packageTiers: {
  name: string;
  duration: string;
  description: string;
  items: string[];
}[] = [
  {
    name: "Quick Umrah Package",
    duration: "7 Days / 6 Nights",
    description:
      "For pilgrims with limited time off — a focused trip covering both Makkah and Madinah.",
    items: [
      "Umrah visa documentation",
      "Bus or flight transport (your choice)",
      "Hotel coordination near the Haram",
      "Transport between Makkah and Madinah",
    ],
  },
  {
    name: "Standard Umrah Package",
    duration: "10–12 Days / 9–11 Nights",
    description:
      "The most requested duration — enough time to worship without rushing between cities.",
    items: [
      "Umrah visa documentation",
      "Bus or flight transport (your choice)",
      "Hotel coordination near the Haram",
      "Group or family coordination available",
      "Guided ziyarat (visit to historic sites), where arranged",
    ],
  },
  {
    name: "Extended Umrah Package",
    duration: "15+ Days / 14+ Nights",
    description:
      "For pilgrims wanting extended time for worship and reflection in both holy cities.",
    items: [
      "Umrah visa documentation",
      "Bus or flight transport (your choice)",
      "Extended hotel stay coordination",
      "Full ziyarat itinerary, where arranged",
      "Dedicated coordination for larger groups",
    ],
  },
];

const whyChooseUs: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Single Point of Contact",
    body: "One coordinator handles your visa, transport, and hotel arrangements from booking to return.",
    icon: Headset,
  },
  {
    title: "Licensed Travel Partners",
    body: "Flights, hotels, and ground transport are arranged through licensed travel partners and official Saudi channels — not informal arrangements.",
    icon: ShieldCheck,
  },
  {
    title: "Flexible Travel Dates",
    body: "Packages built around your schedule, including Ramadan and peak-season travel where available.",
    icon: CalendarRange,
  },
  {
    title: "Group & Family Coordination",
    body: "One coordinated booking for families and groups traveling together, instead of separate bookings per traveler.",
    icon: Users,
  },
];

const processSteps: { step: string; text: string }[] = [
  {
    step: "Step 1: Consultation",
    text: "We discuss your travel dates, group size, and whether you prefer bus or air travel.",
  },
  {
    step: "Step 2: Document Collection & Visa Application",
    text: "We collect your documents and submit your Umrah visa application through official Saudi channels.",
  },
  {
    step: "Step 3: Transport & Hotel Booking",
    text: "Once your visa is confirmed, we coordinate your chosen transport and hotel arrangements.",
  },
  {
    step: "Step 4: Pre-Departure Briefing",
    text: "We walk you through your itinerary, documents to carry, and what to expect on arrival.",
  },
  {
    step: "Step 5: Travel",
    text: "You travel to Makkah and Madinah with your arrangements already confirmed.",
  },
];

const faqs = umrahFaqs;

const disclaimer =
  "We provide visa documentation assistance and travel coordination only. We are not a government or religious authority. All Umrah visas are processed through official Saudi authorities and licensed travel partners, subject to applicable rules and approvals.";

export default function UmrahServicesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-w-0"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              Umrah Services
            </p>
            <h1 className="page-title mb-6">
              Umrah Package From <span style={{ color: '#155EEF' }}>Dubai</span>
            </h1>
            <p className="lead text-[#667085] mb-6">
              Visa processing, bus or flight transport, hotel arrangements, and group travel
              coordination for Umrah pilgrims traveling from Dubai and across the UAE — organized
              end-to-end so you can focus on your journey.
            </p>
            <p className="text-sm text-[#667085] leading-relaxed border-l-4 pl-4" style={{ borderColor: "#155EEF" }}>
              {disclaimer}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15 }}
            className="relative h-72 md:h-96 flex items-center justify-center"
          >
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.12)' }} aria-hidden />
            <div className="absolute bottom-0 right-6 w-24 h-24 rounded-full" style={{ backgroundColor: 'rgba(21, 94, 239,0.08)' }} aria-hidden />
            <img
              src="/images/ummarah-visa.webp"
              alt="Umrah visa from UAE: processing, flights, and hotel coordination for pilgrims"
              width={640}
              height={427}
              className="relative w-full h-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20" style={{ backgroundColor: '#155EEF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title mb-4" style={{ color: '#FFFFFF' }}>
              What&apos;s Included
            </h2>
            <p className="lead" style={{ color: 'rgba(255,255,255,0.75)' }}>
              A single point of contact for visa, travel, and accommodation coordination for your
              Umrah journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl p-6 md:p-8 text-center border border-white/10"
                style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: '#155EEF' }} />
                </div>
                <h3 className="subsection-title mb-3" style={{ color: '#FFFFFF' }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Umrah packages from Dubai */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              Package Options
            </p>
            <h2 className="section-title mb-4">
              Umrah Packages From Dubai
            </h2>
            <p className="lead text-[#667085]">
              Choose a duration that fits your schedule — every package includes visa
              documentation, your choice of transport, and hotel coordination near the Haram.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packageTiers.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-6 md:p-8 card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ backgroundColor: '#F5F8FF', border: "1px solid var(--card-line)" }}
              >
                <p
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ backgroundColor: '#155EEF', color: '#FFFFFF' }}
                >
                  {pkg.duration}
                </p>
                <h3 className="subsection-title mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed mb-4">{pkg.description}</p>
                <ul className="space-y-2 mb-6">
                  {pkg.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#667085]">
                      <span className="text-[#155EEF] mt-0.5">👉</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block text-center px-6 py-3 rounded-2xl transition-all hover:opacity-90 font-semibold text-sm"
                  style={{ backgroundColor: '#155EEF', color: '#FFFFFF' }}
                >
                  Get a Custom Quote
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-[#667085] text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Package durations and inclusions are indicative and adjusted to your travel dates,
            group size, and preferences. Contact us for current pricing.
          </p>
        </div>
      </section>

      {/* Travel options & pricing */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="uppercase tracking-widest text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
              Travel Options
            </p>
            <h2 className="section-title mb-4">
              Flight &amp; Bus Travel Pricing
            </h2>
            <p className="lead text-[#667085]">
              Whichever way you prefer to travel to Makkah and Madinah, we coordinate the booking
              end-to-end.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {travelOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl p-8 text-center card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#F5F8FF' }}
                  aria-hidden
                >
                  <option.icon className="w-7 h-7" style={{ color: '#155EEF' }} />
                </div>
                <h3 className="subsection-title mb-2">
                  {option.title}
                </h3>
                {option.price ? (
                  <p className="text-2xl font-bold mb-3" style={{ color: '#155EEF' }}>
                    {option.price}
                  </p>
                ) : (
                  <p className="text-sm font-semibold mb-3" style={{ color: '#155EEF' }}>
                    Contact us for current pricing
                  </p>
                )}
                <p className="text-sm text-[#667085] leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-[#667085] text-center mt-8 max-w-2xl mx-auto leading-relaxed">
            Prices shown are indicative starting rates per person and vary by travel dates, group
            size, and availability. Confirm current pricing when booking.
          </p>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="section-title mb-4">
              Why Book Your Umrah Journey With Us
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                className="rounded-2xl p-6 md:p-8 text-center card-hover transition-all duration-200 hover:-translate-y-1"
                style={{ border: "1px solid var(--card-line)" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto"
                  style={{ backgroundColor: '#F5F8FF' }}
                  aria-hidden
                >
                  <item.icon className="w-7 h-7" style={{ color: '#155EEF' }} />
                </div>
                <h3 className="subsection-title mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <h2 className="section-title mb-4">
              How Booking Your Umrah Package Works
            </h2>
          </motion.div>
          <div className="space-y-4">
            {processSteps.map((s, index) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-4 md:gap-6 rounded-3xl p-6 shadow-sm bg-white border border-[#E4E7EC]"
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                  style={{ backgroundColor: '#155EEF', color: '#FFFFFF' }}
                >
                  {index + 1}
                </div>
                <div>
                  <h3 className="subsection-title mb-1">
                    {s.step}
                  </h3>
                  <p className="text-[#667085]">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 text-center"
          >
            <h2 className="section-title mb-4">
              Frequently Asked <span style={{ color: '#155EEF' }}>Questions</span>
            </h2>
          </motion.div>
          <div className="rounded-3xl px-4 md:px-8 py-2 shadow-sm border border-[#E4E7EC]" style={{ backgroundColor: '#F5F8FF' }}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E4E7EC]">
                  <AccordionTrigger
                    className="text-left text-base font-bold py-5 hover:no-underline"
                    style={{ color: '#1D2939' }}
                  >
                    <span className="flex items-start gap-2">
                      <span className="text-[#155EEF]">❓</span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#667085] text-base leading-relaxed pl-8">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="relative py-24 overflow-hidden" style={{ backgroundColor: '#155EEF' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
        >
          <h2 className="section-title mb-6" style={{ color: "#FFFFFF" }}>Planning Your Umrah Journey?</h2>
          <p className="lead mb-4" style={{ color: 'rgba(255,255,255,0.85)' }}>
            We&apos;ll walk through visa requirements, travel dates, and group or individual
            arrangements so nothing is left to chance.
          </p>
          <p className="text-sm text-white/60 mb-8 max-w-2xl mx-auto leading-relaxed">
            {disclaimer}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold border-2 border-white transition-all hover:bg-white hover:text-[#155EEF]"
          >
            Book an Umrah Travel Consultation
            <ArrowRight className="w-5 h-5" aria-hidden />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
