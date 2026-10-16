"use client";

import React from "react";
import { Landmark, BarChart3 } from "lucide-react";
import { AfricaIcon, AsiaIcon, LatinAmericaIcon, NorthAmericaIcon, AseuIcon, EuropeIcon } from "@/components/icons/ContinentIcons";
import OrgChartTree, { OrgChartUnit } from "./OrgChartTree";

const developmentEntities: OrgChartUnit[] = [
  {
    title: "Africa Development Incorporation",
    icon: <AfricaIcon className="w-8 h-8" />,
    description: "Sustainable development & business growth in Africa.",
  },
  {
    title: "Asia Development Incorporation",
    icon: <AsiaIcon className="w-8 h-8" />,
    description: "Fostering economic growth & partnerships in Asia.",
  },
  {
    title: "Latin America Development Incorporation",
    icon: <LatinAmericaIcon className="w-8 h-8" />,
    description: "Accelerating initiatives & opportunities in LatAm.",
  },
  {
    title: "North America Development Incorporation",
    icon: <NorthAmericaIcon className="w-8 h-8" />,
    description: "Supporting innovation & growth across NA markets.",
  },
  {
    title: "ASEU Development Incorporation",
    icon: <AseuIcon className="w-8 h-8" />,
    description: "Advancing economic collaboration across ASEU.",
  },
  {
    title: "Europe Development Incorporation",
    icon: <EuropeIcon className="w-8 h-8" />,
    description: "Business transformation & sustainable growth in EU.",
  },
];

const serviceEntities: OrgChartUnit[] = [
  {
    title: "M’Government Consulting Corporation",
    icon: <Landmark className="w-8 h-8" />,
    description: "Policy advisory, public-sector & governance solutions.",
  },
  {
    title: "I-ERP Consulting Corporation",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Enterprise resource planning & digital transformation.",
    services: ["Sales", "Advertising", "Purchase", "Market Entry"],
  },
];

const allEntities: OrgChartUnit[] = [...developmentEntities, ...serviceEntities];

export default function MSMEConsultingGlobalOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/consulting.png"
      rootLogoAlt="Consulting Logo"
      themeColor="#0d9488"
      units={allEntities}
      maxWidthClass="max-w-[1600px]"
      columnsClass="grid-cols-8"
      isScrollable={true}
    />
  );
}
