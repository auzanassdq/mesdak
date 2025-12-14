'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, Users, TrendingUp, ChevronRight } from 'lucide-react';
import { CaretRightIcon } from '@phosphor-icons/react/dist/ssr';

const quickLinks = [
  {
    title: 'About Us',
    description: 'Learn about our mission and vision',
    href: '/about',
    icon: Building2,
    color: 'bg-primary'
  },
  {
    title: 'Our Services',
    description: 'Explore our comprehensive solutions',
    href: '/services',
    icon: TrendingUp,
    color: 'bg-secondary'
  },
  {
    title: 'Join Our Team',
    description: 'Discover career opportunities',
    href: '/careers',
    icon: Users,
    color: 'bg-primary-dark'
  }
];

export default function HomeContent() {
  return (
    <>
      {/* About Us Section */}
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About us</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            
            {/* Visual Elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-secondary-50 border-4 border-black p-6 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-primary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Vision</h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-secondary-50 border-4 border-black p-6 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-secondary w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Mission</h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary-dark-50 border-4 border-black p-6 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-primary-dark w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <ArrowRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Action</h3>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-secondary-50 border-4 border-black p-6 hover:bg-primary-100 transition-all duration-300"
              >
                <div className="bg-gray-800 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Board</h3>
              </motion.div>
            </div>
            
          <div className="text-center">
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
                  Learn more
                  <CaretRightIcon className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}