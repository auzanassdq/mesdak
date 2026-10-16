"use client";

import React from "react";
import Image from "next/image";
import {
  BarChart3,
  Globe2,
  LineChart,
  PieChart,
  Search,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

export const D3MP = () => {
  const features = [
    "Industries",
    "Sectors",
    "Districts",
    "Cities",
    "Countries",
    "Regions",
    "Continents",
    "Markets & value chains",
    "More",
  ];

  const insights = [
    { icon: <LineChart />, text: "Market performance & behaviour" },
    { icon: <ShieldCheck />, text: "Risk patterns & portfolio dynamics" },
    { icon: <Target />, text: "Sector opportunities & value-chain gaps" },
    { icon: <BarChart3 />, text: "MSME health & growth trajectories" },
    { icon: <Globe2 />, text: "SDG and development-impact progress" },
    { icon: <Users />, text: "ESR/ESG performance" },
    { icon: <Zap />, text: "Execution effectiveness of programmes" },
    { icon: <PieChart />, text: "Scenario modelling & sensitivity analysis" },
  ];

  return (
    <section id="d3mp" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Image
            src="/logos/group-companies/datatalk-d3mp.png"
            alt="D3MP"
            width={500}
            height={500}
            className="mx-auto mb-10"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            D³MP — Dynamic Development Data Management Platform
          </h2>
          <p className="text-xl text-[#6b21a8] font-semibold mb-6">
            AI-Accelerated Intelligence for MSME Transformation
          </p>
          <p className="text-gray-600">
            One of M&apos;DataTalk&apos;s most innovative solutions is the
            Dynamic Development Data Management Platform (D³MP) — a breakthrough
            technology delivering unmatched visibility into the MSME economy.
          </p>
        </div>

        {/* video preview */}
        <div className="relative mx-auto w-full md:w-2/3 lg:w-1/2 h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl mb-16">
          <iframe
            width="100%"
            height="100%"
            src="https://drive.google.com/file/d/1bmZeMxhzEbpqEt_iOmI5kHg5kpfdX9dt/preview"
            title="D3MP Video"
            allow="autoplay"
            allowFullScreen
          ></iframe>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Globe2 className="text-[#6b21a8]" />
              Unmatched Visibility Across
            </h3>
            <div className="flex flex-wrap gap-3">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Search className="text-[#6b21a8]" />
              Deep Insight Into
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {insights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="text-[#6b21a8] mt-1 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#6b21a8] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              &quot;This level of intelligence is simply groundbreaking —
              empowering institutions to make decisions that are fast,
              data-driven, inclusive, and future-proof, while reducing time,
              investment costs, operational risks, and the fragmentation caused
              by siloed systems.&quot;
            </p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  );
};
