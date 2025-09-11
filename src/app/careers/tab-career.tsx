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
  buttonText: string;
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
      buttonText: 'Apply Now'
    },
    {
      id: 'innovation-specialist',
      title: 'Innovation Specialist',
      description: 'Join our innovation team and help us develop cutting-edge solutions for MSMEs. We are looking for creative thinkers with a strong background in technology and business.',
      buttonText: 'Apply Now'
    },
    {
      id: 'business-development',
      title: 'Business Development Manager',
      description: 'We are looking for a dynamic Business Development Manager to drive growth and expand our reach in the MSME sector. If you have a proven track record in sales and business development, we want to hear from you.',
      buttonText: 'Apply Now'
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

          <div className="max-w-4xl">
            {/* A- by sector */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sector</h4>
              <div className="relative max-w-md">
                <select
                  value={selectedSectors[0] || ''}
                  onChange={(e) => handleSectorChange(e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Sector</option>
                  {jobCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>

              {/* Training Checkbox moved here */}
              <motion.label
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 mt-4 rounded transition-colors"
              >
                <input
                  type="checkbox"
                  checked={isTrainingSelected}
                  onChange={(e) => setIsTrainingSelected(e.target.checked)}
                  className="w-4 h-4 text-primary border-2 border-gray-300 rounded focus:ring-primary focus:ring-2"
                />
                <span className="text-gray-700 font-medium">Training</span>
              </motion.label>
            </div>

            {/* Options */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Options</h4>
              <div className="text-black/80 flex gap-12">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="location"
                    checked={selectedOption === 'location'}
                    onChange={() => setSelectedOption('location')}
                    className="mr-2"
                  />
                  Location
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    value="company"
                    checked={selectedOption === 'company'}
                    onChange={() => setSelectedOption('company')}
                    className="mr-2"
                  />
                  Company
                </label>
              </div>
            </div>

            {/* B- by Location */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Location</h4>
              <div className="relative max-w-md">
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Location</option>
                  {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                      {location.name}
                    </option>
                  ))}
                </select>
                <CaretDownIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* C- by Group companies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Group companies</h4>
              <div className="relative max-w-md">
                <select
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                  className="w-full max-w-md px-4 py-3 border-2 border-gray-300 rounded-lg bg-white text-gray-700 focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Company</option>
                  {companyOptions.map((company) => (
                    <option key={company.id} value={company.id}>
                      {company.name}
                    </option>
                  ))}
                </select>
                <CaretDownIcon className="absolute right-3  top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>


          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default TabCareer
