'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowArcRightIcon, ArrowRightIcon, CaretRightIcon, NewspaperIcon } from '@phosphor-icons/react/dist/ssr';
import { useRouter } from 'next/navigation';
import SectionWithVideo from './_components/SectionWithVideo';
import FourGapsSection from './_components/FourGapsSection';
import BoardModal from './_components/BoardModal';
import { BoardType } from './data/board-data';
import { getRegionConfig } from '@/lib/config';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutPage = () => {
  type SectionType = 'vision' | 'mission' | 'action' | 'our board';
  const [currentSection, setCurrentSection] = useState<SectionType>('vision');
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTriggerRef = useRef<globalThis.ScrollTrigger | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to handle navigation click and update scroll progress
  const handleSectionClick = (section: SectionType) => {
    setCurrentSection(section);
    // Update URL hash
    const sectionHash = section.replace(' ', '-');
    window.history.pushState(null, '', `#${sectionHash}`);

    // Update scroll progress based on section to land safely within each bracket
    // vision: 0 ( < 0.15)
    // mission: 0.35 ( 0.15 - 0.65 )
    // action: 0.75 ( 0.65 - 0.95 )
    // our-board: 0.98 ( > 0.95 )
    const progressMap: Record<string, number> = {
      'vision': 0,
      'mission': 0.35,
      'action': 0.75,
      'our-board': 0.98
    };
    const newProgress = progressMap[sectionHash as keyof typeof progressMap];
    setScrollProgress(newProgress);

    // Update browser scroll position dynamically based on ScrollTrigger's actual boundaries
    if (scrollTriggerRef.current) {
      const st = scrollTriggerRef.current;
      const targetScrollY = st.start + (st.end - st.start) * newProgress;

      window.scrollTo({
        top: targetScrollY,
        behavior: 'auto'
      });
    }
  };

  // Handle URL hash on component mount
  // useEffect(() => {
  //   const hash = window.location.hash.replace('#', '');
  //   if (hash) {
  //     const sectionName = hash.replace('-', ' ');
  //     if (['vision', 'mission', 'action', 'our board'].includes(sectionName)) {
  //       setCurrentSection(sectionName);
  //       const progressMap = {
  //         'vision': 0,
  //         'mission': 0.33,
  //         'action': 0.66,
  //         'our-board': 1
  //       };
  //       setScrollProgress(progressMap[hash as keyof typeof progressMap] || 0);
  //     }
  //   }
  // }, []);

  useGSAP(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const sections: SectionType[] = ['vision', 'mission', 'action', 'our board'];
    let currentIndex = 0;

    // Create ScrollTrigger for pinning the section with smooth scrolling
    const st = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "+=900vh", // 4x viewport height for smoother transitions
      pin: true,
      pinSpacing: true, // Allow space for following sections
      scrub: 0.5, // Smoother scrub animation
      onUpdate: (self) => {
        const progress = self.progress;

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
          const newSection = sections[newIndex];
          setCurrentSection(newSection);
          // Update URL hash without triggering navigation
          const sectionHash = newSection.replace(' ', '-');
          window.history.replaceState(null, '', `#${sectionHash}`);
        }
      }
    });

    scrollTriggerRef.current = st;
  }, { scope: sectionRef });

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

  const [selectedBoard, setSelectedBoard] = useState<BoardType | null>(null);

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
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                About <span className="text-primary-light">Us</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Four Gaps Videos Section */}
      <FourGapsSection />

      {/* Vision, Mission, Action Section */}
      <section ref={sectionRef} className="relative h-screen overflow-hidden bg-white">

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div ref={containerRef} className="relative h-full z-10">
          <div className="container mx-auto px-6 relative z-10 h-full">
            <div className="flex h-full justify-between">

              {/* Floating Navigation - Left Side */}
              <div className="w-80 flex flex-col justify-center space-y-4 pr-12">
                {/* Scroll Progress Indicator */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-gray-300">
                  <motion.div
                    className="w-full bg-primary transition-all duration-500 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                    animate={{ height: `${scrollProgress * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

                {/* Interactive Hint */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-center mb-4"
                >
                  {/* <div className="flex items-center justify-center space-x-2 text-gray-600 text-sm">
                    <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    <span className="font-medium">Scroll or click menu</span>
                    <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div> */}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  onClick={() => handleSectionClick('vision')}
                  className={`group cursor-pointer p-6 border-4 border-black transition-all duration-300 relative rounded-2xl ${currentSection === 'vision'
                    ? 'bg-primary text-white'
                    : 'bg-white text-black hover:bg-primary hover:text-white'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 border-2 border-black flex items-center justify-center transition-colors rounded-xl ${currentSection === 'vision' ? 'bg-white text-primary' : 'bg-black text-white group-hover:bg-white group-hover:text-primary'
                      }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">VISION</h3>
                      {currentSection !== 'vision' && (
                        <div className="flex items-center mt-1 opacity-70">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-xs">click to see</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={() => handleSectionClick('mission')}
                  className={`group cursor-pointer p-6 border-4 border-black transition-all duration-300 relative rounded-2xl ${currentSection === 'mission'
                    ? 'bg-primary text-white'
                    : 'bg-white text-black hover:bg-primary hover:text-white'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 border-2 border-black flex items-center justify-center transition-colors rounded-xl ${currentSection === 'mission' ? 'bg-white text-primary' : 'bg-black text-white group-hover:bg-white group-hover:text-primary'
                      }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">MISSION</h3>
                      {currentSection !== 'mission' && (
                        <div className="flex items-center mt-1 opacity-70">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-xs">click to see</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onClick={() => handleSectionClick('action')}
                  className={`group cursor-pointer p-6 border-4 border-black transition-all duration-300 relative rounded-2xl ${currentSection === 'action'
                    ? 'bg-primary text-white'
                    : 'bg-white text-black hover:bg-primary hover:text-white'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 border-2 border-black flex items-center justify-center transition-colors rounded-xl ${currentSection === 'action' ? 'bg-white text-primary' : 'bg-black text-white group-hover:bg-white group-hover:text-primary'
                      }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">ACTION</h3>
                      {currentSection !== 'action' && (
                        <div className="flex items-center mt-1 opacity-70">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-xs">click to see</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  onClick={() => handleSectionClick('our board')}
                  className={`group cursor-pointer p-6 border-4 border-black transition-all duration-300 relative rounded-2xl ${currentSection === 'our board'
                    ? 'bg-primary text-white'
                    : 'bg-white text-black hover:bg-primary hover:text-white'
                    }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 border-2 border-black flex items-center justify-center transition-colors rounded-xl ${currentSection === 'our board' ? 'bg-white text-primary' : 'bg-black text-white group-hover:bg-white group-hover:text-primary'
                      }`}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">OUR BOARD</h3>
                      {currentSection !== 'our board' && (
                        <div className="flex items-center mt-1 opacity-70">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-xs">click to see</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Contact - Get in Touch */}
              <div className='absolute bottom-8 w-[272px]'>
                <Link href='/contact'>
                  <button className='w-full flex items-center justify-center gap-4 text-black/80 px-6 py-3 cursor-pointer font-semibold hover:bg-black hover:text-white'>
                    <span>
                      Contact - Get in Touch
                    </span>
                    <ArrowRightIcon className='w-6 h-6' />
                  </button>
                </Link>
              </div>

              {/* News */}
              <div className='absolute bottom-8 right-6 w-[272px]'>
                <Link href='/contact'>
                  <button className='w-full flex items-center justify-center gap-4 text-black/80 px-6 py-3 cursor-pointer font-semibold hover:bg-black hover:text-white'>
                    <span>
                      News
                    </span>
                    {/* <ArrowRightIcon className='w-6 h-6' /> */}
                    <NewspaperIcon size={24} />
                  </button>
                </Link>
              </div>

              {/* Content Area - Right Side */}
              <div className="flex items-center">
                <div className="max-w-4xl">
                  {/* Vision Content */}
                  {currentSection === 'vision' && (
                    <SectionWithVideo
                      title="VISION"
                      content="Lead <br />Digitization, Decentralization & Decarbonization <br /> towards <br /> Sustainable Development.<br /> <br />Make the inclusive growth a reality."
                      youtubeVideoId="uWQ_8CtvzoY"
                      fallbackVideoSrc="/videos/hero-background.mp4"
                    />
                  )}

                  {/* Mission Content */}
                  {currentSection === 'mission' && (
                    <SectionWithVideo
                      title="MISSION"
                      content={`Assist MSMEs to become the driver of <br /> Industrialisation, Growth and Job creation in ${getRegionConfig().region}.`}
                      youtubeVideoId="gW22hVe5_fI"
                      fallbackVideoSrc="/videos/hero-background.mp4"
                    />
                  )}

                  {/* Action Content */}
                  {currentSection === 'action' && (
                    <SectionWithVideo
                      title="ACTION"
                      content="Build digital infrastructures, solutions and products to serve <br /> MSMEs, Financial Institutions and Governments."
                      youtubeVideoId="Dezxrb9fpM0"
                      fallbackVideoSrc="/videos/hero-background.mp4"
                    />
                  )}

                  {/* Our Board Content */}
                  {currentSection === 'our board' && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="w-full pl-20"
                    >
                      <div className="text-center mb-12">
                        <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">OUR BOARD</h2>
                        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
                      </div>

                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Executive Board */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                          onClick={() => setSelectedBoard('executive' as const)}
                          className="bg-primary text-white border-4 border-black p-8 transition-all duration-300 cursor-pointer hover:scale-105 rounded-2xl"
                        >
                          <div className="w-16 h-16 bg-white text-primary border-2 border-black flex items-center justify-center mb-6 transition-colors rounded-2xl">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">EXECUTIVE BOARD</h3>

                          <div className="font-bold text-sm">
                            CLICK TO LEARN MORE →
                          </div>
                        </motion.div>

                        {/* Supervisory Board */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          onClick={() => setSelectedBoard('supervisory' as const)}
                          className="bg-primary text-white border-4 border-black p-8 transition-all duration-300 cursor-pointer hover:scale-105 rounded-2xl"
                        >
                          <div className="w-16 h-16 bg-white text-primary border-2 border-black flex items-center justify-center mb-6 transition-colors rounded-2xl">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">SUPERVISORY BOARD</h3>

                          <div className="font-bold text-sm">
                            CLICK TO LEARN MORE →
                          </div>
                        </motion.div>

                        {/* Advisory Board */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          onClick={() => setSelectedBoard('advisory' as const)}
                          className="bg-primary text-white border-4 border-black p-8 transition-all duration-300 cursor-pointer hover:scale-105 rounded-2xl"
                        >
                          <div className="w-16 h-16 bg-white text-primary border-2 border-black flex items-center justify-center mb-6 transition-colors rounded-2xl">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          <h3 className="text-2xl font-bold mb-4">ADVISORY BOARD</h3>
                          <div className="font-bold text-sm">
                            CLICK TO LEARN MORE →
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Modal */}
      <BoardModal
        selectedBoard={selectedBoard}
        onClose={() => setSelectedBoard(null)}
        onSelectBoard={(board) => setSelectedBoard(board)}
      />

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
            <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
              Seven Companies. One Precision Engine
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
                    className="group relative inline-flex items-center overflow-hidden rounded-2xl border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
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