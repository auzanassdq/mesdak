'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const testimonials = [
  {
    id: 1,
    content: "MSME World helped us transform our small local business into a thriving enterprise with international clients. Their market entry strategies were game-changing for us.",
    author: "Sarah Johnson",
    position: "Founder, EcoTech Solutions",
    image: "/images/testimonial-1.jpg", // Placeholder
    rating: 5,
  },
  {
    id: 2,
    content: "The digital transformation services provided by MSME World helped us increase our online sales by 200% in just six months. Their team's expertise is unmatched.",
    author: "Michael Chen",
    position: "CEO, Artisan Crafts Co.",
    image: "/images/testimonial-2.jpg", // Placeholder
    rating: 5,
  },
  {
    id: 3,
    content: "As a startup founder, I was struggling with scaling my business. MSME World provided the guidance and resources I needed to secure funding and expand operations.",
    author: "Priya Sharma",
    position: "Founder, InnovateTech",
    image: "/images/testimonial-3.jpg", // Placeholder
    rating: 5,
  },
  {
    id: 4,
    content: "The business services team at MSME World helped us navigate complex regulatory requirements when expanding to new markets. Their support was invaluable.",
    author: "David Wilson",
    position: "Operations Director, Global Foods",
    image: "/images/testimonial-4.jpg", // Placeholder
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonialsRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (inView && cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current[currentIndex],
        { scale: 0.9, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.6, 
          ease: 'power2.out' 
        }
      );
    }
  }, [inView, currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hear from businesses that have transformed their operations and achieved growth with our support.
          </motion.p>
        </div>

        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  // ref={el => cardsRef.current[index] = el}
                  className={`w-full flex-shrink-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0 absolute'}`}
                  style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                >
                  <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative">
                    {/* Quote icon */}
                    <div className="absolute top-6 right-8 text-blue-100">
                      <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
                        <path d="M26.4 26H0V0H40V20C40 62.4 26.4 82.8 0 100V74C14.4 62.8 26.4 48.4 26.4 26ZM106.4 26H80V0H120V20C120 62.4 106.4 82.8 80 100V74C94.4 62.8 106.4 48.4 106.4 26Z" fill="currentColor"/>
                      </svg>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    
                    {/* Content */}
                    <p className="text-xl text-gray-700 mb-8 relative z-10">"{testimonial.content}"</p>
                    
                    {/* Author */}
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden mr-4">
                        {/* Placeholder for author image */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                        <p className="text-gray-600 text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-blue-600 transition-colors hidden md:block"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-lg text-gray-800 hover:text-blue-600 transition-colors hidden md:block"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;