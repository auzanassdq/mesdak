"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Database } from "lucide-react";

export const About = () => {
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
              Empowering Institutions with{" "}
              <span className="text-[#6b21a8]">Next-Gen AI</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              M’DataTalk Incorporation, a member of the MSME Solutions World
              Group, empowers institutions with granular, real-time,
              multi-dimensional market and MSME transaction data, continuously
              captured and processed through next-generation AI engines.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              This AI-powered intelligence enhances operational efficiency,
              strengthens policy design, optimises programme execution, sharpens
              performance assessment, and drives measurable impact — all
              supported by perpetual learning and improvement cycles that evolve
              with the data.
            </p>
            <div className="flex items-center gap-4 text-[#6b21a8] font-medium cursor-pointer group">
              <span>Read more about our mission</span>
              <ChevronRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
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
              {/* Decorative texture overlay */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              </div>
              <div className="text-center p-8 relative z-10">
                <Database size={64} className="text-purple-400 mx-auto mb-4" />
                <h3 className="text-white text-xl font-semibold">
                  AI-Powered Intelligence
                </h3>
                <p className="text-gray-400 mt-2">
                  Granular • Real-time • Multi-dimensional
                </p>
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
