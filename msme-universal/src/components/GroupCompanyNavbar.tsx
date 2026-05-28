"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import TranslateComponent from "./translate-btn";

export interface NavLink {
  name: string;
  href: string;
}

interface GroupCompanyNavbarProps {themeColor?: string;
  logoSrc: string;
}

const GroupCompanyNavbar = ({ logoSrc, themeColor = '#2563eb' }: GroupCompanyNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  const navLinks: NavLink[] = [
    { name: "About Us", href: "#about" },
    { name: "Group Companies", href: "#companies" },
    { name: "Services", href: "#services" },
    { name: "Careers", href: "/careers" },
    { name: "Our Reach", href: "#reach" },
    { name: "M'Brand", href: "/mbrand" },
    { name: "M'SuperDeal", href: "/super-deal" },
    { name: "Business Directory", href: "https://mnetgo.com/bd" },
  ];

  useEffect(() => {
    // Update active hash based on scroll position or click
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Attempt to highlight active section based on scroll (basic implementation)
      // This can be enhanced further if needed.
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleHashChange);

    // Initial check
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <motion.nav style={{ '--nav-theme-color': themeColor } as React.CSSProperties}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      // Group company navbars always have a white background because they might have different colored headers
      // Or we can keep the same logic: bg-white/90 backdrop-blur-md shadow-md py-2
      className="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md py-2"
    >
      <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src={logoSrc}
            alt="Group Company Logo"
            width={200}
            height={200}
            className="object-contain h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center space-x-8">
          {navLinks.map((link) => {
            // Because it's a one-page site structure for companies, we use activeHash to track
            const isActive = activeHash === link.href || (activeHash === "" && link.href === "#about"); // Assuming #about is default

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveHash(link.href)}
                className={`relative text-gray-800 hover:text-[var(--nav-theme-color)] font-medium transition-colors ${isActive ? "text-[var(--nav-theme-color)]" : ""
                  }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="groupNavActiveIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-[var(--nav-theme-color)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <div className="xl:flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-gray-100 transition-colors group cursor-pointer rounded-full"
            >
              <motion.div className="relative" transition={{ duration: 0.2 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600 group-hover:text-[var(--nav-theme-color)] transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="7" strokeWidth="2" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M21 21l-4.35-4.35"
                  />
                </svg>
              </motion.div>
            </motion.button>
            <TranslateComponent />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="xl:hidden text-gray-800 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="xl:hidden bg-white/90 backdrop-blur-md shadow-lg border-t border-gray-100 rounded-2xl"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href || (activeHash === "" && link.href === "#about");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-gray-800 hover:text-[var(--nav-theme-color)] py-2 pl-3 font-medium transition-colors ${isActive ? "text-[var(--nav-theme-color)]" : ""
                    }`}
                  onClick={() => {
                    setActiveHash(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="mobileGroupNavActiveIndicator"
                      className="absolute top-0 bottom-0 left-0 w-1 h-full bg-[var(--nav-theme-color)]"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Search and Language - Mobile */}
            <div className="flex items-center justify-between py-3 pl-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <motion.div
                  className="relative"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 group-hover:text-[var(--nav-theme-color)] transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="7" strokeWidth="2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-4.35-4.35"
                    />
                  </svg>
                </motion.div>
              </motion.button>
              <TranslateComponent />
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default GroupCompanyNavbar;
