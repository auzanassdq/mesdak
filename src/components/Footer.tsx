'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FacebookLogoIcon, LinkedinLogoIcon, MagnifyingGlassIcon, XLogoIcon } from '@phosphor-icons/react/dist/ssr';

const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const currentYear = new Date().getFullYear();

  return (
    <footer ref={ref} className="bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="col-span-1 lg:col-span-1"
          >
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/logo.jpg" 
                alt="MSME World Logo" 
                width={150} 
                height={50} 
                className="h-12 w-auto"
              />
            </Link>
            <p className="mb-4">
              Digital Infrastructures & Solutions to power MSMEs,
Institutions Financial Governments
            </p>

            {/* social media icon */}
            <div className="flex space-x-4 mt-6">
              <FacebookLogoIcon className="w-6 h-6" />
              <XLogoIcon className="w-6 h-6" />
              <LinkedinLogoIcon className="w-6 h-6" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/companies" className="hover:text-white transition-colors">Group Companies</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Our Reach</Link></li>
            </ul>
          </motion.div>

          {/* Office Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Office Locations</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-white transition-colors">Headquarters</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Africa</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Asia</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Latin America</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">North America</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Europe</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ASEU</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ul className='flex gap-2'>
              <li><Image alt="logo" src="/logo/blue.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/teal.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/green.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/orange.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/brown.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/indigo.png" width={20} height={20} /> </li>
              <li><Image alt="logo" src="/logo/pink.png" width={20} height={20} /> </li>
            </ul>

            <ul className="space-y-2 mt-4">
              <li><Link href="/services/financial-support" className="hover:text-white transition-colors">M&apos;Brand</Link></li>
              <li><Link href="/services/business-consulting" className="hover:text-white transition-colors">M&apos;SuperDeal</Link></li>
              <li><Link href="/services/financial-support" className="hover:text-white transition-colors">Business Directory</Link></li>
              <li><Link href="/services/financial-support" className="hover:text-white transition-colors flex items-center gap-2">Search <MagnifyingGlassIcon size={16} /></Link></li>

              {/* <li><Link href="/services/digital-transformation" className="hover:text-white transition-colors">MSME development consulting</Link></li> */}
            
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Business Avenue, Innovation District, City, Country</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@msmeworld.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (234) 567-8901</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="pt-8 mt-8 border-t border-gray-800 text-sm text-center md:flex md:justify-between md:text-left"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {currentYear} MSME Solutions World. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Legal</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;