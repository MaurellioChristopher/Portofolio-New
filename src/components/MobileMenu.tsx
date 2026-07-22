"use client";

import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { label: "Home", href: "#beranda" },
  { label: "About", href: "#tentang" },
  { label: "Projects", href: "#portofolio" },
  { label: "Awards", href: "#penghargaan" },
  { label: "Skills", href: "#keterampilan" },
  { label: "Contact", href: "#kontak" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-end p-5">
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
                aria-label="Close menu"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-6 gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index + 0.1 }}
                  className="py-3 px-4 text-lg font-medium text-foreground/80 hover:text-maroon hover:bg-maroon/5 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Bottom Accent */}
            <div className="mt-auto p-6 border-t border-slate-100">
              <p className="text-sm text-muted">
                &copy; {new Date().getFullYear()} Maurellio C.Y.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
