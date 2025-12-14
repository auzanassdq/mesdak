"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Globe,
  Megaphone,
  Tv,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Briefcase,
  CheckCircle2,
} from "lucide-react";

export default function MediaPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* Navbar */}


      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-40 pb-32 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 tracking-tight">
                Be Faster, Easier &{" "}
                <span className="text-indigo-600 italic">Everywhere</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
                M&apos;Media Incorporation is the media, communication, and
                events powerhouse dedicated to elevating MSMEs on the national,
                regional, and global stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100 text-left"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-blue-900 font-semibold text-lg mb-3">
                    Our Mission
                  </h3>
                  <p className="text-slate-600">
                    Give managers, founders, and entrepreneurs the visibility
                    and exposure they deserve, supported by a fully integrated
                    media engine embedded directly within M&apos;World
                    Ecosystem.
                  </p>
                </div>
                <div>
                  <h3 className="text-blue-900 font-semibold text-lg mb-3">
                    Our Scope
                  </h3>
                  <p className="text-slate-600">
                    M&apos;Media captures and amplifies news, intelligence,
                    trends, opportunities, and risks shaping the MSME economy —
                    from the smallest district to the global marketplace.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Magazine Section */}
      <section id="magazine" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600/5 rounded-2xl transform -rotate-2"></div>
                <div className="bg-blue-900 text-white p-10 rounded-2xl shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
                  <BookOpen className="w-12 h-12 mb-6 text-blue-300" />
                  <h2 className="text-3xl font-bold mb-2">
                    M&apos;Media Magazine
                  </h2>
                  <p className="text-blue-200 font-medium mb-6">
                    Twice a Year — Print & Digital
                  </p>
                  <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold mb-8">
                    Free for Subscribers
                  </div>
                  <p className="text-blue-100 leading-relaxed">
                    The signature voice of MSMEs, shared across countries,
                    sectors, and industries. Celebrating innovation, leadership,
                    and sector evolution.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                What M&apos;Media Publishes
              </h3>
              <div className="space-y-4">
                {[
                  "Economic news and sector intelligence",
                  "Research, analysis, and emerging trends",
                  "Business opportunities and risk alerts",
                  "Interviews, profiles, and company features",
                  "Local, regional, and global MSME coverage",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors border border-slate-100 hover:border-blue-100"
                  >
                    <div className="bg-blue-100 p-2 rounded-full text-blue-700">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-slate-700 font-medium">{item}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-slate-500 italic text-sm">
                All seamlessly distributed through the M&apos;World ecosystem
                for maximum reach and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What M'Media Offers */}
      <section id="offers" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              What M&apos;Media Offers
            </h2>
            <p className="text-slate-600">
              Comprehensive media and event solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Media & Strategic Advisory Services",
                desc: "Professional media services combined with communication strategy and visibility planning.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Online Advertising Across M&apos;World",
                desc: "Exclusive access to targeted advertising placements across M&apos;Network, M&apos;Butic, M&apos;Market, M&apos;SuperDeal, and more.",
              },
              {
                icon: <Tv className="w-8 h-8" />,
                title: "Communication & Marketing Solutions",
                desc: "Brand storytelling, content creation, marketing strategy, and campaign management.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Product Branding & Commercialisation",
                desc: "End-to-end product positioning and branding support for MSMEs, corporates, and institutions.",
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Corporate Events & Conferences",
                desc: "From classic corporate gatherings to large-scale national and regional events via M&apos;Event Division.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* M'Event Section */}
      <section
        id="events"
        className="py-24 bg-blue-900 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="bg-blue-800 text-blue-200 px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-4 inline-block">
              M&apos;Event Division
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Where MSMEs Meet, Trade & Grow
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              M&apos;Event is M&apos;Media&apos;s flagship gathering — a
              high-energy, large-scale event designed to bring MSMEs together
              for collaboration, networking, and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* National Event */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-500 p-3 rounded-lg">
                  <MapPin className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">National M&apos;Event</h3>
              </div>
              <p className="text-blue-200 font-medium mb-4">
                First Half of Each Year
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Held annually in each
                  country of operation
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Hosted in a different
                  city each time
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Subscribed users
                  enjoy free access
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">•</span> Drives national-level
                  networking & deals
                </li>
              </ul>
            </div>

            {/* Regional Event */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-indigo-500 p-3 rounded-lg">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Regional M&apos;Event</h3>
              </div>
              <p className="text-blue-200 font-medium mb-4">
                Second Half of Each Year
              </p>
              <ul className="space-y-3 text-blue-100">
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span> Held in one
                  selected country per region
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span> Brings together
                  MSME actors from neighbours
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span> 3 days of regional
                  collaboration
                </li>
                <li className="flex gap-3">
                  <span className="text-indigo-400">•</span> Cross-border
                  exploration & expansion
                </li>
              </ul>
            </div>
          </div>

          {/* Tourism Impact */}
          <div className="bg-white text-slate-800 rounded-3xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-900">
              A Driver of Tourism & Local Economic Development
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-lg mb-4 text-indigo-600">
                  Domestic Tourism
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Participants travel across cities, boosting:
                </p>
                <ul className="text-sm space-y-2 text-slate-700">
                  <li>• Local hotels</li>
                  <li>• Restaurants & catering</li>
                  <li>• Transport providers</li>
                  <li>• Local retailers & artisans</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-indigo-600">
                  Regional Tourism
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                  Encouraging participants to discover:
                </p>
                <ul className="text-sm space-y-2 text-slate-700">
                  <li>• New countries</li>
                  <li>• New cultures</li>
                  <li>• New business environments</li>
                  <li>• New markets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-indigo-600">
                  Local Spillovers
                </h4>
                <p className="text-sm text-slate-600">
                  Direct catalyst for demand, bringing thousands of visitors,
                  professionals, and potential clients into host cities.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-4 text-indigo-600">
                  Place Branding
                </h4>
                <p className="text-sm text-slate-600 mb-3">Host cities gain:</p>
                <ul className="text-sm space-y-2 text-slate-700">
                  <li>• National visibility</li>
                  <li>• Regional positioning</li>
                  <li>• Recognition as a business hub</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why M'Event Matters */}
      <section id="impact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Why M&apos;Event Matters
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                M&apos;Event enables continuous physical exchange between MSME
                actors — the entrepreneurs behind the businesses.
              </p>
              <div className="space-y-4">
                {[
                  "Direct B2B matchmaking",
                  "Partnership and joint-venture opportunities",
                  "Cross-border collaboration",
                  "New distribution and supply contracts",
                  "Real deals and measurable results",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-blue-800 font-medium">
                  Dedicated facilitation teams ensure every participant leaves
                  with connections, opportunities, and partnerships that matter.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-100 h-48 rounded-2xl flex items-center justify-center">
                  <Users className="text-slate-300 w-16 h-16" />
                </div>
                <div className="bg-blue-100 h-48 rounded-2xl flex items-center justify-center mt-8">
                  <TrendingUp className="text-blue-400 w-16 h-16" />
                </div>
                <div className="bg-indigo-100 h-48 rounded-2xl flex items-center justify-center -mt-8">
                  <Globe className="text-indigo-400 w-16 h-16" />
                </div>
                <div className="bg-slate-100 h-48 rounded-2xl flex items-center justify-center">
                  <Briefcase className="text-slate-300 w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Closing */}
      <footer className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              M&apos;Media: The Voice of the MSME Economy
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              M&apos;Media is more than a media organisation — it is the
              storytelling, communication, and engagement engine powering MSME
              growth, visibility, and economic opportunity worldwide.
            </p>
            <div className="flex justify-center gap-6">
              <div className="relative h-14 w-56 opacity-80 hover:opacity-100 transition-opacity">
                <Image
                  src="/assets/m-media-logo.png"
                  alt="M'Media Logo"
                  fill
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} M&apos;Media Incorporation. All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
