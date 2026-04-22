"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";
import { MapPin, Phone, Mail, Clock, Share2, Globe, Link, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Tax Planning',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setFormData({ name: '', email: '', phone: '', subject: 'Tax Planning', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                We provide expert tax guidance with the precision your finances deserve, along with reliable support for U.S Immigration document preparation and applications. Reach out today to schedule your consultation.
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
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Office Address</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium leading-snug">
                      {siteConfig.address.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < siteConfig.address.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Phone Number</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">{siteConfig.phone}</p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Email Address</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">{siteConfig.email}</p>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-[#1F3F6E]">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-2">Office Hours</h3>
                    <p className="text-lg text-[#1F3F6E] font-medium">{siteConfig.hours.week}</p>
                    <p className="text-lg text-[#1F3F6E] font-medium">{siteConfig.hours.weekend}</p>
                  </div>
                </div>
              </section>

              <div className="pt-8 border-t border-slate-100">
                <h3 className="text-sm font-bold tracking-wider text-slate-400 uppercase mb-6">Follow Our Insights</h3>
                <div className="flex gap-4">
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Share2 className="w-5 h-5" />
                  </a>
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5" />
                  </a>
                  <a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-[#1F3F6E] hover:bg-[#1F3F6E] hover:text-white transition-all duration-300" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Link className="w-5 h-5" />
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
                    <MapPin className="w-6 h-6 text-[#F58220]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
              {submitStatus.type && (
                <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 text-green-800 border border-green-200' 
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Full Name</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="John Doe"
                      type="text"
                      required
                    />
                  </div>
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Email Address</label>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="john@example.com"
                      type="email"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0"
                      placeholder="+61 000 000 000"
                      type="tel"
                    />
                  </div>
                  <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                    <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Subject</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium p-0 appearance-none"
                    >
                      <option>Tax Planning</option>
                      <option>U.S. Migration Documentation</option>
                      <option>Business Advisory</option>
                      <option>SMSF Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="border-b border-outline-variant/15 py-2 focus-within:border-b-2 focus-within:border-[#1F3F6E] transition-colors">
                  <label className="text-[0.65rem] font-bold tracking-widest text-slate-400 uppercase block mb-1">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-none focus:ring-0 text-[#1F3F6E] font-medium placeholder:text-slate-300 p-0 resize-none"
                    placeholder="How can our experts help you today?"
                    rows={4}
                    required
                  ></textarea>
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-[#F58220] text-white px-10 py-4 rounded-lg font-bold tracking-tight hover:brightness-110 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="mt-6 text-[0.75rem] text-slate-400 leading-relaxed italic">
                    By clicking send, you agree to our <a className="underline" href="/privacy">Privacy Policy</a> and understand how we protect your financial data.
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