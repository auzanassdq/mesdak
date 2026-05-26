"use client";

import React from "react";
import { Users, Globe, Landmark, BarChart3, CheckCircle2 } from "lucide-react";

interface Entity {
  title: string;
  icon: React.ReactNode;
  description: string;
  themeClass: string;
  iconClass: string;
  functions?: string[];
}

const developmentEntities: Entity[] = [
  {
    title: "Africa Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Sustainable development & business growth in Africa.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Asia Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Fostering economic growth & partnerships in Asia.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Latin America Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Accelerating initiatives & opportunities in LatAm.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "North America Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Supporting innovation & growth across NA markets.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "ASEU Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Advancing economic collaboration across ASEU.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
  {
    title: "Europe Development Incorporation",
    icon: <Globe className="w-8 h-8" />,
    description: "Business transformation & sustainable growth in EU.",
    themeClass: "border-blue-200 hover:border-blue-300",
    iconClass: "bg-blue-50 text-blue-600",
  },
];

const serviceEntities: Entity[] = [
  {
    title: "M’Government Consulting Corporation",
    icon: <Landmark className="w-8 h-8" />,
    description: "Policy advisory, public-sector & governance solutions.",
    themeClass: "border-green-200 hover:border-green-300",
    iconClass: "bg-green-50 text-green-600",
  },
  {
    title: "I-ERP Consulting Corporation",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Enterprise resource planning & digital transformation.",
    themeClass: "border-purple-200 hover:border-purple-300",
    iconClass: "bg-purple-50 text-purple-600",
    functions: ["Sales", "Advertising", "Purchase", "Market Entry"],
  },
];

const allEntities = [...developmentEntities, ...serviceEntities];

export default function MSMEConsultingGlobalOrgChart() {
  return (
    <div className="w-full max-w-[1600px] mx-auto p-8 font-sans overflow-hidden">
      {/* Root Node */}
      <div className="flex flex-col items-center relative z-10">
        <div className="bg-gradient-to-br from-[#0d9488] to-[#3f2b75] text-white rounded-2xl shadow-xl p-8 w-[460px] flex flex-col items-center relative z-10 border-4 border-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#0d9488] shadow-inner mb-4">
            <Users className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-center">MSME Consulting</h1>
          <h2 className="text-xl font-bold tracking-wide text-center mb-2">Incorporation</h2>
          <p className="text-purple-100 text-[11px] font-bold uppercase tracking-[0.2em] mt-1">Advisory & Capacity Building</p>
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-10 bg-[#0d9488]" />
      </div>

      <div className="w-full overflow-x-auto pb-12 pt-2 -mt-2">
        <div className="min-w-[1300px]">
          {/* Orthogonal Connection Lines using Grid */}
          <div className="grid grid-cols-8 gap-0 w-full">
            {allEntities.map((_, i) => (
              <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
                {/* Horizontal connection segment */}
                {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#0d9488]" />}
                {i > 0 && i < 7 && <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#0d9488]" />}
                {i === 7 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#0d9488]" />}
                
                {/* Vertical drop to card */}
                <div className="w-0.5 h-6 bg-[#0d9488] relative z-10"></div>
                <div className="text-[#0d9488] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
              </div>
            ))}
          </div>

          {/* Children Nodes */}
          <div className="grid grid-cols-8 gap-0 relative mt-1">
            {allEntities.map((entity) => (
              <div key={entity.title} className="px-2">
                <div className={`bg-white rounded-2xl shadow-md border ${entity.themeClass} overflow-visible flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full`}>
                <div className="h-1.5 w-full bg-[#0d9488] rounded-t-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="p-4 flex flex-col items-center text-center flex-grow">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform ${entity.iconClass}`}>
                    {entity.icon}
                  </div>
                  <h3 className="text-[13px] font-bold text-gray-800 mb-2 leading-tight">{entity.title}</h3>
                  <div className="w-8 h-px bg-gray-200 my-2" />
                  <p className="text-[11px] text-gray-500 font-medium mb-2">{entity.description}</p>
                  
                  {entity.functions && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-[110%] absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#0d9488]/20 rounded-xl shadow-lg p-4 z-50 pointer-events-none">
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-[#0d9488]" />
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#0d9488] text-[8px] leading-none scale-x-150">▼</div>
                      <h4 className="text-[10px] font-bold text-[#0d9488] uppercase tracking-widest text-center mb-3">Functions</h4>
                      <div className="flex flex-col gap-2">
                        {entity.functions.map((func) => (
                          <div key={func} className="flex items-start gap-1.5 text-[10px] text-gray-600 font-semibold text-left">
                            <CheckCircle2 className="w-3 h-3 text-[#0d9488] flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{func}</span>
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
      </div>
    </div>
  );
}
