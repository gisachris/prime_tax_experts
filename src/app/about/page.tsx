"use client";

import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Zap, Building, FileCheck, Award, Crown } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#fcf9f8]">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[430px] flex items-center overflow-hidden bg-[#1F3F6E]">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover opacity-40"
              alt="Modern high-end glass architectural office interior with bright sunlight and clean professional atmosphere"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM-KziwXnat82qeZXuPkHUlgrAXZQg0lqaCh6zV81Vn2kklXzRt9xAgByHjxmSMVpb8ISygKv79rishvMm6h3UljblF0CpRsvKdOaBVKpQUmjrMS3cI5pEtndEeBHeRD-vfr5C_VZdAdCoajme61HbS11dOSWsBzaoCHRGCMlSuCqWesklDFUYgYbgMVjgUdNTbI6IamWUDcAZhmsEgMq5z_02q0lZe89E_oJLQ3xywnXR_fBjt3bVA3BK64xjYB0TDTt64JMuxlo"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1F3F6E] to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
            <span className="label-md uppercase tracking-[0.2em] text-[#F58220] font-bold mb-4 block font-label">
              Established Precision
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-headline font-extrabold tracking-tighter leading-none max-w-2xl">
              Our Story
            </h1>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
              <div className="space-y-8">
                <h2 className="text-5xl font-headline font-bold text-[#1F3F6E] leading-tight">
                  Precision, Integrity, and Trust
                </h2>
                <div className="h-1 w-24 bg-[#F58220]"></div>
                <p className="text-lg leading-relaxed text-slate-600 font-body max-w-xl">
                  At Prime Tax Experts, we believe that financial clarity is the foundation of growth. Our commitment goes beyond filing forms; we architect fiscal strategies that empower individuals and enterprises to reach their maximum potential.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 bg-surface-container-low rounded-xl space-y-4 h-full overflow-hidden">
                  <Shield className="w-8 h-8 text-[#F58220]" />
                  <h3 className="text-xl font-bold text-[#1F3F6E]">Unyielding Integrity</h3>
                  <p className="text-sm text-slate-500 leading-relaxed break-words">
                    We maintain the highest ethical standards in every transaction, ensuring your peace of mind.
                  </p>
                </div>
                <div className="p-8 bg-surface-container-highest rounded-xl space-y-4 h-full overflow-hidden">
                  <Zap className="w-8 h-8 text-[#F58220]" />
                  <h3 className="text-xl font-bold text-[#1F3F6E]">Absolute Precision</h3>
                  <p className="text-sm text-slate-500 leading-relaxed break-words">
                    In a world of variables, our calculations are the constant you can rely on for compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Stats */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#1F3F6E]">3+</div>
                <div className="text-sm font-label uppercase tracking-widest text-slate-500">Years Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#F58220]">$10M+</div>
                <div className="text-sm font-label uppercase tracking-widest text-slate-500">Managed Assets</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#1F3F6E]">500+</div>
                <div className="text-sm font-label uppercase tracking-widest text-slate-500">Corporate Clients</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#1F3F6E]">99%</div>
                <div className="text-sm font-label uppercase tracking-widest text-slate-500">Retention Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
              <div className="space-y-4">
                <span className="label-md uppercase tracking-[0.2em] text-[#F58220] font-bold font-label">Our Mission</span>
                <h2 className="text-5xl font-headline font-bold text-[#1F3F6E]">Simplifying tax, empowering your future</h2>
              </div>
              <p className="hidden lg:block max-w-sm text-slate-500 text-sm">
                We provide straightforward, proactive tax services that help clients resolve issues, file accurately, and plan with confidence.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="p-8 bg-surface-container-low rounded-3xl space-y-4">
                <Shield className="w-8 h-8 text-[#F58220]" />
                <h3 className="text-xl font-bold text-[#1F3F6E]">Clear guidance</h3>
                <p className="text-slate-600 leading-relaxed">
                  We cut through complexity and deliver tax solutions that clients understand and trust.
                </p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-3xl space-y-4">
                <Zap className="w-8 h-8 text-[#F58220]" />
                <h3 className="text-xl font-bold text-[#1F3F6E]">Fast response</h3>
                <p className="text-slate-600 leading-relaxed">
                  Timely support for urgent filings, audit preparedness, and changing financial needs.
                </p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-3xl space-y-4">
                <Building className="w-8 h-8 text-[#F58220]" />
                <h3 className="text-xl font-bold text-[#1F3F6E]">Trusted stewardship</h3>
                <p className="text-slate-600 leading-relaxed">
                  We protect client outcomes with discipline, accuracy, and a commitment to lasting relationships.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center lg:text-left">
              <Link href="/contact" className="inline-flex items-center justify-center lg:justify-start bg-[#F58220] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#d9731b] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-24 bg-surface-container-low border-y border-outline-variant/10">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h3 className="text-sm font-label uppercase tracking-[0.3em] text-slate-400">Accreditations & Memberships</h3>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <Building className="w-8 h-8 text-[#1F3F6E]" />
                <span className="font-bold">Federal Tax Authority</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck className="w-8 h-8 text-[#1F3F6E]" />
                <span className="font-bold">National CPA Association</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-8 h-8 text-[#1F3F6E]" />
                <span className="font-bold">Certified Tax Resolution</span>
              </div>
              <div className="flex items-center gap-2">
                <Crown className="w-8 h-8 text-[#1F3F6E]" />
                <span className="font-bold">Finance Standards Board</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 overflow-hidden bg-[#1F3F6E]">
          <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
            <h2 className="text-white text-5xl md:text-6xl font-headline font-bold mb-8">
              Work with the experts<br />you can trust.
            </h2>
            <Link href="/contact" className="inline-flex bg-[#F58220] text-white px-12 py-5 font-black text-lg rounded-lg hover:scale-105 active:scale-95 transition-all shadow-xl items-center justify-center">
              Contact Us
            </Link>
          </div>
          {/* Decorative growth arrow background */}
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[40rem] rotate-45 text-white">north_east</span>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}