import Link from "next/link";
import { ArrowRight, CheckCircle2, FileCheck2, MessageCircle } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import VisitVisaEnquiryForm from "@/components/VisitVisaEnquiryForm";
import type { VisitVisaDestination } from "@/lib/data/visit-visa-destinations";

const WHATSAPP_HREF = "https://wa.me/971589867555";

export default function VisitVisaCountryPage({ destination }: { destination: VisitVisaDestination }) {
  const relatedHref = destination.region === "Europe" ? "/visit-visa/schengen" : `/visit-visa/${destination.region.toLowerCase().replace(" ", "-")}`;

  return (
    <div>
      <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs trail={[
            { name: "Visit Visa Services", href: "/visit-visa" },
            { name: destination.region, href: relatedHref },
            { name: destination.name },
          ]} />
          <p className="eyebrow mb-3">Visit Visa Services</p>
          <h1 className="page-title mb-6">
            {destination.name} <span style={{ color: "#2864E8" }}>Visit Visa</span>
          </h1>
          <p className="lead mb-8 text-[#4B5B70]">
            Get clear, practical support to prepare a visit-visa application for travel to {destination.name}.
            Travelaxis helps applicants organise their information and supporting documents before they use the relevant official process.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="#requirements-form" className="btn inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-white transition-all hover:bg-primary-hover">
              Check {destination.name} requirements <ArrowRight className="size-5" aria-hidden />
            </a>
            <a href={WHATSAPP_HREF} target="_blank" rel="noopener noreferrer" className="btn inline-flex items-center justify-center gap-2 rounded-full border-2 bg-white px-8 py-4" style={{ borderColor: "#E3EAF3", color: "#10254A" }}>
              <MessageCircle className="size-5" style={{ color: "#25D366" }} aria-hidden /> WhatsApp us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">How Travelaxis can help</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Review your next steps", "Understand the application route and the information usually requested for your trip."],
              ["Organise supporting documents", "Prepare a clear, consistent set of documents for the official application process."],
              ["Stay prepared", "Get support with forms, appointment steps, and follow-up actions where applicable."],
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl border bg-white p-5" style={{ borderColor: "#E3EAF3" }}>
                <CheckCircle2 className="mb-3 size-5" style={{ color: "#2864E8" }} aria-hidden />
                <h3 className="subsection-title mb-2">{title}</h3>
                <p className="text-sm leading-relaxed text-[#4B5B70]">{text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-[#4B5B70]">
            Visa rules, fees, appointment availability, and required evidence can change. Always confirm your current requirements with {destination.officialLabel} before submitting an application.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="section-title mb-6">A clear application process</h2>
          <ol className="grid gap-4 sm:grid-cols-4">
            {["Tell us your travel plans", "Review the current requirements", "Prepare your application file", "Proceed through the official process"].map((step, index) => (
              <li key={step} className="rounded-2xl bg-white p-5" style={{ border: "1px solid #E3EAF3" }}>
                <span className="mb-3 grid size-9 place-items-center rounded-full text-sm font-bold" style={{ backgroundColor: "#E8EFFD", color: "#2864E8" }}>{index + 1}</span>
                <p className="text-sm font-semibold text-[#10254A]">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="requirements-form" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <VisitVisaEnquiryForm defaultDestination={destination.name} heading={`Get help with your ${destination.name} visit visa application`} />
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F4F8FC" }}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 text-center" style={{ border: "1px solid #E3EAF3" }}>
            <FileCheck2 className="mx-auto mb-4 size-7" style={{ color: "#2864E8" }} aria-hidden />
            <h2 className="section-title mb-3">Need help planning your next step?</h2>
            <p className="mx-auto max-w-2xl text-[#4B5B70]">Tell us your destination and travel purpose. The final visa decision is always made by the relevant government authority.</p>
            <Link href="/visit-visa/" className="mt-6 inline-flex items-center gap-2 font-semibold" style={{ color: "#2864E8" }}>
              Explore all visit visa destinations <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
