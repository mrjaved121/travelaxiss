"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, MessageCircle, ArrowRight } from "lucide-react";
import { useId, useState } from "react";

const MOBILE_NAV_PANEL_ID = "primary-navigation-mobile";

export default function Header() {
  const pathname = usePathname();
  const navLabelId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  const navLinks = [
    { name: "Visa Services", path: "/services" },
    { name: "Destinations", path: "/destinations" },
    { name: "Visa Finder", path: "/visa-finder" },
    { name: "Resources", path: "/blog" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="hidden md:block text-white" style={{ backgroundColor: "#155EEF" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 hover:opacity-80">
              <Phone className="w-3.5 h-3.5" aria-hidden />
              +971 58 986 7555
            </a>
            <a href="mailto:info@travelaxis.me" className="flex items-center gap-2 hover:opacity-80">
              <Mail className="w-3.5 h-3.5" aria-hidden />
              info@travelaxis.me
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-[#E4E7EC] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center rounded-sm"
            aria-label="Travelaxis home"
          >
            <img
              src="/travelaxis-logo.png"
              alt=""
              width={352}
              height={94}
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`nav-link transition-colors rounded-sm focus-visible:outline-offset-4 ${
                  isActive(link.path) ? "is-active" : "hover:opacity-70"
                }`}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full border-2 transition-all hover:opacity-80"
              style={{ borderColor: "#E4E7EC", color: "#25D366" }}
              aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
            >
              <MessageCircle className="w-5 h-5" aria-hidden />
            </a>
            <Link
              href="/visa-finder"
              className="btn flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover transition-colors"
              style={{ color: "#FFFFFF" }}
            >
              <span>Check Visa Requirements</span>
              <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm"
            style={{ color: "#1D2939" }}
            aria-expanded={mobileMenuOpen}
            aria-controls={MOBILE_NAV_PANEL_ID}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden />
            ) : (
              <Menu className="w-6 h-6" aria-hidden />
            )}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div
            id={MOBILE_NAV_PANEL_ID}
            className="lg:hidden py-4 border-t border-[#E4E7EC]"
            role="navigation"
            aria-labelledby={navLabelId}
          >
            <p id={navLabelId} className="sr-only">
              Mobile site menu
            </p>
            <ul className="flex flex-col space-y-1 list-none p-0 m-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`nav-link block px-4 py-2 transition-colors rounded-sm ${
                      isActive(link.path) ? "is-active" : "hover:opacity-70"
                    }`}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link block px-4 py-2 transition-colors rounded-sm ${
                    isActive("/contact") ? "is-active" : "hover:opacity-70"
                  }`}
                  aria-current={isActive("/contact") ? "page" : undefined}
                >
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="/visa-finder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn mx-4 flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover transition-colors"
                  style={{ color: "#FFFFFF" }}
                >
                  <span>Check Visa Requirements</span>
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </li>
              <li className="px-4 pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2 text-sm font-semibold"
                  style={{ color: "#25D366" }}
                  aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      </div>
    </header>
  );
}
