import { motion } from 'framer-motion';
import { BuildingIcon, ClockIcon, LightbulbFilamentIcon, MapPinIcon, TrendUpIcon, UserCheckIcon } from '@phosphor-icons/react/dist/ssr';

export default function TabPartnership() {
  return (
    <motion.div
      key="partnership"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Combined Unleash Your Ideas and Share Your Game Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-purple-50 relative overflow-hidden py-16">
        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [20, -20, 20],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{
              y: [-15, 15, -15],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-400/10 rounded-full blur-xl"
          />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 flex flex-col gap-8 h-screen justify-center">
          {/* Unleash Your Ideas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white/90 backdrop-blur-sm border-4 border-black p-8 shadow-2xl hover:bg-primary hover:text-white group transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Sparkle Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full"
              />

              <div className="flex items-center justify-center mb-4 relative z-10">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary group-hover:bg-white p-4 border-2 border-black shadow-lg"
                >
                  <LightbulbFilamentIcon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-gray-900 group-hover:text-white leading-tight mb-4 relative z-10"
              >
                Unleash Your Ideas, <br /> Build a Better Tomorrow
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-gray-700 group-hover:text-white leading-relaxed max-w-3xl mx-auto font-medium relative z-10"
              >
                We are committed to fostering a collaborative environment where <br /> your expertise can drive meaningful change in the MSME landscape.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Share Your Game */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-white/90 backdrop-blur-sm border-4 border-black p-8 shadow-2xl hover:bg-primary hover:text-white group transition-all duration-500 relative overflow-hidden"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Sparkle Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full"
              />

              <div className="flex items-center justify-center mb-4 relative z-10">
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-primary group-hover:bg-white p-4 border-2 border-black shadow-lg"
                >
                  <TrendUpIcon className="w-8 h-8 text-white group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              </div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold text-gray-900 group-hover:text-white leading-tight mb-4 relative z-10"
              >
                Share Your Game-Changing Ideas and <br /> Shape the Future of MSMEs
              </motion.h3>

              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className='bg-primary hover:bg-white hover:text-primary text-white group-hover:bg-white group-hover:text-primary font-bold py-4 px-8 border-2 border-black shadow-lg transform transition-all duration-300 text-lg relative overflow-hidden'
              >
                {/* Button Shine Effect */}
                <motion.div
                  animate={{
                    x: [-100, 200],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10">Click Here</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits of Working with Us */}
      <section className='py-28 container mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Benefits of Working with Us</h2>
          <div className="w-24 h-1 bg-primary mb-8 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Unleash Your Ideas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-blue-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <MapPinIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Unleash Your Ideas</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Your innovative ideas are the cornerstone of our success. We provide the platform for your vision to flourish.
            </p>
          </motion.div>

          {/* Building a Better Tomorrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-green-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <BuildingIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Building a Better Tomorrow</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Contribute to the growth and development of MSMEs, shaping a more prosperous future for businesses and communities.
            </p>
          </motion.div>

          {/* Swift Response */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <ClockIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Swift Response</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              We value your time and ideas. Expect a prompt and thorough review of your proposals.
            </p>
          </motion.div>

          {/* Exciting Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300"
          >
            <div className="w-16 h-16 bg-purple-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300">
              <TrendUpIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Exciting Opportunities</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Be at the forefront of MSME development, with opportunities to lead projects and influence industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partnership Inquiry
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                      placeholder="+1 (123) 456-7890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="partnership-type" className="block text-sm font-bold text-gray-900 mb-2">
                    Partnership Type *
                  </label>
                  <select
                    id="partnership-type"
                    name="partnership-type"
                    required
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200"
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="strategic">Strategic Partnership</option>
                    <option value="channel">Channel Partnership</option>
                    <option value="technology">Technology Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 resize-none"
                    placeholder="Tell us about your partnership proposal..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#0D9244] text-white font-bold py-4 px-6 border-4 border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Send Partnership Inquiry
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Partnership Contact
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                  Ready to explore partnership opportunities? Get in touch with our partnership team.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                      <MapPinIcon className="w-6 h-6 text-white group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                        Partnership Office
                      </h3>
                      <p className="text-gray-700 group-hover:text-white font-medium">
                        123 Innovation Drive
                      </p>
                      <p className="text-gray-700 group-hover:text-white font-medium">
                        Silicon Valley, CA 94301, USA
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                      <UserCheckIcon className="w-6 h-6 text-white group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                        Partnership Email
                      </h3>
                      <p className="text-gray-700 group-hover:text-white font-medium">
                        partnerships@innovatemsme.com
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black">
                      <ClockIcon className="w-6 h-6 text-white group-hover:text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2">
                        Business Hours
                      </h3>
                      <p className="text-gray-700 group-hover:text-white font-medium">
                        Monday - Friday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="text-gray-700 group-hover:text-white font-medium">
                        Saturday: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </motion.div>
  )
}
