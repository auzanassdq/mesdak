'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
// import { Twitter, Facebook, Linkedin, XIcon } from 'lucide-react';
import { XLogoIcon, FacebookLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const switchingWords = ['Digitization', 'Decentralization', 'Decarbonization'];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % switchingWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [switchingWords.length]);

  useEffect(() => {
    // GSAP Timeline Animation
    const tl = gsap.timeline({ delay: 0.5 });

    // Set initial states
    gsap.set('.hero-logo', { opacity: 0, y: 50 });
    gsap.set('.hero-leading', { opacity: 0, y: 50 });
    gsap.set('.hero-switching', { opacity: 0, y: 50 });
    gsap.set('.hero-towards', { opacity: 0, y: 50 });
    gsap.set('.hero-sustainable', { opacity: 0, y: 50 });
    gsap.set('.hero-description', { opacity: 0, y: 30 });
    gsap.set('.hero-buttons', { opacity: 0, y: 30 });


    // Animation sequence
    tl.to('.hero-logo', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' })
      .to('.hero-leading', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('.hero-switching', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('.hero-towards', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('.hero-sustainable', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .to('.hero-description', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .to('.hero-buttons', { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.2')
      .to(".bg-reveal", {
        y: '100%',
        duration: 1.2,
        ease: 'power2.inOut',
        onComplete: () => setAnimationComplete(true)
      }, '>')


    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* YouTube Video as Background */}
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none"
          src="https://www.youtube.com/embed/uWQ_8CtvzoY?autoplay=1&mute=1&loop=1&playlist=uWQ_8CtvzoY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&start=0&end=0"
          title="Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          style={{
            transform: 'scale(1.2)',
            transformOrigin: 'center center',
            width: '120%',
            height: '120%',
            left: '-10%',
            top: '-10%'
          }}
        />

        {/* Fallback: Local Video (if YouTube fails) */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => {
            // Show local video if YouTube fails
            if (videoRef.current) {
              videoRef.current.style.display = 'block';
            }
          }}
          style={{ display: 'none', zIndex: 1 }}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/80 bg-opacity-40 z-10"></div>
      </div>

      {/* Logo Collection - positioned at bottom */}
      <div className="absolute bottom-6 z-15 container mx-auto px-8">
        <div className="flex justify-between">
          <div className='flex gap-2'>
            <img src="/logo/blue.png" alt="Blue Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logo/teal.png" alt="Teal Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logo/green.png" alt="Green Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logo/orange.png" alt="Orange Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logo/brown.png" alt="Brown Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
            <img src="/logo/indigo.png" alt="Indigo Logo" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" />
          </div>

          {/* Social Media Icons */}

          <div className="flex gap-2">
            <XLogoIcon className="h-5 w-5 text-white opacity-80 hover:opacity-100 hover:text-blue-400 transition-all cursor-pointer" />
            <FacebookLogoIcon className="h-5 w-5 text-white opacity-80 hover:opacity-100 hover:text-blue-600 transition-all cursor-pointer" />
            <LinkedinLogoIcon className="h-5 w-5 text-white opacity-80 hover:opacity-100 hover:text-blue-500 transition-all cursor-pointer" />
          </div>

        </div>
      </div>

      {/* Full Screen Background Overlay */}
      <div
        // ref={backgroundRef}
        className="bg-reveal absolute inset-0 w-full h-full z-20 "
        style={{ background: "#111111" }}
      >
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        {/* MSME World White Logo */}
        <div className="hero-logo mb-8">
          <Image 
            src="/logo/msme-world-green.jpg" 
            width={100}
            height={100}
            alt="MSME World" 
            className="h-16 md:h-12 lg:h-12 w-auto mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-7xl/17 font-bold mb-8 leading-snug">
          <span className="hero-leading inline-block text-5xl">Leading</span> <br />
          <span className="hero-switching text-secondary inline-block py-4 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 1, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1, y: -80 }}
                transition={{ duration: 0.2 }}
                className="inline-block"
              >
                {switchingWords[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </span><br />
          <span className="hero-towards inline-block text-5xl">Towards</span> <br />
          <span className="hero-sustainable text-5xl text-primary inline-block">Sustainable Development</span>
        </h1>

        <div className="hero-description">
          <p className="text-xl md:text-xl lg:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-normal">
            Digital Infrastructures & Solutions to power MSMEs,
            <br /> Financial Institutions and Governments
          </p>
        </div>

          {/* CTA Button */}
        <div className="hero-buttons flex flex-col sm:flex-row gap-6 justify-center items-center relative">
          {/* <Link
            href="/services"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Solutions
          </Link> */}

          {/* <Link
            href="/about"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link> */}
          {/* <div className="text-center absolute bottom-[-100px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center overflow-hidden rounded-md border-4 text-white border-black bg-primary px-8 py-4 text-lg font-bold hover:bg-primary hover:text-white transition-all duration-300"
                >
                  About Us
                  <CaretRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div> */}
        </div>


      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: animationComplete ? 1 : 0 }}
        transition={{ duration: 1, delay: animationComplete ? 0.5 : 0 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-25"
      >
        <div className="flex flex-col items-center text-white">
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
          className="mt-2"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.div>


    </section>
  );
};

export default Hero;