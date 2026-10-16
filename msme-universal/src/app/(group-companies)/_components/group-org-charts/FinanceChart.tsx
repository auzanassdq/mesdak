"use client";

import React from "react";
import { Building2, Factory, Smartphone, TrendingUp, Shield, Award, Users, Coins, Handshake, ShieldAlert, Target } from "lucide-react";
import OrgChartTree, { OrgChartUnit, OrgChartValueItem } from "./OrgChartTree";

const financeCompanies: OrgChartUnit[] = [
  {
    title: "MSME Finance Management Company",
    icon: <Building2 className="w-8 h-8" />,
    description: "Financial services for MSME finance initiatives.",
  },
  {
    title: "MSME Trade & Industrialisation Finance Company",
    icon: <Factory className="w-8 h-8" />,
    description: "Financing trade, industry and industrialisation initiatives.",
  },
  {
    title: "M’Pay International",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Global payment solutions and financial technology services for MSMEs across borders.",
  },
  {
    title: "MSW Asset Management",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "Financing MSME Growth & Development Globally.",
  },
  {
    title: "MSME Insurance Company",
    icon: <Shield className="w-8 h-8" />,
    description: "Insurance solutions designed to protect MSMEs and support business resilience.",
  },
  {
    title: "M’Rating",
    icon: <Award className="w-8 h-8" />,
    description: "Credit rating and risk assessment solutions to enhance transparency and financial credibility.",
  },
];

const valueItems: OrgChartValueItem[] = [
  {
    title: "Financial Inclusion",
    icon: <Users className="w-6 h-6" />,
    description: "Expanding access to financial services and opportunities for MSMEs.",
  },
  {
    title: "Growth & Impact",
    icon: <Coins className="w-6 h-6" />,
    description: "Driving sustainable economic growth and job creation across communities.",
  },
  {
    title: "Strategic Partnerships",
    icon: <Handshake className="w-6 h-6" />,
    description: "Building strong partnerships to unlock opportunities and create shared value.",
  },
  {
    title: "Risk Protection",
    icon: <ShieldAlert className="w-6 h-6" />,
    description: "Providing risk management and insurance solutions for business continuity.",
  },
  {
    title: "Innovation",
    icon: <Target className="w-6 h-6" />,
    description: "Investing in innovation and technology to future-proof MSMEs.",
  },
];

export default function MSMEFinanceOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/finance.png"
      rootLogoAlt="MFI Logo"
      themeColor="#d4af37"
      units={financeCompanies}
      valueItems={valueItems}
      maxWidthClass="max-w-[1500px]"
      isScrollable={true}
    />
  );
}
