'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award, ArrowRight, Globe, BarChart3, Lightbulb, DollarSign, Target, Briefcase, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

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

  const slideInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const companies = [
    {
      id: 1,
      name: "MSME Network Incorporation",
      tagline: "Connecting Growth, Empowering Success",
      description: "A leading network organization dedicated to connecting MSMEs with resources, opportunities, and expertise to drive their growth and success.",
      sector: "Network & Partnerships",
      icon: Globe,
      services: ["Business Networking", "Partnership Development", "Market Access", "Resource Sharing"]
    },
    {
      id: 2,
      name: "M'Butic Incorporation",
      tagline: "Strategic Excellence, Operational Efficiency",
      description: "A boutique consulting firm specializing in tailored solutions for MSMEs, focusing on strategic planning, operational efficiency, and market expansion.",
      sector: "Business Consulting",
      icon: Target,
      services: ["Strategic Planning", "Operational Consulting", "Market Expansion", "Business Optimization"]
    },
    {
      id: 3,
      name: "M'DataTalk",
      tagline: "Data-Driven Decisions, Optimized Performance",
      description: "A data analytics company providing insights and data-driven strategies to help MSMEs make informed decisions and optimize their performance.",
      sector: "Data Analytics",
      icon: BarChart3,
      services: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Performance Optimization"]
    },
    {
      id: 4,
      name: "MSME Finance Incorporation",
      tagline: "Funding Solutions, Financial Growth",
      description: "A financial institution offering specialized financial products and services to support the funding needs of MSMEs, including loans and investment solutions.",
      sector: "Financial Services",
      icon: DollarSign,
      services: ["Business Loans", "Investment Solutions", "Financial Planning", "Credit Facilities"]
    },
    {
      id: 5,
      name: "MSME Development Consulting",
      tagline: "Comprehensive Development, Sustainable Growth",
      description: "A consulting firm focused on providing comprehensive development services to MSMEs, including training, mentorship, and capacity building programs.",
      sector: "Development & Training",
      icon: Users,
      services: ["Training Programs", "Mentorship", "Capacity Building", "Skills Development"]
    },
    {
      id: 6,
      name: "M'IZITec",
      tagline: "Innovation Technology, Digital Transformation",
      description: "A technology company developing innovative tech solutions for MSMEs, including software, platforms, and digital tools to enhance their operations and competitiveness.",
      sector: "Technology Solutions",
      icon: Zap,
      services: ["Software Development", "Digital Platforms", "Tech Solutions", "System Integration"]
    },
    {
      id: 7,
      name: "M'Media",
      tagline: "Impactful Marketing, Strategic Communication",
      description: "A media and communications agency specializing in creating impactful marketing and communication strategies for MSMEs, helping them build their brand and reach their target audience.",
      sector: "Media & Communications",
      icon: Lightbulb,
      services: ["Brand Development", "Digital Marketing", "Content Strategy", "Public Relations"]
    }
  ];

  const portfolioStats = {
    totalCompanies: companies.length
  };

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
            className="max-w-4xl"
          >
            {/* <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div> */}
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  Explore the diverse portfolio of companies within the MSME Group,
                </span>
                each dedicated to fostering growth and innovation in the MSME sector.
              </p>
            </div>
          </motion.div>
        </div>
      </section>



      {/* Portfolio Overview */}
      <section className="pb-28 bg-white">
        <div className="container mx-auto px-6 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Group Companies</h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto"></div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed mx-auto">
              One Precision Engine
Each delivers specialized expertise, united in a seamless mission: empowering MSMEs, Financial Institutions, and Governments with innovative digital solutions to unlock hidden potential and drive socio-economic growth
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8"
          >
            {companies.map((company, index) => {
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

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white text-black/80 transition-colors flex-grow">{company.name}</h3>
                  {/* <p className="text-sm font-semibold text-primary group-hover:text-primary-light mb-4 transition-colors">{company.tagline}</p> */}
                  {/* <p className="leading-relaxed mb-6 text-lg font-medium group-hover:text-white text-black/80 transition-colors">{company.description}</p> */}



                  {/* <div className="mb-6">
                    <h4 className="text-sm font-bold mb-3 group-hover:text-white transition-colors">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {company.services.map((service, serviceIndex) => (
                        <span
                          key={serviceIndex}
                          className="px-3 py-2 bg-black text-white text-xs font-bold border-2 border-black group-hover:bg-white group-hover:text-black transition-colors"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  <div className="flex items-center justify-between text-sm font-bold mt-auto">
                    {/* <span className="group-hover:text-white transition-colors">Sector: {company.sector}</span> */}
                    <div className="flex items-center text-primary group-hover:text-primary-light transition-colors">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
                Explore our services page to find the right solutions to support the growth and sustainability of your business.
              </p>
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