export interface GroupCompanyMeta {
  id: number;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  role: string;
  link: string;
  color: string;
  borderColor: string;
  bgActive: string;
  hasRegionalLayer?: boolean;
}

export const GROUP_COMPANIES_DATA: GroupCompanyMeta[] = [
  {
    id: 1,
    name: "MSME Network Incorporation",
    shortName: "MSME Network",
    tagline: "Unlock Untapped Potentials",
    description:
      "A leading network organization dedicated to connecting MSMEs with resources, opportunities, and expertise to drive their growth and success.",
    role: "Identity, networking & ecosystem infrastructure",
    link: "/msme-network",
    color: "text-[#e86f28]",
    borderColor: "border-[#e86f28]",
    bgActive: "bg-[#e86f28]",
  },
  {
    id: 2,
    name: "M'Butic Incorporation",
    shortName: "M'Butic",
    tagline: "Welcome to the Future of Commerce",
    description:
      "A boutique consulting firm specializing in tailored solutions for MSMEs, focusing on strategic planning, operational efficiency, and market expansion.",
    role: "Commerce & marketplace infrastructure",
    link: "/msme-butic",
    color: "text-[#73bf43]",
    borderColor: "border-[#73bf43]",
    bgActive: "bg-[#73bf43]",
  },
  {
    id: 3,
    name: "MSME Development Consulting",
    shortName: "MSME Consulting",
    tagline: "Think the Unthought",
    description:
      "A consulting firm focused on providing comprehensive development services to MSMEs, including training, mentorship, and capacity building programs.",
    role: "Advisory, capacity building & implementation",
    link: "/msme-consulting",
    color: "text-[#0d9488]",
    borderColor: "border-[#0d9488]",
    bgActive: "bg-[#0d9488]",
  },
  {
    id: 4,
    name: "MSME Finance Incorporation",
    shortName: "MSME Finance",
    tagline: "Finance Re-Imagined",
    description:
      "A financial institution offering specialized financial products and services to support the funding needs of MSMEs, including loans and investment solutions.",
    role: "Financial ecosystem & capital infrastructure",
    link: "/msme-finance",
    color: "text-[#d4af37]",
    borderColor: "border-[#d4af37]",
    bgActive: "bg-[#d4af37]",
    hasRegionalLayer: true,
  },
  {
    id: 5,
    name: "M'IZITec Incorporation",
    shortName: "M'IZITec",
    tagline: "Driving Business Through Digital Power",
    description:
      "A technology company developing innovative tech solutions for MSMEs, including software, platforms, and digital tools to enhance their operations and competitiveness.",
    role: "Technology engineering & AI",
    link: "/msme-izitec",
    color: "text-[#4182C0]",
    borderColor: "border-[#4182C0]",
    bgActive: "bg-[#4182C0]",
    hasRegionalLayer: true,
  },
  {
    id: 6,
    name: "M'Media Incorporation",
    shortName: "M'Media",
    tagline: "Be Faster, Easier & Everywhere",
    description:
      "A media and communications agency specializing in creating impactful marketing and communication strategies for MSMEs, helping them build their brand and reach their target audience.",
    role: "Media, communication & engagement",
    link: "/msme-media",
    color: "text-[#30308E]",
    borderColor: "border-[#30308E]",
    bgActive: "bg-[#30308E]",
    hasRegionalLayer: true,
  },
  {
    id: 7,
    name: "M'DataTalk Incorporation",
    shortName: "M'DataTalk",
    tagline: "Unlock Insight Within Data",
    description:
      "A data analytics company providing insights and data-driven strategies to help MSMEs make informed decisions and optimize their performance.",
    role: "Data, analytics & intelligence",
    link: "/msme-datatalk",
    color: "text-[#6b21a8]",
    borderColor: "border-[#6b21a8]",
    bgActive: "bg-[#6b21a8]",
  },
];
