"use client";

import React from "react";

export const DataCollection = () => {
  const collectionTypes = [
    "Real-time surveys",
    "Structured & unstructured datasets",
    "Quantitative & qualitative insights",
    "MSME behavioural data",
    "Transactional & operational signals",
    "Multi-regional sampling",
    "Longitudinal datasets",
  ];

  return (
    <section id="collection" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-10 shadow-2xl relative z-10">
                <h4 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4 rounded-2xl">
                  M&apos;Doc & Intelligent Tools
                </h4>
                <div className="grid md:grid-cols-5 gap-10 items-center">
                  <div className="md:col-span-2">
                    <ul className="space-y-4">
                      {collectionTypes.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 group">
                          <div className="w-2 h-2 rounded-full bg-[#6b21a8] mt-2 group-hover:scale-125 transition-transform"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="md:col-span-3">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-gray-50">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/D89Dgg32yLk?autoplay=1&mute=1&loop=1&playlist=D89Dgg32yLk&controls=0&showinfo=0&rel=0"
                        title="M'DataTalk Product Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <p className="text-xs text-gray-400 mt-3 text-center italic">
                      Watch how our intelligent tools capture real-time market data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:order-2">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Advanced Data Collection <br className="hidden md:block" /> at Scale
            </h2>
            <div className="w-20 h-1.5 bg-[#6b21a8] rounded-full mb-8"></div>
            <p className="text-xl text-[#6b21a8] mb-8 font-bold">
              Powered by M&apos;Doc and Intelligent AI-Driven Survey Tools
            </p>
            <div className="space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                M&apos;DataTalk enhances D³MP with advanced, AI-enabled data
                collection tools such as M&apos;Doc. These tools create a
                continuous, high-quality flow of fresh data, enhancing the
                accuracy, depth, and reliability of every insight.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our proprietary capturing engines ensure that institutional decisions are built on a foundation of verifiable, multi-regional, and longitudinal datasets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
