"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Bank, 
  TrendUp, 
  ShieldCheck, 
  Handshake, 
  Coins, 
  ChartLineUp,
  Globe,
  Buildings,
  ArrowRight,
  CaretDown,
  List,
  X
} from "@phosphor-icons/react";

export default function MFIPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Custom Gold Color based on logo: #D4AF37 approx, using amber-500/400 for tailwind
  
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Infrastructure", href: "#infrastructure" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Architecture", href: "#architecture" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden selection:bg-[#D4AF37] selection:text-slate-950 scroll-smooth">


      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
        
        {/* Animated Orbs matching Gold/Yellow theme */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[128px] animate-pulse delay-700" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div 
            style={{ opacity, y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Finance <span className="text-[#D4AF37]">Re-Imagined.</span><br />
              Growth <span className="text-[#D4AF37]">Re-Defined.</span><br />
              Inclusion <span className="text-slate-400">Powered.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              MSME Finance Incorporation (MFI) is the financial engineering and strategic advisory arm of the MSME Solutions World Group — dedicated to designing innovative, system-level financial and insurance solutions that progressively and decisively contribute to reducing the global MSME financing gap, estimated in 2024 at USD 8 trillion per year.
            </p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-[#D4AF37]"
            >
              <a href="#about">
                <CaretDown size={32} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Nexus Section */}
      <section id="about" className="py-24 bg-slate-950 relative z-10 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
                MFI operates at the nexus of finance, technology, and inclusive economic transformation, creating a new class of financial infrastructure built for scale, efficiency, and impact.
              </p>
            </motion.div>
            
            <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
            >
              <div className="p-6 border-l-2 border-[#D4AF37] bg-slate-900/30">
                <p className="text-slate-400 text-lg">
                  On one side, we open new frontiers of investment for institutional, professional, and private investors seeking superior performance and sustained value creation.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[#D4AF37] bg-slate-900/30">
                <p className="text-slate-400 text-lg">
                  On the other, we unlock fair, scalable, and sustainable access to capital for MSMEs — as well as for key intermediaries such as VC/PE funds, microfinance institutions, and banks — enabling them to grow, innovate, and participate more competitively in the global economy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* New Class of Asset Section */}
      <section id="infrastructure" className="py-24 bg-slate-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              A New Class of Asset & <br/>
              <span className="text-[#D4AF37]">Financial Infrastructure</span>
            </h2>
            <p className="text-[#D4AF37] font-medium tracking-widest uppercase mb-8">(Finance + Technology)</p>
            <p className="text-slate-300 max-w-3xl mx-auto text-lg">
              MFI designs and delivers innovative financial and insurance solutions that empower our partners and clients to achieve:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              "Higher leverage",
              "Reduced risk exposure",
              "Superior value creation",
              "Superior return on investment (ROI)"
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-center hover:border-[#D4AF37]/50 transition-colors"
              >
                <h3 className="text-xl font-bold text-white">{item}</h3>
              </motion.div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-slate-400 leading-relaxed">
              These solutions not only enhance financial outcomes but also drive poverty reduction, job creation at scale, and the improved well-being of millions of women and men across emerging and frontier markets — achieving business success and development impact simultaneously.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Our Strategic Advisory & <br/>
            <span className="text-[#D4AF37]">Financial Engineering Capabilities</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Investment Strategy & Structuring for MSME growth",
              "Fundraising & Capital Mobilisation",
              "Risk-Mitigation & Insurance Engineering",
              "Payment Infrastructure & Digital Finance Solutions",
              "Digital Financial & Insurance Product Definition, Design & Deployment",
              "Strategic Partnerships with Banks, DFIs, Governments, Sovereign Wealth Funds & Asset Managers"
            ].map((capability, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-slate-900/50 border border-slate-800"
              >
                <div className="w-2 h-2 mt-2 rounded-full bg-[#D4AF37] flex-shrink-0" />
                <span className="text-slate-200 text-lg">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="architecture" className="py-32 relative scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            A New Financial Architecture for MSMEs
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-8">
            MSME Finance Incorporation is more than a service provider
          </p>
          <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-12">
            it is a new financial architecture designed to rethink how capital flows to MSMEs, and how value is created, shared, and scaled globally — while delivering superior returns to investors.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            &copy; {new Date().getFullYear()} MSME Finance Incorporation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
