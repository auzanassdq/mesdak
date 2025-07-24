'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const AboutPage = () => {
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

  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const slideInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stats = [
    { number: '500+', label: 'MSMEs Empowered' },
    { number: '50+', label: 'Digital Solutions' },
    { number: '25+', label: 'Countries Reached' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              About Innovate MSME
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Empowering <span className="text-primary">MSMEs</span> for 
              <span className="text-primary-dark"> Digital Success</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We are a leading organization dedicated to fostering growth and development of 
              Micro, Small, and Medium Enterprises through innovative digital solutions and 
              strategic guidance.
            </p>
          </motion.div>

          {/* Stats */}
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
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                Innovate MSME is a leading organization dedicated to fostering the growth and development of Micro, Small, and Medium Enterprises 
                (MSMEs). We provide comprehensive consulting services, innovative solutions, and strategic guidance to empower MSMEs and drive 
                economic prosperity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Vision */}
            <motion.div
              variants={slideInLeft}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To be the foremost catalyst for MSME success, driving innovation, sustainability, and inclusive growth across industries.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={slideInUp}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-dark/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Our mission is to empower MSMEs with the knowledge, resources, and support they need to thrive in a dynamic 
                global marketplace. We achieve this through expert consulting, cutting-edge innovation, and collaborative partnerships.
              </p>
            </motion.div>

            {/* Action */}
            <motion.div
              variants={slideInRight}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Action</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                  We are committed to taking decisive actions that directly benefit MSMEs. Our initiatives include providing access to 
                  funding, facilitating market linkages, promoting technology adoption, and advocating for supportive policies.
              </p>
            </motion.div>
          </motion.div>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Board</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              variants={slideInLeft}
              onClick={() => setSelectedBoard('executive')}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Executive</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Strategic leadership and organizational direction.
              </p>
              <div className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                Click to learn more →
              </div>
            </motion.div>

            {/* Supervisory Board */}
            <motion.div
              variants={slideInUp}
              onClick={() => setSelectedBoard('supervisory')}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Supervisory</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Governance, compliance, and strategic oversight.
              </p>
              <div className="text-purple-600 font-semibold group-hover:text-purple-700 transition-colors">
                Click to learn more →
              </div>
            </motion.div>

            {/* Advisory Board */}
            <motion.div
              variants={slideInRight}
              onClick={() => setSelectedBoard('advisory')}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Advisory</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-4">
                Expert guidance and industry insights.
              </p>
              <div className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">
                Click to learn more →
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedBoard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900">{boardData[selectedBoard as keyof typeof boardData].title}</h3>
              <button
                onClick={() => setSelectedBoard(null)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-lg text-gray-600 mb-8">{boardData[selectedBoard as keyof typeof boardData].description}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardData[selectedBoard as keyof typeof boardData].members.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{member.name}</h4>
                  <p className="text-primary font-semibold mb-2 text-center">{member.position}</p>
                  <p className="text-gray-600 text-sm text-center">{member.experience}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      )}

            

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your MSME?
            </h2>
            <p className="text-xl text-primary-light mb-8 leading-relaxed">
              Join thousands of successful MSMEs who have partnered with us to achieve sustainable growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-primary"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutPage;