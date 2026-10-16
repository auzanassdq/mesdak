'use client';


import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { CaretRightIcon, ChartBarIcon, CpuIcon, UsersIcon, X, ArrowRightIcon, CaretLeftIcon } from '@phosphor-icons/react/dist/ssr';
import servicesData from './services-data.json';

// Map icon names to components
const iconMap: { [key: string]: typeof ChartBarIcon } = {
  ChartBarIcon: ChartBarIcon,
  CpuIcon: CpuIcon,
  UsersIcon: UsersIcon
};

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  const handleServiceClick = (service: typeof servicesData[0]) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const navigateService = (direction: 'prev' | 'next') => {
    if (!selectedService) return;
    const currentIndex = servicesData.findIndex(s => s.id === selectedService.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = (currentIndex - 1 + servicesData.length) % servicesData.length;
    } else {
      newIndex = (currentIndex + 1) % servicesData.length;
    }
    setSelectedService(servicesData[newIndex]);
  };

  const currentIndex = selectedService ? servicesData.findIndex(s => s.id === selectedService.id) : -1;
  const prevService = selectedService ? servicesData[(currentIndex - 1 + servicesData.length) % servicesData.length] : null;
  const nextService = selectedService ? servicesData[(currentIndex + 1) % servicesData.length] : null;

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
            {servicesData.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  viewport={{ once: true }}
                  className={`bg-white border-4 border-black p-12 hover:bg-primary rounded-2xl hover:text-white transition-all duration-300 group text-center cursor-pointer relative flex flex-col h-full`}
                  onClick={() => handleServiceClick(service)}
                >
                   <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 text-xs font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg z-10 group-hover:bg-white group-hover:text-primary rounded-md" >LEARN MORE</div>

                  <div className="bg-primary group-hover:bg-white rounded-lg w-20 h-20 flex items-center justify-center mx-auto mb-8 transition-colors">
                    {IconComponent && <IconComponent className="w-10 h-10 text-white group-hover:text-primary transition-colors" />}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4">{service.title}</h3>
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors line-clamp-3">{service.shortDescription}</p>
                </motion.div>
              );
            })}
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
              Be part of our mission to empower <br /> MSMEs, Financial Institutions & Governments <br /> and drive sustainable economic growth across the globe.
            </p>
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
                  className="group relative inline-flex items-center overflow-hidden rounded-2xl border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  Explore Careers
                  <CaretRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <div className="relative z-10 w-full max-w-4xl flex flex-col max-h-[90vh]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full overflow-y-auto rounded-xl shadow-2xl relative flex-shrink"
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>

                <div className="p-8 lg:p-12">
                  <div className="flex flex-col gap-6">
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                        {selectedService.title}
                      </h2>
                      <p className="text-xl text-primary font-medium">{selectedService.tagline}</p>
                    </div>
                    
                    <div className="w-full h-px bg-gray-200 my-2"></div>
                    
                    <div className="prose prose-lg max-w-none text-gray-600 text-lg">
                      <div className="whitespace-pre-line leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedService.fullDescription }}></div>
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button 
                          onClick={closeModal}
                          className="bg-primary text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                      >
                          Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Navigation Buttons */}
              <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: 10 }}
                 className="flex justify-between items-center mt-4 text-white"
              >
                 {prevService && (
                   <button 
                     onClick={(e) => { e.stopPropagation(); navigateService('prev'); }}
                     className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors group"
                   >
                     <CaretLeftIcon className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                     <div className="text-left">
                       <div className="text-xs text-white/70">Previous Service</div>
                       <div className="font-bold">{prevService.title}</div>
                     </div>
                   </button>
                 )}
                 
                 {nextService && (
                   <button 
                     onClick={(e) => { e.stopPropagation(); navigateService('next'); }}
                     className="flex items-center gap-2 px-4 py-2 hover:bg-white/10 rounded-lg transition-colors group ml-auto"
                   >
                     <div className="text-right">
                       <div className="text-xs text-white/70">Next Service</div>
                       <div className="font-bold">{nextService.title}</div>
                     </div>
                     <CaretRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                   </button>
                 )}
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesPage;