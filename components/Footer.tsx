import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { dubaiAreas } from "@/components/data/dubaiAreas";
import { emirates } from "@/components/data/emirates";
import { freeZones } from "@/components/data/freeZones";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-16 md:pb-0 border-t" style={{ backgroundColor: "#FFFFFF", color: "#1D2939", borderColor: "#E4E7EC" }}>
      {/* Newsletter band */}
      <div style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="subsection-title text-white">Subscribe for the Latest Newsletter</h3>
            <p className="text-white/90 text-sm mt-1">
              UAE business setup tips and visa updates, straight to your inbox.
            </p>
          </div>
          <form className="w-full md:w-auto flex gap-2" aria-label="Newsletter signup">
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="Your Email Address"
              className="flex-1 md:w-72 px-5 py-3 rounded-full text-[#1D2939] bg-white placeholder:text-[#667085] focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full font-semibold bg-white shrink-0"
              style={{ color: "#155EEF" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-bold mb-4">
              <span style={{ color: "#1D2939" }}>Travel</span>
              <span style={{ color: "#155EEF" }}>axis</span>
            </p>
            <p className="text-[#667085] text-sm">
              Premium UAE consultancy: company formation, government coordination, legal documentation, and UAE visa documentation and application support.
            </p>
            <p className="text-[#667085] text-xs mt-3 leading-relaxed">
              We provide documentation preparation and consultancy support only. We are not a government authority, employer, or recruitment agency, and we do not guarantee visa approval or employment outcomes. Applications are submitted through official government channels or by the applicant/employer.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="footer-heading mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link href="/destinations" className="footer-link transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link transition-colors">
                  Visa Services
                </Link>
              </li>
              <li>
                <Link href="/visa-finder" className="footer-link transition-colors">
                  Visa Finder
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="footer-link transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/consultation" className="footer-link transition-colors">
                  Book a Consultation
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/why-business" className="footer-link transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/pakistan" className="footer-link transition-colors">
                  For Clients in Pakistan
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link transition-colors">
                  Resources / Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="footer-link transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="footer-heading mb-4">
              Services
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link href="/services/company-formation" className="footer-link transition-colors">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services/government-services" className="footer-link transition-colors">
                  Government Services
                </Link>
              </li>
              <li>
                <Link href="/services/legal-documentation" className="footer-link transition-colors">
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link href="/services/business-support" className="footer-link transition-colors">
                  Business Support
                </Link>
              </li>
              <li>
                <Link href="/services/visa-services" className="footer-link transition-colors">
                  UAE Visa Documentation
                </Link>
              </li>
              <li>
                <Link href="/services/international-visas" className="footer-link transition-colors">
                  International Visa Documentation
                </Link>
              </li>
              <li>
                <Link href="/services/umrah-services" className="footer-link transition-colors">
                  Umrah Services
                </Link>
              </li>
              <li>
                <Link href="/services/attestation" className="footer-link transition-colors">
                  UAE Document Attestation
                </Link>
              </li>
              <li>
                <Link href="/services/uk-visa-from-pakistan" className="footer-link transition-colors">
                  UK Visa from Pakistan
                </Link>
              </li>
              <li>
                <Link href="/services/canada-visa-from-pakistan" className="footer-link transition-colors">
                  Canada Visa from Pakistan
                </Link>
              </li>
              <li>
                <Link href="/services/australia-visa-from-pakistan" className="footer-link transition-colors">
                  Australia Visa from Pakistan
                </Link>
              </li>
              <li>
                <Link href="/services/usa-visa-from-pakistan" className="footer-link transition-colors">
                  USA Visa from Pakistan
                </Link>
              </li>
              <li>
                <Link href="/services/germany-visa-from-pakistan" className="footer-link transition-colors">
                  Germany Visa from Pakistan
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="footer-heading mb-4">
              Contact
            </h3>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <a href="tel:+971589867555" className="footer-link transition-colors">
                  +971 58 986 7555
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <a href="mailto:info@travelaxis.me" className="footer-link transition-colors">
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-[#667085] text-sm">Al Qusais, Dubai, UAE</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#155EEF" }} aria-hidden />
                <span className="text-[#667085] text-sm">DHA Phase 8, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations We Serve — full link coverage for local SEO / crawlability */}
        <div className="border-t border-[#E4E7EC] mt-10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <nav aria-label="Dubai areas we serve">
            <h3 className="footer-heading mb-4">
              Dubai Areas We Serve
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {dubaiAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/dubai/${area.slug}`}
                    className="footer-link transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="UAE emirates we serve">
            <h3 className="footer-heading mb-4">
              Emirates We Serve
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {emirates.map((emirate) => (
                <li key={emirate.slug}>
                  <Link
                    href={`/emirates/${emirate.slug}`}
                    className="footer-link transition-colors"
                  >
                    {emirate.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="UAE free zones we support">
            <h3 className="footer-heading mb-4">
              UAE Free Zones
            </h3>
            <ul className="space-y-2 list-none p-0 m-0">
              {freeZones.map((zone) => (
                <li key={zone.slug}>
                  <Link
                    href={`/free-zones/${zone.slug}`}
                    className="footer-link transition-colors"
                  >
                    {zone.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
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
