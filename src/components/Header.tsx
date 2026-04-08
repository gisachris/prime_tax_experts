"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center px-8 py-4">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-[#1F3F6E]" />
          ) : (
            <Menu className="w-6 h-6 text-[#1F3F6E]" />
          )}
        </button>

        {/* Mobile Logo - Clickable to Contact */}
        <Link href="/contact" className="flex items-center gap-2">
          <img
            alt="Prime Tax Experts Logo"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujQ6PKbpbb0Alot11BJU958XY_o7Zdr7rTVLYW_EyLcmlggY5u3-bRXbsssAywxP_Nsj8VHuSzt2u9KXWmKdT-4gkPvK3bdROAcJF0CkF7hnxp_jHtisY9io2_GB57nHT7DJbLOL9NVbKcI1adgQ2ENqc7J-yAK8iOd8vOkfnGf4Rk6dsij194WXU2Kj3EkIBg1aszSQqReQDYShXvOtMIt9woeMkZFyO5fPDLCkfUa4FZ-1wUvfyAuporNHulHjc-W3FR5ABIxEQ"
          />
        </Link>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center px-8 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            alt="Prime Tax Experts Logo"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujQ6PKbpbb0Alot11BJU958XY_o7Zdr7rTVLYW_EyLcmlggY5u3-bRXbsssAywxP_Nsj8VHuSzt2u9KXWmKdT-4gkPvK3bdROAcJF0CkF7hnxp_jHtisY9io2_GB57nHT7DJbLOL9NVbKcI1adgQ2ENqc7J-yAK8iOd8vOkfnGf4Rk6dsij194WXU2Kj3EkIBg1aszSQqReQDYShXvOtMIt9woeMkZFyO5fPDLCkfUa4FZ-1wUvfyAuporNHulHjc-W3FR5ABIxEQ"
          />
          <span className="hidden lg:block text-xl font-bold text-[#1F3F6E] tracking-tighter font-headline">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center space-x-8">
          <Link
            className={`font-['Inter'] text-sm tracking-tight transition-all duration-200 ${
              isActive('/')
                ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
            }`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`font-['Inter'] text-sm tracking-tight transition-all duration-200 ${
              isActive('/about')
                ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
            }`}
            href="/about"
          >
            About
          </Link>
          <Link
            className={`font-['Inter'] text-sm tracking-tight transition-all duration-200 ${
              isActive('/services')
                ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
            }`}
            href="/services"
          >
            Services
          </Link>
          <Link
            className={`font-['Inter'] text-sm tracking-tight transition-all duration-200 ${
              isActive('/contact')
                ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
            }`}
            href="/contact"
          >
            Contact
          </Link>
        </div>

        {/* Call Now Button */}
        <button className="bg-[#F58220] text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight scale-95 active:opacity-80 transition-all hover:bg-[#d9731b] inline-flex items-center gap-2">
          <Phone className="w-4 h-4" />
          Call Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-8 py-6 space-y-4">
            <Link
              className={`block font-['Inter'] text-base tracking-tight transition-all duration-200 ${
                isActive('/')
                  ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                  : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
              } py-2`}
              href="/"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              className={`block font-['Inter'] text-base tracking-tight transition-all duration-200 ${
                isActive('/about')
                  ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                  : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
              } py-2`}
              href="/about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className={`block font-['Inter'] text-base tracking-tight transition-all duration-200 ${
                isActive('/services')
                  ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                  : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
              } py-2`}
              href="/services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              className={`block font-['Inter'] text-base tracking-tight transition-all duration-200 ${
                isActive('/contact')
                  ? 'text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1'
                  : 'text-[#1F3F6E] hover:text-[#2E5C9A]'
              } py-2`}
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
