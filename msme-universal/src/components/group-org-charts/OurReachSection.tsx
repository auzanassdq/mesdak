import React from "react";
import Image from "next/image";

import {
  AfricaIcon,
  AsiaIcon,
  LatinAmericaIcon,
  NorthAmericaIcon,
  AseuIcon,
  EuropeIcon,
} from "@/components/icons/ContinentIcons";

interface OurReachSectionProps {
  themeColor?: string;
  company: string;
}

export default function OurReachSection({
  themeColor = "#2563eb",
  company,
}: OurReachSectionProps) {
  const regions = [
    {
      name: `${company} Incorporation Africa`,
      icon: <AfricaIcon className="w-32 h-32" />,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      name: `${company} Incorporation Asia`,
      icon: <AsiaIcon className="w-32 h-32" />,
      color: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-100",
    },
    {
      name: `${company} Incorporation Latin America`,
      icon: <LatinAmericaIcon className="w-32 h-32" />,
      color: "text-green-600",
      bg: "bg-green-50",
      border: "border-green-100",
    },
    {
      name: `${company} Incorporation North America`,
      icon: <NorthAmericaIcon className="w-32 h-32" />,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      name: `${company} Incorporation ASEU`,
      icon: <AseuIcon className="w-32 h-32" />,
      color: "text-teal-600",
      bg: "bg-teal-50",
      border: "border-teal-100",
    },
    {
      name: `${company} Incorporation Europe`,
      icon: <EuropeIcon className="w-32 h-32" />,
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-100",
    },
  ];

  return (
    <section
      id="reach"
      className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our Reach
          </h2>
          <div
            className="w-24 h-1.5 mx-auto mb-8 rounded-full"
            style={{ backgroundColor: themeColor }}
          ></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Global presence delivering localized impact across multiple
            continents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Left Column: List of Companies */}
          <div className="w-full lg:w-1/2 space-y-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`flex items-center rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                style={{ borderColor: themeColor }}
              >
                <div
                  className={`w-20 h-20 rounded-xl flex items-center justify-center mr-5`}
                >
                  {region.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">
                    {region.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              {/* Decorative background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 z-0"></div>

              <Image
                src="/images/global_reach_network.png"
                alt="Global Reach Network Visualization"
                fill
                className="object-cover z-10 group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />

              {/* Overlay gradient for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
