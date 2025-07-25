'use client';

import Image from 'next/image';
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <Image
          src="/images/services.jpg"
          alt="Services Background"
          width={1200}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Comprehensive <span className="text-primary">Solutions</span> for 
                <span className="text-primary"> MSME Success</span>
              </h1>
              <p className="text-xl text-white leading-relaxed max-w-2xl">
                We offer a range of services to help micro, small, and medium enterprises thrive and innovate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            <div className="py-8 lg:py-2">
              <p className="text-3xl text-black leading-relaxed text-justify font-medium">
                <span className='bg-primary-400 inline p-2'>
                  We provide comprehensive solutions designed to empower MSMEs
                </span>
                &nbsp; through strategic management, innovative research & development, and specialized consulting services that drive sustainable growth and digital transformation.
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
          }}
        >
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Empowering Business Excellence</h2>
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
                    <div className="bg-white border-4 border-black p-8 lg:p-12 hover:bg-primary hover:text-white transition-all duration-300 group">
                      <h3 className="text-3xl font-bold mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-lg leading-relaxed mb-8 font-medium group-hover:text-white transition-colors">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary group-hover:text-primary-light font-bold transition-colors">
                        <span>Learn More</span>
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Service Image */}
                  <div className="flex-1">
                    <div className="w-full h-80 bg-gray-100 border-4 border-black flex items-center justify-center">
                      {/* Placeholder for service images */}
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary border-2 border-black flex items-center justify-center mx-auto mb-4">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        </div>
                        <p className="text-gray-900 font-bold text-lg">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
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
            <p className="text-xl text-white mb-8 leading-relaxed">
              Let&apos;s work together to unlock your MSME&apos;s full potential with our comprehensive services and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold border-4 border-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center px-8 py-4 bg-black text-white font-bold border-4 border-black transition-all duration-300 hover:bg-white hover:text-black"
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