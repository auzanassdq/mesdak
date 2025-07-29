'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const [currentSection, setCurrentSection] = useState('vision');
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const sections = ['vision', 'mission', 'action', 'our board'];
    let currentIndex = 0;

    // Create ScrollTrigger for pinning the section with smooth scrolling
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=900vh", // 4x viewport height for smoother transitions
      pin: true,
      pinSpacing: true, // Allow space for following sections
      scrub: 0.5, // Smoother scrub animation
      onUpdate: (self) => {
        const progress = self.progress;
        console.log(progress)
        setScrollProgress(progress);

        // Calculate which section should be active with smoother transitions
        // Add buffer zones for smoother transitions
        let newIndex;
        if (progress < 0.15) {
          newIndex = 0; // vision
        } else if (progress < 0.65) {
          newIndex = 1; // mission
        } else if (progress < 0.95) {
          newIndex = 2; // action
        } else {
          newIndex = 3; // board
        }

        if (newIndex !== currentIndex) {
          currentIndex = newIndex;
          setCurrentSection(sections[newIndex]);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };


  const slideInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);

  const boardData = {
    executive: {
      title: 'Executive Board',
      description: 'Our executive team leads strategic initiatives and drives organizational growth.',
      members: [
        { name: 'John Smith', position: 'Chief Executive Officer', experience: '15+ years in MSME development' },
        { name: 'Sarah Johnson', position: 'Chief Operating Officer', experience: '12+ years in business operations' },
        { name: 'Michael Chen', position: 'Chief Technology Officer', experience: '10+ years in digital transformation' }
      ]
    },
    supervisory: {
      title: 'Supervisory Board',
      description: 'Our supervisory board ensures governance, compliance, and strategic oversight.',
      members: [
        { name: 'Dr. Emily Davis', position: 'Board Chairperson', experience: '20+ years in corporate governance' },
        { name: 'Robert Wilson', position: 'Independent Director', experience: '18+ years in financial oversight' },
        { name: 'Lisa Anderson', position: 'Compliance Officer', experience: '14+ years in regulatory affairs' }
      ]
    },
    advisory: {
      title: 'Advisory Board',
      description: 'Our advisory board provides expert guidance and industry insights.',
      members: [
        { name: 'Prof. David Kumar', position: 'Industry Advisor', experience: '25+ years in MSME research' },
        { name: 'Maria Rodriguez', position: 'Technology Advisor', experience: '16+ years in innovation strategy' },
        { name: 'James Thompson', position: 'Market Advisor', experience: '22+ years in market development' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/about.jpg"
          alt="About Hero"
          className="w-full absolute inset-0 bg-cover bg-center"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* <span className="inline-block px-6 py-3 bg-primary text-white font-bold text-sm mb-6">
                ABOUT INNOVATE MSME
              </span> */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                About <span className="text-primary-light">Us</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* About Us Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            {/* <div className=" mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div> */}
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  Innovate MSME is a leading organization dedicated to fostering the growth and development of Micro, Small, and Medium Enterprises
                  (MSMEs).
                </span>
                &nbsp; We provide comprehensive consulting services, innovative solutions, and strategic guidance to empower MSMEs and drive
                economic prosperity.
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
            // backgroundAttachment: 'fixed'
          }}
        >
          {/* <Image
          src="/images/building.jpg"
          alt="Parallax Background"
          className="w-full h-full object-cover absolute inset-0 bg-cover bg-center bg-fixed grayscale"
          width={1200}
          height={800}
        /> */}
          {/* Overlay */}
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
            {/* <h2 className="text-4xl md:text-5xl font-bold mb-4">Building the Future</h2> */}
            {/* <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Empowering MSMEs with innovative solutions and strategic guidance
            </p> */}
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Action Section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden" style={{ backgroundColor: '#111111' }}>
        <div ref={containerRef} className="relative h-full">
          <div className="container mx-auto px-6 relative z-10 h-full">
            {/* 3 Grid Layout */}
            <div className="grid grid-cols-12 gap-8 h-full items-center">

              {/* Grid 1: Indikator */}
              <div className="col-span-3 flex flex-col">
                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'vision' ? 'border-primary-400 bg-primary-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'vision' ? 'text-primary-400' : 'text-gray-400'
                    }`}>VISION</h3>
                </div>
                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'mission' ? 'border-primary-400 bg-primary-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'mission' ? 'text-primary-400' : 'text-gray-400'
                    }`}>MISSION</h3>
                </div>
                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'action' ? 'border-primary-400 bg-primary-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'action' ? 'text-primary-400' : 'text-gray-400'
                    }`}>ACTION</h3>
                </div>
                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'our board' ? 'border-primary-400 bg-primary-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'our board' ? 'text-primary-400' : 'text-gray-400'
                    }`}>OUR BOARD</h3>
                </div>

                {/* <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'vision' ? 'border-blue-400 bg-blue-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'vision' ? 'text-blue-400' : 'text-gray-400'
                    }`}>VISION</h3>
                </div>

                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'mission' ? 'border-green-400 bg-green-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'mission' ? 'text-green-400' : 'text-gray-400'
                    }`}>MISSION</h3>
                </div>

                <div className={`p-4 border-l-4 transition-all duration-300 ${currentSection === 'action' ? 'border-orange-400 bg-orange-500/10' : 'border-gray-600 bg-gray-800/20'
                  }`}>
                  <h3 className={`text-xl font-bold transition-colors ${currentSection === 'action' ? 'text-orange-400' : 'text-gray-400'
                    }`}>ACTION</h3>
                </div> */}
              </div>

              {/* Grid 2: Content */}
              <div className="col-span-6 text-center">
                {/* Vision Content */}
                {currentSection === 'vision' && (
                  <div>
                    {/* <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div> */}
                    {/* <h2 className="text-5xl font-bold text-white mb-8">Vision</h2> */}
                    <p className="text-2xl text-gray-300 leading-relaxed">
                      To be the foremost catalyst for MSME success, driving innovation, sustainability, and inclusive growth across industries worldwide.
                    </p>
                  </div>
                )}

                {/* Mission Content */}
                {currentSection === 'mission' && (
                  <div>
                    {/* <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div> */}
                    {/* <h2 className="text-5xl font-bold text-white mb-8">Mission</h2> */}
                    <p className="text-2xl text-gray-300 leading-relaxed">
                      Our mission is to empower MSMEs with the knowledge, resources, and support they need to thrive in a dynamic global marketplace through expert consulting and innovation.
                    </p>
                  </div>
                )}

                {/* Action Content */}
                {currentSection === 'action' && (
                  <div>
                    {/* <div className="w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center mb-8 mx-auto">
                        <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div> */}
                    {/* <h2 className="text-5xl font-bold text-white mb-8">Action</h2> */}
                    <p className="text-2xl text-gray-300 leading-relaxed">
                      We are committed to taking decisive actions that directly benefit MSMEs through funding access, market linkages, technology adoption, and policy advocacy.
                    </p>
                  </div>
                )}
              </div>

              {/* Grid 3: Vertical Progress Bar */}
              <div className="col-span-3 flex justify-center">
                <div className="w-2 h-80 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="w-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{
                      height: `${(scrollProgress * 100)}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Board Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Board</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl">
              Meet our distinguished board members who guide our organization with their expertise and vision.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Executive Board */}
            <motion.div
              variants={slideInUp}
              onClick={() => setSelectedBoard('executive')}
              className="bg-primary text-white border-4 border-black p-8 lg:p-12 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white text-primary border-2 border-black flex items-center justify-center mb-6 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">EXECUTIVE BOARD</h3>
              <p className="leading-relaxed text-lg mb-4 font-medium">
                Strategic leadership and organizational direction.
              </p>
              <div className="font-bold">
                CLICK TO LEARN MORE →
              </div>
            </motion.div>

            {/* Supervisory Board */}
            <motion.div
              variants={slideInUp}
              onClick={() => setSelectedBoard('supervisory')}
              className="bg-secondary text-black border-4 border-black p-8 lg:p-12 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center mb-6 transition-colors">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">SUPERVISORY BOARD</h3>
              <p className="leading-relaxed text-lg mb-4 font-medium">
                Governance, compliance, and strategic oversight.
              </p>
              <div className="font-bold">
                CLICK TO LEARN MORE →
              </div>
            </motion.div>

            {/* Advisory Board */}
            <motion.div
              variants={slideInUp}
              onClick={() => setSelectedBoard('advisory')}
              className="bg-primary text-white border-4 border-black p-8 lg:p-12 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 bg-white text-primary border-2 border-black flex items-center justify-center mb-6 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4">ADVISORY BOARD</h3>
              <p className="leading-relaxed text-lg mb-4 font-medium">
                Expert guidance and industry insights.
              </p>
              <div className="font-bold">
                CLICK TO LEARN MORE →
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedBoard && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedBoard(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white border-8 border-black p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-black">{boardData[selectedBoard as keyof typeof boardData].title.toUpperCase()}</h3>
              <button
                onClick={() => setSelectedBoard(null)}
                className="w-10 h-10 bg-white hover:bg-black hover:text-white border-2 border-black flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <p className="text-lg text-black leading-relaxed font-medium border-l-4 border-primary pl-4">
                {boardData[selectedBoard as keyof typeof boardData].description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardData[selectedBoard as keyof typeof boardData].members.map((member, index) => (
                <div key={index} className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white transition-colors">
                  <div className="w-16 h-16 bg-black border-2 border-black flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-xl">{member.name.charAt(0)}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-center">{member.name.toUpperCase()}</h4>
                  <p className="font-bold mb-2 text-center">{member.position.toUpperCase()}</p>
                  <p className="text-sm text-center font-medium">{member.experience}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Group Companies Section */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Group Companies
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Discover our diverse portfolio of companies working together to empower MSMEs
            </p>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="/companies">
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


export default AboutPage;