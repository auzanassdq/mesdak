"use client";

import Image from "next/image";
import React from "react";
import { CircleDollarSign, Building2, Factory, Smartphone, TrendingUp, Shield, Award, Users, Coins, Handshake, ShieldAlert, Target } from "lucide-react";

const financeCompanies = [
  {
    title: "MSME Finance Management Company",
    icon: <Building2 className="w-8 h-8" />,
    description: "Professional fund and financial management services for MSME finance initiatives and investments.",
  },
  {
    title: "MSME Trade & Industrialisation Finance Company",
    icon: <Factory className="w-8 h-8" />,
    description: "Financing trade, industry and industrialisation initiatives to drive productivity and economic growth.",
  },
  {
    title: "M’Pay International",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Global payment solutions and financial technology services for MSMEs across borders.",
  },
  {
    title: "MSW Fund Management",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Investment management and wealth creation solutions for sustainable growth.",
  },
  {
    title: "MSME Insurance Company",
    icon: <Shield className="w-8 h-8" />,
    description: "Insurance solutions designed to protect MSMEs and support business resilience.",
  },
  {
    title: "M’Rating",
    icon: <Award className="w-8 h-8" />,
    description: "Credit rating and risk assessment solutions to enhance transparency and financial credibility.",
  },
];

const valueItems = [
  {
    title: "Financial Inclusion",
    icon: <Users className="w-6 h-6" />,
    description: "Expanding access to financial services and opportunities for MSMEs.",
  },
  {
    title: "Growth & Impact",
    icon: <Coins className="w-6 h-6" />,
    description: "Driving sustainable economic growth and job creation across communities.",
  },
  {
    title: "Strategic Partnerships",
    icon: <Handshake className="w-6 h-6" />,
    description: "Building strong partnerships to unlock opportunities and create shared value.",
  },
  {
    title: "Risk Protection",
    icon: <ShieldAlert className="w-6 h-6" />,
    description: "Providing risk management and insurance solutions for business continuity.",
  },
  {
    title: "Innovation",
    icon: <Target className="w-6 h-6" />,
    description: "Investing in innovation and technology to future-proof MSMEs.",
  },
];

export default function MSMEFinanceOrgChart() {
  return (
    <div className="w-full max-w-[1500px] mx-auto p-8 font-sans overflow-hidden">
      {/* Root Node */}
      <div className="flex flex-col items-center relative z-10">
        <div className="bg-[#d4af37] text-white rounded-2xl shadow-xl p-8 w-[460px] flex flex-col items-center relative z-10 border-4 border-white">
            <Image src="/logo/group-companies/finance.png" alt="MFI Logo" width={400} height={400} className="object-contain" />
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-10 bg-[#d4af37]" />
      </div>

      <div className="w-full overflow-x-auto pb-8 pt-2 -mt-2">
        <div className="min-w-[1200px]">
          {/* Orthogonal Connection Lines using Grid */}
          <div className="grid grid-cols-6 gap-0 w-full">
            {financeCompanies.map((_, i) => (
              <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
                {/* Horizontal connection segment */}
                {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#d4af37]" />}
                {i > 0 && i < 5 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#d4af37]" />}
                {i === 5 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#d4af37]" />}
                
                {/* Vertical drop to card */}
                <div className="w-0.5 h-6 bg-[#d4af37] relative z-10"></div>
                <div className="text-[#d4af37] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
              </div>
            ))}
          </div>

          {/* Children Nodes */}
          <div className="grid grid-cols-6 gap-0 relative mt-1">
            {financeCompanies.map((company) => (
              <div key={company.title} className="px-2">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full">
                  <div className="h-2 w-full bg-[#d4af37] opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="p-5 flex flex-col items-center text-center flex-grow">
                    <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#d4af37] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                      {company.icon}
                    </div>
                    <h3 className="text-[14px] font-bold text-gray-800 mb-2 leading-tight">{company.title}</h3>
                    <div className="w-8 h-px bg-orange-200 my-2" />
                    <p className="text-[12px] text-gray-500 font-medium mb-2 leading-relaxed">{company.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Strip */}
      <div className="mt-12 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
        <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Core Values & Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {valueItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center pt-4 md:pt-0 px-4 first:pt-0">
              <div className="w-12 h-12 rounded-full bg-orange-50 text-[#d4af37] flex items-center justify-center mb-3">
                {item.icon}
              </div>
              <h4 className="text-[13px] font-bold text-gray-800 mb-1.5">{item.title}</h4>
              <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
