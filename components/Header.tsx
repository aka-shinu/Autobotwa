"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home, Car, Sparkles, Truck, Info, Mail } from "lucide-react";
import { useScrollHide } from "@/hooks/useScrollHide";
import { useHeroScroll } from "@/hooks/useHeroScroll";
import { useMemorySectionScroll } from "@/hooks/useMemorySectionScroll";
import StickyBookingForm from "./StickyBookingForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const utilibarHidden = useScrollHide();
  const formVisible = useHeroScroll({ heroHeight: 1000 }); // Max desktop height
  const isInMemorySection = useMemorySectionScroll({ offset: 100 });
  const pathname = usePathname();

  // Minimize header when in memory section
  const isMinimized = isInMemorySection;

  const handleLogisticsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      const logisticsSection = document.getElementById("logistics");
      if (logisticsSection) {
        logisticsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on home page, let the default navigation happen
  };

  const navLinks: Array<{
    href: string;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  }> = [
    { href: "/", label: "Home", icon: Home },
    { href: "/services/luxury-cars", label: "Luxury Cars", icon: Sparkles },
    {
      href: "/services/logistics",
      label: "Logistics",
      icon: Truck,
      onClick: handleLogisticsClick,
    },
  ];

  return (
    <motion.header
      className="bg-white sticky top-0 z-50 shadow-sm"
      animate={{
        height: isMinimized ? 0 : "auto",
        opacity: isMinimized ? 0 : 1,
      }}
      transition={{
        type: "tween",
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{
        overflow: isMinimized ? "hidden" : "visible",
        pointerEvents: isMinimized ? "none" : "auto",
      }}
    >
      {/* Top Utility Bar */}
      <motion.div
        layout
        animate={{
          height: isMinimized || utilibarHidden ? 0 : 65,
        }}
        transition={{
          type: "tween",
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1],
        }}
        className="overflow-hidden bg-white border-b border-gray-200"
        style={{
          willChange: "height",
          transform: "translateZ(0)", // Force GPU acceleration
        }}
      >
        <motion.div
          animate={{
            opacity: utilibarHidden ? 0 : 1,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="container mx-auto px-4 py-2"
        >
          <div className="flex items-center justify-between text-sm">
            {/* Left Side - Contact Info */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-700">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="font-medium">Toll Free:</span>
                <span>1800 209 3344</span>
              </div>
            </div>

            {/* Right Side - Utility Links */}
            <div className="flex items-center gap-4">
                <a href="/contact">Contact Us</a>
              <div className="flex items-center gap-2">
                <img
                  src="/image.png"
                  alt="Logo Here"
                  className="rounded-sm"
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Navigation Bar */}
      <motion.nav
        className="container mx-auto px-4 mt-2"
        animate={{
          paddingTop: isMinimized ? "0.75rem" : "1rem",
          paddingBottom: isMinimized ? "0.75rem" : "1rem",
        }}
        transition={{
          type: "tween",
          duration: 0.3,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <div className="flex items-center justify-between pb-5 overflow-hidden relative">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              className="flex items-center gap-1"
              animate={{
                scale: isMinimized ? 0.85 : 1,
              }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              <div className="flex flex-col overflow-hidden">
                <img src="/test.png" alt="" className="absolute z-2 inset-0 -translate-y-[40%] brightness(0) invert(1)" width={200} height={200}/>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex items-center gap-1"
            animate={{
              opacity: isMinimized ? 0 : 1,
              pointerEvents: isMinimized ? "none" : "auto",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {navLinks.map((link) => {
              const Icon = link.icon;
              // Check if link is active - Home is default active when pathname is exactly '/'
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.onClick}
                  className={`relative px-6 py-2.5 transition-all duration-300 font-semibold text-sm rounded-lg group overflow-hidden ${
                    isActive
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {/* Background on hover or active */}
                  <span
                    className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-red-50/80"
                        : "bg-red-50/0 group-hover:bg-red-50/80"
                    }`}
                  ></span>

                  {/* Content */}
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{link.label}</span>
                  </span>

                  {/* Bottom border indicator */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-red-600 rounded-full transition-all duration-300 ${
                      isActive ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  ></span>

                  {/* Subtle shine effect */}
                  <span
                    className={`absolute inset-0 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 ${
                      isActive
                        ? "opacity-100 translate-x-[200%]"
                        : "opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-[200%]"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </motion.div>

          {/* Right Side - CTA Button */}
          <motion.div
            className="hidden md:flex items-center gap-4"
            animate={{
              opacity: isMinimized ? 0 : 1,
              pointerEvents: isMinimized ? "none" : "auto",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Link
              href="/contact"
              className="relative flex items-center gap-2 px-6 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-bold text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-100 overflow-hidden group"
            >
              {/* Shine effect on hover */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%]"></span>

              <Mail className="w-4 h-4 relative z-10" />
              <span className="relative z-10">Book Now</span>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            animate={{
              opacity: isMinimized ? 0 : 1,
              pointerEvents: isMinimized ? "none" : "auto",
            }}
            transition={{
              type: "tween",
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              // Check if link is active - Home is default active when pathname is exactly '/'
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    if (link.onClick) link.onClick(e);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 font-semibold transition-all duration-200 rounded-lg group ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-red-50 hover:text-red-600"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isActive ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 px-4 py-3 mt-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail className="w-4 h-4" />
              <span>Book Now</span>
            </Link>
          </div>
        )}
      </motion.nav>

      {/* Sticky Booking Form - Only on Home Page */}
      {pathname === "/" && (
        <StickyBookingForm hidden={!formVisible || isMinimized} />
      )}
    </motion.header>
  );
}
