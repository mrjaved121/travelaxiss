import { MessageCircle, ShieldCheck } from "lucide-react";
import TallyEmbed from "@/components/TallyEmbed";

const TALLY_FORM_ID = "Yj5R7q";

export default function ApplyPage() {
  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  return (
    <div>
      <section className="py-12 md:py-16" style={{ backgroundColor: "#F7F3EC" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="page-title mb-4">Submit Your Visa Documents</h1>
          <p className="lead max-w-2xl mx-auto">
            Start your application by submitting your documents securely. Please have ready: your
            passport, ID card (CNIC) front and back, a recent bank statement (last 6 months), and
            your degree/qualification certificate. Your information is kept secure and used only
            for your visa application.
          </p>
          <p
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: "#0A4D8C" }}
          >
            <ShieldCheck className="w-4 h-4" aria-hidden />
            Secure upload · Never shared outside your visa application
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <TallyEmbed formId={TALLY_FORM_ID} title="Visit Visa Application & Documents" />

          <div className="mt-10 text-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold hover:opacity-80"
              style={{ color: "#25D366" }}
              aria-label="Prefer WhatsApp? Message Travelaxis and we'll guide you (opens in a new tab)"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
              Prefer WhatsApp? Message us and we&apos;ll guide you.
            </a>
            <p className="mt-3 text-sm" style={{ color: "#52606D" }}>
              Form not loading?{" "}
              <a
                href={`https://tally.so/r/${TALLY_FORM_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#0A4D8C]"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
