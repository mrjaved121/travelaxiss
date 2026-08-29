import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { destinations } from "@/components/data/destinations";
import NewsletterSignup from "@/components/NewsletterSignup";

const WHATSAPP_HREF = "https://wa.me/971589867555";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-16 md:pb-0 border-t" style={{ backgroundColor: "#FFFFFF", color: "#1D2939", borderColor: "#E4E7EC" }}>
      {/* Newsletter strip */}
      <NewsletterSignup />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t"
        style={{ borderColor: "#E4E7EC" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="text-2xl font-bold mb-4">
              <span style={{ color: "#1D2939" }}>Travel</span>
              <span style={{ color: "#155EEF" }}>axis</span>
            </p>
            <p className="text-[#667085] text-sm leading-relaxed">
              Visa documentation and business setup support in the UAE, from our Dubai and Lahore offices.
            </p>
            <p className="text-[#667085] text-xs mt-4 leading-relaxed">
              We provide documentation preparation and consultancy support only. We are not a government authority, employer, or recruitment agency, and we do not guarantee visa approval or employment outcomes. Applications are submitted through official government channels or by the applicant/employer.
            </p>
          </div>

          {/* Visa Services */}
          <nav aria-label="Visa services">
            <h3 className="footer-heading mb-5">
              Visa Services
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/services/visit-visa" className="footer-link transition-colors">
                  Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/services/study-visa" className="footer-link transition-colors">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link href="/services/work-visa" className="footer-link transition-colors">
                  Work Visa
                </Link>
              </li>
              <li>
                <Link href="/services/international-visas" className="footer-link transition-colors">
                  International Visa
                </Link>
              </li>
              <li>
                <Link href="/services/attestation" className="footer-link transition-colors">
                  Visa Documentation
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="footer-link font-semibold transition-colors" style={{ color: "#155EEF" }}>
                  View All Visa Services &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          {/* Destinations */}
          <nav aria-label="Destinations">
            <h3 className="footer-heading mb-5">
              Destinations
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              {destinations.map((destination) => (
                <li key={destination.slug}>
                  <Link href={destination.href} className="footer-link transition-colors">
                    {destination.name}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/destinations" className="footer-link font-semibold transition-colors" style={{ color: "#155EEF" }}>
                  Explore All Destinations &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company">
            <h3 className="footer-heading mb-5">
              Company
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/about" className="footer-link transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/why-business" className="footer-link transition-colors">
                  Why Travelaxis
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="footer-link transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="footer-heading mb-5">
              Contact
            </h3>
            <ul className="space-y-3.5 list-none p-0 m-0">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-[#667085] text-sm">Al Qusais, Dubai, UAE</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-[#667085] text-sm">DHA Phase 8, Lahore, Pakistan</span>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link transition-colors"
                  aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <a href="mailto:info@travelaxis.me" className="footer-link transition-colors">
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <a href="tel:+971589867555" className="footer-link transition-colors">
                  +971 58 986 7555
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E4E7EC] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#667085] text-sm">
            © {currentYear} Travelaxis. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="footer-link transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link transition-colors">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
