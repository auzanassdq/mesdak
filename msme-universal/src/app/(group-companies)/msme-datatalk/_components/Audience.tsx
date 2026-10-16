"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

export const Audience = () => {
  const audiences = [
    "Governments, Ministries, <br/> & Central Banks",
    "MDBs, DFIs, & Development Banks",
    "Commercial Banks & Microfinance Institutions",
    "Insurance Companies <br/> Guarantee Funds",
    "Corporations & Multinationals",
    "Development Agencies & NGOs",
    "Asset Managers & Institutional Investors",
    "MSMEs, Entrepreneurs & Innovators",
  ];

  return (
    <section id="audience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who M&apos;DataTalk Serves
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every stakeholder gains access to clean, reliable, AI-enhanced
            intelligence tailored to their operational and strategic needs.
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
              <span className="font-medium">
                {audience.split(/<br\s*\/?>/).map((line, i, arr) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
