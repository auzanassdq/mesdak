"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, BarChart3, Globe, Users, Lightbulb, Layers } from "lucide-react";

export default function ConsultingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-teal-100 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-40">
               <Image
                src="/assets/mdc-logo.png"
                alt="MDC Logo"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection("hero")} className="hover:text-teal-700 transition-colors">Home</button>
            <button onClick={() => scrollToSection("mandate")} className="hover:text-teal-700 transition-colors">Our Mandate</button>
            <button onClick={() => scrollToSection("who-we-serve")} className="hover:text-teal-700 transition-colors">Who We Serve</button>
            <button onClick={() => scrollToSection("intelligence")} className="hover:text-teal-700 transition-colors">Intelligence</button>
            <button onClick={() => scrollToSection("deliverables")} className="hover:text-teal-700 transition-colors">Deliverables</button>
            <button className="px-5 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-4 shadow-lg">
            <button onClick={() => scrollToSection("hero")} className="text-left py-2 hover:text-teal-700">Home</button>
            <button onClick={() => scrollToSection("mandate")} className="text-left py-2 hover:text-teal-700">Our Mandate</button>
            <button onClick={() => scrollToSection("who-we-serve")} className="text-left py-2 hover:text-teal-700">Who We Serve</button>
            <button onClick={() => scrollToSection("intelligence")} className="text-left py-2 hover:text-teal-700">Intelligence</button>
            <button onClick={() => scrollToSection("deliverables")} className="text-left py-2 hover:text-teal-700">Deliverables</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-br from-teal-50 via-white to-teal-50/30">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-teal-900 mb-6 tracking-tight">
                Think the <span className="text-teal-600 italic">Unthought</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                MSME Development Consulting (MDC) is the strategic consulting arm of the MSME Solutions World Group — dedicated to helping countries, regions, and institutions build high-performance MSME development systems that unlock inclusive growth and long-term economic transformation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-teal-100 text-left"
            >
              <p className="text-lg text-slate-700 mb-6">
                MDC provides top-tier strategic advisory services for the design and execution of MSME development strategies at district, city, national, regional, and continental levels.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="text-teal-800 font-semibold mb-2">Our Strength</h3>
                  <p className="text-slate-600 text-sm">
                    Our strength lies in our unique data assets, combined with a continuous, deep, and field-grounded understanding of MSME realities across markets and territories — enabling us to design solutions that are both visionary and actionable.
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="text-teal-800 font-semibold mb-2">Our Delivery</h3>
                  <p className="text-slate-600 text-sm">
                    MDC consultants deliver practical, evidence-based solutions to real challenges — from conceptualisation to full implementation — supported by systems that track delivery, measure progress, and drive continuous improvement.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
           <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
           <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Our Mandate Section */}
      <section id="mandate" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mandate</h2>
              <p className="text-lg text-slate-600 mb-8">
                MDC helps governments, DFIs, financial institutions, and development partners to achieve transformative results.
              </p>
              <div className="space-y-4">
                {[
                  "Understand the true structure and performance of the MSME economy",
                  "Design growth-enabling policies and institutional reforms",
                  "Build systems that strengthen MSMEs’ access to markets, finance, skills, data, and technology",
                  "Implement large-scale MSME programmes with measurable development outcomes",
                  "Monitor results in real time and continuously refine programme delivery"
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-teal-50 transition-colors"
                  >
                    <div className="mt-1 bg-teal-100 p-2 rounded-full text-teal-700">
                      <CheckCircle size={20} />
                    </div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative">
               <div className="aspect-square bg-gradient-to-tr from-teal-600 to-teal-400 rounded-3xl p-1 shadow-2xl rotate-3">
                 <div className="bg-white w-full h-full rounded-2xl flex items-center justify-center p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                        <div className="bg-teal-50 rounded-xl flex flex-col items-center justify-center p-4 text-center">
                            <BarChart3 className="text-teal-600 w-10 h-10 mb-2" />
                            <span className="text-sm font-semibold text-teal-900">Data Driven</span>
                        </div>
                        <div className="bg-teal-50 rounded-xl flex flex-col items-center justify-center p-4 text-center">
                            <Globe className="text-teal-600 w-10 h-10 mb-2" />
                            <span className="text-sm font-semibold text-teal-900">Global Reach</span>
                        </div>
                        <div className="bg-teal-50 rounded-xl flex flex-col items-center justify-center p-4 text-center">
                            <Users className="text-teal-600 w-10 h-10 mb-2" />
                            <span className="text-sm font-semibold text-teal-900">Inclusive Growth</span>
                        </div>
                        <div className="bg-teal-50 rounded-xl flex flex-col items-center justify-center p-4 text-center">
                            <Lightbulb className="text-teal-600 w-10 h-10 mb-2" />
                            <span className="text-sm font-semibold text-teal-900">Innovation</span>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section id="who-we-serve" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              MDC supports a wide range of partners across the economic spectrum, fostering collaboration and sustainable development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Governments & Public Institutions",
              "DFIs & Development Banks",
              "Commercial Banks & Microfinance Institutions",
              "International Development Agencies & NGOs",
              "Sovereign Wealth Funds & Investment Authorities",
              "Incubators, Accelerators & Innovation Hubs",
              "Entrepreneurs, MSMEs & Business Innovators"
            ].map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition-all"
              >
                <div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-4 text-teal-600">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{partner}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A New Era of MSME Intelligence */}
      <section id="intelligence" className="py-24 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-800/30 skew-x-12 transform origin-top-right"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6">A New Era of MSME Intelligence</h2>
              <p className="text-teal-100 text-lg mb-8 leading-relaxed">
                MDC leverages the <span className="font-semibold text-white">Enterprise Development Board (EDB)</span> — an innovative ERP-powered intelligence platform — to enable data-driven decision making.
              </p>
              <p className="text-teal-200 mb-8">
                This empowers institutions to take fast, informed, and high-impact decisions.
              </p>
              <button className="bg-white text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors">
                Learn About EDB
              </button>
            </div>
            
            <div className="lg:w-1/2">
              <div className="grid gap-4">
                {[
                  "MSME diagnostics and ecosystem mapping",
                  "Policy formulation and programme design",
                  "Monitoring, evaluation, and learning (MEL)",
                  "Performance tracking of MSMEs, institutions, and programmes",
                  "Digital transformation assessment and adoption planning",
                  "Real-time dashboards for decision-makers"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-teal-800/50 p-4 rounded-lg border border-teal-700/50 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What MDC Delivers */}
      <section id="deliverables" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What MDC Delivers</h2>
            <p className="text-slate-600">Comprehensive solutions for the MSME ecosystem</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "National & Regional MSME Development Strategies",
                desc: "Context-specific strategies aligned with economic priorities and market realities."
              },
              {
                title: "Policy Design & Institutional Strengthening",
                desc: "Frameworks, regulatory tools, and institutional mechanisms that enable MSMEs to thrive."
              },
              {
                title: "Programme Design & Implementation",
                desc: "From entrepreneurship programmes to digital adoption and business competitiveness initiatives."
              },
              {
                title: "Real-Time Monitoring & Improvement",
                desc: "Systems that measure results, identify bottlenecks, and optimise interventions."
              },
              {
                title: "Project Development & Execution",
                desc: "End-to-end support from concept to design, delivery, and operationalisation."
              },
              {
                title: "Advanced Data & Insight for Decision Makers",
                desc: "Sector intelligence, performance analytics, and predictive modelling to guide policy and investment decisions."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 group hover:border-teal-500/30 transition-all"
              >
                <div className="text-5xl font-bold text-teal-100 mb-4 group-hover:text-teal-600 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Closing */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">A New Architecture for MSME Development</h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              MSME Development Consulting is more than an advisory firm — it is a strategic transformation partner that helps countries and institutions redesign how MSMEs grow, create jobs, compete, and generate value at scale.
            </p>
            <div className="flex justify-center gap-6">
               <div className="relative h-12 w-48 opacity-80 hover:opacity-100 transition-opacity">
                 <Image
                  src="/assets/mdc-logo.png"
                  alt="MDC Logo"
                  fill
                  className="object-contain object-center brightness-0 invert"
                />
               </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} MSME Development Consulting. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
