"use client";

import React from "react";
import { ShoppingCart, ShoppingBag, Tag, TrendingUp, CheckCircle2 } from "lucide-react";

const buticUnits = [
  {
    title: "M’Market Incorporation",
    icon: <ShoppingBag className="w-8 h-8" />,
    description: "Digital marketplace & retail",
  },
  {
    title: "M’SuperDeal Incorporation",
    icon: <Tag className="w-8 h-8" />,
    description: "Deals, promotions & offers",
  },
  {
    title: "M’Butic Business Solutions",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "B2B commerce services",
    services: ["Sales", "Advertising", "Purchase", "Market entry"],
  },
];

export default function MButicOrgChart() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans">
      {/* Root Node */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#73bf43] to-[#1e662a] text-white rounded-2xl shadow-xl p-8 w-[420px] flex flex-col items-center relative z-10 border-4 border-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#73bf43] shadow-inner mb-4">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-center">M’Butic Incorporation</h1>
          <p className="text-green-100 text-[11px] font-bold uppercase tracking-[0.2em] mt-2">Commerce & Marketplace</p>
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-8 bg-[#73bf43]" />
      </div>

      {/* Orthogonal Connection Lines using Grid to ensure perfect alignment */}
      <div className="grid grid-cols-3 gap-0 w-full">
        {buticUnits.map((_, i) => (
          <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
            {/* Horizontal connection segment */}
            {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#73bf43]" />}
            {i === 1 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#73bf43]" />}
            {i === 2 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#73bf43]" />}
            
            {/* Vertical drop to card */}
            <div className="w-0.5 h-6 bg-[#73bf43] relative z-10"></div>
            <div className="text-[#73bf43] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
          </div>
        ))}
      </div>

      {/* Children Nodes */}
      <div className="grid grid-cols-3 gap-0 relative mt-1">
        {buticUnits.map((unit) => (
          <div key={unit.title} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full">
            <div className="h-2 w-full bg-[#73bf43] group-hover:bg-[#1e662a] transition-colors" />
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 rounded-2xl bg-green-50 flex items-center justify-center text-[#73bf43] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {unit.icon}
              </div>
              <h2 className="text-[15px] font-bold text-gray-800 mb-2 leading-tight">{unit.title}</h2>
              {unit.description && (
                <p className="text-xs text-gray-500 font-medium mb-4">{unit.description}</p>
              )}
              
              {unit.services && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-[110%] absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#73bf43]/20 rounded-xl shadow-lg p-4 z-50 pointer-events-none">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#73bf43]" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#73bf43] text-[8px] leading-none scale-x-150">▼</div>
                  <h3 className="text-[10px] font-bold text-[#73bf43] uppercase tracking-widest text-center mb-3">Key Services</h3>
                  <div className="flex flex-col gap-2.5">
                    {unit.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 text-xs text-gray-600 font-semibold text-left">
                        <CheckCircle2 className="w-4 h-4 text-[#73bf43] flex-shrink-0 mt-px" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
