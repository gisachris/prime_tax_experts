"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ChevronRight, ArrowRight, User, BarChart3, Building2, Scale, ChevronDown } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <Header />

      <main className="pt-16">
        {/* Hero Section: Editorial Style with Background */}
        <section className="relative min-h-[40vh] lg:min-h-[50vh] flex items-center overflow-hidden">
          {/* Background Image with Gray Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Modern high-rise office buildings representing professional financial services"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK0pqTn3WzRtErt42-PLYJD8GsBKPsVIfQazAiuNMNXoh7RCSfpYZ2GnXP4Y7M3Wc4obdGMRMN3rju7cWifrA4Z2LxkCQBr_gYqlt13hHTuNlMo3IJAP3hv7tTJb881_ja2N9bTAQIDq9bSfvxWpDPXe_cHH-UCc3uhHJy7AITdq5EmLkjUUZ53nAaT-wonJbcmrRlXiz8ZPAkyKZm9Yx1sqnFLvdVrMclyq7_jAc96IqQtYGIs2JL1jDAnejsP_OvNQX64ayzK2w"
            />
            <div className="absolute inset-0 bg-slate-900/70 mix-blend-multiply"></div>
          </div>
          <div className="relative z-10 px-8 py-12 lg:py-20 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-8">
                <nav aria-label="Breadcrumb" className="flex mb-4 text-white/80 text-xs font-bold tracking-widest uppercase">
                  <ol className="flex items-center space-x-2">
                    <li><a className="hover:text-[#F58220] transition-colors" href="/">Home</a></li>
                    <li className="flex items-center space-x-2">
                      <ChevronRight className="w-4 h-4" />
                      <span className="text-[#F58220]">Services</span>
                    </li>
                  </ol>
                </nav>
                <span className="inline-block text-[#F58220] font-bold tracking-[0.2em] uppercase mb-4 font-label">Expertise & Precision</span>
                <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 font-headline">Our Services</h1>
                <p className="text-lg lg:text-xl text-slate-200 max-w-2xl leading-relaxed">
                  Comprehensive tax and financial solutions tailored to your needs. We blend institutional authority with modern strategic agility to protect your wealth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid: Bento Style */}
        <section className="bg-surface-container-low py-24">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Individual Tax Prep */}
              <div className="bg-surface-container-lowest p-8 flex flex-col group hover:shadow-[0px_20px_40px_rgba(31,63,110,0.06)] transition-all duration-300">
                <div className="mb-8">
                  <User className="w-12 h-12 text-[#F58220]" />
                </div>
                <h3 className="text-xl font-bold text-tertiary mb-4 tracking-tight">Individual Tax Prep</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Strategic planning and meticulous preparation for individuals, maximizing returns while ensuring absolute compliance with current tax codes.
                </p>
                <a className="inline-flex items-center text-sm font-bold text-tertiary group-hover:text-[#F58220] transition-colors" href="/services/individual-tax">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Business Tax Consulting */}
              <div className="bg-surface-container-lowest p-8 flex flex-col group hover:shadow-[0px_20px_40px_rgba(31,63,110,0.06)] transition-all duration-300">
                <div className="mb-8">
                  <BarChart3 className="w-12 h-12 text-[#F58220]" />
                </div>
                <h3 className="text-xl font-bold text-tertiary mb-4 tracking-tight">Business Tax Consulting</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  High-level strategic advisory for SMEs. We optimize your tax structure to support sustainable long-term business growth and efficiency.
                </p>
                <a className="inline-flex items-center text-sm font-bold text-tertiary group-hover:text-[#F58220] transition-colors" href="/services/business-consulting">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Corporate Tax Services */}
              <div className="bg-surface-container-lowest p-8 flex flex-col group hover:shadow-[0px_20px_40px_rgba(31,63,110,0.06)] transition-all duration-300">
                <div className="mb-8">
                  <Building2 className="w-12 h-12 text-[#F58220]" />
                </div>
                <h3 className="text-xl font-bold text-tertiary mb-4 tracking-tight">Corporate Tax Services</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Enterprise-level compliance and multi-jurisdictional tax planning. Specialized solutions for large-scale operations and complex filings.
                </p>
                <a className="inline-flex items-center text-sm font-bold text-tertiary group-hover:text-[#F58220] transition-colors" href="/services/corporate-tax">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>

              {/* Estate & Trust Planning */}
              <div className="bg-surface-container-lowest p-8 flex flex-col group hover:shadow-[0px_20px_40px_rgba(31,63,110,0.06)] transition-all duration-300">
                <div className="mb-8">
                  <Scale className="w-12 h-12 text-[#F58220]" />
                </div>
                <h3 className="text-xl font-bold text-tertiary mb-4 tracking-tight">Estate & Trust Planning</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-8 flex-grow">
                  Preserving wealth through intelligent structuring. We guide you through the complexities of trusts and estate tax minimization strategies.
                </p>
                <a className="inline-flex items-center text-sm font-bold text-tertiary group-hover:text-[#F58220] transition-colors" href="/services/estate-planning">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-24 max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="text-3xl font-bold text-tertiary tracking-tight mb-6">Industry Expertise</h2>
              <p className="text-on-surface-variant leading-relaxed">
                We don't just know tax; we know your industry. Our specialized teams understand the unique regulatory landscape and growth drivers of your specific sector.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-2 gap-8">
              <div className="group border-l-2 border-surface-container-high pl-6 hover:border-[#F58220] transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase mb-2 block">Sector 01</span>
                <h4 className="text-xl font-bold text-tertiary mb-2">Tech</h4>
                <p className="text-sm text-on-surface-variant">R&D credits, SaaS revenue recognition, and global expansion tax modeling.</p>
              </div>
              <div className="group border-l-2 border-surface-container-high pl-6 hover:border-[#F58220] transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase mb-2 block">Sector 02</span>
                <h4 className="text-xl font-bold text-tertiary mb-2">Healthcare</h4>
                <p className="text-sm text-on-surface-variant">Complex provider regulations and asset protection for medical professionals.</p>
              </div>
              <div className="group border-l-2 border-surface-container-high pl-6 hover:border-[#F58220] transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase mb-2 block">Sector 03</span>
                <h4 className="text-xl font-bold text-tertiary mb-2">Real Estate</h4>
                <p className="text-sm text-on-surface-variant">Cost segregation, 1031 exchanges, and REIT taxation strategies.</p>
              </div>
              <div className="group border-l-2 border-surface-container-high pl-6 hover:border-[#F58220] transition-colors duration-300">
                <span className="text-xs font-bold tracking-widest text-on-surface-variant/60 uppercase mb-2 block">Sector 04</span>
                <h4 className="text-xl font-bold text-tertiary mb-2">Retail</h4>
                <p className="text-sm text-on-surface-variant">Inventory management optimization and multi-state nexus compliance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-surface-container py-24">
          <div className="max-w-3xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-tertiary tracking-tight mb-4">Common Tax Questions</h2>
              <div className="w-12 h-1 bg-[#F58220] mx-auto"></div>
            </div>
            <div className="space-y-4">
              <details className="group bg-surface-container-lowest transition-all duration-300" open>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-tertiary">What documents are required for my first consultation?</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                  Please provide your previous year's tax return, current income statements (W2, 1099), and any relevant investment or real estate documentation to ensure a comprehensive initial assessment.
                </div>
              </details>
              <details className="group bg-surface-container-lowest transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-tertiary">How can I minimize my corporate tax liability?</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                  Minimization is achieved through proactive planning, leveraging R&D credits, optimizing business structure, and ensuring all eligible deductions are meticulously accounted for.
                </div>
              </details>
              <details className="group bg-surface-container-lowest transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-tertiary">Do you handle international tax compliance?</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                  Yes, our specialized international division manages cross-border taxation, FBAR compliance, and treaty-based tax positioning for both individuals and businesses.
                </div>
              </details>
              <details className="group bg-surface-container-lowest transition-all duration-300">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-tertiary">What is the timeline for estate tax planning?</span>
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-sm text-on-surface-variant leading-relaxed">
                  Estate planning is an ongoing process, but an initial strategy can typically be drafted within 2-4 weeks following a thorough discovery phase of your assets and goals.
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative py-24 bg-tertiary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          <div className="max-w-5xl mx-auto px-8 relative z-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">Let's discuss your specific needs.</h2>
            <button className="bg-[#F58220] text-white px-12 py-4 text-lg font-bold tracking-widest uppercase hover:opacity-90 transition-all shadow-xl">
              Call Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}