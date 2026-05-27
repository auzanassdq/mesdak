"use client";

import Image from "next/image";
import React from "react";
import { BarChart2, FileText, ClipboardList, Briefcase } from "lucide-react";

const dataCompanies = [
  {
    title: "M’D³MP Incorporation",
    icon: <FileText className="w-8 h-8" />,
    description: "Data Management, Mining & Predictive Analytics",
  },
  {
    title: "M’Doc Incorporation",
    icon: <ClipboardList className="w-8 h-8" />,
    description: "Document Management & Digital Solutions",
  },
  {
    title: "Business Services",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Consulting, Support & Business Solutions",
  },
];

export default function MDataTalkOrgChart() {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 font-sans">
      {/* Root Node */}
      <div className="flex flex-col items-center">
        <div className="bg-[#6b21a8] text-white rounded-2xl shadow-xl p-8 w-[420px] flex flex-col items-center relative z-10 border-4 border-white">
          <Image src="/logo/group-companies/datatalk.jpeg" alt="M'DataTalk Logo" width={400} height={400} className="object-contain" />
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-8 bg-[#6b21a8]" />
      </div>

      {/* Orthogonal Connection Lines using Grid gap-0 to ensure perfect unbroken connection */}
      <div className="grid grid-cols-3 gap-0 w-full">
        {dataCompanies.map((_, i) => (
          <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
            {/* Horizontal connection segment spans the entire column, so columns touch each other without gaps */}
            {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#6b21a8]" />}
            {i === 1 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#6b21a8]" />}
            {i === 2 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#6b21a8]" />}
            
            {/* Vertical drop to card */}
            <div className="w-0.5 h-6 bg-[#6b21a8] relative z-10"></div>
            <div className="text-[#6b21a8] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
          </div>
        ))}
      </div>

      {/* Children Nodes using gap-0 and px-4 for spacing so it aligns with the unbroken lines above */}
      <div className="grid grid-cols-3 gap-0 relative mt-1">
        {dataCompanies.map((company) => (
          <div key={company.title} className="px-4">
            <div className="bg-white rounded-2xl shadow-lg border border-purple-50 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full group">
              <div className="p-8 flex flex-col items-center text-center flex-grow relative">
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#6b21a8] opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6b21a8] to-[#4c1d95] text-white flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform">
                  {company.icon}
                </div>
                <h2 className="text-[18px] font-bold text-gray-800 mb-3 leading-tight">{company.title}</h2>
                <div className="w-8 h-px bg-purple-100 my-1" />
                <p className="text-[14px] text-gray-500 font-medium mt-2 leading-relaxed mb-4">{company.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
