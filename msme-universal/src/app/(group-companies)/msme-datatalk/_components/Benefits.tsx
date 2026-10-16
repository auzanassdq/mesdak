"use client";

import React from "react";

export const Benefits = () => {
  const benefits = [
    {
      title: "Evidence-Based Policy & Programme Design",
      desc: "AI-enriched insights for smarter national and sectoral decisions.",
    },
    {
      title: "Improved Programme Execution & Monitoring",
      desc: "Real-time performance dashboards with continuous optimisation loops.",
    },
    {
      title: "Smarter Financial & Investment Decisions",
      desc: "Advanced risk modelling, product design, segmentation, and portfolio insights.",
    },
    {
      title: "Impact Measurement & SDG Tracking",
      desc: "Clear visibility on socio-economic progress, poverty reduction, and ESG/ESR outcomes.",
    },
    {
      title: "Market Expansion & Opportunity Discovery",
      desc: "AI-detected emerging sectors, demand hotspots, and underserved markets.",
    },
    {
      title: "Institutional Efficiency & Cost Reduction",
      desc: "Reduced operational costs, lower system fragmentation, and higher transparency.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          What M&apos;DataTalk Enables
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-purple-100 text-[#6b21a8] rounded-lg flex items-center justify-center mb-6 font-bold text-xl group-hover:bg-[#6b21a8] group-hover:text-white transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
