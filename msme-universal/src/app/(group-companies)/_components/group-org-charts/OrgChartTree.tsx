"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export interface OrgChartUnit {
  title: string;
  icon: React.ReactNode;
  description?: string;
  subtitle?: string;
  services?: string[];
  themeClass?: string;
  iconClass?: string;
}

export interface OrgChartValueItem {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface OrgChartTreeProps {
  rootLogo: string;
  rootLogoAlt: string;
  themeColor: string;
  units: OrgChartUnit[];
  valueItems?: OrgChartValueItem[];
  valuesTitle?: string;
  maxWidthClass?: string;
  columnsClass?: string;
  isScrollable?: boolean;
}

export default function OrgChartTree({
  rootLogo,
  rootLogoAlt,
  themeColor,
  units,
  valueItems,
  valuesTitle = "Core Values & Objectives",
  maxWidthClass = "max-w-5xl",
  columnsClass,
  isScrollable = false,
}: OrgChartTreeProps) {
  const count = units.length;

  // Default dynamic columns class based on count if not provided
  const colsGrid =
    columnsClass ||
    (count === 2
      ? "grid-cols-2"
      : count === 3
      ? "grid-cols-3"
      : count === 4
      ? "grid-cols-4"
      : count === 6
      ? "grid-cols-6"
      : "grid-cols-5");

  return (
    <div className={`w-full ${maxWidthClass} mx-auto p-8 font-sans ${isScrollable ? "overflow-hidden" : ""}`}>
      {/* Root Node */}
      <div className="flex flex-col items-center relative z-10">
        <div
          className="text-white rounded-2xl shadow-xl p-8 w-[420px] max-w-[90vw] flex flex-col items-center relative z-10 border-4 border-white"
          style={{ backgroundColor: themeColor }}
        >
          <Image
            src={rootLogo}
            alt={rootLogoAlt}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-8" style={{ backgroundColor: themeColor }} />
      </div>

      {/* Main Grid Wrapper (optionally scrollable on smaller screens if count is high) */}
      <div className={isScrollable ? "w-full overflow-x-auto pb-8 pt-2 -mt-2" : "w-full"}>
        <div className={isScrollable ? "min-w-[1200px]" : "w-full"}>
          {/* Orthogonal Connection Lines using Grid */}
          <div className={`grid ${colsGrid} gap-0 w-full`}>
            {units.map((_, i) => (
              <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
                {/* Horizontal connection segment */}
                {i === 0 && (
                  <div
                    className="absolute top-0 left-1/2 right-0 h-0.5"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
                {i > 0 && i < count - 1 && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: themeColor }}
                  />
                )}
                {i === count - 1 && (
                  <div
                    className="absolute top-0 left-0 right-1/2 h-0.5"
                    style={{ backgroundColor: themeColor }}
                  />
                )}

                {/* Vertical drop to card */}
                <div
                  className="w-0.5 h-6 relative z-10"
                  style={{ backgroundColor: themeColor }}
                />
                <div
                  className="text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10"
                  style={{ color: themeColor }}
                >
                  ▼
                </div>
              </div>
            ))}
          </div>

          {/* Children Nodes */}
          <div className={`grid ${colsGrid} gap-0 relative mt-1`}>
            {units.map((unit) => (
              <div key={unit.title} className="px-2">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group h-full">
                  <div
                    className="h-2 w-full opacity-80 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: themeColor }}
                  />
                  <div className="p-5 flex flex-col items-center text-center flex-grow">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: `${themeColor}15`,
                        color: themeColor,
                      }}
                    >
                      {unit.icon}
                    </div>
                    <h3 className="text-[14px] font-bold text-gray-800 mb-1 leading-tight">
                      {unit.title}
                    </h3>
                    {unit.subtitle && (
                      <p className="text-[11px] font-semibold text-gray-500 mb-2 italic">
                        {unit.subtitle}
                      </p>
                    )}
                    <div
                      className="w-8 h-px my-2"
                      style={{ backgroundColor: `${themeColor}40` }}
                    />
                    {unit.description && (
                      <p className="text-[12px] text-gray-500 font-medium mb-3 leading-relaxed">
                        {unit.description}
                      </p>
                    )}

                    {unit.services && unit.services.length > 0 && (
                      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 w-[110%] absolute top-[100%] left-1/2 -translate-x-1/2 mt-2 bg-white border rounded-xl shadow-lg p-4 z-50 pointer-events-none" style={{ borderColor: `${themeColor}40` }}>
                        <div
                          className="absolute -top-4 left-1/2 -translate-x-1/2 w-0.5 h-4"
                          style={{ backgroundColor: themeColor }}
                        />
                        <div
                          className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] leading-none scale-x-150"
                          style={{ color: themeColor }}
                        >
                          ▼
                        </div>
                        <h4
                          className="text-[10px] font-bold uppercase tracking-widest text-center mb-3"
                          style={{ color: themeColor }}
                        >
                          Key Services
                        </h4>
                        <div className="flex flex-col gap-2">
                          {unit.services.map((service) => (
                            <div
                              key={service}
                              className="flex items-start gap-2 text-xs text-gray-600 font-semibold text-left"
                            >
                              <CheckCircle2
                                className="w-4 h-4 flex-shrink-0 mt-px"
                                style={{ color: themeColor }}
                              />
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
      </div>

      {/* Optional Value Strip */}
      {valueItems && valueItems.length > 0 && (
        <div className="mt-12 bg-white rounded-2xl shadow-md border border-gray-100 p-6">
          <h3 className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">
            {valuesTitle}
          </h3>
          <div
            className={`grid grid-cols-1 md:grid-cols-${valueItems.length} gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100`}
          >
            {valueItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center pt-4 md:pt-0 px-4 first:pt-0"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{
                    backgroundColor: `${themeColor}15`,
                    color: themeColor,
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="text-[13px] font-bold text-gray-800 mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
