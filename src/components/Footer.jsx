import React from "react";
import { Globe } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Company: [
      { label: "About Uber", href: "/about" },
      { label: "Our Offerings", href: "/" },
      { label: "Newsroom", href: "/" },
      { label: "Investors", href: "/" },
      { label: "Blog", href: "/" },
      { label: "Careers", href: "/" },
    ],
    Products: [
      { label: "Ride", href: "/ride" },
      { label: "Drive", href: "/drive" },
      { label: "Uber Eats", href: "/eats" },
      { label: "Uber Business", href: "/business" },
      { label: "Uber Freight", href: "/" },
      { label: "Gift Cards", href: "/" },
    ],
    Global: [
      { label: "Safety", href: "/" },
      { label: "Community Guidelines", href: "/" },
      { label: "Accessibility", href: "/" },
      { label: "Terms of Service", href: "/" },
      { label: "Privacy Policy", href: "/" },
      { label: "Cookies", href: "/" },
    ],
    Cities: [
      { label: "New York", href: "/" },
      { label: "Los Angeles", href: "/" },
      { label: "Chicago", href: "/" },
      { label: "London", href: "/" },
      { label: "Paris", href: "/" },
      { label: "Tokyo", href: "/" },
    ],
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "/", label: "Facebook" },
    { icon: FaTwitter, href: "/", label: "Twitter" },
    { icon: FaLinkedinIn, href: "/", label: "LinkedIn" },
    { icon: FaInstagram, href: "/", label: "Instagram" },
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight mb-6 hover:opacity-80 transition-opacity"
            >
              Uber
            </Link>

            <p className="text-sm text-white/60 mb-6 max-w-xs">
              Move the way you want. Request a ride, hop in, and go.
            </p>

            {/* Language Selector */}
            <div className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer">
              <Globe size={16} />
              <span className="text-sm">English (US)</span>
            </div>
          </div>

          {/* Footer Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-widest">
                {category}
              </h3>

              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8">
          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="text-white/60 hover:text-white transition-colors duration-200"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>

              {/* App Download Links */}
              <div className="flex items-center gap-3 border-l border-white/10 pl-8 md:pl-6">
                <a
                  href="#"
                  aria-label="Download on the App Store"
                  className="text-white/70 hover:text-white transition-colors text-xs"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 13.5c-.91 0-1.64.33-2.15.98h-.02c-.37-.63-1.02-1.08-1.81-1.08-1.38 0-2.63 1.13-2.63 2.53s1.25 2.53 2.63 2.53c.79 0 1.44-.45 1.81-1.08h.02c.51.65 1.24.98 2.15.98 1.66 0 3.04-1.38 3.04-3.08 0-1.7-1.38-3.08-3.04-3.08M3.5 7.5h17v10h-17z" />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-label="Get it on Google Play"
                  className="text-white/70 hover:text-white transition-colors text-xs"
                >
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3.5 7.5h17v10h-17z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="text-center md:text-right">
              <p className="text-sm text-white/60">
                © {currentYear} Uber Technologies Inc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <div>
              Made with ❤️ | Last updated {new Date().toLocaleDateString()}
            </div>

            <div className="flex gap-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                Status
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Sitemap
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;