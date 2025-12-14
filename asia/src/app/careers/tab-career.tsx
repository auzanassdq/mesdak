
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { CaretDownIcon, ClockIcon, UserCheckIcon, UsersIcon, X } from '@phosphor-icons/react/dist/ssr';


interface Location {
  id: string;
  name: string;
  icon: string;
}

interface JobOpportunity {
  id: string;
  title: string;
  description: string;
  type: string;
  location: string;
  // buttonText: string;
}

interface JobCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  count: number;
}

interface CompanyOption {
  id: string;
  name: string;
}

interface VideoCard {
  id: string;
  title: string;
  videoUrl: string;
}

function TabCareer() {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('africa');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [isInternal, setIsInternal] = useState<boolean>(false);
  const [isExternal, setIsExternal] = useState<boolean>(false);
  const [isTrainingSelected, setIsTrainingSelected] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<'location' | 'company'>('location');
  const [selectedVideo, setSelectedVideo] = useState<VideoCard | null>(null);

  const videoCards: VideoCard[] = [
    {
      id: 'why-work',
      title: 'Why Work With Us',
      videoUrl: 'https://www.youtube.com/embed/D89Dgg32yLk'
    },
    {
      id: 'how-work',
      title: 'How We Work',
      videoUrl: 'https://www.youtube.com/embed/D89Dgg32yLk'
    },
    {
      id: 'your-path',
      title: 'Your Path',
      videoUrl: 'https://www.youtube.com/embed/D89Dgg32yLk'
    },
    {
      id: 'success',
      title: 'Success Story',
      videoUrl: 'https://www.youtube.com/embed/D89Dgg32yLk'
    }
  ];

  const locations: Location[] = [
    { id: 'headquarters', name: 'Headquarters Mauritius', icon: '🏢' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'asia', name: 'Asia', icon: '🏙️' },
    { id: 'north-america', name: 'North America', icon: '🏙️' },
    { id: 'latin-america', name: 'Latin America', icon: '🌆' },
    { id: 'europe', name: 'Europe', icon: '🏛️' },
    { id: 'aseu', name: 'ASEU', icon: '🕌' }
  ];

  const countries: { [key: string]: string[] } = {
    africa: ['Mauritius', 'South Africa', 'Kenya', 'Nigeria'],
    asia: ['Singapore', 'Japan', 'South Korea', 'Indonesia'],
    'north-america': ['Canada', 'United States', 'Mexico'],
    'latin-america': ['Panama', 'Brazil', 'Colombia', 'Argentina'],
    europe: ['Germany', 'France', 'United Kingdom', 'Spain'],
    aseu: ['Georgia', 'UAE', 'Kazakhstan', 'Azerbaijan']
  };

  const jobCategories: JobCategory[] = [
    { id: 'full-time', name: 'Full Time', icon: <ClockIcon className="w-6 h-6" />, count: 25 },
    { id: 'part-time', name: 'Part Time', icon: <ClockIcon className="w-6 h-6" />, count: 12 },
    { id: 'freelance', name: 'Freelance', icon: <UserCheckIcon className="w-6 h-6" />, count: 8 },
    { id: 'internship', name: 'Internship', icon: <UsersIcon className="w-6 h-6" />, count: 15 },
    { id: 'training', name: 'Training', icon: <UsersIcon className="w-6 h-6" />, count: 15 }
  ];

  const companyOptions: CompanyOption[] = [
    { id: 'msme-network', name: 'MSME Network Incorporation' },
    { id: 'mbutic', name: 'M\'Butic Incorporation' },
    { id: 'mdatatalk', name: 'M\'DataTalk Incorporation' },
    { id: 'msme-finance', name: 'MSME Finance Incorporation' },
    { id: 'msme-development', name: 'MSME Development Consulting' },
    { id: 'mizitec', name: 'M\'IZITec Incorporation' },
    { id: 'mmedia', name: 'M\'Media Incorporation' },
    { id: 'solution', name: 'MSME Solution World' }
  ];

  const handleSectorChange = (sectorId: string) => {
    setSelectedSectors(prev =>
      prev.includes(sectorId)
        ? prev.filter(id => id !== sectorId)
        : [...prev, sectorId]
    );
  };

  const opportunities: JobOpportunity[] = [
    {
      id: 'consultant',
      title: 'Consultant',
      type: 'Full-time',
      location: 'Singapore',
      description: 'We are seeking experienced consultants to join our team. If you have a passion for helping businesses grow and thrive, we encourage you to apply.',
    },
    {
      id: 'innovation-specialist',
      title: 'Innovation Specialist',
      type: 'Full-time',
      location: 'Singapore',
      description: 'Join our innovation team and help us develop cutting-edge solutions for MSMEs. We are looking for creative thinkers with a strong background in technology and business.',
    },
    {
      id: 'business-development',
      title: 'Business Development Manager',
      type: 'Full-time',
      location: 'Singapore',
      description: 'We are looking for a dynamic Business Development Manager to drive growth and expand our reach in the MSME sector. If you have a proven track record in sales and business development, we want to hear from you.',
    }
  ];

  return (
    <motion.div
      key="career"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Explore Job Opportunities Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-between items-start"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Job Opportunities</h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {videoCards.map((card, index) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setSelectedVideo(card)}
                  className="w-40 h-32 bg-white overflow-hidden border-2 border-black hover:border-primary transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                    <h3 className="text-center text-sm font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="mt-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Video Modal */}
          <AnimatePresence>
            {selectedVideo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedVideo(null)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  className="relative bg-white rounded-lg p-2 w-full max-w-4xl"
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300"
                  >
                    <X className="w-8 h-8" />
                  </button>
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute inset-0 w-full h-full rounded-lg"
                      src={selectedVideo.videoUrl}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Filter job */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 lg:p-8 mb-12 border-4 border-black relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0 bg-primary/5 pattern-grid-lg"></div>
            </div>

            {/* Filter Header */}
            <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 lg:mb-10 pb-6 border-b-2 border-black/10">
              <div className="text-center sm:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Role</h3>
                <p className="text-sm sm:text-base text-gray-600">Use filters to refine your search</p>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4 justify-center sm:justify-end">
                <label className="flex items-center hover:text-primary transition-colors cursor-pointer group">
                  <input type="checkbox" checked={isInternal} onChange={() => setIsInternal(!isInternal)} className="form-checkbox h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary group-hover:border-primary transition-colors" />
                  <span className="ml-2 text-gray-700 group-hover:text-primary">Internal</span>
                </label>
                <label className="flex items-center hover:text-primary transition-colors cursor-pointer group">
                  <input type="checkbox" checked={isExternal} onChange={() => setIsExternal(!isExternal)} className="form-checkbox h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary group-hover:border-primary transition-colors" />
                  <span className="ml-2 text-gray-700 group-hover:text-primary">External</span>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column - Main Filters */}
              <div className="lg:col-span-4 space-y-6">
                {/* Job Type */}
                <div className="filter-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Type</label>
                  <div className="relative group">
                    <select
                      value={selectedSectors[0] || ''}
                      onChange={(e) => handleSectorChange(e.target.value)}
                      className="w-full px-4 py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer hover:border-primary transition-colors"
                    >
                      <option value="">All Types</option>
                      {jobCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                    <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                  </div>
                </div>

                {/* Country Selection */}
                <div className="filter-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Continent</label>
                  <div className="relative group">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer hover:border-primary transition-colors"
                    >
                      <option value="">All Countries</option>
                      {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                          {location.icon} {location.name}
                        </option>
                      ))}
                    </select>
                    <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Right Column - Dynamic Filters */}
              <div className="lg:col-span-8 space-y-6">
                {/* Filter Toggle */}
                <div className="filter-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Filter By</label>
                  <div className="bg-white p-1.5 border-2 border-black rounded-sm">
                    <motion.div className="flex" layout>
                      <motion.button
                        onClick={() => setSelectedOption('location')}
                        className={`relative flex-1 py-2.5 px-4 text-sm font-medium rounded-sm ${selectedOption === 'location' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        <motion.span
                          initial={false}
                          animate={{ opacity: selectedOption === 'location' ? 1 : 0.8 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <span>🌍</span>
                          <span>Location</span>
                        </motion.span>
                        {selectedOption === 'location' && (
                          <motion.div
                            className="absolute inset-0 bg-primary/10 rounded-sm"
                            layoutId="activeFilter"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.button>
                      <motion.button
                        onClick={() => setSelectedOption('company')}
                        className={`relative flex-1 py-2.5 px-4 text-sm font-medium rounded-sm ${selectedOption === 'company' ? 'bg-primary text-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
                      >
                        <motion.span
                          initial={false}
                          animate={{ opacity: selectedOption === 'company' ? 1 : 0.8 }}
                          className="flex items-center justify-center gap-2"
                        >
                          <span>🏢</span>
                          <span>Company</span>
                        </motion.span>
                        {selectedOption === 'company' && (
                          <motion.div
                            className="absolute inset-0 bg-primary/10 rounded-sm"
                            layoutId="activeFilter"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                      </motion.button>
                    </motion.div>
                  </div>
                </div>

                {/* Dynamic Selection */}
                <div className="filter-group">
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {selectedOption === 'location' ? (
                      <div className='flex items-center justify-center gap-4'>
                        <div className="filter-group w-full">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
                          <div className="relative group">
                            <select
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="w-full px-4 py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer hover:border-primary transition-colors"
                            >
                              <option value="">All Countries</option>
                              {locations.map((location) => (
                                <option key={location.id} value={location.id}>
                                  {location.icon} {location.name}
                                </option>
                              ))}
                            </select>
                            <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                          </div>
                        </div>

                        <div className="filter-group w-full">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                          <div className="relative group">
                            <select
                              value={selectedLocation}
                              onChange={(e) => setSelectedLocation(e.target.value)}
                              className="w-full px-4 py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer hover:border-primary transition-colors"
                            >
                              <option value="">All Countries</option>
                              {locations.map((location) => (
                                <option key={location.id} value={location.id}>
                                  {location.icon} {location.name}
                                </option>
                              ))}
                            </select>
                            <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                          </div>
                        </div>
                      </div>

                    ) : (
                      <div className="filter-group">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                        <div className="relative group">
                          <select
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                            className="w-full px-4 py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer hover:border-primary transition-colors"
                          >
                            <option value="">All Countries</option>
                            {locations.map((location) => (
                              <option key={location.id} value={location.id}>
                                {location.icon} {location.name}
                              </option>
                            ))}
                          </select>
                          <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto min-w-[200px] px-8 py-3.5 bg-primary text-white font-medium border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all flex items-center justify-center gap-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="relative z-10 text-base">Search Jobs</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Job Listings */}
          <div className="space-y-6">
            {opportunities.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white border-4 border-black p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium border border-blue-800 text-blue-800">
                      {job.type}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium border border-green-800 text-green-800">
                      {job.location}
                    </span>
                  </div>
                  <motion.button
                    className="bg-primary text-white font-medium py-2 px-4 border-2 border-black hover:bg-black hover:text-white hover:cursor-pointer"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default TabCareer
