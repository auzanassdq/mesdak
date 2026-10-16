"use client";

import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#6b21a8] rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-40 right-60 w-96 h-96 bg-blue-500 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-purple-100 text-[#6b21a8] text-sm font-semibold mb-6">
              M&apos;DataTalk Incorporation
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Unlock Insight Within Data to Accelerate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6b21a8] to-blue-600">
                Socio-Economic Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-7xl mx-auto">
              We build innovative data-intelligence platforms that enable
              development finance institutions, <br /> Multilateral Development Bank, governments, <br /> microfinance
              institutions, banks, VC/PE, guarantors, insurance companies and
              development agencies and alike <br /> to transform raw data into
              strategic advantage - powering smarter decisions and large-scale
              socio-economic progress.
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
