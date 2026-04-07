"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-[#1F3F6E] text-2xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            alt="Prime Tax Experts Logo"
            className="h-8 w-auto"
            src="https://lh3.googleusercontent.com/aida/ADBb0ujQ6PKbpbb0Alot11BJU958XY_o7Zdr7rTVLYW_EyLcmlggY5u3-bRXbsssAywxP_Nsj8VHuSzt2u9KXWmKdT-4gkPvK3bdROAcJF0CkF7hnxp_jHtisY9io2_GB57nHT7DJbLOL9NVbKcI1adgQ2ENqc7J-yAK8iOd8vOkfnGf4Rk6dsij194WXU2Kj3EkIBg1aszSQqReQDYShXvOtMIt9woeMkZFyO5fPDLCkfUa4FZ-1wUvfyAuporNHulHjc-W3FR5ABIxEQ"
          />
          <span className="hidden lg:block text-xl font-bold text-[#1F3F6E] tracking-tighter font-headline">
            {siteConfig.name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a className="text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1 font-['Inter'] text-sm tracking-tight transition-all duration-200" href="#home">
            Home
          </a>
          <a className="hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-sm tracking-tight text-[#1F3F6E]" href="#services">
            Services
          </a>
          <a className="hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-sm tracking-tight text-[#1F3F6E]" href="#about">
            About
          </a>
          <a className="hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-sm tracking-tight text-[#1F3F6E]" href="#contact">
            Contact
          </a>
        </div>

        {/* Call Now Button */}
        <button className="bg-[#F58220] text-white px-6 py-2.5 rounded-lg text-sm font-bold tracking-tight scale-95 active:opacity-80 transition-all hover:bg-[#d9731b]">
          Call Now
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="px-8 py-6 space-y-4">
            <a
              className="block text-[#F58220] font-bold border-b-2 border-[#F58220] pb-1 font-['Inter'] text-base tracking-tight transition-all duration-200"
              href="#home"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              className="block hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-base tracking-tight text-[#1F3F6E] py-2"
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              className="block hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-base tracking-tight text-[#1F3F6E] py-2"
              href="#about"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              className="block hover:text-[#2E5C9A] transition-colors font-['Inter'] font-medium text-base tracking-tight text-[#1F3F6E] py-2"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
