'use client';

import { motion } from 'framer-motion';

const ServicesPage = () => {
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

  const services = [
    {
      id: 1,
      category: 'Strategic Management',
      items: [
        {
          title: 'Strategic Planning',
          description: 'Develop a clear roadmap for your business with our strategic planning services. We help you define your vision, mission, and goals, and create actionable strategies to achieve them.',
          image: '/images/strategic-planning.jpg'
        },
        {
          title: 'Organizational Restructuring',
          description: 'Optimize your organizational structure for efficiency and effectiveness. Our experts analyze your current structure and recommend changes to improve communication, decision-making, and overall performance.',
          image: '/images/organizational.jpg'
        }
      ]
    },
    {
      id: 2,
      category: 'Research & Development',
      items: [
        {
          title: 'Market Research',
          description: 'Gain valuable insights into your target market with our comprehensive market research services. We conduct surveys, analyze data, and provide actionable recommendations to inform your business decisions.',
          image: '/images/market-research.jpg'
        },
        {
          title: 'Product Development',
          description: 'Bring innovative products to market with our product development expertise. We guide you through the entire process, from ideation and prototyping to testing and launch.',
          image: '/images/product-development.jpg'
        }
      ]
    },
    {
      id: 3,
      category: 'MSME Development Consulting',
      items: [
        {
          title: 'Financial Planning',
          description: 'Secure your financial future with our tailored financial planning services. We help you manage your finances, optimize cash flow, and access funding opportunities.',
          image: '/images/financial-planning.jpg'
        },
        {
          title: 'Operational Efficiency',
          description: 'Streamline your operations and improve efficiency with our expert consulting. We identify bottlenecks, implement process improvements, and help you achieve operational excellence.',
          image: '/images/operational.jpg'
        },
        {
          title: 'Digital Transformation',
          description: 'Embrace digital technologies to transform your business and stay competitive. We help you leverage digital tools and strategies to enhance your operations, reach new customers, and drive growth.',
          image: '/images/digital-transformation.jpg'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5">
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
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-6 py-3 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6">
              Our Services
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Comprehensive <span className="text-primary">Solutions</span> for 
              <span className="text-primary-dark"> MSME Success</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer a range of services to help micro, small, and medium enterprises thrive and innovate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((serviceCategory, categoryIndex) => (
        <section key={serviceCategory.id} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{serviceCategory.category}</h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {serviceCategory.items.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Service Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold">
                        <span>Learn More</span>
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div className="flex-1">
                    <div className="relative">
                      <div className="w-full h-80 bg-gradient-to-br from-primary/10 to-primary-light/10 rounded-3xl flex items-center justify-center">
                        {/* Placeholder for service images */}
                        <div className="text-center">
                          <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <p className="text-gray-600 font-medium">{service.title}</p>
                        </div>
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/10 rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-primary-light mb-8 leading-relaxed">
              Let&apos;s work together to unlock your MSME&apos;s full potential with our comprehensive services and expert guidance.
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
                href="/about" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white hover:text-blue-600"
              >
                Learn More About Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;