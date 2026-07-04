import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0E2A57", color: "#FFFFFF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-bold mb-4">
              <span style={{ color: "#1D63E0" }}>Travel</span>
              <span style={{ color: "#FFFFFF" }}>axis</span>
            </p>
            <p className="text-gray-400 text-sm">
              Premium UAE consultancy: company formation, government coordination, legal documentation, and UAE visa documentation and application support.
            </p>
            <p className="text-gray-500 text-xs mt-3 leading-relaxed">
              We provide documentation assistance and consultancy support only. We are not a government authority and do not issue visas directly.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h2 className="font-semibold mb-4 text-base" style={{ color: "#1D63E0" }}>
              Quick Links
            </h2>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/why-business" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services">
            <h2 className="font-semibold mb-4 text-base" style={{ color: "#1D63E0" }}>
              Services
            </h2>
            <ul className="space-y-2 list-none p-0 m-0">
              <li>
                <Link href="/services/company-formation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Company Formation
                </Link>
              </li>
              <li>
                <Link href="/services/government-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Government Services
                </Link>
              </li>
              <li>
                <Link href="/services/legal-documentation" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Legal Documentation
                </Link>
              </li>
              <li>
                <Link href="/services/business-support" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Business Support
                </Link>
              </li>
              <li>
                <Link href="/services/visa-services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  UAE Visa Documentation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h2 className="font-semibold mb-4 text-base" style={{ color: "#1D63E0" }}>
              Contact
            </h2>
            <ul className="space-y-3 list-none p-0 m-0">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1D63E0" }} aria-hidden />
                <a href="tel:+971589867555" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +971 58 986 7555
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1D63E0" }} aria-hidden />
                <a href="mailto:info@travelaxis.me" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1D63E0" }} aria-hidden />
                <span className="text-gray-400 text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Travelaxis. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
