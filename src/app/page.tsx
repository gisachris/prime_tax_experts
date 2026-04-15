import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Link from "next/link";
import { ArrowRight, BadgeCheck, User, Building2, Scale, TrendingUp, FileText, CheckCircle, Play } from "lucide-react";
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
              Prime Tax Experts for Your Financial Success
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Helping businesses and individuals solve tax problems and file taxes with precision and care. Experience the clarity of high-end financial management.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact" className="bg-[#F58220] text-white px-8 py-4 rounded-lg font-bold text-base hover:bg-[#d9731b] transition-all flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/services" className="border-2 border-[#1F3F6E] text-[#1F3F6E] px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container-low transition-all">
                View Services
              </Link>
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
            <BadgeCheck className="w-10 h-10 text-[#F58220]" />
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
              <Link href="/services" className="text-[#1F3F6E] font-bold underline decoration-[#F58220] decoration-2 underline-offset-8 hover:text-[#F58220] transition-colors">
                Explore All Services
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <Link href="/services/individual-tax" className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <User className="w-12 h-12 text-[#F58220] mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Individual Tax
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Maximizing your returns while ensuring full compliance with ever-changing tax codes.
              </p>
            </Link>
            {/* Service Card 2 */}
            <Link href="/services/business-consulting" className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <Building2 className="w-12 h-12 text-[#F58220] mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Business Tax
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Scalable tax solutions designed to support the growth and sustainability of your enterprise.
              </p>
            </Link>
            {/* Service Card 4 */}
            <Link href="/services" className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <TrendingUp className="w-12 h-12 text-[#F58220] mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Financial Planning
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Long-term strategies to preserve wealth and secure your financial future.
              </p>
            </Link>
            {/* Service Card 5 */}
            <Link href="/services/immigration-documents" className="p-8 bg-surface-container-low rounded-lg group hover:bg-[#1F3F6E] transition-all duration-500 hover:-translate-y-2">
              <FileText className="w-12 h-12 text-[#F58220] mb-6 group-hover:text-white transition-colors" />
              <h4 className="text-xl font-bold text-[#1F3F6E] mb-4 group-hover:text-white transition-colors">
                Immigration Documents
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-slate-300 transition-colors">
                Expert help with immigration paperwork, filing, and document preparation for individuals and families.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto editorial-grid items-center">
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="bg-[#1F3F6E] rounded-2xl overflow-hidden aspect-video relative group">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
              >
                <source src="/intro_video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 bg-[#F58220] rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:pl-16">
            <h3 className="text-4xl font-headline font-bold text-[#1F3F6E] tracking-tight mb-8">
              Why Industry Leaders Trust Prime Tax Experts
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#F58220] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Uncompromising Accuracy</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Our multi-layered review process ensures zero errors in your filings.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#F58220] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Client-First Mentality</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Personalized attention that treats your finances as our top priority.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#F58220] mt-1 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-[#1F3F6E]">Proactive Tax Planning</h5>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    We don't just react to tax season; we prepare you for it year-round.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-5 h-5 text-[#F58220] mt-1 flex-shrink-0" />
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
            <Link href="/contact" className="bg-[#F58220] text-white px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#F58220]/20 inline-flex items-center justify-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
