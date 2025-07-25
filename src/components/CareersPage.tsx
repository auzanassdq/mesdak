'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Users, Briefcase, TrendingUp, Globe, Award } from 'lucide-react';

interface Location {
  id: string;
  name: string;
  icon: string;
}

interface JobOpportunity {
  id: string;
  title: string;
  description: string;
  buttonText: string;
}

const CareersPage: React.FC = () => {
  const locations: Location[] = [
    { id: 'headquarters', name: 'Headquarters', icon: '🏢' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'asia', name: 'Asia', icon: '🏙️' },
    { id: 'north-america', name: 'North America', icon: '🏙️' },
    { id: 'latin-america', name: 'Latin America', icon: '🌆' },
    { id: 'europe', name: 'Europe', icon: '🏛️' },
    { id: 'aseu', name: 'ASEU', icon: '🕌' }
  ];

  const opportunities: JobOpportunity[] = [
    {
      id: 'consultant',
      title: 'Consultant',
      description: 'We are seeking experienced consultants to join our team. If you have a passion for helping businesses grow and thrive, we encourage you to apply.',
      buttonText: 'Apply Now'
    },
    {
      id: 'innovation-specialist',
      title: 'Innovation Specialist',
      description: 'Join our innovation team and help us develop cutting-edge solutions for MSMEs. We are looking for creative thinkers with a strong background in technology and business.',
      buttonText: 'Apply Now'
    },
    {
      id: 'business-development',
      title: 'Business Development Manager',
      description: 'We are looking for a dynamic Business Development Manager to drive growth and expand our reach in the MSME sector. If you have a proven track record in sales and business development, we want to hear from you.',
      buttonText: 'Apply Now'
    }
  ];

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
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                <span className="text-primary">Careers</span>
              </h1>
              <p className="text-xl text-white leading-relaxed max-w-2xl">
                Join our mission to empower MSMEs worldwide and build a career that makes a difference.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Team</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  Ready to make an impact?
                </span>
                &nbsp; We're building the future of MSME consulting and looking for passionate individuals who share our vision of empowering small and medium enterprises globally.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Locations</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{location.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-white">
                    {location.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Opportunities</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </motion.div>

          <div className="space-y-6">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black p-8 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{opportunity.title}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      {opportunity.description}
                    </p>
                  </div>
                  <div className="lg:ml-8">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary text-white font-bold py-3 px-8 border-4 border-black hover:bg-black hover:text-white transition-all duration-300 whitespace-nowrap"
                    >
                      {opportunity.buttonText}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white mb-8 leading-relaxed">
              Join our team and help shape the future of MSME consulting worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary font-bold py-4 px-8 border-4 border-black hover:bg-black hover:text-white transition-all duration-300"
              >
                View All Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-transparent text-white font-bold py-4 px-8 border-4 border-white hover:bg-white hover:text-primary transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default CareersPage;