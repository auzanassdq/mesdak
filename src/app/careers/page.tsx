'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Link from 'next/link';
import { BuildingIcon, CaretDownIcon, CaretRightIcon, ClockIcon, LightbulbFilamentIcon, MapPinIcon, TrendUpIcon, UserCheckIcon, UsersIcon } from '@phosphor-icons/react/dist/ssr';

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

interface JobCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

interface CompanyOption {
  id: string;
  name: string;
}

const CareersPage: React.FC = () => {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [isTrainingSelected, setIsTrainingSelected] = useState<boolean>(false);

  const locations: Location[] = [
    { id: 'headquarters', name: 'Headquarters', icon: '🏢' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'asia', name: 'Asia', icon: '🏙️' },
    { id: 'north-america', name: 'North America', icon: '🏙️' },
    { id: 'latin-america', name: 'Latin America', icon: '🌆' },
    { id: 'europe', name: 'Europe', icon: '🏛️' },
    { id: 'aseu', name: 'ASEU', icon: '🕌' }
  ];

  const jobCategories: JobCategory[] = [
    { id: 'full-time', name: 'Full Time', icon: <ClockIcon className="w-6 h-6" />, count: 25 },
    { id: 'part-time', name: 'Part Time', icon: <ClockIcon className="w-6 h-6" />, count: 12 },
    { id: 'freelance', name: 'Freelance', icon: <UserCheckIcon className="w-6 h-6" />, count: 8 },
    { id: 'internship', name: 'Internship', icon: <UsersIcon className="w-6 h-6" />, count: 15 }
  ];

  const companyOptions: CompanyOption[] = [
    { id: 'msme-solutions', name: 'MSME Solutions World' },
    { id: 'innovation-hub', name: 'Innovation Hub' },
    { id: 'business-consulting', name: 'Business Consulting Group' },
    { id: 'tech-solutions', name: 'Tech Solutions Inc' },
    { id: 'global-ventures', name: 'Global Ventures Ltd' }
  ];

  const handleSectorChange = (sectorId: string) => {
    setSelectedSectors(prev =>
      prev.includes(sectorId)
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

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
                Partnership &
                <span className="text-primary-light"> Career Opportunities </span>
                for professionals
              </h1>
              {/* <p className="text-xl text-white leading-relaxed max-w-2xl">
                Join our mission to empower MSMEs worldwide and build a career that makes a difference.
              </p> */}
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
            className="max-w-7xl"
          >
            {/* <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div> */}
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  Lead innovation in MSMEs development. No traditional job descriptions needed. <br />
                </span>
                Share your game-changing ideas and shape the future of MSMEs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Unleash Your Idea */}
      <section className="py-28 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <h3 className="text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
              Unleash Your Ideas, Build a Better Tomorrow
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We&apos;re committed to fostering a collaborative environment where your expertise can drive meaningful change in the MSME landscape.
            </p>
          </motion.div>
        </div>

        {/* <div className='absolute w-100 h-full bg-primary-200/50 right-0 top-[-50%] '></div>
        <div className='absolute w-50 h-full bg-primary-200/50  right-0 bottom-[-50%] '></div> */}
        <LightbulbFilamentIcon className='w-80 h-80 absolute right-10 bottom-0 text-black/5' />

      </section>

      {/* Benefit section */}
      <section className='py-28 container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Benefits of Working with Us</h2>
          <div className="w-24 h-1 bg-primary mb-8 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Unleash Your Ideas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <MapPinIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Unleash Your Ideas</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Your innovative ideas are the cornerstone of our success. We provide the platform for your vision to flourish.
            </p>
          </motion.div>

          {/* Building a Better Tomorrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <BuildingIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Building a Better Tomorrow</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Contribute to the growth and development of MSMEs, shaping a more prosperous future for businesses and communities.
            </p>
          </motion.div>

          {/* Swift Response */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <ClockIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Swift Response</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              We value your time and ideas. Expect a prompt and thorough review of your proposals.
            </p>
          </motion.div>

          {/* Exciting Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-purple-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <TrendUpIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Exciting Opportunities</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Be at the forefront of MSME development, with opportunities to lead projects and influence industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Explore Job Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Job Opportunities</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </motion.div>

          <div className="max-w-4xl">
            {/* <h3 className="text-2xl font-bold text-gray-900 mb-6">Work with us</h3> */}
            {/* <p className="text-lg text-gray-700 mb-8">Explore Job Opportunities</p> */}

            {/* A- by sector */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">A- by sector</h4>
              <div className="space-y-3">
                {jobCategories.map((category) => (
                  <motion.label
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSectors.includes(category.id)}
                      onChange={() => handleSectorChange(category.id)}
                      className="w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary focus:ring-2"
                    />
                    <span className="text-gray-700 font-medium">{category.name}</span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* B- by Location */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">B- by Location</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                {locations.map((location) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    onClick={() => setSelectedLocation(selectedLocation === location.id ? '' : location.id)}
                    className={`bg-white border-2 p-3 hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer ${selectedLocation === location.id ? 'border-primary bg-primary text-white' : 'border-gray-300'
                      }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-lg">{location.icon}</div>
                      <h5 className="text-xs font-medium text-center leading-tight">
                        {location.name}
                      </h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* C- by Group companies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">C- by Group companies</h4>
              <div className="relative">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Company</option>
                  {companyOptions.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
                <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Training Checkbox */}
            <div className="mb-8">
              <motion.label
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isTrainingSelected}
                  onChange={(e) => setIsTrainingSelected(e.target.checked)}
                  className="w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary focus:ring-2"
                />
                <span className="text-gray-700 font-medium">Training</span>
              </motion.label>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 ">
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
      {/* <section className="py-20 bg-white">
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
      </section> */}

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
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
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