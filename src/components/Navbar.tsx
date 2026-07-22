"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", href: "#beranda" },
  { label: "About", href: "#tentang" },
  { label: "Projects", href: "#portofolio" },
  { label: "Awards", href: "#penghargaan" },
  { label: "Skills", href: "#keterampilan" },
  { label: "Contact", href: "#kontak" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18">
            {/* Logo */}
            <a
              href="#beranda"
              className="flex items-baseline gap-1 group"
            >
              <span className="font-serif text-2xl sm:text-3xl font-black tracking-tighter text-slate-900 group-hover:text-maroon transition-colors duration-300">
                Maurellio
              </span>
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-maroon mb-1 group-hover:scale-125 transition-transform duration-300" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-medium text-foreground/70 hover:text-maroon transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-maroon rounded-full transition-all duration-300 group-hover:w-4/5" />
                </a>
              ))}
            </nav>

            {/* CTA Button — Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="#kontak"
                className="px-6 py-2.5 text-sm font-bold text-white bg-maroon rounded-full shadow-lg shadow-maroon/20 hover:bg-maroon-dark hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            {/* Hamburger — Mobile */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Buka menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
