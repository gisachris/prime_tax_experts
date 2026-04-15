import { siteConfig } from "@/lib/siteConfig";
import { Phone, Mail, Clock, MapPin, Share2, Globe, Link } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1F3F6E] text-white w-full border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-lg font-black text-white tracking-tighter">Prime Tax Experts</div>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-300">
            Setting the standard for precision in the financial world. Your partners in growth and compliance.
          </p>
          <div className="flex space-x-4">
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <Share2 className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <Globe className="w-4 h-4" />
            </a>
            <a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#F58220] transition-colors" href="#">
              <Link className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Quick Links</h4>
          <ul className="space-y-3 font-['Inter'] text-sm">
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/services/individual-tax">Tax Preparation</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/services/business-consulting">Corporate Planning</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/services/estate-planning">Estate Planning</a></li>
            <li><a className="text-slate-300 hover:text-white hover:translate-x-1 transition-transform inline-block" href="/services/corporate-tax">Audit Support</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Office Address</h4>
          <p className="font-['Inter'] text-sm leading-relaxed text-slate-300">
            1200 Financial Plaza, Suite 450<br />
            Business District<br />
            New York, NY 10001
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="w-4 h-4" />
            <a className="underline underline-offset-4 decoration-[#F58220]/50 hover:text-white" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Map</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#F58220]">Contact Info</h4>
          <ul className="space-y-3 font-['Inter'] text-sm">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#F58220]" />
              <span className="text-slate-300">+1 (800) TAX-PRIME</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#F58220]" />
              <span className="text-slate-300">solutions@primetax.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#F58220]" />
              <span className="text-slate-300">Mon - Fri: 9AM - 6PM</span>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-[#F58220]" />
              <span className="text-slate-300">Sat: 10AM - 6PM</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-8 text-center">
        <p className="font-['Inter'] text-xs tracking-wide text-slate-500 opacity-90">
          © 2026 Prime Tax Experts. All rights reserved. <span className="mx-2">|</span>
          <a className="hover:text-white" href="#">Privacy Policy</a> <span className="mx-2">|</span>
          <a className="hover:text-white" href="#">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
