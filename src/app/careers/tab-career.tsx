import { motion } from 'framer-motion';
import { useState } from 'react';

import { CaretDownIcon, ClockIcon, UserCheckIcon, UsersIcon } from '@phosphor-icons/react/dist/ssr';


interface Location {
  id: string;
  name: string;
  icon: string;
}

interface JobOpportunity {
  id: string;
  title: string;
  description: string;
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

function TabCareer() {
  const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [selectedCompany, setSelectedCompany] = useState<string>('');
  const [isTrainingSelected, setIsTrainingSelected] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<'location' | 'company'>('location');

  const locations: Location[] = [
    { id: 'headquarters', name: 'Headquarters Mauritius', icon: '🏢' },
    { id: 'africa', name: 'Africa', icon: '🌍' },
    { id: 'asia', name: 'Asia', icon: '🏙️' },
    { id: 'north-america', name: 'North America', icon: '🏙️' },
    { id: 'latin-america', name: 'Latin America', icon: '🌆' },
    { id: 'europe', name: 'Europe', icon: '🏛️' },
    { id: 'aseu', name: 'ASEU', icon: '🕌' }
  ];

  const jobCategories: JobCategory[] = [
    { id: 'full-time', name: 'Full Time', icon: <ClockIcon className="w-6 h-6" />, count: 25 },
    { id: 'part-time', name: 'Part Time', icon: <ClockIcon className="w-6 h-6" />, count: 12 },
    { id: 'freelance', name: 'Freelance', icon: <UserCheckIcon className="w-6 h-6" />, count: 8 },
    { id: 'internship', name: 'Internship', icon: <UsersIcon className="w-6 h-6" />, count: 15 }
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
      description: 'We are seeking experienced consultants to join our team. If you have a passion for helping businesses grow and thrive, we encourage you to apply.',

    },
    {
      id: 'innovation-specialist',
      title: 'Innovation Specialist',
      description: 'Join our innovation team and help us develop cutting-edge solutions for MSMEs. We are looking for creative thinkers with a strong background in technology and business.',

    },
    {
      id: 'business-development',
      title: 'Business Development Manager',
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Explore Job Opportunities</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
          </motion.div>

          {/* Search Form with Modern Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-4 sm:p-6 lg:p-8 mb-12 border-4 border-black"
          >
            {/* Filter Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Role</h3>
                <p className="text-sm sm:text-base text-gray-600">Use filters to refine your search</p>
              </div>
              {/* Training Toggle */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 sm:mt-0 flex justify-center"
              >
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isTrainingSelected}
                    onChange={(e) => setIsTrainingSelected(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 border-2 border-black peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-2 after:border-black after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  <span className="ms-3 text-sm font-medium text-gray-700">Include Training</span>
                </label>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Sector Filter */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sector</label>
                  <div className="relative">
                    <select
                      value={selectedSectors[0] || ''}
                      onChange={(e) => handleSectorChange(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="">All Sectors</option>
                      {jobCategories.map((category) => (
                        <option key={category.id} value={category.id} className="py-1 sm:py-2">
                          {category.name} ({category.count})
                        </option>
                      ))}
                    </select>
                    <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                  </div>
                  {selectedSectors[0] && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2 text-xs sm:text-sm text-primary"
                    >
                      {jobCategories.find(cat => cat.id === selectedSectors[0])?.name} selected
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Location/Company Toggle */}
              <div className="lg:col-span-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Filter By</label>
                <div className="bg-white p-1 border-2 border-black">
                  <motion.div className="flex" layout>
                    <motion.button
                      onClick={() => setSelectedOption('location')}
                      className={`relative flex-1 py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${selectedOption === 'location' ? 'bg-primary text-white border border-black' : 'text-gray-600'}`}
                      
                    >
                      <motion.span
                        initial={false}
                        animate={{ opacity: selectedOption === 'location' ? 1 : 0.8 }}
                        className="flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <span className="hidden sm:inline">🌍</span>
                        <span>Location</span>
                      </motion.span>
                      {selectedOption === 'location' && (
                        <motion.div
                          className="absolute inset-0 bg-primary/10"
                          layoutId="activeFilter"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                    <motion.button
                      onClick={() => setSelectedOption('company')}
                      className={`relative flex-1 py-2 px-3 sm:px-4 text-xs sm:text-sm font-medium ${selectedOption === 'company' ? 'bg-primary text-white border border-black' : 'text-gray-600'}`}
                      
                    >
                      <motion.span
                        initial={false}
                        animate={{ opacity: selectedOption === 'company' ? 1 : 0.8 }}
                        className="flex items-center justify-center gap-1 sm:gap-2"
                      >
                        <span className="hidden sm:inline">🏢</span>
                        <span>Company</span>
                      </motion.span>
                      {selectedOption === 'company' && (
                        <motion.div
                          className="absolute inset-0 bg-primary/10"
                          layoutId="activeFilter"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  </motion.div>
                </div>
              </div>

              {/* Dynamic Filter (Location/Company) */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {selectedOption === 'location' ? 'Select Location' : 'Select Company'}
                  </label>
                  <motion.div
                    initial={false}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {selectedOption === 'location' ? (
                      <div className="relative group">
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="">All Locations</option>
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.icon} {location.name}
                            </option>
                          ))}
                        </select>
                        <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 pointer-events-none" />
                        {selectedLocation && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-xs sm:text-sm text-primary"
                          >
                            {locations.find(loc => loc.id === selectedLocation)?.name} selected
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="relative group">
                        <select
                          value={selectedCompany}
                          onChange={(e) => setSelectedCompany(e.target.value)}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border-2 border-black text-sm sm:text-base text-gray-700 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="">All Companies</option>
                          {companyOptions.map((company) => (
                            <option key={company.id} value={company.id}>
                              {company.name}
                            </option>
                          ))}
                        </select>
                        <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 text-gray-400 group-hover:text-primary transition-colors pointer-events-none" />
                        {selectedCompany && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-xs sm:text-sm text-primary"
                          >
                            {companyOptions.find(comp => comp.id === selectedCompany)?.name} selected
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="mt-6 sm:mt-8 flex justify-center sm:justify-start">
              <motion.button
                
                className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-primary text-white font-medium border-2 border-black flex items-center justify-center gap-2"
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="relative z-10 text-sm sm:text-base">Search Jobs</span>
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
                      Full Time
                    </span>
                    <span className="inline-flex items-center px-3 py-1 text-xs font-medium border border-green-800 text-green-800">
                      Remote
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
