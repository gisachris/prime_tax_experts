"use client";

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
                <div className="text-5xl font-black text-[#1F3F6E]">15+</div>
                <div className="text-sm font-label uppercase tracking-widest text-slate-500">Years Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-black text-[#F58220]">$2B+</div>
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

        {/* Meet the Team */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="flex justify-between items-end mb-20">
              <div className="space-y-4">
                <span className="label-md uppercase tracking-[0.2em] text-[#F58220] font-bold font-label">The Architects</span>
                <h2 className="text-5xl font-headline font-bold text-[#1F3F6E]">Meet the Team</h2>
              </div>
              <p className="hidden md:block max-w-sm text-slate-500 text-sm">
                Our experts bring decades of collective experience from top-tier global accounting firms.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-6 rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="Professional portrait of a male lead CPA in a sharp business suit with a confident expression"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASRo-guVk4IckbJT0EBoNM9TmYt9tyc5_eKJf13cLXR1MKHBDktBfG7jwJ7ti6tWdzIIFETc26mVhsux6tCUJxliEBfEZWRKOm-XUwNdZ-NoH7IQLH6ad4QaCWAegD5q_0r2tTlu51fSi99jqUIy4WSE5QBXGROY9wknWFE-s1a809-P9wW25i-jo7zp-i2t2GDNA_rLuLhi_5I_spDrl73Uo3TQhLB7mukjAtlqUdWF6aA7tPfAZfiOLhUZ9ZZFjQ-YbFX50Q9Mw"
                  />
                </div>
                <h4 className="text-2xl font-bold text-[#1F3F6E]">Jonathan Vane</h4>
                <p className="text-[#F58220] font-medium mb-4">Lead CPA & Founder</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-[#1F3F6E]">share</span>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="group md:mt-12">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-6 rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="Professional portrait of a female senior tax consultant in executive attire in a modern office background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6p5SXeFbxxKY4tcfslfRex8y1a8KP62JoXqcjEwcnElzEP-e81RXSWUjigt88_t8Qdf0kV2f2fAZfNqYzE_M8B8pWFz3bdoYF9uT6jMdeWw7E1kQs0WDS8E0OHVou5IuGHDU3fjwohdHfv3cE05p-e1REkLa02eyaATGhr_2G5rxj3KwNnY81-m9zOkjj46uhkJMg8pm9l2yFLYEk4tqn9mFy3vRKqVZhqi3TzkVLyFSMAApOEd9NaPkGrGxzqNMwsGz_3TTfb9s"
                  />
                </div>
                <h4 className="text-2xl font-bold text-[#1F3F6E]">Sarah Chen</h4>
                <p className="text-[#F58220] font-medium mb-4">Senior Tax Consultant</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-[#1F3F6E]">share</span>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="group">
                <div className="relative overflow-hidden aspect-[4/5] bg-surface-container mb-6 rounded-lg">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt="Professional portrait of a male auditor in business casual attire with a bright office environment background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrtTHLl2FFsfbAk-8Ul2PxlsTAdBw60wZ3xOX3teMMwaRzeo-VNIQtm7281U2CmJdphI5TMSr67rqg199m7vpgJq5AWLqwwT3OOTapIr1CXu6hyi5yBUAl1HfrSyfwz0WK7xofqQLiDnqqzLuO78Fn_NckkaPnZbcv9r5mlgtFugMu-70W3mAJ1oYrf4HoQtnim0J3FDVX2-J9x7IGbfTE-eOK7efe9dkrdMuZSApJZQI08vTA9yI2V8rXMvGv3ADX-6fy0o2f_g4"
                  />
                </div>
                <h4 className="text-2xl font-bold text-[#1F3F6E]">Marcus Thorne</h4>
                <p className="text-[#F58220] font-medium mb-4">Principal Auditor</p>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-[#1F3F6E]">share</span>
                </div>
              </div>
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
            <button className="bg-[#F58220] text-white px-12 py-5 font-black text-lg rounded-lg hover:scale-105 active:scale-95 transition-all shadow-xl">
              Contact Us
            </button>
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