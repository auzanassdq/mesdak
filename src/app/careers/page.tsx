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
  const [activeTab, setActiveTab] = useState<string>('partnership');

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
    { id: 'msme-network', name: 'MSME Network Incorporation' },
    { id: 'mbutic', name: 'M\'Butic Incorporation' },
    { id: 'mdatatalk', name: 'M\'DataTalk Incorporation' },
    { id: 'msme-finance', name: 'MSME Finance Incorporation' },
    { id: 'msme-development', name: 'MSME Development Consulting' },
    { id: 'mizitec', name: 'M\'IZITec Incorporation' },
    { id: 'mmedia', name: 'M\'Media Incorporation' }
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
          <motion.div
            key="partnership"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Unleash Your Ideas Section */}
            <section className="py-32 bg-white relative overflow-hidden">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center max-w-5xl mx-auto"
                >
                  <div className="bg-white border-4 border-black p-12 shadow-xl hover:bg-primary hover:text-white group transition-all duration-300">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-primary group-hover:bg-white p-4 border-2 border-black">
                        <LightbulbFilamentIcon className="w-8 h-8 text-white group-hover:text-primary" />
                      </div>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 group-hover:text-white leading-tight mb-8">
                      Unleash Your Ideas, Build a Better Tomorrow
                    </h3>
                    <p className="text-lg text-gray-700 group-hover:text-white leading-relaxed max-w-3xl mx-auto font-medium">
                      We&apos;re committed to fostering a collaborative environment where your expertise can drive meaningful change in the MSME landscape.
                    </p>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Share Your Game-Changing Ideas Section */}
            <section className="py-32 bg-gray-100 relative overflow-hidden">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="text-center max-w-6xl mx-auto"
                >
                  <div className="bg-white border-4 border-black p-16 shadow-xl hover:bg-primary hover:text-white group transition-all duration-300">
                    <div className="flex items-center justify-center mb-8">
                      <div className="bg-primary group-hover:bg-white p-4 border-2 border-black">
                        <TrendUpIcon className="w-8 h-8 text-white group-hover:text-primary" />
                      </div>
                    </div>
                    <p className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-white leading-relaxed mb-12">
                      Share your game-changing ideas and shape the future of MSMEs.
                    </p>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-primary hover:bg-white hover:text-primary text-white group-hover:bg-white group-hover:text-primary font-bold py-4 px-8 border-2 border-black shadow-lg transform transition-all duration-300 text-lg'
                    >
                      Click Here
                    </motion.button>
                  </div>
                </motion.div>
              </div>
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

            {/* Contact Section */}
            <section className="py-20 bg-gray-100">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                  {/* Contact Form */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white border-4 border-black p-8"
                  >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Partnership Inquiry
                    </h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                            placeholder="Enter your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                            placeholder="+1 (123) 456-7890"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="partnership-type" className="block text-sm font-bold text-gray-900 mb-2">
                          Partnership Type *
                        </label>
                        <select
                          id="partnership-type"
                          name="partnership-type"
                          required
                          className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                        >
                          <option value="">Select Partnership Type</option>
                          <option value="strategic">Strategic Partnership</option>
                          <option value="channel">Channel Partnership</option>
                          <option value="technology">Technology Partnership</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 resize-none"
                          placeholder="Tell us about your partnership proposal..."
                        ></textarea>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#0D9244] text-white font-bold py-4 px-6 border-4 border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        Send Partnership Inquiry
                      </motion.button>
                    </form>
                  </motion.div>

                  {/* Contact Information */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Partnership Contact
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                        Ready to explore partnership opportunities? Get in touch with our partnership team.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                            <MapPinIcon className="w-6 h-6 text-white group-hover:text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                              Partnership Office
                            </h3>
                            <p className="text-gray-700 group-hover:text-white font-medium">
                              123 Innovation Drive
                            </p>
                            <p className="text-gray-700 group-hover:text-white font-medium">
                              Silicon Valley, CA 94301, USA
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                            <UserCheckIcon className="w-6 h-6 text-white group-hover:text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                              Partnership Email
                            </h3>
                            <p className="text-gray-700 group-hover:text-white font-medium">
                              partnerships@innovatemsme.com
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                            <ClockIcon className="w-6 h-6 text-white group-hover:text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                              Business Hours
                            </h3>
                            <p className="text-gray-700 group-hover:text-white font-medium">
                              Monday - Friday: 9:00 AM - 6:00 PM
                            </p>
                            <p className="text-gray-700 group-hover:text-white font-medium">
                              Saturday: 10:00 AM - 4:00 PM
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

          </motion.div>
        )}

        {/* CAREER */}
        {activeTab === 'career' && (
          <motion.div
            key="career"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
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
                  {/* A- by sector */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Sector</h4>
                    <div className="">
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Location</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
                      {locations.map((location) => (
                        <motion.div
                          key={location.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                          viewport={{ once: true }}
                          onClick={() => setSelectedLocation(selectedLocation === location.id ? '' : location.id)}
                          className={`border-2 p-3 text-black/80  hover:bg-primary hover:text-white group transition-all duration-300 cursor-pointer ${selectedLocation === location.id ? 'border-primary bg-primary text-white' : 'border-gray-300'
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
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Group companies</h4>
                    <div className="relative max-w-md">
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
                      <CaretDownIcon className="absolute right-3  top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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
          </motion.div>
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