"use client";

import { use } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Service details data - easily modifiable for different services
const serviceDetails = {
  'corporate-tax': {
    title: 'Corporate Tax Services',
    subtitle: 'Strategic fiscal management designed for the modern enterprise. We architect tax structures that ensure compliance while maximizing capital efficiency.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNaE9wtmVyig6bWWtIGwT73rbSvCfXQMxuehNEDsznoYXkjT6ZTcBAVakAVEqXrxPPkDPHvD0SSQ3LoVsZc5oQq7EalsKoqQDZcfrqUn8iX_nwnXMkA68Hj5yvM_xO9TtHUQLGNtULvrXzy9lkrWgg9hPNWnzha6rA3zMDIAei1DAV5Kl1PB54-loaogn4tGf-HJ6l10EqZpnVn_9GglRy9WmmC89Qu3n2i3McT1zRqTtBD_pAfaSRcQPwMrXPSCDMB3jbOy439A',
    overview: {
      paragraph1: 'Navigating the complexities of corporate taxation requires more than just filing forms; it demands a proactive, architectural approach to financial planning. Our corporate tax specialists provide end-to-end support for businesses of all sizes, from agile startups to established multinational entities.',
      paragraph2: 'At Prime Tax Experts, we believe that tax strategy should be an engine for growth, not a burden on operations. Our methodology integrates deep legislative knowledge with a sharp focus on your specific industry dynamics, ensuring that every fiscal decision aligns with your long-term commercial objectives.',
      processTitle: 'The Process',
      processDesc: 'We begin with a granular audit of your current fiscal position, followed by a risk-assessment phase and the implementation of a bespoke tax roadmap.',
      benefitTitle: 'The Benefit',
      benefitDesc: 'Eliminate the uncertainty of legislative changes and reduce your effective tax rate through intelligent, compliant structuring and incentive utilization.'
    },
    pillars: [
      {
        icon: 'verified_user',
        title: 'Compliance',
        description: 'Rigorous adherence to federal and state tax regulations to mitigate risk and prevent costly audits.'
      },
      {
        icon: 'architecture',
        title: 'Planning',
        description: 'Year-round monitoring of your financial flow to optimize tax positions before the reporting cycle begins.'
      },
      {
        icon: 'insights',
        title: 'Strategy',
        description: 'High-level advisory on mergers, acquisitions, and international expansions to ensure tax efficiency.'
      }
    ],
    successStory: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2A6Idwcvjwd-Nuil2RAIt1gUvyIy4yGW2-nujEMV21Z2sm7lxp9gGtI_PbcqafNtFlziTjk2bbh6ZduKbJei5FQUeLQQxXBaixd0HPVuRnvHVBDQ_H8R2kt-DuKy5sClHM5JM2ZktE0QLLqjlZYYMZ_d3gyJORdiEWfDqXSgXNy9BZ3xXAQGrFO5XOqksf_BNKI_Sz8dO5i4hhKfOrJl8NIrpMI98T299BJFbnbPl83HRkoY7S0TN8yYNZix5zeWuMMX43Gcunwc',
      quote: '"Prime Tax Experts restructured our corporate umbrella ahead of our primary acquisition, resulting in a 15% reduction in immediate capital gains exposure and a streamlined post-merger compliance framework."',
      clientName: 'Marcus Sterling',
      clientTitle: 'CEO, Sterling Logistics Group',
      clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVI7YTRwXaICkwZihP5hK4moguK4MDeVDhlxHwpMlmnue78aBdNrW0O1urtzpZjmDwluhk08hYlERu2fwnfWavp_Yw4uKShtt2jFyNNHgXQZtA_XLwF5VEQyAyR9nKLhDXem7fWNzS0FCV2LjN-ErpExwq4LE092thGlZYGI-HGBw3Yhoh-WsVD1E-UdEHcMcZubmqSrryDxS-LjZ2aw3Bz2sPnuz6cvLLx1d49mw9fvxwfGZ57oxvEM-MYDZl4A9Y_bcM9OZe02I'
    }
  },
  'individual-tax': {
    title: 'Individual Tax Preparation',
    subtitle: 'Personalized tax planning and preparation services tailored to your unique financial situation and goals.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNaE9wtmVyig6bWWtIGwT73rbSvCfXQMxuehNEDsznoYXkjT6ZTcBAVakAVEqXrxPPkDPHvD0SSQ3LoVsZc5oQq7EalsKoqQDZcfrqUn8iX_nwnXMkA68Hj5yvM_xO9TtHUQLGNtULvrXzy9lkrWgg9hPNWnzha6rA3zMDIAei1DAV5Kl1PB54-loaogn4tGf-HJ6l10EqZpnVn_9GglRy9WmmC89Qu3n2i3McT1zRqTtBD_pAfaSRcQPwMrXPSCDMB3jbOy439A',
    overview: {
      paragraph1: 'Individual tax preparation requires careful attention to detail and a deep understanding of personal financial circumstances. Our certified tax professionals provide comprehensive preparation services for individuals, ensuring maximum refunds and compliance.',
      paragraph2: 'We specialize in complex individual tax situations including investment income, rental properties, self-employment, and international tax obligations. Our goal is to minimize your tax liability while ensuring full compliance with all tax laws.',
      processTitle: 'The Process',
      processDesc: 'We review your financial documents, identify all applicable deductions and credits, and prepare your tax return with precision and accuracy.',
      benefitTitle: 'The Benefit',
      benefitDesc: 'Maximize your refund potential and minimize tax liabilities through expert preparation and strategic planning.'
    },
    pillars: [
      {
        icon: 'person',
        title: 'Personal Service',
        description: 'Dedicated tax professional assigned to your account for personalized attention and ongoing support.'
      },
      {
        icon: 'calculate',
        title: 'Accurate Calculations',
        description: 'Precise mathematical calculations ensuring every deduction and credit is properly claimed.'
      },
      {
        icon: 'security',
        title: 'Data Security',
        description: 'Bank-level security measures protect your sensitive financial information.'
      }
    ],
    successStory: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2A6Idwcvjwd-Nuil2RAIt1gUvyIy4yGW2-nujEMV21Z2sm7lxp9gGtI_PbcqafNtFlziTjk2bbh6ZduKbJei5FQUeLQQxXBaixd0HPVuRnvHVBDQ_H8R2kt-DuKy5sClHM5JM2ZktE0QLLqjlZYYMZ_d3gyJORdiEWfDqXSgXNy9BZ3xXAQGrFO5XOqksf_BNKI_Sz8dO5i4hhKfOrJl8NIrpMI98T299BJFbnbPl83HRkoY7S0TN8yYNZix5zeWuMMX43Gcunwc',
      quote: '"Thanks to Prime Tax Experts, I received my largest refund ever. They found deductions I never knew I qualified for."',
      clientName: 'Sarah Johnson',
      clientTitle: 'Small Business Owner',
      clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVI7YTRwXaICkwZihP5hK4moguK4MDeVDhlxHwpMlmnue78aBdNrW0O1urtzpZjmDwluhk08hYlERu2fwnfWavp_Yw4uKShtt2jFyNNHgXQZtA_XLwF5VEQyAyR9nKLhDXem7fWNzS0FCV2LjN-ErpExwq4LE092thGlZYGI-HGBw3Yhoh-WsVD1E-UdEHcMcZubmqSrryDxS-LjZ2aw3Bz2sPnuz6cvLLx1d49mw9fvxwfGZ57oxvEM-MYDZl4A9Y_bcM9OZe02I'
    }
  },
  'business-consulting': {
    title: 'Business Tax Consulting',
    subtitle: 'Strategic tax planning and consulting services to optimize your business tax strategy and drive growth.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNaE9wtmVyig6bWWtIGwT73rbSvCfXQMxuehNEDsznoYXkjT6ZTcBAVakAVEqXrxPPkDPHvD0SSQ3LoVsZc5oQq7EalsKoqQDZcfrqUn8iX_nwnXMkA68Hj5yvM_xO9TtHUQLGNtULvrXzy9lkrWgg9hPNWnzha6rA3zMDIAei1DAV5Kl1PB54-loaogn4tGf-HJ6l10EqZpnVn_9GglRy9WmmC89Qu3n2i3McT1zRqTtBD_pAfaSRcQPwMrXPSCDMB3jbOy439A',
    overview: {
      paragraph1: 'Business tax consulting goes beyond compliance to provide strategic insights that drive business growth. Our consultants work closely with business owners to develop tax-efficient strategies that align with their overall business objectives.',
      paragraph2: 'From entity selection and business structure optimization to cash flow management and succession planning, we provide comprehensive consulting services that help businesses thrive in competitive markets.',
      processTitle: 'The Process',
      processDesc: 'We analyze your business structure, review financial statements, and develop customized tax strategies that support your growth objectives.',
      benefitTitle: 'The Benefit',
      benefitDesc: 'Reduce tax liabilities, improve cash flow, and create a solid foundation for long-term business success.'
    },
    pillars: [
      {
        icon: 'business',
        title: 'Business Strategy',
        description: 'Tax planning integrated with your overall business strategy for optimal financial performance.'
      },
      {
        icon: 'trending_up',
        title: 'Growth Planning',
        description: 'Tax-efficient strategies to support business expansion and investment opportunities.'
      },
      {
        icon: 'account_balance_wallet',
        title: 'Cash Flow',
        description: 'Optimize cash flow through strategic tax planning and timing of tax payments.'
      }
    ],
    successStory: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2A6Idwcvjwd-Nuil2RAIt1gUvyIy4yGW2-nujEMV21Z2sm7lxp9gGtI_PbcqafNtFlziTjk2bbh6ZduKbJei5FQUeLQQxXBaixd0HPVuRnvHVBDQ_H8R2kt-DuKy5sClHM5JM2ZktE0QLLqjlZYYMZ_d3gyJORdiEWfDqXSgXNy9BZ3xXAQGrFO5XOqksf_BNKI_Sz8dO5i4hhKfOrJl8NIrpMI98T299BJFbnbPl83HRkoY7S0TN8yYNZix5zeWuMMX43Gcunwc',
      quote: '"Prime Tax Experts helped us restructure our business, saving us $50,000 annually in taxes while improving our cash flow."',
      clientName: 'David Chen',
      clientTitle: 'Founder, Tech Startup',
      clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVI7YTRwXaICkwZihP5hK4moguK4MDeVDhlxHwpMlmnue78aBdNrW0O1urtzpZjmDwluhk08hYlERu2fwnfWavp_Yw4uKShtt2jFyNNHgXQZtA_XLwF5VEQyAyR9nKLhDXem7fWNzS0FCV2LjN-ErpExwq4LE092thGlZYGI-HGBw3Yhoh-WsVD1E-UdEHcMcZubmqSrryDxS-LjZ2aw3Bz2sPnuz6cvLLx1d49mw9fvxwfGZ57oxvEM-MYDZl4A9Y_bcM9OZe02I'
    }
  },
  'estate-planning': {
    title: 'Estate & Trust Planning',
    subtitle: 'Comprehensive estate planning services to protect and transfer your wealth to future generations.',
    heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfNaE9wtmVyig6bWWtIGwT73rbSvCfXQMxuehNEDsznoYXkjT6ZTcBAVakAVEqXrxPPkDPHvD0SSQ3LoVsZc5oQq7EalsKoqQDZcfrqUn8iX_nwnXMkA68Hj5yvM_xO9TtHUQLGNtULvrXzy9lkrWgg9hPNWnzha6rA3zMDIAei1DAV5Kl1PB54-loaogn4tGf-HJ6l10EqZpnVn_9GglRy9WmmC89Qu3n2i3McT1zRqTtBD_pAfaSRcQPwMrXPSCDMB3jbOy439A',
    overview: {
      paragraph1: 'Estate and trust planning is essential for protecting your assets and ensuring they are distributed according to your wishes. Our specialists provide comprehensive planning services that minimize estate taxes and provide for your loved ones.',
      paragraph2: 'We help you navigate the complex world of estate planning, including wills, trusts, powers of attorney, and healthcare directives. Our goal is to create a comprehensive plan that provides peace of mind for you and your family.',
      processTitle: 'The Process',
      processDesc: 'We assess your assets, discuss your goals, and create a customized estate plan that minimizes taxes and maximizes protection.',
      benefitTitle: 'The Benefit',
      benefitDesc: 'Protect your legacy, minimize estate taxes, and ensure your assets are distributed according to your wishes.'
    },
    pillars: [
      {
        icon: 'account_balance',
        title: 'Trust Planning',
        description: 'Design and implement trusts to protect assets and minimize estate taxes.'
      },
      {
        icon: 'gavel',
        title: 'Estate Administration',
        description: 'Guide executors through the probate process and estate administration.'
      },
      {
        icon: 'family_restroom',
        title: 'Family Protection',
        description: 'Ensure your family is protected and provided for according to your wishes.'
      }
    ],
    successStory: {
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2A6Idwcvjwd-Nuil2RAIt1gUvyIy4yGW2-nujEMV21Z2sm7lxp9gGtI_PbcqafNtFlziTjk2bbh6ZduKbJei5FQUeLQQxXBaixd0HPVuRnvHVBDQ_H8R2kt-DuKy5sClHM5JM2ZktE0QLLqjlZYYMZ_d3gyJORdiEWfDqXSgXNy9BZ3xXAQGrFO5XOqksf_BNKI_Sz8dO5i4hhKfOrJl8NIrpMI98T299BJFbnbPl83HRkoY7S0TN8yYNZix5zeWuMMX43Gcunwc',
      quote: '"Prime Tax Experts created a comprehensive estate plan that saved my family over $200,000 in estate taxes."',
      clientName: 'Robert Martinez',
      clientTitle: 'Retired Business Executive',
      clientImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCVI7YTRwXaICkwZihP5hK4moguK4MDeVDhlxHwpMlmnue78aBdNrW0O1urtzpZjmDwluhk08hYlERu2fwnfWavp_Yw4uKShtt2jFyNNHgXQZtA_XLwF5VEQyAyR9nKLhDXem7fWNzS0FCV2LjN-ErpExwq4LE092thGlZYGI-HGBw3Yhoh-WsVD1E-UdEHcMcZubmqSrryDxS-LjZ2aw3Bz2sPnuz6cvLLx1d49mw9fvxwfGZ57oxvEM-MYDZl4A9Y_bcM9OZe02I'
    }
  }
};

