import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { BuildingIcon, ClockIcon, LightbulbFilamentIcon, MapPinIcon, TrendUpIcon, UserCheckIcon } from '@phosphor-icons/react/dist/ssr';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  'partnership-type': string;
  message: string;
  file: File | null;
  mnetworkProfile: string;
}

export default function TabPartnership() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    'partnership-type': '',
    message: '',
    file: null,
    mnetworkProfile: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;

    if (files && name === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Di sini Anda bisa menambahkan logika untuk mengirim data ke server
      console.log('Form Data:', formData);
      
      // Reset form setelah berhasil
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        'partnership-type': '',
        message: '',
        file: null,
        mnetworkProfile: ''
      });
      
      alert('Form berhasil dikirim!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Terjadi kesalahan saat mengirim form. Silakan coba lagi.');
    }
  };

  return (
    <motion.div
      key="partnership"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
     
      {/* unleash your idea */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-white rounded-[2rem] p-10 md:p-16 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-primary/5 flex items-center justify-center border border-primary/10">
                <LightbulbFilamentIcon className="w-12 h-12 md:w-16 md:h-16 text-primary" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
                Unleash Your Ideas, <br className="hidden lg:block" /> Build a Better Tomorrow
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We are committed to fostering a collaborative environment where your expertise can drive meaningful change in the MSME landscape.
              </p>
            </div>
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
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
          >
            <div className="w-16 h-16 bg-blue-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300 rounded-lg">
              <MapPinIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Unleash Your Ideas</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Your innovative ideas are the cornerstone for further success. We provide the platform for your vision to flourish.
            </p>
          </motion.div>

          {/* Building a Better Tomorrow */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
          >
            <div className="w-16 h-16 bg-green-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300 rounded-lg">
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
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
          >
            <div className="w-16 h-16 bg-orange-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300 rounded-lg">
              <ClockIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Swift Response</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              We value your time and ideas. Expect from us, a prompt and thorough review of your proposals.
            </p>
          </motion.div>

          {/* Exciting Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white border-4 border-black p-8 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
          >
            <div className="w-16 h-16 bg-purple-600 border-2 border-black flex items-center justify-center mb-6 group-hover:bg-white group-hover:border-white transition-all duration-300 rounded-lg">
              <TrendUpIcon className="w-8 h-8 text-white group-hover:text-primary" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-white">Exciting Opportunities</h4>
            <p className="text-gray-700 leading-relaxed font-medium group-hover:text-white">
              Be at the forefront of MSME development, with opportunities to lead projects and influence industry trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Share Your Game */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto bg-gray-50 rounded-3xl p-12 border border-gray-200"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <TrendUpIcon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Share Your Game-Changing Ideas and <br className="hidden md:block" /> Shape the Future of MSMEs
            </h3>
          </motion.div>
        </div>
      </section>



      {/* partnership-form */}
      <section className="py-20 bg-gray-100" id='partnership-form'>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black p-8 rounded-3xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Partnership Inquiry
              </h2>
              <form 
                className="grid gap-6"
                onSubmit={handleSubmit}
              >
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
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
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
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-900 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={handleInputChange}
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
                      className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                      placeholder="+1 (123) 456-7890"
                      value={formData.phone}
                      onChange={handleInputChange}
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
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                    value={formData['partnership-type']}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Partnership Type</option>
                    <option value="strategic">Strategic Partnership</option>
                    <option value="channel">Channel Partnership</option>
                    <option value="technology">Technology Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mnetworkProfile" className="block text-sm font-bold text-gray-900 mb-2">
                    Link to your M&apos;Network Profile
                  </label>
                  <input
                    type="url"
                    id="mnetworkProfile"
                    name="mnetworkProfile"
                    value={formData.mnetworkProfile}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 rounded-lg"
                    placeholder="https://network.msme.com/profile/..."
                  />
                  <p className="mt-1 text-xs text-gray-500">Paste the URL of your M&apos;Network profile (business connection platform)</p>
                </div>

                                <div>
                  <label htmlFor="file" className="block text-sm font-bold text-gray-900 mb-2">
                    Upload File
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleInputChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                    />
                    <div className="w-full px-4 py-3 border-2 border-black focus-within:ring-2 focus-within:ring-[#0D9244] focus-within:border-[#0D9244] transition-all duration-200 flex items-center justify-between rounded-lg">
                      <span className="text-gray-500">{formData.file ? formData.file.name : 'Choose a file...'}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                  </div>
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
                    className="w-full px-4 py-3 border-2 border-black focus:ring-2 focus:ring-[#0D9244] focus:border-[#0D9244] transition-all duration-200 resize-none rounded-lg"
                    placeholder="Tell us about your partnership proposal..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white font-bold py-4 px-6 border-4 border-black hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center gap-2 rounded-lg"
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
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black rounded-lg">
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
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black rounded-lg">
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
                  className="bg-white border-4 border-black p-6 hover:bg-primary hover:text-white group transition-all duration-300 rounded-3xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary group-hover:bg-white p-3 border-2 border-black rounded-lg">
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
