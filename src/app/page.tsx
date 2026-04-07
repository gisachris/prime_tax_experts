import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  return (
    <main className="bg-surface text-on-background font-body">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-8 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto editorial-grid items-center">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="inline-block px-3 py-1 bg-surface-container-high rounded text-[10px] font-bold uppercase tracking-[0.1em] text-secondary">
              Precision • Trust • Growth
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-[#1F3F6E] leading-[1.1] tracking-tighter">
              Expert Tax Solutions for Your Financial Success
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Helping businesses and individuals navigate complex tax laws with precision and care. Experience the clarity of high-end financial management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#F58220] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#d9731b] transition-all flex items-center gap-2">
                Get Started
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <button className="border-2 border-[#1F3F6E] text-[#1F3F6E] px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container-low transition-all">
                View Services
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 relative mt-12 lg:mt-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                alt="Financial Professional"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDim9VUDGSvyJBfA8uYzuVdSFmsqVQKN9FVINYYOiNxDtx5YA1CJSOQYbqcUpflC-MWab2cIHKjmeK54qQbs1rkRsFmC0NXzFd1yO1V-YfLjwKR2Pq2HHr1zPEI4WeTQ624KM-Ssv1IX138pAWwSf32sdjuarL3nH4j7I4V9j6a3H_10baNIfRQIJCnrBqtRkaYCpXK3UkVcjQJLHwwpOxVmx3VtNb5IbgTigRt-6oox8E-u_12B7HDC_MARnSH4nyV8OsA2uWbHQ4"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#1F3F6E] p-8 text-white rounded-xl z-20 shadow-xl hidden md:block">
              <div className="text-4xl font-black mb-1">99.9%</div>
              <div className="text-xs font-medium uppercase tracking-widest opacity-80">Accuracy Rate</div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#F58220]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-container-low py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-8 md:gap-4">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#1F3F6E]">15+</span>
            <span className="text-sm font-semibold text-secondary leading-tight uppercase tracking-wider">
              Years of<br />Experience
            </span>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden lg:block opacity-30"></div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#1F3F6E]">500+</span>
            <span className="text-sm font-semibold text-secondary leading-tight uppercase tracking-wider">
              Clients<br />Protected
            </span>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden lg:block opacity-30"></div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-[#1F3F6E]">100%</span>
            <span className="text-sm font-semibold text-secondary leading-tight uppercase tracking-wider">
              Certified<br />Accountants
            </span>
          </div>
          <div className="h-8 w-px bg-outline-variant hidden lg:block opacity-30"></div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#F58220] text-4xl" data-weight="fill">
              verified_user
            </span>
            <span className="text-sm font-semibold text-secondary leading-tight uppercase tracking-wider">
              IRS Registered<br />Practitioners
            </span>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-8 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-xs font-bold text-[#F58220] uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h3 className="text-4xl font-headline font-bold text-[#1F3F6E] tracking-tight max-w-xl leading-none">
                Tailored Tax Strategies for Diverse Financial Landscapes
              </h3>
              <a className="text-[#1F3F6E] font-bold underline decoration-[#F58220] decoration-2 underline-offset-8 hover:text-[#F58220] transition-colors" href="#services">
                Explore All Services
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-[#F58220] mb-6 group-hover:text-white transition-colors" data-weight="fill">
                person
              </span>
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Individual Tax
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Maximizing your returns while ensuring full compliance with ever-changing tax codes.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-[#F58220] mb-6 group-hover:text-white transition-colors" data-weight="fill">
                domain
              </span>
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Business Tax
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Scalable tax solutions designed to support the growth and sustainability of your enterprise.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-[#F58220] mb-6 group-hover:text-white transition-colors" data-weight="fill">
                account_balance
              </span>
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Corporate Audit
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Rigorous auditing processes to maintain transparency and institutional integrity.
              </p>
            </div>
            {/* Service Card 4 */}
            <div className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <span className="material-symbols-outlined text-4xl text-[#F58220] mb-6 group-hover:text-white transition-colors" data-weight="fill">
                monitoring
              </span>
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Financial Planning
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Long-term strategies to preserve wealth and secure your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto editorial-grid items-center">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="bg-[#1F3F6E] rounded-2xl overflow-hidden aspect-video">
              <img
                alt="Financial analysis"
                className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMctJOuEfnnKzjpjjFTMawdTovwlOUh0WbJEqkKzIZSJJA5sioKMvQgOMLY389NTpAQ05x4sRa3kasxvJ4qZ5wa8LcXK9kG0WODMTYPQOsfKrQAQen41fvmm5u_NjMS2dy0f9fhQLRSNlgDMe-yt3h-nA96eYHuzSIelqhUzCQ0vcIAaeXAXJYybk97Zcpee3k3LU0FEQhFAGbWuAB6Zn-3qjbzzHEoqmto8G0f7GG6LMJx4oDRwFQ1fO9TIZCpqqMFf1YEZvRgAc"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#F58220] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-4xl" data-weight="fill">
                  play_arrow
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:pl-16">
            <h3 className="text-4xl font-headline font-bold text-[#1F3F6E] tracking-tight mb-8">
              Why Industry Leaders Trust Prime Tax Experts
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#F58220] mt-1">check_circle</span>
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Uncompromising Accuracy</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Our multi-layered review process ensures zero errors in your filings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#F58220] mt-1">check_circle</span>
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Client-First Mentality</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Personalized attention that treats your finances as our top priority.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#F58220] mt-1">check_circle</span>
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Proactive Tax Planning</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    We don't just react to tax season; we prepare you for it year-round.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-[#F58220] mt-1">check_circle</span>
                <div>
                  <h5 className="font-bold text-[#F58220]">Data-Driven Insights</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Utilizing cutting-edge fintech to identify unique saving opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-center text-4xl font-headline font-bold text-[#1F3F6E] mb-16">
            The Voices of Our Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] relative">
              <span className="material-symbols-outlined absolute top-6 right-8 text-6xl text-[#1F3F6E]/5">
                format_quote
              </span>
              <p className="text-on-surface-variant italic leading-relaxed mb-8 relative z-10">
                "Prime Tax Experts transformed our corporate structure. Their architectural approach to taxes saved us 20% in annual liabilities."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Client 1"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtmxegAVk1lYm8nELvxTUxbTivG6cIlTfNZYwBOMgpyNMQ2DqPC9afwFlYIPEDpsINh_YYPFlO5AEQSItMs4XfoGJGIlJSEMULFG5uZjVG3U08v83LXZLSRLOQn7l_G0Z2E8DziSEhYWSRNL1UHtfR05yJvUkx1IJFS0nj4pTR4v4LrW57iGHEcpBQpDsBDSMy6f_GxZBVx8D0r2V4YeJQuVJEsfW3F8MLvXFzd0KLp-JmRHsUEM6blBmCSPRJlpm2mrx0MDeyAzM"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1F3F6E]">Marcus Thorne</div>
                  <div className="text-xs uppercase tracking-wider text-secondary">CEO, Thorne Logistics</div>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] relative md:mt-8 lg:mt-0">
              <span className="material-symbols-outlined absolute top-6 right-8 text-6xl text-[#1F3F6E]/5">
                format_quote
              </span>
              <p className="text-on-surface-variant italic leading-relaxed mb-8 relative z-10">
                "As a private investor, I value precision above all. Their attention to detail and proactive strategy is unmatched in the industry."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Client 2"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpF-xqsJC4zVJrv5A1z3DsHB_skKQhjdZ3ACHd0y0q4J_kPS9djE-04-rP9teLRE5fm-2omL_3exbuk-zQS-Apuph-mUf5O9snoSwAm0s2E-MLnFF70OKFhYfspYELAM6bTcDHtsIrJpWV-3lhwLkr0-D4tbo7okjIRvjz1RKzUch6N1Di3_9zbEgrwzAx7e7rjVC1vs3FN2rBzye-8Yu1EVrBcnpzMybs0e9TMFyb679Lp9NLotElXaPI24HWkAw_PqsQzFchX8A"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1F3F6E]">Sarah Jenkins</div>
                  <div className="text-xs uppercase tracking-wider text-secondary">Private Equity Consultant</div>
                </div>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] relative lg:mt-8 md:hidden lg:block">
              <span className="material-symbols-outlined absolute top-6 right-8 text-6xl text-[#1F3F6E]/5">
                format_quote
              </span>
              <p className="text-on-surface-variant italic leading-relaxed mb-8 relative z-10">
                "The peace of mind they provide is priceless. Tax season is no longer a stressor but an opportunity for optimization."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                  <img
                    alt="Client 3"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD12rKlGQ7uRg4v7BQXsuXIiCU1n3k0qwUIHfRJ_2rh7QypCUWTUUfwBLpDXqHUsvXQRGgdcJdamSpzTnY0bNLQ6gZSQ2AUFFl-r_Ha7OeY94Oz9Gc9btnDaN063ue9kleeobmmyjwaz5che0x_ckqcBMH6NR56hYYnCEq6Y5kk82Hm3AG-JpcwIkCdZkCnHSV3lbK2u9a_IVsUWPTGAkGkXoDIjE44CSMxvIb_ayVsByua6w4xqVTONXRSsTQSF7KF69KQObz0ps8"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#1F3F6E]">David Chen</div>
                  <div className="text-xs uppercase tracking-wider text-secondary">Director, Chen Innovations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#1F3F6E] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F58220]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2E5C9A]/40 rounded-full blur-[80px] -ml-24 -mb-24"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-headline font-bold text-white mb-4">
              Ready to optimize your taxes?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts today and discover how we can elevate your financial strategy.
            </p>
            <button className="bg-[#F58220] text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#F58220]/20">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