export default function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = use(params);
  const serviceData = serviceDetails[service as keyof typeof serviceDetails];

  if (!serviceData) {
    return (
      <div className="min-h-screen bg-surface text-on-surface font-body">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#1F3F6E] mb-4">Service Not Found</h1>
            <p className="text-on-surface-variant">The requested service could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body">
      <Header />

      <main className="pt-16">
        {/* Breadcrumbs & Header Section */}
        <header className="relative min-h-[500px] flex items-center overflow-hidden">
          {/* Hero Background Image with Dark Blue Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              alt="Professional business meeting in modern office"
              className="w-full h-full object-cover"
              src={serviceData.heroImage}
            />
            <div className="absolute inset-0 bg-[#1F3F6E]/85"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-20">
            <nav className="flex items-center gap-2 mb-6 text-xs uppercase tracking-widest text-slate-300 font-label">
              <a className="hover:text-white transition-colors" href="/">Home</a>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <a className="hover:text-white transition-colors" href="/services">Services</a>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="text-white font-bold">{serviceData.title}</span>
            </nav>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <h1 className="text-[3.5rem] leading-[1.1] font-headline font-extrabold tracking-tight text-white mb-4">
                  {serviceData.title}
                </h1>
                <p className="text-lg text-slate-200 font-body leading-relaxed">
                  {serviceData.subtitle}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            {/* Service Overview */}
            <section>
              <h2 className="text-2xl font-headline font-bold text-[#1F3F6E] mb-6 flex items-center gap-3">
                <span className="w-8 h-1 bg-[#F58220]"></span>
                Comprehensive Overview
              </h2>
              <div className="prose prose-slate max-w-none space-y-6 text-on-surface-variant leading-relaxed">
                <p>{serviceData.overview.paragraph1}</p>
                <p>{serviceData.overview.paragraph2}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                  <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] border-l-4 border-[#F58220]">
                    <h4 className="font-headline font-bold text-[#1F3F6E] mb-2">{serviceData.overview.processTitle}</h4>
                    <p className="text-sm">{serviceData.overview.processDesc}</p>
                  </div>
                  <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] border-l-4 border-[#1F3F6E]">
                    <h4 className="font-headline font-bold text-[#1F3F6E] mb-2">{serviceData.overview.benefitTitle}</h4>
                    <p className="text-sm">{serviceData.overview.benefitDesc}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features / Sub-Services */}
            <section className="bg-surface-container-low rounded-2xl p-10">
              <h3 className="text-xl font-headline font-bold text-[#1F3F6E] mb-8">Strategic Pillars</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {serviceData.pillars.map((pillar, index) => (
                  <div key={index} className="space-y-4">
                    <span className="material-symbols-outlined text-[#F58220] text-3xl">{pillar.icon}</span>
                    <h4 className="font-headline font-bold text-lg">{pillar.title}</h4>
                    <p className="text-sm text-on-surface-variant leading-snug">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Success Story (Asymmetric Bento Style) */}
            <section>
              <h2 className="text-2xl font-headline font-bold text-[#1F3F6E] mb-8">Success Story</h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-2xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)]">
                <div className="md:col-span-2 relative min-h-[300px]">
                  <img
                    alt="Modern architecture"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={serviceData.successStory.image}
                  />
                </div>
                <div className="md:col-span-3 bg-[#1F3F6E] p-10 flex flex-col justify-center text-white">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-[#F58220]" style={{fontVariationSettings: "'FILL' 1"}}>format_quote</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">Client Success</h4>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                    {serviceData.successStory.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-500 overflow-hidden">
                      <img
                        alt={serviceData.successStory.clientName}
                        className="w-full h-full object-cover"
                        src={serviceData.successStory.clientImage}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-bold">{serviceData.successStory.clientName}</p>
                      <p className="text-xs text-slate-400">{serviceData.successStory.clientTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar / CTA Area */}
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-8">
              {/* Primary CTA Card */}
              <div className="bg-surface-container-highest p-8 rounded-xl shadow-[0px_20px_40px_rgba(31,63,110,0.06)] relative overflow-hidden">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-headline font-bold text-[#1F3F6E] mb-4">Need an Expert?</h3>
                <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
                  Speak with a specialist who understands the unique fiscal challenges of your industry. Our initial consultation is a strategic deep-dive into your needs.
                </p>
                <button className="w-full bg-[#F58220] text-white py-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all">
                  <span className="material-symbols-outlined text-xl">call</span>
                  Call Now
                </button>
                <p className="text-[10px] text-center mt-4 text-outline uppercase tracking-widest font-label">No commitment required</p>
              </div>

              {/* Process Steps */}
              <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20">
                <h4 className="font-headline font-bold text-[#1F3F6E] mb-6">How we work</h4>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F3F6E] text-white text-[10px] flex items-center justify-center font-bold">01</span>
                    <div>
                      <p className="text-sm font-bold">Discovery Session</p>
                      <p className="text-xs text-on-surface-variant">We analyze your current tax profile.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F3F6E] text-white text-[10px] flex items-center justify-center font-bold">02</span>
                    <div>
                      <p className="text-sm font-bold">Custom Blueprint</p>
                      <p className="text-xs text-on-surface-variant">A tailored tax structure is proposed.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F3F6E] text-white text-[10px] flex items-center justify-center font-bold">03</span>
                    <div>
                      <p className="text-sm font-bold">Active Management</p>
                      <p className="text-xs text-on-surface-variant">Ongoing compliance and strategy.</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Secondary Widget */}
              <div className="p-6 bg-[#2E5C9A] rounded-xl text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-[#F58220]">description</span>
                  <h4 className="font-bold text-sm">Download Guide</h4>
                </div>
                <p className="text-xs text-blue-100 mb-4">Corporate Tax Strategies for 2024</p>
                <a className="text-xs font-bold underline underline-offset-4 hover:text-[#F58220] transition-colors" href="#">Get PDF Report</a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}