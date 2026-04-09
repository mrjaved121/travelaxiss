import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111111', color: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: '#C9A24A' }}>Travel</span>
              <span style={{ color: '#FFFFFF' }}>axis</span>
            </div>
            <p className="text-gray-400 text-sm">
              Professional visa consultancy and business formation services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#C9A24A' }}>Quick Links</h3>
            <ul className="space-y-2">
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
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#C9A24A' }}>Services</h3>
            <ul className="space-y-2">
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
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#C9A24A' }}>Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                <a href="tel:+971589867555" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +971 58 986 7555
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                <a href="mailto:info@travelaxis.me" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@travelaxis.me
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#C9A24A' }} />
                <span className="text-gray-400 text-sm">Dubai, UAE</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Travelaxis. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}