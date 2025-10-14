'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MBrandPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    {
      title: "Luxury Desk Set",
      description: "Crafted with the finest materials for ultimate elegance and functionality.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd3_lv9Z2XLxhd4XofTs6WhqMWaIdJ-lwTsCBf9DzqKwVX7w3I51oq4ckkLN5T7aX9wqcTlBXN77RDw9xGEmmDCsjWcZulQi2Wk7ftU2XsgJLVFXgw4ZL7hql8nJEyqeGmKD_I1EQlUdrouCqnbjvKZ59D8noCfqbbt8a2sgXXJrwzH4TLTYnhFAzUH-yZ7mJirlFU8Y4a4HJiIWZTUIOkuCdlkfYBjh_KlyCiR6B-XoWm9ou4HGEwneQSPNSA0uygOwZ4IlA_y0c"
    },
    {
      title: "Custom Executive Chair",
      description: "Ergonomically designed for comfort and style, tailored to your preferences.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBaTot4RsvLJ3ZdTotOSHNYOp5W9fS192AaBBS8d6BqjNstXvzGOE-Kr4SryaQuAJT3jUi6jKp03wf5kIkSmKupMFydnS3iCktQfK3rH5UMBZiJMp-KxnmsmKvL-U5-i4tZ6VF2GOlLrOIsJbC8R4ZDieFdabEcpf98hJrUzyun8kOHs1L7PBGwaWv7Q9dGH_PKEhyZLsLhcwcmvJFAk3cImuW8EvYKCUw0MGLpJLm50gSEbgYhTbLyqnCOTOasdmE9-4sTyqsq9xg"
    },
    {
      title: "High-End Stationery",
      description: "Exquisite stationery to elevate your writing experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCN78VvtjDUWFod49q9V-7c4ozLV7P3_5-DkQ7BuaQtimlymUMS5lN1UaFQFVui554G-NoF46fVvJ0wbBKAWJunURphvHSi7x0GnOK7EL14fP9WIiKIhmA6bmpCbDhif_Ms8Jrz-yt7niAupOj_iCLsr0IrmTTH47mtBhNoJ8CHWDVNakgYeVBTojtpIL-vLGiGGDLTIoO8np9FEzktUngFJB81tr98fvpZavrF7nRd0eCBPPIrT-UDIkxYNgnmtydrFtJuSR7tgCM"
    },
    {
      title: "Premium Timepiece",
      description: "Precision-engineered timepieces that make a statement.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAn8KMlJP3_TTZhKm-P5HEZLOxXAkemXWDt8W3bSv8IpYtCiUByc1_iDV8EDdWHc0WQIUu3acE-yOOyUPj3EYVV468WoiQ35oUXCPGMW7LLD3x-10HZiJQdQTKdywrl9yPe7roa0H0bcy87RbVlQICs-klMMZwX_1T4fX7n5q1IkDn9y1lfhENUlyj9XjVG1fYu3ljQnCj9jeFb68G_qhays-iqpgHrtLlSKpA2rCwOKQmK213SkhMr1Ks0kjs34_KhKjaKFMStbXA"
    }
  ];

  const luxuryCollection = [
    {
      title: "Luxury Smartphone",
      description: "High-end smartphone with advanced features and elegant design.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk2hICgHaRAWBdw6MJFrIsjfPDyiSBoBfm71g03CWiDDk1DPT3TjqrT6qij07ggAxj87jhYXGAZte1lBnbWvzvS2lOLWjiT7d0T3-X_WTobOnkcD2Mdc2m_KUSA-W2nSBz0ZwzAci5bA-inQrkkhBdTLzSkpVYehToVsXytN55U5Es2dc1ug2hDS7kH_XY_pDcRqSSup_3VSiM9HEVqnY0UCY3PmvT2mgmN8LlTeR-kRUIbupAKtwsEgYIMs5oViGOhj--3KCKrGk"
    },
    {
      title: "Luxury Tablet",
      description: "Premium tablet offering superior performance and sleek aesthetics.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCFcPMbozxka1VYaagShxlNrgcDoubiSBd9-A8vsWygPp8TmhrdRyoSletarDgHkDBaWocKQgy8ZxcI8heguJfmY5KaUw3FWxzNh26bm-3guT3Blm5pckqJ6Gc8yZa-dd2XZyTmu71IAfIKY4lOFHgGoUMlkCpCj5oE1VlND4uk_lzlVBDDqn4HtlEP9JPDbc5VdF94-5cKPZNsDDDlrW4ZrezKjRbxHxaArdYGM9Lefe74k7HBlqtTK8Z7Io83vaDolIIxK_7DtKk"
    },
    {
      title: "Luxury Travel Bag",
      description: "Sophisticated travel bag crafted from premium materials.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD35CcHI2vKVznpVP5u_3HRbCRQNpIXAl1uxfrRDGuIp18LBn4bbyjsMWf_6JKjY2edd-uZlZRsl6xP2rr8Fm-el5ed5FPneQyLFmIAXSKbVOUXNZXKE7NIQm0WNWZS6WL60REqoE4IxcLEsmlOEggTuMr7SCtof01IM5q_5fEVzmyVDxLCz9nXcWusBtkjfPR42PmT_frDVI9c9vLKkazq2fXyo9o0m8GYzXOBCuvdmlzC-VJVnyHDRzy5i-RSWMEGV3VmWUhTEqQ"
    },
    {
      title: "Luxury Business Suitcase",
      description: "Elegant and durable suitcase designed for business travel.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcRcXAyRDuI9qufOXNsJCtenEDEnF6rUvIjIPcPbl--n7S6_Z3YdRSLeHwYt1nrIlCJ6bieii48cOoKWiiuOcpcjNCfvGykLuXB7zJSOkDNcqevqeQ_eY9ZxQwH0uORw2hcsObgIZqjP5OODQcBRUhhHFtnGDhRFYP55iX7ZOc2x_OTWsiSxX3M5ioCcd40PGEDd9ndp3vQHWfZHJXCruSlOaISux1u4pBRHGbOY_ZFTDGmG9myvF0v9EyPoHjyYFp42CQYqsJq9g"
    },
    {
      title: "Luxury Personal Stylist Fashion Item",
      description: "Exclusive fashion item curated for personal stylists.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZeCSNXhGZZeKQ3c9NPloTX8Ws11PQRSB13y9jIaTNpQsvyz3e2TGF9p41wC9eCudUNpiZ1VC42NbJLszTtfC-o1by3RavzOJ5tRr42--X9otFCoQRMJx-06qeJHDtpYitiDmGgvOjkmaCbk5bVRlGiSJyI7I-4xGpMSZirFpVP8Q9PM6gfFlKAh3aK_hy2ngFg337ioAH9vhzKvERLCePeTm2aDPJWu2kvrY_ziJzlUDaEeMIDFMCJOAY4UlNVm-0v-_WnIB69yU"
    }
  ];

  const categories = [
    {
      title: "Desk Sets",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPmvJ2may8Y3TB2Z9qzfpbtNE53SeWHMB5TQzABwxEW7jRsef75UHNQ2ledhc1NVmYGZXHn05kgDrdO6TMz7k3OsmY-ARUcqJjPGoRlaWfMyZyT05QMOrxSCBhzidPQSdsehuPQWcdaZVvAXbKBoXThxp5AbrImnFDliZsbj5iYc_B-wkud8dQUN0cgHwrxf7lRReMBmcroyd6-tPfV3nvgduW6hVcVm-TZyvA1z9LzJtVTQM0cB4WA4sA0JoaLHaKVuciXFpdMCk"
    },
    {
      title: "Chairs",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqFuHzyfQ_iI2XBuk3Ov7Q8vuzyRKEnPbzae81Dcw8PjCZvNYr0m80oK63d92ogLr-j4gTXW_kaDaMG6pTxQBMm1wYBPuU26oeOynvMVczwCTwZ4AmjWsvRZNqZ-t9-jktCzuLqLE80oDSD3bauVjcy28NylTGabqlOpR8ZmNQyqFw4O8cUpWNJDQWEalQcFJTOlMn5ombK8y_s51_LdjLq2etTtGVnxdpOnFsDp9j3u7Sm9vrXnRqWPlTjNZJZS0fTUBQp8te2bk"
    },
    {
      title: "Stationery",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAgiutjj4eMFmuSwV1taW9Y32UWeHFeOt7BwIldfyiyHRdU8ZQ4T5o6Nuwb3s4dyxN7QXL05WiFUt4DBV0T0A8aru0hsMB0ywTUCbqoh0167mliWPUCLZbUnsliYuR9OUVz5-FY5nXmApHI4D-x8KB2UTaUoOeFiXlgs7vDACP_wE6wQ-v1nDiGIRwdTZYZz4u0T4ZqBVHY2VjU-wePsGRYQTSXFMTOkI_YdNjNnxtbqyEw0gpu97Yv3S_wCEIDA72hIKOixVRMchM"
    },
    {
      title: "Timepieces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZeCSNXhGZZeKQ3c9NPloTX8Ws11PQRSB13y9jIaTNpQsvyz3e2TGF9p41wC9eCudUNpiZ1VC42NbJLszTtfC-o1by3RavzOJ5tRr42--X9otFCoQRMJx-06qeJHDtpYitiDmGgvOjkmaCbk5bVRlGiSJyI7I-4xGpMSZirFpVP8Q9PM6gfFlKAh3aK_hy2ngFg337ioAH9vhzKvERLCePeTm2aDPJWu2kvrY_ziJzlUDaEeMIDFMCJOAY4UlNVm-0v-_WnIB69yU"
    }
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#111722] overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#232f48] px-10 py-3">
          <div className="flex items-center gap-4 text-white">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">M&apos;Brand</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-white text-sm font-medium leading-normal hover:text-blue-400 transition-colors" href="#">New Arrivals</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-blue-400 transition-colors" href="#">Desk Sets</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-blue-400 transition-colors" href="#">Chairs</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-blue-400 transition-colors" href="#">Stationery</a>
              <a className="text-white text-sm font-medium leading-normal hover:text-blue-400 transition-colors" href="#">Timepieces</a>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#232f48] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#2a3852] transition-colors"
              >
                <div className="text-white" data-icon="MagnifyingGlass" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                    ></path>
                  </svg>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#232f48] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#2a3852] transition-colors"
              >
                <div className="text-white" data-icon="User" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                    ></path>
                  </svg>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#232f48] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5 hover:bg-[#2a3852] transition-colors"
              >
                <div className="text-white" data-icon="ShoppingBag" data-size="20px" data-weight="regular">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"
                    ></path>
                  </svg>
                </div>
              </motion.button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Hero Section */}
            <div className="@container">
              <div className="@[480px]:p-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAggHX_ATaXKVQMyNT3AAVjuc86VSN1bCgeBplSGkL23h94oUO8suR6H1aq0RU04XlKp5fIV8a4fm30_qSinj9Z2a1ETH2YGN2WrY3uXNupm0naoYYQHQx3ynvedWAX3Id6j4_I9Yz8Lz7G7SMh1peBx0bbQPnyp1BlTlJ1sVYFg08USpOpB2X6Nz8j_VlbT6Ywdra-c0nwmxM7bWW5QM_qwa9qkpIQhdX3LWZg6eYes2UVFDuT3K-ZNP0vsG6AEw3NqXslQR65Hgg")`
                  }}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Welcome to M&apos;Brand
                    </motion.h1>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal"
                    >
                      Discover our curated Luxury Collection and Featured Products
                    </motion.h2>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#0f49bd] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] hover:bg-blue-700 transition-colors"
                  >
                    <span className="truncate">Shop Now</span>
                  </motion.button>
                </motion.div>
              </div>
            </div>

            {/* Featured Products */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Featured Products
            </motion.h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {featuredProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url("${product.image}")` }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">{product.title}</p>
                      <p className="text-[#92a4c9] text-sm font-normal leading-normal">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Luxury Collection */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Luxury Collection
            </motion.h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {luxuryCollection.map((product, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 * index }}
                    whileHover={{ scale: 1.02 }}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 cursor-pointer"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url("${product.image}")` }}
                    ></div>
                    <div>
                      <p className="text-white text-base font-medium leading-normal">{product.title}</p>
                      <p className="text-[#92a4c9] text-sm font-normal leading-normal">{product.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Shop by Category */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5"
            >
              Shop by Category
            </motion.h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col gap-3 pb-3 cursor-pointer"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  ></div>
                  <p className="text-white text-base font-medium leading-normal">{category.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#92a4c9] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors" href="#">About</a>
                <a className="text-[#92a4c9] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors" href="#">Contact</a>
                <a className="text-[#92a4c9] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors" href="#">Privacy Policy</a>
                <a className="text-[#92a4c9] text-base font-normal leading-normal min-w-40 hover:text-white transition-colors" href="#">Terms of Service</a>
              </div>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}