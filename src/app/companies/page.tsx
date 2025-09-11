'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon, CaretRightIcon, ChartBarIcon, CurrencyDollarIcon, GlobeIcon, LightningIcon, MonitorIcon, TargetIcon, UsersIcon } from '@phosphor-icons/react/dist/ssr';

const GroupCompaniesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  const companies = [
    {
      id: 1,
      name: "MSME Network Incorporation",
      description: "A leading network organization dedicated to connecting MSMEs with resources, opportunities, and expertise to drive their growth and success.",
      icon: GlobeIcon,
    },
    {
      id: 2,
      name: "M'Butic Incorporation",
      description: "A boutique consulting firm specializing in tailored solutions for MSMEs, focusing on strategic planning, operational efficiency, and market expansion.",
      icon: TargetIcon,
    },
    {
      id: 3,
      name: "MSME Development Consulting",
      description: "A consulting firm focused on providing comprehensive development services to MSMEs, including training, mentorship, and capacity building programs.",
      icon: UsersIcon,
    },
    {
      id: 4,
      name: "MSME Finance Incorporation",
      description: "A financial institution offering specialized financial products and services to support the funding needs of MSMEs, including loans and investment solutions.",
      icon: CurrencyDollarIcon,
    },
    {
      id: 5,
      name: "M'IZITec Incorporation",
      description: "A technology company developing innovative tech solutions for MSMEs, including software, platforms, and digital tools to enhance their operations and competitiveness.",
      icon: LightningIcon,
    },
    {
      id: 6,
      name: "M'Media Incorporation",
      description: "A media and communications agency specializing in creating impactful marketing and communication strategies for MSMEs, helping them build their brand and reach their target audience.",
      icon: MonitorIcon,
    },
    {
      id: 7,
      name: "M'DataTalk Incorporation",
      description: "A data analytics company providing insights and data-driven strategies to help MSMEs make informed decisions and optimize their performance.",
      icon: ChartBarIcon,

    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/companies.jpg"
          alt="Companies Hero"
          className="w-full h-full object-cover absolute inset-0"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Group <span className="text-primary-light">Companies</span>
                {/* & <br /> */}
                {/* <span className="text-primary"> Investments</span> */}
              </h1>

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
            className="max-w-4xl mx-auto"
          >
            <div className="py-8 lg:py-2">
              <div className="text-3xl text-black leading-relaxed text-center font-medium">
                <motion.span 
                  className="text-primary font-bold text-5xl inline-block relative"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  whileHover={{ 
                    scale: 1.05,
                    textShadow: "0 0 8px rgb(var(--primary-rgb) / 0.6)"
                  }}
                >
                  Seven Companies. One Precision Engine
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </motion.span> <br className="mb-4"/> <br className="mb-4"/>
                Each delivers specialized expertise, united in a seamless mission: <br />
                empowering MSMEs, Financial Institutions, and Governments <br />
                with innovative digital solutions <br /> 
                <motion.span 
                  className="text-primary relative inline-block bg-primary/10 px-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
      
                >
                  to unlock hidden potentials and drive socio-economic growth
                  <motion.div
                    className="absolute -z-10 inset-0 bg-primary/10 rounded-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.span>
              </div>
              <div className="w-36 h-1 bg-primary mt-8 mx-auto"></div>

            </div>
          </motion.div>
        </div>
      </section>


      {/* List Companies */}
      <section className="pb-12 bg-white">
        <div className="container mx-auto px-6 mb-12">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* First Row - 3 companies */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companies.slice(0, 3).map((company, index) => {
                const IconComponent = company.icon;
                return (
                  <motion.div
                    key={company.id}
                    variants={fadeInUp}
                    className="bg-white border-4 border-black p-8 lg:p-12 transition-all duration-300 group cursor-pointer hover:bg-primary hover:text-white flex flex-col h-full"
                  >
                    <div className="w-16 h-16 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mb-6 transition-colors">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-white text-black/80 transition-colors flex-grow">{company.name}</h3>

                    <div className="flex items-center justify-between text-sm font-bold mt-auto">
                      <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                        <span className="text-sm font-semibold mr-2">Learn More</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Second Row - 4 companies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companies.slice(3, 7).map((company, index) => {
                const IconComponent = company.icon;
                return (
                  <motion.div
                    key={company.id}
                    variants={fadeInUp}
                    className="bg-white border-4 border-black p-8 lg:p-12 transition-all duration-300 group cursor-pointer hover:bg-primary hover:text-white flex flex-col h-full"
                  >
                    <div className="w-16 h-16 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mb-6 transition-colors">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-white text-black/80 transition-colors flex-grow">{company.name}</h3>

                    <div className="flex items-center justify-between text-sm font-bold mt-auto">
                      <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                        <span className="text-sm font-semibold mr-2">Learn More</span>
                        <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl text-black leading-relaxed text-center font-medium"
          >
            This is a purpose-built ecosystem that makes scale and complexity its core moat and value driver
          </motion.p>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                Strategic Services to Keep Our Businesses Agile and Forward-Thinking              </p>
            </div>



            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/services">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center overflow-hidden rounded-md border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    Learn more
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

export default GroupCompaniesPage;