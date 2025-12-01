'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, 
  Database, 
  Globe2, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  Target, 
  Users, 
  Zap,
  Menu,
  X,
  ChevronRight,
  Layers,
  Search,
  FileText
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'D³MP', href: '#d3mp' },
    { name: 'Data Collection', href: '#collection' },
    { name: 'Who We Serve', href: '#audience' },
    { name: 'Benefits', href: '#benefits' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => scrollToSection('#hero')}
        >
          <div className="relative h-10 w-40 md:h-12 md:w-48">
             <Image 
              src="/images/mdatatalk-logo.png" 
              alt="M'DataTalk Logo" 
              fill
              className="object-contain object-left"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors hover:text-[#6b21a8] ${
                isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="bg-[#6b21a8] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[#581c87] transition-colors shadow-lg shadow-purple-500/30">
            Contact Us
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-gray-700 font-medium py-2 hover:text-[#6b21a8]"
                >
                  {link.name}
                </button>
              ))}
              <button className="bg-[#6b21a8] text-white px-5 py-3 rounded-lg text-sm font-medium hover:bg-[#581c87] transition-colors w-full">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#6b21a8] rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-40 right-60 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-[#6b21a8] text-sm font-semibold mb-6">
              M&apos;DataTalk Incorporation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Unlock Insight Within Data to Accelerate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-blue-600">Socio-Economic Development</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              We build innovative data-intelligence platforms that enable governments, banks, and development agencies to transform raw data into strategic advantage — powering smarter decisions and large-scale socio-economic progress.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-[#6b21a8] text-white rounded-full font-semibold hover:bg-[#581c87] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Explore Our Solutions
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#6b21a8] border border-purple-200 rounded-full font-semibold hover:bg-purple-50 transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Empowering Institutions with <span className="text-[#6b21a8]">Next-Gen AI</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              M’DataTalk Incorporation, a member of the MSME Solutions World Group, empowers institutions with granular, real-time, multi-dimensional market and MSME transaction data, continuously captured and processed through next-generation AI engines.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This AI-powered intelligence enhances operational efficiency, strengthens policy design, optimises programme execution, sharpens performance assessment, and drives measurable impact — all supported by perpetual learning and improvement cycles that evolve with the data.
            </p>
            <div className="flex items-center gap-4 text-[#6b21a8] font-medium cursor-pointer group">
              <span>Read more about our mission</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative">
               {/* Placeholder for a tech/data visualization */}
               <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               </div>
               <div className="text-center p-8 relative z-10">
                 <Database size={64} className="text-purple-400 mx-auto mb-4" />
                 <h3 className="text-white text-xl font-semibold">AI-Powered Intelligence</h3>
                 <p className="text-gray-400 mt-2">Granular • Real-time • Multi-dimensional</p>
               </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-100 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const D3MP = () => {
  const features = [
    "Industries", "Sectors", "Districts", "Cities", 
    "Countries", "Regions", "Continents", "Markets & value chains"
  ];

  const insights = [
    { icon: <LineChart />, text: "Market performance & behaviour" },
    { icon: <ShieldCheck />, text: "Risk patterns & portfolio dynamics" },
    { icon: <Target />, text: "Sector opportunities & value-chain gaps" },
    { icon: <BarChart3 />, text: "MSME health & growth trajectories" },
    { icon: <Globe2 />, text: "SDG and development-impact progress" },
    { icon: <Users />, text: "ESR/ESG performance" },
    { icon: <Zap />, text: "Execution effectiveness of programmes" },
    { icon: <PieChart />, text: "Scenario modelling & sensitivity analysis" },
  ];

  return (
    <section id="d3mp" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            D³MP — Dynamic Development Data Management Platform
          </h2>
          <p className="text-xl text-[#6b21a8] font-semibold mb-6">
            AI-Accelerated Intelligence for MSME Transformation
          </p>
          <p className="text-gray-600">
            One of M&apos;DataTalk&apos;s most innovative solutions is the Dynamic Development Data Management Platform (D³MP) — a breakthrough technology delivering unmatched visibility into the MSME economy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe2 className="text-[#6b21a8]" />
              Unmatched Visibility Across
            </h3>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, idx) => (
                <span key={idx} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Search className="text-[#6b21a8]" />
              Deep Insight Into
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {insights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-[#6b21a8] mt-1 shrink-0">{item.icon}</div>
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#6b21a8] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              &quot;This level of intelligence is simply groundbreaking — empowering institutions to make decisions that are fast, data-driven, inclusive, and future-proof, while reducing time, investment costs, operational risks, and the fragmentation caused by siloed systems.&quot;
            </p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const DataCollection = () => {
  const collectionTypes = [
    "Real-time surveys",
    "Structured & unstructured datasets",
    "Quantitative & qualitative insights",
    "MSME behavioural data",
    "Transactional & operational signals",
    "Multi-regional sampling",
    "Longitudinal datasets"
  ];

  return (
    <section id="collection" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3 opacity-20"></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl relative z-10">
                  <h4 className="text-lg font-bold text-gray-900 mb-6">M&apos;Doc & Intelligent Tools</h4>
                  <ul className="space-y-4">
                    {collectionTypes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#6b21a8]"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Advanced Data Collection at Scale
            </h2>
            <p className="text-xl text-[#6b21a8] mb-6">
              Powered by M&apos;Doc and Intelligent AI-Driven Survey Tools
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              M&apos;DataTalk enhances D³MP with advanced, AI-enabled data collection tools such as M&apos;Doc. These tools create a continuous, high-quality flow of fresh data, enhancing the accuracy, depth, and reliability of every insight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  const audiences = [
    "Governments & Ministries",
    "Development Banks & DFIs",
    "Commercial Banks & Microfinance Institutions",
    "Insurance Companies",
    "Corporations & Multinationals",
    "Development Agencies & NGOs",
    "Asset Managers & Institutional Investors",
    "MSMEs, Entrepreneurs & Innovators"
  ];

  return (
    <section id="audience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who M&apos;DataTalk Serves</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every stakeholder gains access to clean, reliable, AI-enhanced intelligence tailored to their operational and strategic needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-colors text-center flex flex-col items-center justify-center h-40"
            >
              <Users className="text-purple-400 mb-3" size={32} />
              <span className="font-medium">{audience}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    {
      title: "Evidence-Based Policy & Programme Design",
      desc: "AI-enriched insights for smarter national and sectoral decisions."
    },
    {
      title: "Improved Programme Execution & Monitoring",
      desc: "Real-time performance dashboards with continuous optimisation loops."
    },
    {
      title: "Smarter Financial & Investment Decisions",
      desc: "Advanced risk modelling, product design, segmentation, and portfolio insights."
    },
    {
      title: "Impact Measurement & SDG Tracking",
      desc: "Clear visibility on socio-economic progress, poverty reduction, and ESG/ESR outcomes."
    },
    {
      title: "Market Expansion & Opportunity Discovery",
      desc: "AI-detected emerging sectors, demand hotspots, and underserved markets."
    },
    {
      title: "Institutional Efficiency & Cost Reduction",
      desc: "Reduced operational costs, lower system fragmentation, and higher transparency."
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          What M&apos;DataTalk Enables
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group">
              <div className="w-12 h-12 bg-purple-100 text-[#6b21a8] rounded-lg flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-[#6b21a8] group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">A New Intelligence Architecture for MSME Development</h2>
            <p className="text-gray-400 leading-relaxed">
              M&apos;DataTalk is more than a data platform — It is a new intelligence architecture that provides institutions with the depth, clarity, and foresight needed to unlock growth, strengthen ecosystems, and transform millions of lives.
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
             <div className="relative h-16 w-64">
                <Image 
                  src="/images/mdatatalk-logo.png" 
                  alt="M&apos;DataTalk Logo" 
                  fill
                  className="object-contain object-left md:object-right brightness-0 invert"
                />
             </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} M&apos;DataTalk Incorporation. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function MDataTalkPage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <Navbar />
      <Hero />
      <About />
      <D3MP />
      <DataCollection />
      <Audience />
      <Benefits />
      <Footer />
    </main>
  );
}
