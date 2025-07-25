'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Users, Award, ArrowRight, Globe, BarChart3, Lightbulb, DollarSign, Target, Briefcase, Zap } from 'lucide-react';
import Image from 'next/image';

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
              <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Explore the diverse portfolio of companies within the MSME Group, each dedicated to fostering growth and innovation in the MSME sector.
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  Our diversified portfolio spans across multiple sectors, creating a robust ecosystem
                </span>
                &nbsp; that supports MSME growth through integrated services and strategic partnerships, driving innovation and sustainable development.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

 

      {/* Portfolio Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Portfolio</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Meet our portfolio companies, each playing a vital role in the MSME ecosystem.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {companies.map((company, index) => {
              const IconComponent = company.icon;
              return (
                <motion.div
                  key={company.id}
                  variants={fadeInUp}
                  className="bg-white border-4 border-black p-8 lg:p-12 transition-all duration-300 group cursor-pointer hover:bg-primary hover:text-white"
                >
                  <div className="w-16 h-16 bg-black group-hover:bg-white border-2 border-black flex items-center justify-center mb-6 transition-colors">
                    <IconComponent className="w-8 h-8 text-white group-hover:text-black transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4 group-hover:text-white text-black/80 transition-colors">{company.name}</h3>
                  <p className="text-sm font-semibold text-primary group-hover:text-primary-light mb-4 transition-colors">{company.tagline}</p>
                  <p className="leading-relaxed mb-6 text-lg font-medium group-hover:text-white text-black/80 transition-colors">{company.description}</p>



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

                  <div className="flex items-center justify-between text-sm font-bold">
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

      {/* Investment Highlights */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Investment Highlights</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white border-4 border-black p-8">
              <div className="w-20 h-20 bg-primary border-2 border-black flex items-center justify-center mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Consistent Growth</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                All portfolio companies demonstrate strong year-over-year growth and sustainable business models.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white border-4 border-black p-8">
              <div className="w-20 h-20 bg-secondary border-2 border-black flex items-center justify-center mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Market Leadership</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Each company holds a strong position in their respective sectors, with recognized expertise and market presence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white border-4 border-black p-8">
              <div className="w-20 h-20 bg-primary border-2 border-black flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Synergistic Ecosystem</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Companies work together to create comprehensive solutions, maximizing value for MSME clients across all touchpoints.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white border-4 border-black p-8">
              <div className="w-20 h-20 bg-secondary border-2 border-black flex items-center justify-center mb-6">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Diversified Portfolio</h3>
              <p className="text-gray-700 leading-relaxed font-medium">
                Strategic diversification across technology, finance, consulting, and media sectors ensures balanced risk and opportunity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Interested in Our Portfolio?
            </h2>
            <p className="text-xl text-primary-light mb-8 leading-relaxed">
              Discover investment opportunities and partnership possibilities within our growing ecosystem of MSME-focused companies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Our Investment Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Learn About MSME Group
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default GroupCompaniesPage;