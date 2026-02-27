import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold">
              Visa<span className="text-amber-500">Hub</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Services
            </a>
            <Link
              to="/europe-work-permit"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Work Permit
            </Link>
            <Link
              to="/work-visa"
              className="text-slate-700 hover:text-amber-600 transition-colors"
            >
              Work Visa
            </Link>
            <a
              href="#contact-form"
            >
              <Button className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900">
                Contact Us
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-slate-700"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                Services
              </a>
              <Link to="/europe-work-permit" className="text-slate-700" onClick={() => setIsMenuOpen(false)}>
                Work Permit
              </Link>
              <Link to="/work-visa" className="text-slate-700" onClick={() => setIsMenuOpen(false)}>
                Work Visa
              </Link>
              <a
                href="#contact-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900">
                  Contact Us
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}