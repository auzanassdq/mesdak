"use client";

import React from "react";
import { BookOpen, Building2, Rocket, Briefcase } from "lucide-react";
import OrgChartTree, { OrgChartUnit } from "./OrgChartTree";

const networkUnits: OrgChartUnit[] = [
  {
    title: "M’Business Directory Incorporation",
    icon: <BookOpen className="w-8 h-8" />,
    description: "Global business directory & listings",
  },
  {
    title: "M’Corporation Incorporation",
    icon: <Building2 className="w-8 h-8" />,
    description: "Corporate networking & entity management",
  },
  {
    title: "M’Venture Studio Corporation",
    icon: <Rocket className="w-8 h-8" />,
    description: "Startup incubation & acceleration",
  },
  {
    title: "M’Business Services Incorporation",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Professional services & support",
    services: ["Advertising", "Branding", "Communication", "Hiring", "Marketing", "Sales"],
  },
];

export default function MSMENetworkOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/network.png"
      rootLogoAlt="MSME Network Logo"
      themeColor="#e86f28"
      units={networkUnits}
      maxWidthClass="max-w-6xl"
    />
  );
}
