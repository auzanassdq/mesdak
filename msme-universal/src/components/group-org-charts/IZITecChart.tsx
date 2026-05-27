"use client";

import Image from "next/image";
import React from "react";
import { Smartphone, Monitor, Cloud, Settings } from "lucide-react";

const izitecUnits = [
  {
    title: "M’App Inc",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Mobile Applications & Digital Solutions",
  },
  {
    title: "Digital Solutions Inc",
    icon: <Monitor className="w-8 h-8" />,
    description: "Custom Software Development",
  },
  {
    title: "IT Services Inc",
    icon: <Cloud className="w-8 h-8" />,
    description: "Infrastructure, Cloud & Managed Services",
  },
];

export default function MIZITecOrgChart() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans">
      {/* Root Node */}
      <div className="flex flex-col items-center">
        <div className="bg-[#4182C0] text-white rounded-2xl shadow-xl p-8 w-[420px] flex flex-col items-center relative z-10 border-4 border-white">
            <Image src="/logo/group-companies/izitec.png" alt="IZITec Logo" width={400} height={400} className="object-contain" />
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-8 bg-[#4182C0]" />
      </div>

      {/* Orthogonal Connection Lines using Grid to ensure perfect alignment */}
      <div className="grid grid-cols-3 gap-0 w-full">
        {izitecUnits.map((_, i) => (
          <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
            {/* Horizontal connection segment */}
            {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#4182C0]" />}
            {i === 1 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#4182C0]" />}
            {i === 2 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#4182C0]" />}
            
            {/* Vertical drop to card */}
            <div className="w-0.5 h-6 bg-[#4182C0] relative z-10"></div>
            <div className="text-[#4182C0] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
          </div>
        ))}
      </div>

      {/* Children Nodes */}
      <div className="grid grid-cols-3 gap-0 relative mt-1">
        {izitecUnits.map((unit) => (
          <div key={unit.title} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full">
              <div className="h-2 w-full bg-[#4182C0] group-hover:bg-[#0d1522] transition-colors" />
              <div className="p-8 flex flex-col items-center text-center flex-grow">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#4182C0] mb-5 shadow-sm group-hover:scale-110 transition-transform">
                  {unit.icon}
                </div>
                <h2 className="text-[17px] font-bold text-gray-800 mb-3 leading-tight">{unit.title}</h2>
                <div className="w-8 h-px bg-slate-200 my-1" />
                <p className="text-[13px] text-gray-500 font-medium mt-2 leading-relaxed">{unit.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
