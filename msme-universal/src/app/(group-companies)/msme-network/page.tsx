"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  EyeIcon,
  HandshakeIcon,
  GlobeIcon,
  BuildingsIcon,
  CaretDownIcon,
  MegaphoneIcon,
  ChatsCircleIcon,
  UsersThreeIcon,
  TargetIcon,
  ChartLineUpIcon,
  RocketIcon,
  MapPinIcon,
  UserPlusIcon,
  WrenchIcon,
  LightbulbIcon,
  StrategyIcon,
  ShieldCheckIcon,
  CheckIcon
} from "@phosphor-icons/react";
import GroupCompanyNavbar from "@/components/GroupCompanyNavbar";
import NetworkChart from "@/components/group-org-charts/NetworkChart";
import OurReachSection from "@/components/group-org-charts/OurReachSection";


export default function MSMENetworkPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Primary Orange Color based on logo: #E86F28
  const primaryColor = "#E86F28";

  const pillar1Services = [
    "Branding",
    "Communication Strategy",
    "Community Building, Development & Management",
    "Marketing Solutions",
    "Online Advertising",
    "Generate Passive Income"
  ];

  const pillar2Services = [
    "Sales Growth Solutions",
    "Product Testing & Validation",
    "Collaboration Facilitation"
  ];

  const pillar3Services = [
    "Market Entry Support",
    "Market Development Solutions"
  ];

  const pillar4Services = [
    "Hiring & Talent Matching",
    "Company Building",
    "Venture Studio",
    "Project Development",
    "Strategic Consulting",
    "Digital Infrastucture"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans overflow-x-hidden selection:bg-[#E86F28] selection:text-slate-950 scroll-smooth">
      <GroupCompanyNavbar logoSrc="/logo/group-companies/network.png" themeColor="#e86f28" />


      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

        {/* Animated Orbs matching Orange theme */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#E86F28]/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[128px] animate-pulse delay-700" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            style={{ opacity, y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-[#E86F28] text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Member of MSME Solutions World Group
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Unlock <span className="text-[#E86F28]">Untapped</span><br />
              <span className="text-[#E86F28]">Potential</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
              MSME Network Incorporation, member of the MSME Solutions World group, is the operating firm behind M'Network — the platform that transforms unrealised potential into real opportunities, powerful partnerships, and new revenue streams.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 animate-bounce text-[#E86F28]"
            >
              <a href="#about">
                <CaretDownIcon size={32} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
                M'Network connects private individuals — students, professionals, and retirees — and organisations of all sizes, from micro-enterprises to large corporations, as well as financial institutions and governments, into a unified digital ecosystem where collaboration, visibility, and growth become inevitable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="p-6 border-l-2 border-[#E86F28] bg-slate-900/30 rounded-3xl">
                <p className="text-slate-400 text-lg">
                  We deliver innovative, data-driven service solutions that unlock growth at every stage of the business journey.
                </p>
              </div>
              <div className="p-6 border-l-2 border-[#E86F28] bg-slate-900/30 rounded-3xl">
                <p className="text-slate-400 text-lg">
                  Our integrated <span className="text-[#E86F28] font-bold">Global MSME Directory</span> elevates partner identification to a new standard by allowing businesses to find and connect with verified, screened, and trusted partners worldwide — dramatically reducing risk, preventing scams, and accelerating trusted collaboration.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillar 1: Build Visibility & Trust */}
      <section id="services" className="py-24 bg-slate-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E86F28]/20 mb-6">
                <EyeIcon size={32} className="text-[#E86F28]" weight="duotone" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Build Visibility <span className="text-[#E86F28]">& Trust</span>
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                Strengthen your identity, credibility, and presence across your markets.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillar1Services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-[#E86F28]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#E86F28] flex-shrink-0" />
                <span className="text-slate-200 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 2: Activate Engagement & Reach */}
      <section id="pillar-2" className="py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E86F28]/20 mb-6">
                <ChartLineUpIcon size={32} className="text-[#E86F28]" weight="duotone" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Activate Engagement <span className="text-[#E86F28]">& Reach</span>
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                Turn visibility into meaningful interactions, traction, and commercial relevance.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pillar2Services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-[#E86F28]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#E86F28] flex-shrink-0" />
                <span className="text-slate-200 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 3: Scale Markets & Expand */}
      <section id="pillar-3" className="py-24 bg-slate-900 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E86F28]/20 mb-6">
                <GlobeIcon size={32} className="text-[#E86F28]" weight="duotone" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Scale Markets <span className="text-[#E86F28]">& Expand</span>
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                Enter new markets with confidence and accelerate your commercial footprint.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {pillar3Services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-4 hover:border-[#E86F28]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#E86F28] flex-shrink-0" />
                <span className="text-slate-200 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillar 4: Strengthen the Organisation */}
      <section id="pillar-4" className="py-24 bg-slate-950 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E86F28]/20 mb-6">
                <BuildingsIcon size={32} className="text-[#E86F28]" weight="duotone" />
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Strengthen the <span className="text-[#E86F28]">Organisation</span>
              </h2>
              <p className="text-slate-300 max-w-3xl mx-auto text-lg">
                Develop internal capabilities and leadership foundations for long-term, sustainable growth.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillar4Services.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4 hover:border-[#E86F28]/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-[#E86F28] flex-shrink-0" />
                <span className="text-slate-200 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="closing" className="py-32 relative scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Where <span className="text-[#E86F28]">Collaboration</span>,<br />
              Visibility & Growth<br />
              Become <span className="text-[#E86F28]">Inevitable</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Join M'Network and transform unrealised potential into real opportunities, powerful partnerships, and new revenue streams.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Group Companies Section */}
      <div id="companies">
        <NetworkChart />
      </div>

      {/* Our Reach Section */}
      <OurReachSection company="M'Network" themeColor="#e86f28" />

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div>
            &copy; {new Date().getFullYear()} MSME Network Incorporation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
