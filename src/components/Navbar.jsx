import { Globe, Menu, X, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Ride", href: "/ride" },
  { label: "Drive", href: "/drive" },
  { label: "Uber Eats", href: "/eats" },
  { label: "Business", href: "/business" },
  { label: "About", href: "/about" },
];

const LANGUAGES = [
  { code: "EN", label: "English" },
  { code: "ES", label: "Español" },
  { code: "FR", label: "Français" },
  { code: "DE", label: "Deutsch" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const location = useLocation();

  const isActiveLink = (href) => location.pathname === href;

  const handleLangSelect = (code) => {
    setSelectedLang(code);
    setLangDropdownOpen(false);
  };

  return (
    <header className="w-full bg-black text-white sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity flex-shrink-0"
        >
          Uber
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                isActiveLink(link.href)
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white/70 hover:text-white"
              }`}
              aria-current={isActiveLink(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex gap-4 items-center">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex gap-2 items-center font-medium text-sm text-white/70 hover:text-white transition-colors px-3 py-2 rounded-full hover:bg-white/10"
              aria-label="Select language"
              aria-expanded={langDropdownOpen}
            >
              <Globe size={16} />
              <span>{selectedLang}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${
                  langDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Language Dropdown Menu */}
            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden shadow-lg">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLangSelect(lang.code)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                      selectedLang === lang.code
                        ? "bg-white/20 text-white"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/help"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Help
          </Link>

          <Link
            to="/login"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            Log in
          </Link>

          <Link
            to="/signup"
            className="text-black text-sm bg-white px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {/* Mobile Navigation Links */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors py-2 ${
                  isActiveLink(link.href)
                    ? "text-white border-l-2 border-white pl-3"
                    : "text-white/70"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-white/10 pt-4 mt-2">
              {/* Mobile Language Selector */}
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="w-full flex gap-2 items-center font-medium text-sm text-white/70 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors justify-between"
              >
                <span className="flex gap-2 items-center">
                  <Globe size={16} />
                  {selectedLang}
                </span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langDropdownOpen && (
                <div className="mt-2 bg-white/5 rounded-lg overflow-hidden border border-white/10">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        handleLangSelect(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                        selectedLang === lang.code
                          ? "bg-white/10 text-white"
                          : "text-white/70"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}

              <Link
                to="/help"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-sm font-medium text-white/70 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors mt-2"
              >
                Help
              </Link>

              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-sm font-medium text-white/70 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-colors mt-2"
              >
                Log in
              </Link>

              <Link
                to="/signup"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center text-black text-sm bg-white px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 mt-4"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;