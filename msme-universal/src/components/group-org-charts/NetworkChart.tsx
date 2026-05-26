"use client";

import React from "react";
import { Network, Users, BookOpen, Building2, Rocket, Briefcase, CheckCircle2 } from "lucide-react";

const networkUnits = [
  {
    title: "M’Business Directory Incorporation",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Global business directory & listings",
  },
  {
    title: "M’Corporation Incorporation",
    icon: <Building2 className="w-8 h-8" />,
    description: "Corporate networking & entity management",
  },
  {
    title: "M’Venture Studio Corporation",
    icon: <Rocket className="w-8 h-8" />,
    description: "Startup incubation & acceleration",
  },
  {
    title: "M’Business Services Incorporation",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Professional services & support",
    services: ["Advertising", "Branding", "Communication", "Hiring", "Marketing", "Sales"],
  },
];

export default function MSMENetworkOrgChart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans">
      {/* Root Node & Management Box */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#e86f28] to-[#104a99] text-white rounded-2xl shadow-xl p-8 w-[440px] flex flex-col items-center relative z-10 border-4 border-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#e86f28] shadow-inner mb-4">
            <Network className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-center">MSME Network Incorporation</h1>
          <p className="text-blue-100 text-[11px] font-bold uppercase tracking-[0.2em] mt-2 text-center">Identity, networking & ecosystem</p>
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-6 bg-[#e86f28]" />

        {/* Management Card */}
        <div className="bg-gray-800 text-white rounded-xl shadow-md px-6 py-4 flex items-center gap-4 relative z-10 w-fit">
          <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
             <Users className="w-6 h-6 text-white" />
          </div>
          <div className="flex gap-6">
            <ul className="text-sm font-semibold space-y-1 list-disc list-inside">
              <li>Users Management</li>
              <li>M’Agent Management</li>
            </ul>
            <ul className="text-sm font-semibold space-y-1 list-disc list-inside">
              <li>M’Advisor Management</li>
            </ul>
          </div>
        </div>

        {/* Vertical line dropping from management */}
        <div className="w-0.5 h-6 bg-[#e86f28]" />
      </div>

      {/* Orthogonal Connection Lines using Grid */}
      <div className="grid grid-cols-4 gap-0 w-full">
        {networkUnits.map((_, i) => (
          <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
            {/* Horizontal connection segment */}
            {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#e86f28]" />}
            {i > 0 && i < 3 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#e86f28]" />}
            {i === 3 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#e86f28]" />}
            
            {/* Vertical drop to card */}
            <div className="w-0.5 h-6 bg-[#e86f28] relative z-10"></div>
            <div className="text-[#e86f28] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
          </div>
        ))}
      </div>

      {/* Children Nodes */}
      <div className="grid grid-cols-4 gap-0 relative mt-1">
        {networkUnits.map((unit) => (
          <div key={unit.title} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full">
            <div className="h-2 w-full bg-[#e86f28] group-hover:bg-[#104a99] transition-colors" />
            <div className="p-6 flex flex-col items-center text-center flex-grow">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#e86f28] mb-4 shadow-sm group-hover:scale-110 transition-transform">
                {unit.icon}
              </div>
              <h2 className="text-[15px] font-bold text-gray-800 mb-2 leading-tight">{unit.title}</h2>
              {unit.description && (
                <p className="text-xs text-gray-500 font-medium mb-4">{unit.description}</p>
              )}
              
              {unit.services && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-[110%] absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#e86f28]/20 rounded-xl shadow-lg p-4 z-50 pointer-events-none">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#e86f28]" />
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#e86f28] text-[8px] leading-none scale-x-150">▼</div>
                  <h3 className="text-[10px] font-bold text-[#e86f28] uppercase tracking-widest text-center mb-3">Key Services</h3>
                  <div className="flex flex-col gap-2.5">
                    {unit.services.map((service) => (
                      <div key={service} className="flex items-start gap-2 text-xs text-gray-600 font-semibold text-left">
                        <CheckCircle2 className="w-4 h-4 text-[#e86f28] flex-shrink-0 mt-px" />
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
