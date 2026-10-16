"use client";

import React from "react";
import { FileText, ClipboardList, Briefcase } from "lucide-react";
import OrgChartTree, { OrgChartUnit } from "./OrgChartTree";

const dataCompanies: OrgChartUnit[] = [
  {
    title: "M’D³MP Incorporation",
    icon: <FileText className="w-8 h-8" />,
    description: "Data Management, Mining & Predictive Analytics",
  },
  {
    title: "M’Doc Incorporation",
    icon: <ClipboardList className="w-8 h-8" />,
    description: "Document Management & Digital Solutions",
  },
  {
    title: "Business Services",
    icon: <Briefcase className="w-8 h-8" />,
    description: "Consulting, Support & Business Solutions",
  },
];

export default function MDataTalkOrgChart() {
  return (
    <OrgChartTree
      rootLogo="/images/mdatatalk-logo-white.png"
      rootLogoAlt="M'DataTalk Logo"
      themeColor="#6b21a8"
      units={dataCompanies}
      maxWidthClass="max-w-5xl"
    />
  );
}
