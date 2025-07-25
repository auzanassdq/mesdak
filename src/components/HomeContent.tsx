'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Building2, Users, TrendingUp } from 'lucide-react';

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
      {/* Quick Navigation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore MSME World</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how we empower MSMEs through innovative solutions and strategic partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Link href={link.href}>
                    <div className="bg-white border-4 border-black p-8 hover:bg-gray-50 transition-all duration-300 group cursor-pointer h-full">
                      <div className={`${link.color} w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {link.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>


    </>
  );
}