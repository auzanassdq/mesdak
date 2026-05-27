"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  RocketLaunch, 
  GlobeHemisphereWest, 
  Megaphone, 
  ShoppingCart, 
  ArrowRight,
  CaretDown
} from "@phosphor-icons/react";
import GroupCompanyNavbar from "@/components/GroupCompanyNavbar";
import ButicChart from "@/components/group-org-charts/ButicChart";
import OurReachSection from "@/components/group-org-charts/OurReachSection";


export default function MButicPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-[#73BF43] selection:text-slate-950 scroll-smooth font-sans overflow-x-hidden">
      <GroupCompanyNavbar logoSrc="/logo/group-companies/butic.png" themeColor="#73bf43" />

      {/* Hero Section */}
      <section ref={targetRef} className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#73BF43]/10 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/30 rounded-full blur-[128px] animate-pulse delay-700" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-[#73BF43] text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-sm">
              Member of MSME Solutions World Group
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500">
              Welcome to the <br />
              <span className="text-[#73BF43]">Future of Commerce</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
              M&apos;Butic is the next-generation commerce ecosystem delivering innovative, data-driven sales solutions for producers, enterprises, institutions, and consumers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <button className="px-8 py-4 bg-[#73BF43] hover:bg-[#73BF43]/80 text-slate-950 font-bold rounded-full transition-all flex items-center gap-2 group">
                Explore Ecosystem
                <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 border border-slate-700 text-white font-medium rounded-full transition-all backdrop-blur-sm">
                Learn More
              </button> */}
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500"
        >
          <CaretDown size={32} />
        </motion.div>
      </section>

      {/* About / Infrastructure Section */}
      <section id="about" className="py-24 relative z-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                A New <span className="text-[#73BF43]">Commercial Infrastructure</span>
              </h2>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                M&apos;Butic is more than an online store — it is a new commercial infrastructure designed to redefine how markets work and how value is created and distributed.
              </p>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We merge a decentralised e-commerce and logistics framework with a centralised marketplace and integrated B2B / B2C / B2G sales engines, enabling direct, efficient, and intelligent transactions across the entire value chain.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-3xl font-bold text-[#73BF43] mb-1">B2B</div>
                  <div className="text-md text-slate-500">Business to Business</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-3xl font-bold text-[#73BF43] mb-1">B2C</div>
                  <div className="text-md text-slate-500">Business to Consumer</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-3xl font-bold text-[#73BF43] mb-1">B2G</div>
                  <div className="text-md text-slate-500">Business to Government</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-3xl font-bold text-[#73BF43] mb-1">Logistics</div>
                  <div className="text-md text-slate-500">Integrated Framework</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl shadow-[#73BF43]/20"
            >
              <Image 
                src="/images/mbutic-infrastructure-v3.png" 
                alt="M'Butic Commercial Infrastructure" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-6"
            >
              What We Offer
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-400 text-xl max-w-2xl mx-auto"
            >
              Comprehensive solutions designed to accelerate growth, optimize visibility, and streamline operations.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-[#73BF43]/50 transition-all hover:shadow-[0_0_30px_rgba(115,191,67,0.1)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#73BF43]/10 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150" />
                
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-[#73BF43] group-hover:bg-[#73BF43] group-hover:text-slate-950 transition-colors">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 group-hover:text-[#73BF43] transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / CTA Section */}
      <section id="vision" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
              &ldquo;Compressing <span className="text-[#73BF43]">Time and Distance</span> between <br /> Producers &amp; Markets &mdash; unlocking new economic <br /> value <span className="text-[#73BF43]">at scale.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12">
              M&apos;Butic handles everything beyond production, forming one of the world&apos;s largest distribution channels.&rdquo;
            </p>
            <button className="px-10 py-5 bg-white text-slate-950 font-bold text-lg rounded-full hover:bg-white transition-colors shadow-2xl">
              Partner With Us
            </button>
          </motion.div>
        </div>
      </section>

      
      {/* Group Companies Section */}
      <div id="companies">
        <ButicChart />
      </div>

      {/* Our Reach Section */}
      <OurReachSection company="M'Butic" themeColor="#73bf43" />

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-900 text-slate-500 text-sm rounded-2xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            &copy; {new Date().getFullYear()} M&apos;Butic Incorporation. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#73BF43] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#73BF43] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#73BF43] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const services = [
  {
    title: "Sales Strategies & Commercial Growth",
    description: "Impact-driven methodologies that increase adoption, conversions, and revenue.",
    icon: <RocketLaunch size={32} weight="duotone" />,
  },
  {
    title: "Market Entry & Market Development",
    description: "Fast, structured launch pathways and scalable expansion into new markets.",
    icon: <GlobeHemisphereWest size={32} weight="duotone" />,
  },
  {
    title: "Online Advertising & Digital Promotion",
    description: "Highly targeted, data-driven campaigns that reach real potential buyers and deliver measurable impact.",
    icon: <Megaphone size={32} weight="duotone" />,
  },
  {
    title: "Purchasing Solutions & Demand Aggregation",
    description: "Smart procurement tools enabling direct sourcing, bulk purchasing, and efficient buyer–producer matching.",
    icon: <ShoppingCart size={32} weight="duotone" />,
  },
];

