"use client";

import React from "react";
import { Smartphone, Monitor, Cloud } from "lucide-react";
import OrgChartTree, { OrgChartUnit } from "./OrgChartTree";

const izitecUnits: OrgChartUnit[] = [
  {
    title: "M’App Inc",
    icon: <Smartphone className="w-8 h-8" />,
    description: "Mobile Applications & Digital Solutions",
  },
  {
    title: "Digital Solutions Inc",
    icon: <Monitor className="w-8 h-8" />,
    description: "Custom Software Development",
  },
  {
    title: "IT Services Inc",
    icon: <Cloud className="w-8 h-8" />,
    description: "Infrastructure, Cloud & Managed Services",
  },
];

export default function MIZITecOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/logos/group-companies/izitec.png"
      rootLogoAlt="IZITec Logo"
      themeColor="#4182C0"
      units={izitecUnits}
      maxWidthClass="max-w-5xl"
    />
  );
}
