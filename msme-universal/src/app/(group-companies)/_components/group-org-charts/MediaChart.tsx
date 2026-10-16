"use client";

import React from "react";
import { Calendar, BookOpen, Target, Users, Handshake, TrendingUp, Globe } from "lucide-react";
import OrgChartTree, { OrgChartUnit, OrgChartValueItem } from "./OrgChartTree";

const mediaCompanies: OrgChartUnit[] = [
  {
    title: "M’Event Inc",
    subtitle: "Events that Engage. Experiences that Inspire.",
    icon: <Calendar className="w-10 h-10" />,
    description: "A full-service event management company delivering innovative and impactful experiences for businesses, communities and individuals.",
    services: [
      "Corporate Events",
      "Conferences & Seminars",
      "Exhibitions & Trade Shows",
      "Brand Activations & Experiential Marketing",
    ],
  },
  {
    title: "MSME Publishing Inc",
    subtitle: "Publishing Knowledge. Empowering MSMEs.",
    icon: <BookOpen className="w-10 h-10" />,
    description: "A publishing company dedicated to creating high-quality content that educates, informs and empowers MSMEs and entrepreneurs.",
    services: [
      "Books & E-books",
      "Magazines & Journals",
      "Digital Content & Multimedia",
      "Research & Thought Leadership",
    ],
  },
];

const focusItems: OrgChartValueItem[] = [
  { title: "Innovation", icon: <Target className="w-6 h-6" />, description: "Creating innovative media, events and publications that drive change." },
  { title: "Impact", icon: <Users className="w-6 h-6" />, description: "Delivering impactful experiences and content that empower audiences." },
  { title: "Collaboration", icon: <Handshake className="w-6 h-6" />, description: "Partnering with stakeholders to build meaningful connections." },
  { title: "Growth", icon: <TrendingUp className="w-6 h-6" />, description: "Driving growth for MSMEs through knowledge, networks and visibility." },
  { title: "Global Reach", icon: <Globe className="w-6 h-6" />, description: "Expanding reach to connect and inspire communities worldwide." },
];

export default function MMediaOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/media.png"
      rootLogoAlt="Media Logo"
      themeColor="#30308E"
      units={mediaCompanies}
      valueItems={focusItems}
      valuesTitle="Core Values & Focus Areas"
      maxWidthClass="max-w-6xl"
    />
  );
}
