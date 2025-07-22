'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
      });
    }
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

      

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
         >
           <h1 className="text-5xl md:text-7xl lg:text-5xl font-bold mb-8 leading-tight">
             {/* Empowering <span className="text-primary">MSMEs</span><br />
             for <span className="text-secondary">Digital Future</span> */}
             Leading <br />
             <span className="text-secondary"> Digitization & Decentralization </span>
<br />
towards  <br />
<span className="text-primary">Sustainable Development</span>

           </h1>
         </motion.div>

         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
         >
           <p className="text-xl md:text-xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
             {/* Transform your business with our comprehensive digital solutions */}
             Digital Infrastructures & Solutions to power MSMEs,
<br /> Financial Institutions and Governments
           </p>
         </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Link
            href="/services"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Explore Our Solutions
          </Link>
          
          <Link
            href="/about"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Learn More
          </Link>
        </motion.div>

        
      </div>

      {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center text-white">
            <span className="text-sm mb-2 opacity-75">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </div>
        </motion.div>
    </section>
  );
};

export default Hero;