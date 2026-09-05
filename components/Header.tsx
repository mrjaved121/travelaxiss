"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, MessageCircle, ArrowRight, ChevronDown } from "lucide-react";
import { useId, useRef, useState } from "react";

const MOBILE_NAV_PANEL_ID = "primary-navigation-mobile";

type NavItem = { name: string; path: string };
type NavGroup = { name: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    name: "Visa Assistance",
    items: [
      { name: "Visit Visa", path: "/visit-visa" },
      { name: "Study Visa", path: "/services/study-visa" },
      { name: "UAE Residency Support", path: "/services/visa-services" },
      { name: "Document Attestation", path: "/services/attestation" },
    ],
  },
  {
    name: "Destinations",
    items: [
      { name: "Visit Visas by Region", path: "/visit-visa" },
      { name: "UK", path: "/visit-visa/uk" },
      { name: "USA", path: "/visit-visa/usa" },
      { name: "Canada", path: "/visit-visa/canada" },
      { name: "Australia", path: "/visit-visa/australia" },
      { name: "Schengen (Europe)", path: "/visit-visa/europe" },
      { name: "All Destinations", path: "/destinations" },
    ],
  },
  {
    name: "Business Setup",
    items: [
      { name: "Company Formation", path: "/services/company-formation" },
      { name: "Free Zones", path: "/free-zones" },
      { name: "Business Support Services", path: "/services/business-support" },
      { name: "Government Services", path: "/services/government-services" },
    ],
  },
  {
    name: "Resources",
    items: [
      { name: "Guides", path: "/blog" },
      { name: "FAQs", path: "/faq" },
      { name: "About", path: "/about" },
    ],
  },
];

function NavDropdown({
  group,
  isActive,
}: {
  group: NavGroup;
  isActive: (path: string) => boolean;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerId = useId();

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const groupIsActive = group.items.some((item) => isActive(item.path));

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        id={triggerId}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`nav-link inline-flex items-center gap-1 transition-colors rounded-sm focus-visible:outline-offset-4 ${
          groupIsActive ? "is-active" : "hover:text-[#155EEF]"
        }`}
      >
        {group.name}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open ? (
        <div
          role="menu"
          aria-labelledby={triggerId}
          className="absolute left-0 top-full pt-3 z-50"
        >
          <div
            className="min-w-[220px] rounded-2xl shadow-lg py-2 bg-white"
            style={{ border: "1px solid var(--card-line)" }}
          >
            {group.items.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#F5F8FF]"
                style={{ color: isActive(item.path) ? "#155EEF" : "#1D2939" }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function MobileNavGroup({
  group,
  isActive,
  onNavigate,
}: {
  group: NavGroup;
  isActive: (path: string) => boolean;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className="nav-link w-full flex items-center justify-between px-4 py-2 transition-colors rounded-sm hover:text-[#155EEF]"
      >
        <span>{group.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open ? (
        <ul id={panelId} className="flex flex-col space-y-1 pl-4 list-none m-0 pb-2">
          {group.items.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={onNavigate}
                className={`nav-link block px-4 py-2 text-sm transition-colors rounded-sm ${
                  isActive(item.path) ? "is-active" : "hover:text-[#155EEF]"
                }`}
                aria-current={isActive(item.path) ? "page" : undefined}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default function Header() {
  const pathname = usePathname();
  const navLabelId = useId();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumber = "+971589867555";
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\+/g, "")}`;

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
              alt="Travelaxis"
              width={352}
              height={94}
              className="h-11 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8" aria-label="Primary">
            {navGroups.map((group) => (
              <NavDropdown key={group.name} group={group} isActive={isActive} />
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
              className="btn flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-hover transition-all shadow-sm hover:shadow-md"
              style={{ color: "#FFFFFF" }}
            >
              <span>Check Requirements</span>
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
              {navGroups.map((group) => (
                <MobileNavGroup
                  key={group.name}
                  group={group}
                  isActive={isActive}
                  onNavigate={() => setMobileMenuOpen(false)}
                />
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`nav-link block px-4 py-2 transition-colors rounded-sm ${
                    isActive("/contact") ? "is-active" : "hover:text-[#155EEF]"
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
                  <span>Check Requirements</span>
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
