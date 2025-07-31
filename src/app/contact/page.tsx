'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import LocationTabs from '@/components/LocationTabs';
import { EnvelopeSimpleIcon, MapPinIcon, PaperPlaneTiltIcon, PhoneIcon } from '@phosphor-icons/react/dist/ssr';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
      message: ''
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
                Get in <span className="text-primary-light">Touch</span>
              </h1>
              {/* <p className="text-xl text-white leading-relaxed max-w-2xl">
                We are here to help your MSME business grow. Reach out to our expert team for consultation and solutions.
              </p> */}
            </motion.div>
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
                  <PaperPlaneTiltIcon  className="w-5 h-5" />
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
                  We&apos;re here to help your MSME business thrive. Choose the best way to reach us.
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

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#0D9244] to-[#4DB97A]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Grow Your MSME Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join thousands of MSMEs who have benefited from our consulting services. 
              Start your business transformation today!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#0D9244] font-semibold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-200 inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Get Free Consultation Now
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactPage;