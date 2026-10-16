"use client";

import React from "react";
import GroupCompanyNavbar from "@/components/GroupCompanyNavbar";
import DataTalkChart from "../_components/group-org-charts/DataTalkChart";
import OurReachSection from "../_components/group-org-charts/OurReachSection";

import { Hero } from "./_components/Hero";
import { About } from "./_components/About";
import { D3MP } from "./_components/D3MP";
import { DataCollection } from "./_components/DataCollection";
import { Audience } from "./_components/Audience";
import { Benefits } from "./_components/Benefits";
import { Footer } from "./_components/Footer";

export default function MDataTalkPage() {
  return (
    <main className="min-h-screen font-sans text-gray-900 selection:bg-purple-100 selection:text-purple-900">
      <GroupCompanyNavbar logoSrc="/images/mdatatalk-logo.png" themeColor="#6b21a8" />
      <Hero />
      <About />
      <D3MP />
      <DataCollection />
      <Audience />
      <Benefits />

      {/* Group Companies Section */}
      <div id="companies">
        <DataTalkChart />
      </div>

      {/* Our Reach Section */}
      <OurReachSection company="M'Data Talk" themeColor="#6b21a8" />
      <Footer />
    </main>
  );
}
