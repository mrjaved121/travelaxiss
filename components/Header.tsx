"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";
import { useId, useState } from "react";

const MOBILE_NAV_PANEL_ID = "primary-navigation-mobile";

export default function Header() {
  const pathname = usePathname();
  const navLabelId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

  const navLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Why Business", path: "/why-business" },
    { name: "Blog", path: "/blog" },
    { name: "FAQs", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 rounded-sm"
            aria-label="Travelaxis home"
          >
            <span aria-hidden="true" className="text-3xl font-bold">
              <span style={{ color: "#C9A24A" }}>Travel</span>
              <span style={{ color: "#111111" }}>axis</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`transition-colors rounded-sm focus-visible:outline-offset-4 ${
                  isActive(link.path) ? "font-semibold" : "hover:opacity-70"
                }`}
                style={{
                  color: isActive(link.path) ? "#C9A24A" : "#111111",
                }}
                aria-current={isActive(link.path) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-lg transition-all hover:opacity-90"
              style={{ backgroundColor: "#C9A24A", color: "#111111" }}
              aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
            >
              <Phone className="w-5 h-5" aria-hidden />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-sm"
            style={{ color: "#111111" }}
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
            className="lg:hidden py-4 border-t border-gray-200"
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
                    className={`block px-4 py-2 transition-colors rounded-sm ${
                      isActive(link.path) ? "font-semibold" : "hover:opacity-70"
                    }`}
                    style={{
                      color: isActive(link.path) ? "#C9A24A" : "#111111",
                    }}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mx-4 flex items-center justify-center space-x-2 px-6 py-3 rounded-lg"
                  style={{ backgroundColor: "#C9A24A", color: "#111111" }}
                  aria-label="Chat with Travelaxis on WhatsApp (opens in a new tab)"
                >
                  <Phone className="w-5 h-5" aria-hidden />
                  <span className="font-semibold">Call Now</span>
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}
