'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';
import TabCareer from './tab-career';
import TabPartnership from './tab-partnership';

const CareersPage: React.FC = () => {

  const [activeTab, setActiveTab] = useState<string>('partnership');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/building.jpg"
          alt="Careers Background"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-7xl"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Partnership &
                <span className="text-primary-light"> Career Opportunities </span>
              </h1>
              {/* <p className="text-xl text-white leading-relaxed max-w-2xl">
                Join our mission to empower MSMEs worldwide and build a career that makes a difference.
              </p> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex w-full">
            <button
              onClick={() => setActiveTab('partnership')}
              className={`flex-1 py-6 text-center text-lg font-semibold transition-all duration-300 ${activeTab === 'partnership'
                ? 'text-primary border-b-4 border-primary bg-primary/5'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
            >
              Partnership
            </button>
            <button
              onClick={() => setActiveTab('career')}
              className={`flex-1 py-6 text-center text-lg font-semibold transition-all duration-300 ${activeTab === 'career'
                ? 'text-primary border-b-4 border-primary bg-primary/5'
                : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
            >
              Career Opportunities
            </button>
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <div className="min-h-screen">
        {/* PARTNERSHIP */}
        {activeTab === 'partnership' && (
          <TabPartnership />
        )}

        {/* CAREER */}
        {activeTab === 'career' && (
          <TabCareer />
        )}
      </div>

      {/* Our Reach Section */}
      <section className="py-28 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Reach</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl text-gray-700 leading-relaxed max-w-7xl mx-auto mb-12">
              Connect with us to explore opportunities in your area and become part of our growing community.
            </p>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center overflow-hidden rounded-md border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Get in touch
                    <CaretRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;