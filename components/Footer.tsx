import Link from "next/link";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { destinations } from "@/components/data/destinations";
import NewsletterSignup from "@/components/NewsletterSignup";

const WHATSAPP_HREF = "https://wa.me/971589867555";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-16 md:pb-0 border-t" style={{ backgroundColor: "#FFFFFF", color: "#0F2A43", borderColor: "#E6E1D8" }}>
      {/* Newsletter strip */}
      <NewsletterSignup />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-t"
        style={{ borderColor: "#E6E1D8" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <p className="text-2xl font-bold mb-4">
              <span style={{ color: "#0F2A43" }}>Travel</span>
              <span style={{ color: "#0A4D8C" }}>axis</span>
            </p>
            <p className="text-[#52606D] text-sm leading-relaxed">
              Visit and study visa documentation for applicants in Pakistan and the UAE, from our Dubai and Lahore offices.
            </p>
            <p className="text-[#52606D] text-xs mt-4 leading-relaxed">
              We provide documentation preparation and consultancy support only. We are not a government authority, employer, or recruitment agency, and we do not guarantee visa approval or employment outcomes. Applications are submitted through official government channels or by the applicant/employer.
            </p>
          </div>

          {/* Visa Assistance */}
          <nav aria-label="Visa assistance">
            <h3 className="footer-heading mb-5">
              Visa Assistance
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/uae" className="footer-link transition-colors">
                  UAE Visa Services
                </Link>
              </li>
              <li>
                <Link href="/visit-visa" className="footer-link transition-colors">
                  Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/services/study-visa" className="footer-link transition-colors">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link href="/job-seeker-visa" className="footer-link transition-colors">
                  Job Seeker Visa
                </Link>
              </li>
              <li>
                <Link href="/services/uae-golden-visa" className="footer-link transition-colors">
                  UAE Golden Visa
                </Link>
              </li>
              <li>
                <Link href="/services/freelance-visa-dubai" className="footer-link transition-colors">
                  Freelance Visa
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="footer-link font-semibold transition-colors" style={{ color: "#0A4D8C" }}>
                  View All Visa Services &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          {/* Popular visit visas */}
          <nav aria-label="Popular visit visas">
            <h3 className="footer-heading mb-5">
              Popular Visit Visas
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/visit-visa/uae" className="footer-link transition-colors">
                  Dubai Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/visit-visa/uk" className="footer-link transition-colors">
                  UK Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/visit-visa/usa" className="footer-link transition-colors">
                  USA Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/visit-visa/schengen" className="footer-link transition-colors">
                  Schengen Visit Visa
                </Link>
              </li>
              <li>
                <Link href="/visit-visa/australia" className="footer-link transition-colors">
                  Australia Visit Visa
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
                <Link href="/destinations" className="footer-link font-semibold transition-colors" style={{ color: "#0A4D8C" }}>
                  Explore All Destinations &rarr;
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources">
            <h3 className="footer-heading mb-5">
              Resources
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <Link href="/blog" className="footer-link transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="footer-link transition-colors">
                  Success Stories
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
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <span className="text-[#52606D] text-sm">Al Qusais, Dubai, UAE</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <span className="text-[#52606D] text-sm">DHA Phase 8, Lahore, Pakistan</span>
              </li>
              <li className="flex items-start space-x-2">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
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
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <a href="mailto:info@travelaxis.me" className="footer-link transition-colors">
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#0A4D8C" }} aria-hidden />
                <a href="tel:+971589867555" className="footer-link transition-colors">
                  +971 58 986 7555
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E6E1D8] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#52606D] text-sm">
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
