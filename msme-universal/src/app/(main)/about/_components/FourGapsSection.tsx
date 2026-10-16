'use client';

import React from 'react';
import { getRegionConfig } from '@/lib/config';

interface GapVideo {
  title: string;
  src: string;
}

const GAPS: GapVideo[] = [
  {
    title: 'MSME Finance Gap',
    src: 'https://drive.google.com/file/d/1l5rMfGsv_rKh0n6h6_jiOQ8Oa8UGrEXn/preview',
  },
  {
    title: 'SDG Execution Gap',
    src: 'https://drive.google.com/file/d/1fOrwWItLjY78vVdYAUDIPFHPcv_jOjlD/preview',
  },
  {
    title: 'Real-Time Economic Intelligence',
    src: 'https://drive.google.com/file/d/1bmZeMxhzEbpqEt_iOmI5kHg5kpfdX9dt/preview',
  },
  {
    title: 'Human Capital Activation Gap',
    src: 'https://drive.google.com/file/d/1fTHlfKV0dwNP5XmJXTfykLnl5P3OidmN/preview',
  },
];

export default function FourGapsSection() {
  const regionConfig = getRegionConfig();
  const headingRegion = regionConfig.region === 'World' ? "the World's" : `${regionConfig.region}'s`;

  return (
    <section className="relative z-20 py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Bridging {headingRegion} fourth biggest gaps
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
            <div className="text-center md:text-right font-medium text-lg text-gray-700">
              <p>MSME Finance Gap • Real-Time Economic Intelligence</p>
            </div>
            <div className="w-24 h-1 bg-primary shrink-0"></div>
            <div className="text-center md:text-left font-medium text-lg text-gray-700">
              <p>SDG Execution Gap • Human Capital Activation Gap</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {GAPS.map((gap) => (
            <div
              key={gap.title}
              className="bg-white p-3 rounded-3xl border-4 border-black transition-transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-3 text-center text-black">
                {gap.title}
              </h3>
              <div className="aspect-video w-full rounded-xl overflow-hidden border-2 border-black bg-gray-200">
                <iframe
                  className="w-full h-full"
                  src={gap.src}
                  title={`${gap.title} Video`}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
