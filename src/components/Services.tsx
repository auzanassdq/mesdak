'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const services = [
  {
    id: 1,
    title: 'Strategic Management',
    description: 'Comprehensive strategic planning and management solutions to help MSMEs define their vision, mission, and achieve sustainable growth.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Research & Development',
    description: 'Innovative research and development services to help MSMEs stay competitive through market research and product development.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: 'purple',
  },
  {
    id: 3,
    title: 'MSME Development Consulting',
    description: 'Specialized consulting services focused on MSME growth, including financial planning, operational efficiency, and digital transformation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'green',
  },
];

const getColorClasses = (color: any) => {
  const colorMap = {
    blue: {
      bg: 'bg-primary/5',
      text: 'text-primary',
      hover: 'group-hover:bg-primary',
      iconBg: 'bg-primary/10',
    },
    purple: {
      bg: 'bg-primary-dark/5',
      text: 'text-primary-dark',
      hover: 'group-hover:bg-primary-dark',
      iconBg: 'bg-primary-dark/10',
    },
    green: {
      bg: 'bg-primary-light/5',
      text: 'text-primary-light',
      hover: 'group-hover:bg-primary-light',
      iconBg: 'bg-primary-light/10',
    },
    amber: {
      bg: 'bg-secondary/5',
      text: 'text-secondary',
      hover: 'group-hover:bg-secondary',
      iconBg: 'bg-secondary/10',
    },
  };

  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (inView && cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.2, 
          duration: 0.8, 
          ease: 'power3.out' 
        }
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive Solutions for MSMEs
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We offer a wide range of services designed to help micro, small, and medium enterprises thrive in today's competitive business environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <div 
                key={service.id}
                // ref={el => cardsRef.current[index] = el}
                className={`group relative ${colors.bg} p-8 rounded-2xl transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                {/* Background decoration */}
                <div className={`absolute right-0 bottom-0 w-24 h-24 rounded-tl-3xl ${colors.iconBg} opacity-50 transition-all duration-300 ${colors.hover} group-hover:opacity-20`}></div>
                
                <div className="relative z-10">
                  <div className={`${colors.text} mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  <div className="mt-6 flex items-center">
                    <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                      Learn more
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:text-white transition-colors duration-300 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="/services" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:bg-blue-700 shadow-lg hover:shadow-xl"
          >
            See More Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;