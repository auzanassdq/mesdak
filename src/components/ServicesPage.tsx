'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const services = [
    {
      id: 1,
      category: 'Strategic Management',
      items: [
        {
          title: 'Strategic Planning',
          description: 'Develop a clear roadmap for your business with our strategic planning services. We help you define your vision, mission, and goals, and create actionable strategies to achieve them.',
          image: '/images/strategic-planning.jpg'
        },
        {
          title: 'Organizational Restructuring',
          description: 'Optimize your organizational structure for efficiency and effectiveness. Our experts analyze your current structure and recommend changes to improve communication, decision-making, and overall performance.',
          image: '/images/organizational.jpg'
        }
      ]
    },
    {
      id: 2,
      category: 'Research & Development',
      items: [
        {
          title: 'Market Research',
          description: 'Gain valuable insights into your target market with our comprehensive market research services. We conduct surveys, analyze data, and provide actionable recommendations to inform your business decisions.',
          image: '/images/market-research.jpg'
        },
        {
          title: 'Product Development',
          description: 'Bring innovative products to market with our product development expertise. We guide you through the entire process, from ideation and prototyping to testing and launch.',
          image: '/images/product-development.jpg'
        }
      ]
    },
    {
      id: 3,
      category: 'MSME Development Consulting',
      items: [
        {
          title: 'Financial Planning',
          description: 'Secure your financial future with our tailored financial planning services. We help you manage your finances, optimize cash flow, and access funding opportunities.',
          image: '/images/financial-planning.jpg'
        },
        {
          title: 'Operational Efficiency',
          description: 'Streamline your operations and improve efficiency with our expert consulting. We identify bottlenecks, implement process improvements, and help you achieve operational excellence.',
          image: '/images/operational.jpg'
        },
        {
          title: 'Digital Transformation',
          description: 'Embrace digital technologies to transform your business and stay competitive. We help you leverage digital tools and strategies to enhance your operations, reach new customers, and drive growth.',
          image: '/images/digital-transformation.jpg'
        }
      ]
    }
  ];

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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div> */}
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  We offer a range of services
                </span>
                to help micro, small, and medium enterprise (MSMEs) thrive and innovate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
          style={{
            backgroundImage: 'url(/images/building.jpg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white px-6"
          >
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Business Excellence</h2> */}
          </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Our Services
            </h2>
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
              className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white transition-all duration-300 group"
            >
              <div className="bg-primary group-hover:bg-white w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-colors">
                <svg className="w-8 h-8 text-white group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4">Strategic Management</h3>
              <p className="text-gray-600 group-hover:text-white transition-colors mb-6">
                Comprehensive strategic planning and organizational development to optimize business performance and achieve long-term goals.
              </p>
              <ul className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors space-y-2">
                <li>• Strategic Planning & Vision Development</li>
                <li>• Organizational Restructuring</li>
                <li>• Performance Management Systems</li>
                <li>• Leadership Development</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 hover:bg-secondary hover:text-white transition-all duration-300 group"
            >
              <div className="bg-secondary group-hover:bg-white w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-colors">
                <svg className="w-8 h-8 text-white group-hover:text-secondary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4">Research & Development</h3>
              <p className="text-gray-600 group-hover:text-white transition-colors mb-6">
                Innovation-driven research and development services to help businesses stay competitive and create breakthrough solutions.
              </p>
              <ul className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors space-y-2">
                <li>• Market Research & Analysis</li>
                <li>• Product Development & Innovation</li>
                <li>• Technology Assessment</li>
                <li>• Competitive Intelligence</li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 hover:bg-primary-dark hover:text-white transition-all duration-300 group"
            >
              <div className="bg-primary-dark group-hover:bg-white w-16 h-16 flex items-center justify-center mx-auto mb-6 transition-colors">
                <svg className="w-8 h-8 text-white group-hover:text-primary-dark transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-white transition-colors mb-4">MSME Development Consulting</h3>
              <p className="text-gray-600 group-hover:text-white transition-colors mb-6">
                Specialized consulting services tailored for micro, small, and medium enterprises to accelerate growth and sustainability.
              </p>
              <ul className="text-sm text-gray-500 group-hover:text-gray-200 transition-colors space-y-2">
                <li>• Financial Planning & Management</li>
                <li>• Operational Efficiency Optimization</li>
                <li>• Digital Transformation</li>
                <li>• Capacity Building & Training</li>
              </ul>
            </motion.div>
          </div>
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
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Be part of our mission to empower MSMEs and drive economic growth across the globe.
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