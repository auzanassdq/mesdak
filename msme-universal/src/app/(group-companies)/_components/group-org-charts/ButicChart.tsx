"use client";

import React from "react";
import { ShoppingBag, Tag, TrendingUp, Handshake } from "lucide-react";
import OrgChartTree, { OrgChartUnit } from "./OrgChartTree";

const buticUnits: OrgChartUnit[] = [
  {
    title: "M’Market Incorporation",
    icon: <ShoppingBag className="w-8 h-8" />,
    description: "Digital marketplace & retail",
  },
  {
    title: "M’SuperDeal Incorporation",
    icon: <Tag className="w-8 h-8" />,
    description: "Deals, promotions & offers",
  },
  {
    title: "M’Butic Business Solutions",
    icon: <TrendingUp className="w-8 h-8" />,
    description: "B2B commerce services",
    services: ["Sales", "Advertising", "Purchase", "Market entry"],
  },
  {
    title: "M’Trade Incorporation",
    icon: <Handshake className="w-8 h-8" />,
    description: "Verified Trade - Bankable Deals",
  },
];

export default function MButicOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/butic.png"
      rootLogoAlt="M'Butic Logo"
      themeColor="#73bf43"
      units={buticUnits}
      maxWidthClass="max-w-5xl"
    />
  );
}
