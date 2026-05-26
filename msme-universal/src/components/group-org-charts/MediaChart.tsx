"use client";

import React from "react";
import { PlayCircle, Calendar, BookOpen, Target, Users, Handshake, TrendingUp, Globe, CheckCircle2 } from "lucide-react";

const mediaCompanies = [
  {
    title: "M’Event Inc",
    subtitle: "Events that Engage. Experiences that Inspire.",
    icon: <Calendar className="w-10 h-10" />,
    description: "A full-service event management company delivering innovative and impactful experiences for businesses, communities and individuals.",
    services: [
      "Corporate Events",
      "Conferences & Seminars",
      "Exhibitions & Trade Shows",
      "Brand Activations & Experiential Marketing",
    ],
  },
  {
    title: "MSME Publishing Inc",
    subtitle: "Publishing Knowledge. Empowering MSMEs.",
    icon: <BookOpen className="w-10 h-10" />,
    description: "A publishing company dedicated to creating high-quality content that educates, informs and empowers MSMEs and entrepreneurs.",
    services: [
      "Books & E-books",
      "Magazines & Journals",
      "Digital Content & Multimedia",
      "Research & Thought Leadership",
    ],
  },
];

const focusItems = [
  { title: "Innovation", icon: <Target className="w-6 h-6" />, description: "Creating innovative media, events and publications that drive change." },
  { title: "Impact", icon: <Users className="w-6 h-6" />, description: "Delivering impactful experiences and content that empower audiences." },
  { title: "Collaboration", icon: <Handshake className="w-6 h-6" />, description: "Partnering with stakeholders to build meaningful connections." },
  { title: "Growth", icon: <TrendingUp className="w-6 h-6" />, description: "Driving growth for MSMEs through knowledge, networks and visibility." },
  { title: "Global Reach", icon: <Globe className="w-6 h-6" />, description: "Expanding reach to connect and inspire communities worldwide." },
];

export default function MMediaOrgChart() {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 font-sans">
      {/* Root Node */}
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-[#1d4ed8] to-[#6b0b2b] text-white rounded-2xl shadow-xl p-8 w-[440px] flex flex-col items-center relative z-10 border-4 border-white">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1d4ed8] shadow-inner mb-4">
            <PlayCircle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-center">M’Media Inc</h1>
          <p className="text-rose-100 text-[11px] font-bold uppercase tracking-[0.2em] mt-2 text-center">Inspiring Ideas. Creating Impact.</p>
        </div>

        {/* Vertical line dropping from root */}
        <div className="w-0.5 h-8 bg-[#1d4ed8]" />
      </div>

      {/* Orthogonal Connection Lines using Grid */}
      <div className="grid grid-cols-2 gap-0 w-full">
        {mediaCompanies.map((_, i) => (
          <div key={`line-${i}`} className="flex flex-col items-center w-full relative">
            {/* Horizontal connection segment */}
            {i === 0 && <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#1d4ed8]" />}
            {i === 1 && <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#1d4ed8]" />}
            
            {/* Vertical drop to card */}
            <div className="w-0.5 h-8 bg-[#1d4ed8] relative z-10"></div>
            <div className="text-[#1d4ed8] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">▼</div>
          </div>
        ))}
      </div>

      {/* Children Nodes */}
      <div className="grid grid-cols-2 gap-0 relative mt-1">
        {mediaCompanies.map((company) => (
          <div key={company.title} className="px-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <div className="p-6 bg-gradient-to-br from-[#1d4ed8] to-[#6b0b2b] text-white flex items-center gap-6">
               <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#1d4ed8] shadow-md flex-shrink-0">
                  {company.icon}
               </div>
               <div>
                  <h2 className="text-[22px] font-bold mb-1 leading-tight">{company.title}</h2>
                  <p className="text-sm text-rose-100 font-medium">{company.subtitle}</p>
               </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
               <p className="text-[15px] text-gray-700 font-medium mb-8 leading-relaxed">
                  {company.description}
               </p>

               <div className="grid grid-cols-2 gap-y-4 gap-x-6 mt-auto border-t border-gray-100 pt-6">
                  {company.services.map((service) => (
                    <div key={service} className="flex items-start gap-2.5 text-sm text-gray-800 font-semibold text-left">
                      <CheckCircle2 className="w-5 h-5 text-[#1d4ed8] flex-shrink-0" />
                      <span className="leading-tight">{service}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* Focus Strip */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#1d4ed8] to-[#6b0b2b] text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
           Our Focus
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-100 mt-4">
          {focusItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center pt-4 md:pt-0 px-4 first:pt-0">
              <div className="w-14 h-14 rounded-full bg-rose-50 text-[#1d4ed8] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h4 className="text-[14px] font-bold text-gray-800 mb-2 uppercase tracking-wide">{item.title}</h4>
              <p className="text-[12px] text-gray-500 font-medium leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
