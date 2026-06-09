import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

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
      // color: "text-blue-600",
      color: "#B8940F",
      bg: "bg-blue-50",
      border: "border-blue-100",
      link: "https://mesdak-africa.vercel.app/",
    },
    {
      name: `${company} Incorporation Asia`,
      icon: <AsiaIcon className="w-32 h-32" />,
      // color: "text-red-600",
      color: "#BC3126",
      bg: "bg-red-50",
      border: "border-red-100",
      link: "https://mesdak-asia.vercel.app/",
    },
    {
      name: `${company} Incorporation Latin America`,
      icon: <LatinAmericaIcon className="w-32 h-32" />,
      // color: "text-green-600",
      color: "#DE641B",
      bg: "bg-green-50",
      border: "border-green-100",
      link: "https://mesdak-latin-america.vercel.app/",
    },
    {
      name: `${company} Incorporation North America`,
      icon: <NorthAmericaIcon className="w-32 h-32" />,
      // color: "text-purple-600",
      color: "#0E1E39",
      bg: "bg-purple-50",
      border: "border-purple-100",
      link: "https://mesdak-north-america.vercel.app/",
    },
    {
      name: `${company} Incorporation ASEU`,
      icon: <AseuIcon className="w-32 h-32" />,
      // color: "text-teal-600",
      color: "#442876",
      bg: "bg-teal-50",
      border: "border-teal-100",
      link: "https://mesdak-aseu.vercel.app/",
    },
    {
      name: `${company} Incorporation Europe`,
      icon: <EuropeIcon className="w-32 h-32" />,
      // color: "text-orange-600",
      color: "#1F4A7F",
      bg: "bg-orange-50",
      border: "border-orange-100",
      link: "https://mesdak-europe.vercel.app/",
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
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Global presence delivering localized impact across multiple continents.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch gap-16 max-w-7xl mx-auto">
          {/* Left Column: List of Companies */}
          <div className="w-full lg:w-1/2 space-y-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`flex items-center justify-between pr-5 rounded-2xl border bg-white shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1`}
                style={{ borderColor: themeColor }}
              >
                <div className="flex items-center">
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
                {region.link && (
                  <a
                    href={region.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-col px-4 py-2 text-gray-400 transition-colors duration-300 cursor-pointer flex items-center justify-center hover:scale-110 transform"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = region.color;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <ArrowRightIcon weight="light" className="w-7 h-7" />
                    <div className="w-7 h-1 bg-black mt-2" style={{ backgroundColor: region.color }}></div>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative w-full flex-grow min-h-[400px] lg:min-h-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
              {/* Decorative background glow */}
              <div className="absolute inset-0 z-0"></div>

              <Image
                src="/images/global_reach_network.png"
                alt="Global Reach Network Visualization"
                fill
                className="object-cover z-10"
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
