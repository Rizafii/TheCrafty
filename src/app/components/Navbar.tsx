"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Smooth scroll function with easing
  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.offsetTop - 80; // Offset for fixed navbar
    const distance = targetPosition - startPosition;
    const duration = 1200; // Duration in milliseconds
    const startTime = performance.now();

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = easeInOutCubic(progress);
      const currentPosition = startPosition + distance * easeProgress;

      window.scrollTo(0, currentPosition);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    smoothScrollTo(targetId);
    setIsMobileMenuOpen(false); // Close mobile menu
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-lg shadow-sm shadow-gray-200/20 "
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl flex items-center justify-between mx-auto px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "#home")}
                className="serif text-xl md:text-2xl leading-tight text-black tracking-wide font-light"
              >
                thecrafty.custom
              </a>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/80 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "#about")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                About
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "#portfolio")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                Portfolio
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#client"
                onClick={(e) => handleNavClick(e, "#client")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                Client
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#order"
                onClick={(e) => handleNavClick(e, "#order")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                Order
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#testimoni"
                onClick={(e) => handleNavClick(e, "#testimoni")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                Testimoni
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#faq"
                onClick={(e) => handleNavClick(e, "#faq")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                FAQs
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="relative text-sm font-medium text-gray-600 hover:text-black transition-all duration-300 uppercase tracking-wide group cursor-pointer"
              >
                Contact
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary/80 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>
          </div>

          {/* Social Icons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://instagram.com/thecrafty.custom"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 hover:scale-110 border border-gray-200/50"
            >
              <i className="fab fa-instagram text-sm"></i>
            </a>
            <a
              href="https://wa.me/6282133547733"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-green-500 hover:bg-green-50 transition-all duration-300 hover:scale-110 border border-gray-200/50"
            >
              <i className="fab fa-whatsapp text-sm"></i>
            </a>
            <a
              href="https://www.tiktok.com/@thecrafty.custom?_t=ZS-8y93n4f80AM&_r=1"
              className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-50 transition-all duration-300 hover:scale-110 border border-gray-200/50"
            >
              <i className="fab fa-tiktok text-sm"></i>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="relative w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:bg-white/20 transition-all duration-300 border border-gray-200/50"
              onClick={toggleMobileMenu}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Simplified */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 transition-opacity duration-200 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu Sidebar - Optimized */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-8">
          {/* Mobile Header - Simplified */}
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-gray-200">
            <div>
              <span className="text-2xl font-semibold text-black tracking-wide">
                Menu
              </span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:text-black hover:bg-gray-200 transition-colors duration-200"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>

          {/* Mobile Navigation Links - Simplified */}
          <div className="space-y-4 mb-8">
            {(
              [
                { href: "#about", label: "About" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#client", label: "Client" },
                { href: "#order", label: "Order" },
                { href: "#testimoni", label: "Testimoni" },
                { href: "#faq", label: "FAQs" },
                { href: "#contact", label: "Contact" },
              ] as const
            ).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block text-lg font-medium text-gray-700 hover:text-black transition-colors duration-200 py-2 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="uppercase tracking-wide">{link.label}</span>
                  <i className="fas fa-chevron-right text-sm text-gray-400"></i>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Social Links - Simplified */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/thecrafty.custom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-200"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a
                href="https://wa.me/6282133547733"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors duration-200"
              >
                <i className="fab fa-whatsapp text-sm"></i>
              </a>
              <a
                href="https://www.tiktok.com/@thecrafty.custom?_t=ZS-8y93n4f80AM&_r=1"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-200"
              >
                <i className="fab fa-tiktok text-sm"></i>
              </a>
            </div>
          </div>

          {/* Contact Info - Simplified */}
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">
              Contact
            </p>
            <a
              href="https://maps.app.goo.gl/Ekq43cTp1HgqETGk9"
              className="text-sm text-gray-700 mb-2"
            >
              Pasar Kliwon, Surakarta
            </a>
            <a
              href="https://wa.me/6282133547733"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-700"
            >
              +62 821-3354-7733
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;
