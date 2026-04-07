"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-on-background font-body">
      <Header />

      <main>
        {/* Hero Section with Background Image and Overlay */}
        <section className="relative pt-48 pb-32 px-6 md:px-12 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional business background"
              className="w-full h-full object-cover opacity-40"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr-FfViispdK1eCzk3q861fWkaNifNDYgGKjDowtbD_UsNprRo-trEFWvv5qVHdbRuLjkt3BcrZNumbJq0Q1gl83TWEAw9wxf9HZlu1kH-Gtpp9aD3534aLxHdx7DmKj6kPi3jmE6JbkXRU5iC7CQFwiucQdXiZdWkJI7VIdkvJ9_Q06FrQclO86UpT867L9x0fHvwYad_mao-KnnAyL5AwM7YvpJxOZRjAltSN9kBPfhQSW0JWBi0hZFs6LG_oZ2N5I60vAfqQiE"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto">
            <header className="max-w-3xl">
              <span className="text-[0.75rem] font-bold tracking-[0.1em] text-[#F58220] uppercase mb-4 block font-label">Connect with our team</span>
              <h1 className="text-5xl md:text-7xl font-bold font-headline text-white tracking-tight mb-6 drop-shadow-sm">Get in Touch</h1>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl drop-shadow-sm">
                We're here to answer your tax questions and provide the architectural precision your finances deserve. Reach out for a consultation.
              </p>
            </header>
          </div>
        </section>

        <div className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-12">
              <section className="space-y-8">
                {/* Office Address */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Office Address</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium leading-snug">
                      Level 4, 123 Financial District<br />
                      Sydney, NSW 2000, Australia
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Phone Number</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">+61 (02) 8888 9999</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Email Address</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">consult@primetax.com.au</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Office Hours</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">Monday-Friday 9am-6pm</p>
                  </div>
                </div>
              </section>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-6">Follow Our Insights</h3>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="#">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>share</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="#">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>public</span>
                  </a>
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="#">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>linked_services</span>
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-64 bg-surface-container rounded-xl overflow-hidden shadow-[0px_20px_40px_rgba(31,63,110,0.06)] relative group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDaxP1OYd9eiY3W9D2y2TLgNWmgLpQhYHKdesKkMJo6SXnsvsEqyEHzK3JelY-qbKdQEoOYHemDPl-C3v-wop07Iwkm5478QaQ3e1niR-5PH-apligB_4dYlfxjAuduf8HWyFBkcMjlLX5TXnXkg_Bvv2EKnzlgcvDT6su4VfnSDyQ2iTUfp6QwMvIgtCNSohuTg5OSEiElYdv8OzEalDkgQBPYvgdGfd8C6FtWKd7U9uzymZnwMOQSZ0v0gNP0yK86PKqEsOwBd0E')"}}
                ></div>
                <div className="absolute inset-0 bg-[#1F3F6E]/10 flex items-center justify-center">
                  <div className="bg-white p-3 rounded-full shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
                    <span className="material-symbols-outlined text-[#F58220]" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Full Name</label>
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Email Address</label>
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Phone Number</label>
                    <input
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="+61 000 000 000"
                      type="tel"
                    />
                  </div>
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Subject</label>
                    <select className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium p-0 appearance-none">
                      <option>Tax Planning</option>
                      <option>Business Advisory</option>
                      <option>SMSF Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                  <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Your Message</label>
                  <textarea
                    className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0 resize-none"
                    placeholder="How can our experts help you today?"
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    className="w-full md:w-auto bg-[#F58220] text-white px-10 py-4 rounded-lg font-bold tracking-tight hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                    type="submit"
                  >
                    Send Message
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                  <p className="mt-6 text-[0.75rem] text-slate-400 leading-relaxed italic">
                    By clicking send, you agree to our <a className="underline" href="#">Privacy Policy</a> and understand how we protect your financial data.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}