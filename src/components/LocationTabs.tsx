'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface OfficeLocation {
  id: string;
  name: string;
  address: string[];
  phone: string;
  email: string;
  mapEmbedUrl: string;
}

const LocationTabs: React.FC = () => {
  const locations: OfficeLocation[] = [
    {
      id: 'headquarters',
      name: 'Headquarters',
      address: [
        '123 Innovation Drive',
        'Palo Alto, CA 94301, USA'
      ],
      phone: '+1 (650) 555-0123',
      email: 'info@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25341.550706934835!2d-122.15570059556174!3d37.44433678335635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb1790b6fa6d%3A0x896629522dfd3707!2sPalo%20Alto%2C%20California%2094301%2C%20Amerika%20Serikat!5e0!3m2!1sid!2sid!4v1753158612452!5m2!1sid!2sid'
    },
    {
      id: 'africa',
      name: 'Africa',
      address: [
        '15 Long Street',
        'Cape Town 8001, South Africa'
      ],
      phone: '+27 21 123 4567',
      email: 'africa@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.9784398685483!2d18.41721231513654!3d-33.92128798063958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc676e2a9934c7%3A0x7c0e3d6cb0d5f79b!2sLong%20St%2C%20Cape%20Town%2C%208001%2C%20South%20Africa!5e0!3m2!1sen!2sid!4v1654321345678!5m2!1sen!2sid'
    },
    {
      id: 'asia',
      name: 'Asia',
      address: [
        '88 Orchard Road, #15-01',
        'Singapore 238844'
      ],
      phone: '+65 6123 4567',
      email: 'asia@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8132122876707!2d103.83150731475398!3d1.3021119990476383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a1a06b3a45%3A0x1f8c8ebb0b1c4d9e!2sOrchard%20Rd%2C%20Singapore!5e0!3m2!1sen!2sid!4v1654321098765!5m2!1sen!2sid'
    },
    {
      id: 'latin-america',
      name: 'Latin America',
      address: [
        'Av. Paulista, 1000',
        'São Paulo, SP 01310-100, Brazil'
      ],
      phone: '+55 11 1234 5678',
      email: 'latam@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976565673626!2d-46.65390548502764!3d-23.564611284678973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c7f481fd9f%3A0x9982bfde4df54830!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100%2C%20Brazil!5e0!3m2!1sen!2sid!4v1654321456789!5m2!1sen!2sid'
    },
    {
      id: 'north-america',
      name: 'North America',
      address: [
        '350 Fifth Avenue',
        'New York, NY 10118, USA'
      ],
      phone: '+1 (212) 555-6789',
      email: 'northamerica@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6175869047057!2d-73.98673708459445!3d40.74844797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20350%205th%20Ave%2C%20New%20York%2C%20NY%2010118%2C%20USA!5e0!3m2!1sen!2sid!4v1654321567890!5m2!1sen!2sid'
    },
    {
      id: 'europe',
      name: 'Europe',
      address: [
        '10 Baker Street',
        'London W1U 3BU, United Kingdom'
      ],
      phone: '+44 20 7123 4567',
      email: 'europe@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9048136585925!2d-0.15840548459134284!3d51.52377167963643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761acf33628211%3A0x445d7677a88322e1!2sBaker%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sid!4v1654321234567!5m2!1sen!2sid'
    },
    {
      id: 'aseu',
      name: 'ASEU',
      address: [
        '1 Sheikh Mohammed bin Rashid Blvd',
        'Dubai, United Arab Emirates'
      ],
      phone: '+971 4 123 4567',
      email: 'aseu@innovatemsme.com',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178530962382!2d55.27166631505196!3d25.197201983896188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3a43bd8a69cf1d%3A0x98ab7e18c9dbb770!2sBurj%20Khalifa%20-%20Sheikh%20Mohammed%20bin%20Rashid%20Blvd%20-%20Downtown%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sid!4v1654321678901!5m2!1sen!2sid'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(locations[0].id);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeLocation = locations.find(location => location.id === activeTab) || locations[0];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto hide-scrollbar">
          {locations.map((location) => (
            <button
              key={location.id}
              onClick={() => handleTabChange(location.id)}
              className={`px-6 py-4 text-sm font-medium whitespace-nowrap ${activeTab === location.id
                ? 'border-b-2 border-[#0D9244] text-[#0D9244]'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Location Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">{activeLocation.name}</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-[#0D9244] to-[#4DB97A] p-2 rounded-lg mt-1">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Address</h4>
                  {activeLocation.address.map((line, index) => (
                    <p key={index} className="text-gray-600">{line}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-[#0D9244] to-[#4DB97A] p-2 rounded-lg mt-1">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{activeLocation.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-[#0D9244] to-[#4DB97A] p-2 rounded-lg mt-1">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{activeLocation.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-[#0D9244] to-[#4DB97A] p-2 rounded-lg mt-1">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Office Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-96 overflow-hidden rounded-lg shadow-md">
            <iframe 
              src={activeLocation.mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>

      {/* Add custom styles for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default LocationTabs;