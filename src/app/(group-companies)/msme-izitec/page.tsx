import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Layers, Shield, Zap } from 'lucide-react';

export default function IzitecPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          <Link href="/izitec" className="flex items-center gap-2">
            <div className="relative h-10 w-32 md:h-12 md:w-40">
              <Image 
                src="/izitec-logo.png" 
                alt="M'IZITec Logo" 
                fill 
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <Link href="#solutions" className="hover:text-blue-600 transition-colors">Solutions</Link>
            <Link href="#deliverables" className="hover:text-blue-600 transition-colors">Deliverables</Link>
            <Link href="#integration" className="hover:text-blue-600 transition-colors">Integration</Link>
            <Link href="#benefits" className="hover:text-blue-600 transition-colors">Benefits</Link>
          </div>

          <button className="md:hidden p-2 text-slate-600">
            <span className="sr-only">Menu</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Driving Business Through <span className="text-blue-600">Digital Power</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              M’IZITec Incorporation, a member of the MSME Solutions World Group, is the technology powerhouse behind the design, development, and deployment of next-generation digital solutions for MSMEs, institutions, and large organisations worldwide.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link href="#solutions" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">The Technology Engine</h2>
              <p className="text-slate-600 leading-relaxed">
                As the technology engine of the Group, M’IZI Tech builds the digital systems that power the entire M’World ecosystem—keeping it continually at the forefront of technological innovation.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Beyond powering the group, M’IZITec also serves external clients, leveraging the existing M’World digital infrastructure to deliver world-class, enterprise-grade solutions without requiring additional investment in new systems or platforms.
              </p>
            </div>
            <div className="bg-slate-100 rounded-2xl p-8 border border-slate-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Global Reach</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Layers className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Ecosystem</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Zap className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Innovation</h3>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Shield className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-slate-900">Security</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Solutions for Transformation</h2>
            <p className="text-slate-600">
              M’IZITec develops digital solutions primarily aimed at advancing the MSME sector, while also creating adjacent system-solutions that enable governments and institutions to better support MSMEs.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 space-y-6">
                <h3 className="text-2xl font-bold text-slate-900">Government & Institutional Support</h3>
                <p className="text-slate-600">
                  M’IZITec provides digital tools that help governments modernise and optimise the collection of social security, pension contributions, and fiscal revenue.
                </p>
                <ul className="space-y-3">
                  {[
                    "Transparency",
                    "Ease of compliance for MSMEs",
                    "Operational efficiency",
                    "Cost reduction in revenue administration",
                    "Accuracy and auditability"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-slate-500 italic mt-4">
                  All achieved without increasing tax rates, but by offering digital pathways and incentives that encourage formalisation.
                </p>
              </div>
              <div className="bg-blue-600 p-8 md:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Impact Areas</h3>
                <div className="space-y-4">
                  <div className="bg-blue-500/50 p-4 rounded-lg">
                    <h4 className="font-semibold">Fiscal Revenue</h4>
                    <p className="text-blue-100 text-sm">Modernizing collection systems</p>
                  </div>
                  <div className="bg-blue-500/50 p-4 rounded-lg">
                    <h4 className="font-semibold">Social Security</h4>
                    <p className="text-blue-100 text-sm">Optimizing contribution flows</p>
                  </div>
                  <div className="bg-blue-500/50 p-4 rounded-lg">
                    <h4 className="font-semibold">MSME Compliance</h4>
                    <p className="text-blue-100 text-sm">Simplifying regulatory adherence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section id="deliverables" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">What M’IZITec Delivers</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Full Software Design, Development & Deployment",
                desc: "Secure, scalable, and high-performance digital systems built end-to-end."
              },
              {
                title: "Payment Infrastructure",
                desc: "Advanced digital payment systems for governments, banks, DFIs, large enterprises, and MSMEs—fully integrated with the M’World ecosystem."
              },
              {
                title: "Revenue Collection Solutions",
                desc: "Modern, streamlined collection systems for Social Security, Pension & Fiscal Revenue that increase compliance and reduce leakage."
              },
              {
                title: "Digital Platforms for Support",
                desc: "Solutions for MSME programme delivery, registration, onboarding, monitoring, compliance, and digital transformation enablement."
              },
              {
                title: "Enterprise Systems",
                desc: "Custom platforms supporting supply chains, MSME onboarding, risk scoring, digital loan processes, and ecosystem integration."
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all bg-slate-50 hover:bg-white">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <span className="text-xl font-bold text-blue-600 group-hover:text-white">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Validation */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">More Than Software: Testing, Validation & Adoption at Scale</h2>
              <p className="text-slate-300 text-lg mb-8">
                All M’IZITec solutions benefit from a unique advantage: They can be tested, improved, validated, and scaled using real end-users inside the M’World ecosystem.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Rapid product-market fit",
                  "Lower development risk",
                  "Reduced launch failure rates",
                  "Faster adoption",
                  "Evidence-based iteration",
                  "Real-time feedback loops"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-full min-h-[400px] bg-slate-800 rounded-2xl p-8 flex items-center justify-center border border-slate-700">
               <div className="text-center">
                 <h3 className="text-2xl font-bold text-blue-400 mb-2">Unmatched Capability</h3>
                 <p className="text-slate-400">This capability is unmatched by conventional IT providers.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integration" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Integrated Solutions Powered by the Whole Group</h2>
          <p className="max-w-3xl mx-auto text-slate-600 mb-12">
            Because it is part of the MSME Solutions World Group, M’IZITec can join forces with other divisions—M’Network, M’Butic, MSME Finance Incorporation, MSME Development Consulting, and M’DataTalk—to deliver top-tier, integrated, end-to-end solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Technology", "Finance", "Media & Communication", "Marketplace Access", 
              "Advisory & Consulting", "Data Intelligence", "Distribution & Support"
            ].map((tag, i) => (
              <span key={i} className="px-6 py-3 bg-slate-100 text-slate-700 rounded-full font-medium border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-blue-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">A Faster, More Cost-Efficient, Higher-Performance Delivery Model</h2>
            <p className="text-center text-slate-600 mb-10">
              All M’IZITec solutions are delivered faster, at a more competitive cost, and with superior performance thanks to the ability to build on the M’World digital infrastructure.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  $
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Lower Costs</h3>
                <p className="text-sm text-slate-500">Lower development and integration costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  🚀
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Faster Speed</h3>
                <p className="text-sm text-slate-500">Faster deployment timelines</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  📈
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Higher ROI</h3>
                <p className="text-sm text-slate-500">Higher long-term ROI for clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="relative h-12 w-40 mx-auto mb-6 opacity-80">
             <Image 
                src="/izitec-logo.png" 
                alt="M'IZITec Logo" 
                fill 
                className="object-contain"
              />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">The Digital Engine of MSME Growth</h2>
          <p className="max-w-2xl mx-auto mb-8">
            M’IZITec is more than a technology provider—it is the digital backbone enabling MSMEs, institutions, and entire economies to modernise, grow, and compete in the digital age.
          </p>
          <p className="text-sm">© {new Date().getFullYear()} M'IZITec Incorporation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
