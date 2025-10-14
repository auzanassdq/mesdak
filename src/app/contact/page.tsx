'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import LocationTabs from '@/components/LocationTabs';
import { EnvelopeSimpleIcon, MapPinIcon, PaperPlaneTiltIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react';

const ContactPage = () => {
  const [selectedOffice, setSelectedOffice] = useState(0);

  interface OfficeData {
  name: string;
  headquarter: string;
  img: string[];
  video: string;
  link?: string;
}

const officeData: OfficeData[] = [
                  {
                    name: 'MSME Solutions Africa - Mauritius',
                    headquarter: 'Headquarters - Mauritius',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions Asia - Singapore',
                    headquarter: 'Singapore',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions Latin America - Panama',
                    headquarter: 'Panama',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions North America - Canada',
                    headquarter: 'Canada',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions ASEU - Georgia',
                    headquarter: 'Georgia',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions Europe - Germany',
                    headquarter: 'Germany',
                    img: [],
                    video: "",
                    link: '#'
                  },
                  {
                    name: 'MSME Solutions World - Mauritius (Headquarters)',
                    headquarter: 'Mauritius (Headquarters)',
                    img: [],
                    video: ""
                  }
                ]

  interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    file: File | null;
    countryOffice: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    file: null,
    countryOffice: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && name === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]

      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      file: null,
      countryOffice: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPinIcon,
      title: 'Office Address',
      details: [
        '123 Innovation Drive',
        'Silicon Valley, CA 94301, USA'
      ]
    },
    {
      icon: PhoneIcon,
      title: 'Phone',
      details: [
        '+1 (650) 555-0123',
      ]
    },
    {
      icon: EnvelopeSimpleIcon,
      title: 'Email',
      details: [
        'info@innovatemsme.com',
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/contact.jpg"
          alt="Contact Background"
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
                Our <span className="text-primary-light">Global Reach</span>
              </h1>
              {/* <p className="text-xl text-white leading-relaxed max-w-2xl">
                We are here to help your MSME business grow. Reach out to our expert team for consultation and solutions.
              </p> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-primary">Offices</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10">
            {/* Office List - Left Side */}
            <div className="lg:w-1/3">
              <div className="space-y-4 sticky top-24">
                {officeData.map((office, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className={`w-full text-left p-4 border-l-4 text-black/20 hover:cursor-pointer ${selectedOffice === index ? 'border-primary bg-gray-100 text-black/80' : 'border-gray-300 hover:bg-gray-50'} transition-all duration-200`}
                    onClick={() => setSelectedOffice(index)}
                  >
                    <h3 className="text-xl font-bold ">{office.name}</h3>
                    {/* <p className="text-gray-600 text-sm mt-1">{office.address}</p> */}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Office Content - Right Side */}
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedOffice}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                    {/* Office Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="relative h-40 border-4 border-black overflow-hidden">
                      <Image
                        src="/images/building.jpg"
                        alt="Office Building"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-40 border-4 border-black overflow-hidden">
                      <Image
                        src="/images/sean-pollock-PhYq704ffdA-unsplash.jpg"
                        alt="Office Interior"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-40 border-4 border-black overflow-hidden">
                      <Image
                        src="/images/marjan-blan-6bXvYyAYVrE-unsplash.jpg"
                        alt="Office Meeting Room"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Office Video (replacing Office Details) */}
                  <div className="mt-8 border-4 border-black overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/D89Dgg32yLk?autoplay=1&mute=1&loop=1&playlist=D89Dgg32yLk&controls=0&showinfo=0&rel=0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className=" top-0 left-0 w-full  object-cover h-[300px]"
                        style={{ border: 'none' }}
                      />

                      <div className=" bottom-0 left-0 right-0 bg-black bg-opacity-70 p-6 text-white flex items-center justify-between">
                        <h3 className="text-2xl font-bold mb-1">{officeData[selectedOffice].headquarter}</h3>
                        {officeData[selectedOffice].link && (
                          <Link href={officeData[selectedOffice].link} target="_blank" className="group text-primary flex items-center">
                            <span>Visit</span>
                            <ArrowRightIcon className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        )}
                      </div>
                    {/* <div className="relative pt-[56.25%]">
                    </div> */}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Form & Info Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border-4 border-black p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>


                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="Topic of your message"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="countryOffice" className="block text-sm font-bold text-gray-900 mb-2">
                    Select Country Office *
                  </label>
                  <select
                    id="countryOffice"
                    name="countryOffice"
                    value={formData.countryOffice}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 bg-white"
                  >
                    <option value="">Select an office...</option>
                    {officeData.map((office, idx) => (
                      <option key={idx} value={office.name}>{office.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-bold text-gray-900 mb-2">
                    Upload File
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleInputChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    />
                    <div className="w-full px-4 py-3 border-2 border-black focus-within:ring-2 focus-within:ring-[#0D9244] focus-within:border-[#0D9244] transition-all duration-200 flex items-center justify-between">
                      <span className="text-gray-500">{formData.file ? formData.file.name : 'Choose a file...'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
                </div>


                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 resize-none"
                    placeholder="Tell us how we can help your MSME business..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0D9244] text-white font-bold py-4 px-6 border-4 border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <PaperPlaneTiltIcon className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                  We are here to help — feel free to reach out
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                          <IconComponent className="w-6 h-6 text-white group-hover:text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                            {info.title}
                          </h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-gray-700 group-hover:text-white font-medium">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Global Presence
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-xl text-gray-700 font-medium max-w-2xl">
              Visit our offices for direct consultation with our expert team
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black overflow-hidden"
          >
            {/* Office Locations Tabs */}
            <div className="w-full">
              <LocationTabs />
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;