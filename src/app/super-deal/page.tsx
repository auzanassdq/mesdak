'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function SuperDealPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <style jsx global>{`
        :root {
          --forest-green: #166534;
          --vibrant-orange: #F97316;
          --deep-blue: #0A2342;
        }
        body {
          font-family: 'Spline Sans', sans-serif;
        }
      `}</style>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2" href="#">
              <svg className="h-8 w-8 text-[var(--forest-green)]" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8261 30.5736C16.7203 29.8826 20.2244 29.4783 24 29.4783C27.7756 29.4783 31.2797 29.8826 34.1739 30.5736C36.9144 31.2278 39.9967 32.7669 41.3563 33.8352L24.8486 7.36089C24.4571 6.73303 23.5429 6.73303 23.1514 7.36089L6.64374 33.8352C8.00331 32.7669 11.0856 31.2278 13.8261 30.5736Z" fill="currentColor"></path>
                <path clipRule="evenodd" d="M39.998 35.764C39.9944 35.7463 39.9875 35.7155 39.9748 35.6706C39.9436 35.5601 39.8949 35.4259 39.8346 35.2825C39.8168 35.2403 39.7989 35.1993 39.7813 35.1602C38.5103 34.2887 35.9788 33.0607 33.7095 32.5189C30.9875 31.8691 27.6413 31.4783 24 31.4783C20.3587 31.4783 17.0125 31.8691 14.2905 32.5189C12.0012 33.0654 9.44505 34.3104 8.18538 35.1832C8.17384 35.2075 8.16216 35.233 8.15052 35.2592C8.09919 35.3751 8.05721 35.4886 8.02977 35.589C8.00356 35.6848 8.00039 35.7333 8.00004 35.7388C8.00004 35.739 8 35.7393 8.00004 35.7388C8.00004 35.7641 8.0104 36.0767 8.68485 36.6314C9.34546 37.1746 10.4222 37.7531 11.9291 38.2772C14.9242 39.319 19.1919 40 24 40C28.8081 40 33.0758 39.319 36.0709 38.2772C37.5778 37.7531 38.6545 37.1746 39.3151 36.6314C39.9006 36.1499 39.9857 35.8511 39.998 35.764ZM4.95178 32.7688L21.4543 6.30267C22.6288 4.4191 25.3712 4.41909 26.5457 6.30267L43.0534 32.777C43.0709 32.8052 43.0878 32.8338 43.104 32.8629L41.3563 33.8352C43.104 32.8629 43.1038 32.8626 43.104 32.8629L43.1051 32.865L43.1065 32.8675L43.1101 32.8739L43.1199 32.8918C43.1276 32.906 43.1377 32.9246 43.1497 32.9473C43.1738 32.9925 43.2062 33.0545 43.244 33.1299C43.319 33.2792 43.4196 33.489 43.5217 33.7317C43.6901 34.1321 44 34.9311 44 35.7391C44 37.4427 43.003 38.7775 41.8558 39.7209C40.6947 40.6757 39.1354 41.4464 37.385 42.0552C33.8654 43.2794 29.133 44 24 44C18.867 44 14.1346 43.2794 10.615 42.0552C8.86463 41.4464 7.30529 40.6757 6.14419 39.7209C4.99695 38.7775 3.99999 37.4427 3.99999 35.7391C3.99999 34.8725 4.29264 34.0922 4.49321 33.6393C4.60375 33.3898 4.71348 33.1804 4.79687 33.0311C4.83898 32.9556 4.87547 32.8935 4.9035 32.8471C4.91754 32.8238 4.92954 32.8043 4.93916 32.7889L4.94662 32.777L4.95178 32.7688ZM35.9868 29.004L24 9.77997L12.0131 29.004C12.4661 28.8609 12.9179 28.7342 13.3617 28.6282C16.4281 27.8961 20.0901 27.4783 24 27.4783C27.9099 27.4783 31.5719 27.8961 34.6383 28.6282C35.082 28.7342 35.5339 28.8609 35.9868 29.004Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
              <span className="text-xl font-bold text-gray-800">M Network</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
              <input 
                className="bg-gray-100 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-[var(--forest-green)] w-48 transition-all" 
                placeholder="Search" 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="text-gray-600 hover:text-[var(--forest-green)]">
              <span className="material-symbols-outlined">language</span>
            </button>
            <button className="text-gray-600 hover:text-[var(--forest-green)]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <img 
              alt="User profile picture" 
              className="h-10 w-10 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVsqP3hFo-T3eBUSscMsNoitTzM0kKSmEXsZqwJxl8HsQ_BMd4R1ZNal1wfSYCA3xB6UwrzM18dmu36oCGV76AHFGGezXlAZhzT5dEzUFm3unkUwHU9ffZZdbQ3LLls-lScpnp5YzFCoPCUi-O0IHKMrevqIdrWb1VYJyPsx326MWRrFRrSviY0tNKBbkR__CO2Ip6-MFTSJGIqkA8Oh2ACryRC6szdENCXovYyzJAxl1sO6NuGc8T8J9aGyl-2VJLGos03i43g8"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-xl shadow-sm mb-8"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-700">M'SuperDeal Setup</h2>
            <span className="text-sm text-gray-500">25% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-[var(--forest-green)] h-2.5 rounded-full"
            ></motion.div>
          </div>
        </motion.div>

        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden mb-12 h-96 bg-[var(--deep-blue)]"
        >
          <div className="absolute bottom-0 left-0 p-10 text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl font-bold mb-2 text-[var(--vibrant-orange)]"
            >
              Setup Your M'SuperDeal
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg mb-6"
            >
              Create a time-limited promotional offer to attract new customers and boost sales.
            </motion.p>
            <div className="flex gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--forest-green)] text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition-colors shadow-lg"
              >
                View Your Super Deal
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--vibrant-orange)] text-white font-bold py-3 px-6 rounded-full hover:bg-orange-500 transition-colors shadow-lg"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Deal Previews */}
        <div className="grid grid-cols-1 @container md:grid-cols-2 gap-8">
          {/* Deal Preview 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xl font-bold">Deal Preview</h3>
              <p className="text-sm text-gray-500">Sample Deal Solar Kit</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">This is how your deal will appear.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                alt="Deal Preview Image" 
                className="w-full h-40 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYTPHbiZsrhWnZjshebDg4G_MnIKMRNtMqt031W4N6v5XFDqh2f0uXbXjanjTGcQQCHVXquXUu2WMbVD_2-ndMlLDYXAg0g2nixE1T45tS9Ll6oTZtjmqfoh7ojIrsVu4aB9FrejwBB81JC0uhcBd8TlO_81GAdPgP_lBgol-DmxfkXn-OU-XWlVM6ng1DehgoUqTrgviYK3a9XjaSD2jC0Ipdtw9AH7k7O72M9ghNypucB34PU2YwUllOOgKS1rtm6ukwWxlxLg"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg">Sample Deal: Solar Kit</h4>
                <p className="text-gray-600 text-sm mb-2">High-efficiency solar panel kit for residential use.</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-bold text-[var(--forest-green)]">$599.00</p>
                  <span className="text-sm text-red-500 font-semibold line-through">$799.00</span>
                </div>
                <div className="flex justify-start items-center text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">thumb_up</span>
                    <span className="text-sm font-medium">18</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">chat_bubble</span>
                    <span className="text-sm font-medium">651</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">share</span>
                    <span className="text-sm font-medium">23</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">call</span>
                    <span className="text-sm font-medium">12</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deal Preview 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <div className="flex justify-between items-baseline mb-4">
              <h3 className="text-xl font-bold">Deal Preview</h3>
              <p className="text-sm text-gray-500">Sample Deal Solar Kit</p>
            </div>
            <p className="text-sm text-gray-500 mb-4">This is how your deal will appear.</p>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <img 
                alt="Deal Preview Image: Solar Kit" 
                className="w-full h-40 object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWlSI0slIK1l5babkTrrie0dVu3f47cYdLcdJO9RJAMStgo2IvVAiroqQI-ypbQd98JLw_SkwIax2GfXuVtQotLfYfmjapIFmrlgWbOBe9QBM_Pn0TgecoJd1_vhMQrahUik-I6HDcxRdH1pD_9XcWuMNzasH7lXuWgN6shL7-1-hbC74Z-cWEvYVtvIIdtVmj-owZTQ_uuoWW4A3PMwrTusYL2C050s66n7BPUglQ5qqAPRtcVB_ViJprrLdZm__sOAV03zVb0lA"
              />
              <div className="p-4">
                <h4 className="font-bold text-lg">Sample Deal: Solar Kit</h4>
                <p className="text-gray-600 text-sm mb-2">Power your home with our complete solar energy package.</p>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-2xl font-bold text-[var(--forest-green)]">$850.00</p>
                  <span className="text-sm text-red-500 font-semibold line-through">$1200.00</span>
                </div>
                <div className="flex justify-start items-center text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">thumb_up</span>
                    <span className="text-sm font-medium">42</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">chat_bubble</span>
                    <span className="text-sm font-medium">128</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">share</span>
                    <span className="text-sm font-medium">55</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <span className="material-symbols-outlined text-lg text-gray-400">call</span>
                    <span className="text-sm font-medium">31</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="container mx-auto px-6 py-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 p-8 rounded-lg flex flex-col md:flex-row justify-between items-center"
          >
            <div className="text-center md:text-left mb-6 md:mb-0">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="material-symbols-outlined text-[var(--forest-green)]">lock</span>
                <p className="font-semibold">Secure payment processing</p>
              </div>
              <p className="text-sm text-gray-600">
                <a className="hover:underline text-[var(--forest-green)]" href="#">Terms & Conditions</a> | 
                <a className="hover:underline text-[var(--forest-green)]" href="#">Payment Terms</a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-700 font-bold py-3 px-6 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
              >
                Preview
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--vibrant-orange)] text-white font-bold py-3 px-6 rounded-full hover:bg-orange-500 transition-colors shadow-lg"
              >
                Post Your Deal
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--forest-green)] text-white font-bold py-3 px-6 rounded-full hover:bg-green-800 transition-colors shadow-lg"
              >
                Advertise Now
              </motion.button>
            </div>
          </motion.div>
          <div className="text-center text-gray-500 mt-8 text-sm">
            <p>© 2024 M Network Inc. All rights reserved.</p>
            <div className="mt-2">
              <a className="hover:underline text-[var(--forest-green)]" href="#">Message us</a> | 
              <a className="hover:underline text-[var(--forest-green)]" href="#">Call us</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Support Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 right-6"
      >
        <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-[var(--forest-green)] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl hover:bg-green-800 transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">support_agent</span>
        </motion.button>
      </motion.div>
    </div>
  );
}