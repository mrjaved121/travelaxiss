"use client";

import { ArrowRight, MessageCircle, Plane, Hotel, FileCheck, MapPinned, Users, Clock, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TourPackageLeadForm from "@/components/TourPackageLeadForm";
import { tourPackageIncludes, attractionOptions, sampleItinerary, moreExperienceGroups, tourPackageFaqs } from "@/components/data/uaeTourPackage";

const WHATSAPP_HREF =
  "https://wa.me/971589867555?text=" + encodeURIComponent("Hi, I'm interested in the UAE visit visa + tour package");

const includeCards = [
  { icon: FileCheck, title: "Visit Visa Documentation", description: "We prepare your UAE visit visa application and supporting documents." },
  { icon: Plane, title: "Airport Pick-Up & Drop-Off", description: "Private transport to and from your hotel, both ways." },
  { icon: Hotel, title: "4-Star Hotel, 7 Days / 6 Nights", description: "A comfortable 4-star stay for the length of your trip." },
  { icon: MapPinned, title: "Customizable Attractions", description: "Pick the tours and tickets that match what you want to see." },
];

const whyUs = [
  { icon: Clock, title: "Skip the Lines", description: "We help arrange priority tickets for popular attractions where available." },
  { icon: Users, title: "Private & Group Options", description: "Solo, couples, families or private groups — the package scales to your trip." },
  { icon: ShieldCheck, title: "Lahore & Dubai Offices", description: "Real offices, real people — not a faceless booking engine." },
];

export default function UaeTourPackagePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#0A4D8C" }}>
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
          style={{ backgroundColor: "rgba(56,189,248,0.18)" }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full"
          style={{ backgroundColor: "rgba(245,165,36,0.15)" }}
          aria-hidden
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="uppercase tracking-widest text-sm font-semibold mb-4" style={{ color: "#E0F0FB" }}>
              UAE Visit Visa + Holiday Package
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Explore the Best of the UAE — <span style={{ color: "#F5A524" }}>Visa, Hotel &amp; Tours Sorted</span>
            </h1>
            <p className="text-lg text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Burj Khalifa, Desert Safari, a Dubai City Tour, Abu Dhabi&apos;s Grand Mosque, a Dhow Cruise and
              more — tell us what you want to
              see, and we&apos;ll put together your visit visa documentation, hotel stay, airport transfers and
              itinerary around it.
            </p>
            <ul className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 mb-10 text-white/95 text-sm font-medium">
              {["Visit visa documentation", "Airport pick-up & drop-off", "4-star hotel, 7 days", "Fully customizable tours"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#38BDF8" }} aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#get-quote"
                className="h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl font-bold transition-all hover:brightness-105"
                style={{ backgroundColor: "#F5A524", color: "#3B2600" }}
              >
                <span>Get My Custom Quote</span>
                <ArrowRight className="w-5 h-5" aria-hidden />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 inline-flex items-center justify-center gap-2 px-6 rounded-xl font-semibold bg-white text-[#0F2A43] transition-all hover:opacity-90"
                aria-label="Chat with Travelaxis on WhatsApp about the UAE tour package (opens in a new tab)"
              >
                <MessageCircle className="w-5 h-5" style={{ color: "#25D366" }} aria-hidden />
                <span>Message Us on WhatsApp</span>
              </a>
            </div>
            <p className="text-xs text-white/65 mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Travelaxis is a documentation and consultancy service, not a government authority. We help arrange
              your visa paperwork, accommodation and itinerary — we do not issue visas and cannot guarantee visa
              approval. Pricing depends on your dates, group size and chosen attractions — message us for a quote.
            </p>
          </div>
          <div className="hidden lg:block">
            <img
              src="/images/hero-uae-package.webp"
              alt="Dubai skyline with Burj Khalifa at sunset"
              width={1400}
              height={875}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">What&apos;s Included</h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includeCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border bg-white p-6 text-center transition-all hover:-translate-y-1"
                style={{ borderColor: "#E6E1D8", boxShadow: "0 2px 8px rgba(15,42,67,0.06)" }}
              >
                <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full" style={{ backgroundColor: "#0A4D8C" }} aria-hidden>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2A43] mb-2">{item.title}</h3>
                <p className="text-[0.9375rem] text-[#52606D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotel showcase */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="/images/hotel-room.webp"
              alt="Example 4-star hotel room with a city view"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl shadow-lg"
              loading="lazy"
            />
            <p className="text-xs text-[#52606D] mt-2">Example of a 4-star hotel room — your exact hotel is confirmed when you book.</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43] mb-4">
              A Comfortable 4-Star Stay
            </h2>
            <p className="text-lg text-[#52606D] leading-relaxed mb-4">
              7 days / 6 nights in a 4-star hotel, chosen around your travel dates, group size and budget. Tell us
              your preferences — location, room type, number of guests — and we&apos;ll confirm the right property
              for your trip.
            </p>
          </div>
        </div>
      </section>

      {/* Sample day-by-day itinerary */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
              Your 7-Day UAE Itinerary
            </h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
            <p className="mt-4 text-lg text-[#52606D] max-w-2xl mx-auto">
              A sample plan covering Dubai&apos;s top sights and a day in Abu Dhabi. Every day can be swapped or
              changed to suit your dates and interests.
            </p>
          </div>
          <ol className="space-y-4">
            {sampleItinerary.map((item, i) => (
              <li
                key={item.day}
                className="flex gap-5 rounded-2xl border bg-white p-5 sm:p-6"
                style={{ borderColor: "#E6E1D8", boxShadow: "0 2px 8px rgba(15,42,67,0.06)" }}
              >
                <div
                  className="grid size-12 shrink-0 place-items-center rounded-full text-lg font-bold text-white"
                  style={{ backgroundColor: "#0A4D8C" }}
                  aria-hidden
                >
                  {i + 1}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "#0A4D8C" }}>
                    {item.day}
                  </p>
                  <h3 className="text-lg font-bold text-[#0F2A43] mb-1">{item.title}</h3>
                  <p className="text-[0.9375rem] text-[#52606D] leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-center text-sm text-[#52606D] mt-8">
            Sample itinerary only. Your final plan, and what your quote covers, is confirmed with you before booking.
          </p>
        </div>
      </section>

      {/* Attractions */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
              Build Your Own Itinerary
            </h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
            <p className="mt-4 text-lg text-[#52606D] max-w-2xl mx-auto">
              Tell us which of these you&apos;d like included, and we&apos;ll work them into your package.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {attractionOptions.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl border bg-white overflow-hidden transition-all hover:-translate-y-1"
                style={{ borderColor: "#E6E1D8", boxShadow: "0 2px 8px rgba(15,42,67,0.06)" }}
              >
                <img
                  src={a.image}
                  alt={a.name}
                  width={800}
                  height={600}
                  className="w-full h-44 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F2A43] mb-2">{a.name}</h3>
                  <p className="text-[0.9375rem] text-[#52606D] leading-relaxed">{a.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-[#52606D] mt-8">
            Have something else in mind? Tell us in the form below — the itinerary is yours to shape.
          </p>
        </div>
      </section>

      {/* More experiences — breadth, not a fixed itinerary */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">
              Even More to Experience in the UAE
            </h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
            <p className="mt-4 text-lg text-[#52606D] max-w-2xl mx-auto">
              A sample of what&apos;s available across the UAE — not everything fits in 7 days, so this is here to
              help you choose, not a fixed itinerary. Pick what interests you and we&apos;ll work it in.
            </p>
          </div>
          <div className="space-y-8">
            {moreExperienceGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-bold uppercase tracking-wide mb-3" style={{ color: "#0A4D8C" }}>
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full px-2.5 py-1 text-xs font-semibold"
                      style={{ backgroundColor: "#E0F0FB", color: "#0A4D8C" }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form #1 */}
      <section id="get-quote" className="py-16 sm:py-20 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <TourPackageLeadForm />
        </div>
      </section>

      {/* Why us */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">Why Book With Us</h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-5 grid size-14 place-items-center rounded-full" style={{ backgroundColor: "#0A4D8C" }} aria-hidden>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F2A43] mb-2">{item.title}</h3>
                <p className="text-[0.9375rem] text-[#52606D] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F2A43]">Frequently Asked Questions</h2>
            <span className="mx-auto mt-4 block h-1 w-14 rounded-full" style={{ backgroundColor: "#F5A524" }} />
          </div>
          <div className="bg-white rounded-3xl px-4 md:px-8 py-2 shadow-sm border" style={{ borderColor: "#E6E1D8" }}>
            <Accordion type="single" collapsible className="w-full">
              {tourPackageFaqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`item-${i}`} className="border-[#E6E1D8]">
                  <AccordionTrigger className="text-left text-base font-bold py-5 hover:no-underline" style={{ color: "#0F2A43" }}>
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

      {/* Final CTA band */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: "#0A4D8C" }}>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Ready to Plan Your UAE Trip?
          </h2>
          <p className="text-white/90 mb-8">
            Message us your travel dates and group size — we&apos;ll confirm your visa requirements and build your
            custom quote.
          </p>
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 inline-flex items-center justify-center gap-2 px-8 rounded-xl font-bold transition-all hover:brightness-105"
            style={{ backgroundColor: "#F5A524", color: "#3B2600" }}
            aria-label="Chat with Travelaxis on WhatsApp about the UAE tour package (opens in a new tab)"
          >
            <MessageCircle className="w-5 h-5" aria-hidden />
            <span>Chat on WhatsApp</span>
          </a>
          <p className="text-xs text-white/65 mt-8 max-w-xl mx-auto leading-relaxed">
            Travelaxis provides documentation assistance and consultancy support. We are not a government
            authority and do not guarantee visa approval. Hotel, transport and attraction arrangements are
            confirmed with you individually based on availability.
          </p>
        </div>
      </section>
    </div>
  );
}
