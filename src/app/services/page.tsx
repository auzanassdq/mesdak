'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

const ServicesPage = () => {


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/services.jpg"
          alt="Services Background"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Our <span className="text-primary-light">Services</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Services
            </h2> */}
            <div className="w-24 h-2 bg-primary mx-auto mb-8"></div>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to empower MSMEs and drive sustainable growth.
            </p> */}
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-12 hover:bg-primary hover:text-white transition-all duration-300 group text-center"
            >
              <div className="bg-primary group-hover:bg-white w-20 h-20 flex items-center justify-center mx-auto mb-8 transition-colors">
                <svg className="w-10 h-10 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Strategic Management</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-12 hover:bg-secondary hover:text-white transition-all duration-300 group text-center"
            >
              <div className="bg-secondary group-hover:bg-white w-20 h-20 flex items-center justify-center mx-auto mb-8 transition-colors">
                <svg className="w-10 h-10 text-white group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Research & Development</h3>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-12 hover:bg-primary-dark hover:text-white transition-all duration-300 group text-center"
            >
              <div className="bg-primary-dark group-hover:bg-white w-20 h-20 flex items-center justify-center mx-auto mb-8 transition-colors">
                <svg className="w-10 h-10 text-white group-hover:text-primary-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">Consulting</h3>
            </motion.div>
          </div>

            <div className="w-24 h-2 bg-primary mx-auto mt-8"></div>

        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Join Our Team
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
Be part of our mission to empower <br /> MSMEs, Financial Institutions & Governments <br /> and drive sustainable economic growth across the globe.            </p>
          </motion.div>

        <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/careers">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center overflow-hidden rounded-md border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Explore Careers
                  <CaretRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;