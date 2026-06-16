"use client";

import { useMemo, useState } from "react";
import NextLink from "next/link";
import { getRegionConfig } from "../lib/config";
import {
  Network,
  BarChart2,
  ShoppingCart,
  Wallet,
  Users,
  Building2,
  MapPin,
  CircleDollarSign,
  Zap,
  PlayCircle,
  Globe,
  ArrowRight,
  Link,
} from "lucide-react";
import {
  AfricaIcon,
  AsiaIcon,
  EuropeIcon,
  LatinAmericaIcon,
  NorthAmericaIcon,
  AseuIcon,
} from "@/components/icons/ContinentIcons";

const regionConfig = getRegionConfig();
const regionName = regionConfig.region;

const continentalCompanies = [
  {
    id: 1,
    name: `MSME Network Incorporation ${regionName}`,
    slogan: "Unlock Untapped Potentials",
    role: "Identity, networking & ecosystem infrastructure",
    color: "text-[#e86f28]",
    borderColor: "border-[#e86f28]",
    bgActive: "bg-[#e86f28]",
    link: "/msme-network",
    icon: <Network className="w-6 h-6" />,
  },
  {
    id: 2,
    name: `M'Butic Incorporation ${regionName}`,
    slogan: "Welcome to the Future of Commerce",
    role: "Commerce & marketplace infrastructure",
    color: "text-[#73bf43]",
    borderColor: "border-[#73bf43]",
    bgActive: "bg-[#73bf43]",
    link: "/msme-butic",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    id: 3,
    name: `MSME Development Consulting Incorporation ${regionName}`,
    slogan: "Think the Unthought",
    role: "Advisory, capacity building & implementation",
    color: "text-[#0d9488]",
    borderColor: "border-[#0d9488]",
    bgActive: "bg-[#0d9488]",
    link: "/msme-consulting",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 4,
    name: `MSME Finance Incorporation ${regionName}`,
    slogan: "Finance Re-imagined",
    role: "Financial ecosystem & capital infrastructure",
    color: "text-[#d4af37]",
    borderColor: "border-[#d4af37]",
    bgActive: "bg-[#d4af37]",
    link: "/msme-finance",
    icon: <CircleDollarSign className="w-6 h-6" />,
    hasRegionalLayer: true,
  },
  {
    id: 5,
    name: `M'IZITec Incorporation ${regionName}`,
    slogan: "Driving Business Through Digital Power",
    role: "Technology engineering & AI",
    color: "text-[#4182C0]",
    borderColor: "border-[#4182C0]",
    bgActive: "bg-[#4182C0]",
    icon: <Zap className="w-6 h-6" />,
    link: "/msme-izitec",
    hasRegionalLayer: true,
  },
  {
    id: 6,
    name: `M'Media Incorporation ${regionName}`,
    slogan: "Be Faster, Easier & Everywhere",
    role: "Media, communication & engagement",
    color: "text-[#30308E]",
    borderColor: "border-[#30308E]",
    bgActive: "bg-[#30308E]",
    link: "/msme-media",
    icon: <PlayCircle className="w-6 h-6" />,
    hasRegionalLayer: true,
  },
  {
    id: 7,
    name: `M'DataTalk Incorporation ${regionName}`,
    slogan: "Unlock Insight Within Data",
    role: "Data, analytics & intelligence",
    color: "text-[#6b21a8]",
    borderColor: "border-[#6b21a8]",
    bgActive: "bg-[#6b21a8]",
    link: "/msme-datatalk",
    icon: <BarChart2 className="w-6 h-6" />,
  },
];

const regionalCompanies = continentalCompanies.filter(
  (company) => company.hasRegionalLayer,
);

const regionalOptions = [
  "Central",
  "Nigeria",
  "East",
  "Ethiopia",
  "North",
  "Egypt",
  "Southern",
  "South Africa",
  "West",
  "DRC",
];

const countries = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cameroon",
  "Central African Republic",
  "Chad",
  "Comoros",
  "Congo",
  "Côte d'Ivoire",
  "Djibouti",
  "DRC",
  "Egypt",
  "Equatorial Guinea",
  "Eritrea",
  "Eswatini",
  "Ethiopia",
  "Gabon",
  "Gambia",
  "Ghana",
  "Guinea",
  "Guinea-Bissau",
  "Kenya",
  "Lesotho",
  "Liberia",
  "Libya",
  "Madagascar",
  "Malawi",
  "Mali",
  "Mauritania",
  "Mauritius",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Niger",
  "Nigeria",
  "Rwanda",
  "São Tomé and Príncipe",
  "Senegal",
  "Seychelles",
  "Sierra Leone",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Sudan",
  "Tanzania",
  "Togo",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
];

const countryOperatingCompanies = [
  {
    name: "M'Network Incorporation",
    role: "Identity, Network &\nEcosystem Infrastructure",
    color: "text-[#e86f28]",
    borderColor: "border-[#e86f28]",
    bgActive: "bg-[#e86f28]",
    icon: <Network className="w-6 h-6" />,
  },
  {
    name: "M'DataTalk Incorporation",
    role: "Data, Analytics &\nIntelligence",
    color: "text-[#6b21a8]",
    borderColor: "border-[#6b21a8]",
    bgActive: "bg-[#6b21a8]",
    icon: <BarChart2 className="w-6 h-6" />,
  },
  {
    name: "M'Butic Incorporation",
    role: "Commerce & Marketplace\nInfrastructure",
    color: "text-[#73bf43]",
    borderColor: "border-[#73bf43]",
    bgActive: "bg-[#73bf43]",
    icon: <ShoppingCart className="w-6 h-6" />,
  },
  {
    name: "M'Pay",
    role: "Payments & Financial\nSolutions",
    color: "text-[#0d9488]",
    borderColor: "border-[#0d9488]",
    bgActive: "bg-[#0d9488]",
    icon: <Wallet className="w-6 h-6" />,
  },
  {
    name: "M'Consulting Incorporation",
    role: "Advisory, Capacity\nBuilding & Implementation",
    color: "text-[#d4af37]",
    borderColor: "border-[#d4af37]",
    bgActive: "bg-[#d4af37]",
    icon: <Users className="w-6 h-6" />,
  },
];

function cx(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

const ContinentIcon = ({ regionId, className }: { regionId: string, className?: string }) => {
  switch (regionId) {
    case "africa": return <AfricaIcon className={className} color="white" />;
    case "asia": return <AsiaIcon className={className} color="white" />;
    case "europe": return <EuropeIcon className={className} color="white" />;
    case "latin-america": return <LatinAmericaIcon className={className} color="white" />;
    case "north-america": return <NorthAmericaIcon className={className} color="white" />;
    case "aseu": return <AseuIcon className={className} color="white" />;
    default: return <Globe className={className} strokeWidth={1.5} color="white" />;
  }
};

function SidebarLabel({
  type,
  title,
  subtitle,
  note,
  extra,
}: {
  type: string;
  title: string;
  subtitle: string;
  note?: string;
  extra?: React.ReactNode;
}) {
  return (
    <aside
      className={cx("flex-shrink-0 w-36 rounded-lg p-5 text-white text-center flex flex-col items-center justify-center shadow-lg relative",
        type === "continental"
          ? "bg-[#1B2956]"
          : type === "regional"
            ? "bg-[#115e34]"
            : "bg-[#1B2956]",
      )}
    >
      <div className="text-4xl leading-none mb-3">
        {type === "continental" ? (
          <ContinentIcon regionId={regionConfig.id} className="w-12 h-12 mx-auto opacity-90" />
        ) : type === "regional" ? (
          <MapPin className="w-12 h-12 mx-auto" />
        ) : (
          <Building2 className="w-10 h-10 mx-auto" />
        )}
      </div>
      <h3 className="m-0 text-[15px] font-bold leading-tight uppercase">
        {title}
      </h3>
      {/* <div className="w-8 h-px bg-white/50 my-3" />
      <p className="m-0 font-medium text-xs whitespace-pre-wrap">{subtitle}</p> */}
      {/* {note && <small className="mt-5 text-[11px] opacity-80">{note}</small>} */}
      {/* {extra && <div className="mt-auto pt-5 text-[11px] font-bold w-full">{extra}</div>} */}
    </aside>
  );
}

function CompanyCard({ company }: { company: any }) {
  return (
    <article
      className={cx("h-[250px] border rounded-xl flex flex-col bg-white min-h-[150px] shadow-sm relative",
        company.borderColor,
        company.color,
      )}
    >
      {/* Number block in top right */}
      <div
        className={cx("absolute top-0 right-0 w-[30px] h-7 flex items-center justify-center text-white text-[13px] font-bold rounded-bl-xl rounded-tr-[11px]",
          company.bgActive,
        )}
      >
        {company.id}
      </div>

      <div className="p-4 flex flex-col h-full items-center text-center">
        <div
          className={cx("w-11 h-11 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-sm mb-4",
            company.bgActive,
          )}
        >
          {company.icon}
        </div>

        <h4 className="m-0 text-[13px] font-bold leading-snug px-1 text-current">
          {company.name}
        </h4>
        <div className="flex-grow" />
        
        {company.link && (
          <NextLink
            href={company.link}
            className={cx("w-full mt-4 py-2 rounded-lg font-bold text-[12px] uppercase tracking-wider transition-all shadow-sm flex justify-center items-center gap-1.5",
              company.bgActive,
              "text-white hover:opacity-90 cursor-pointer"
            )}
          >
            Visit
            <span className="text-sm leading-none mb-0.5">→</span>
          </NextLink>
        )}
      </div>

    </article>
  );
}

function RegionalPanel({
  company,
  selectedRegion,
  setSelectedRegion,
}: {
  company: any;
  selectedRegion: string;
  setSelectedRegion: (v: string) => void;
}) {
  return (
    <article
      className={cx("border rounded-xl p-5 flex flex-col bg-white shadow-sm relative",
        company.borderColor,
      )}
    >
      {/* Dashed line coming from top */}
      {/* <div className={cx("absolute -top-[21px] left-1/2 -translate-x-1/2 w-px h-5 border-l border-dashed", company.borderColor)} />
            <div className={cx("absolute -top-1.5 left-1/2 -translate-x-1/2 text-[10px] leading-none", company.color)}>▼</div> */}

      <header className="flex items-center gap-3 mb-5">
        <div
          className={cx("w-11 h-11 rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-sm",
            company.bgActive,
          )}
        >
          {company.icon}
        </div>
        <div>
          <h4 className="m-0 text-[13px] font-bold leading-snug text-[#172033]">
            {company.name}
          </h4>
          <p
            className={cx("m-0 text-[11px] font-semibold mt-0.5",
              company.color,
            )}
          >
            Regional Companies
          </p>
        </div>
      </header>

      <div className="flex items-center gap-3 mb-5">
        <span className="text-[11px] font-bold text-[#172033]">
          Select Region
        </span>
        <div
          className={cx("flex-grow border rounded-lg bg-white px-3 py-2 text-[11px] font-medium shadow-sm relative",
            company.borderColor,
          )}
        >
          <select
            className="w-full border-none outline-none bg-transparent text-[#172033] cursor-pointer appearance-none relative z-10 rounded-2xl"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="Select Region">Select Region</option>
            {regionalOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-0">
            <svg
              className="w-3.5 h-3.5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-2 pb-2">
        <button
          disabled={!selectedRegion || selectedRegion === "Select Region"}
          className={cx("w-full py-3 rounded-lg font-bold text-[13px] uppercase tracking-wider transition-all shadow-md flex justify-center items-center gap-2",
            selectedRegion && selectedRegion !== "Select Region"
              ? cx(
                  company.bgActive,
                  "text-white hover:opacity-90 cursor-pointer",
                )
              : "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none",
          )}
        >
          Visit{" "}
          {selectedRegion && selectedRegion !== "Select Region"
            ? selectedRegion
            : "Region"}
          <span className="text-lg leading-none mb-0.5">→</span>
        </button>
      </div>
    </article>
  );
}

function CountryCompanyCard({
  item,
  selectedCountry,
}: {
  item: any;
  selectedCountry: string;
}) {
  const displayName =
    selectedCountry && selectedCountry !== "Select a Country"
      ? `${selectedCountry}`
      : "[Country Name]";
  return (
    <article
      className={cx("border rounded-xl p-4 flex flex-col items-center text-center bg-white min-h-[180px] shadow-sm",
        item.borderColor,
        item.color,
      )}
    >
      <div
        className={cx("w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-md mb-3",
          item.bgActive,
        )}
      >
        {item.icon}
      </div>
      <h4 className="m-0 text-[13px] font-bold leading-relaxed">
        {item.name}
        <br />
        {displayName}
      </h4>
    </article>
  );
}

export default function MSWHoldingStructureUI() {
  const [selectedCountry, setSelectedCountry] = useState("Select a Country");
  const [selectedRegions, setSelectedRegions] = useState<
    Record<string, string>
  >({
    [`MSME Finance Incorporation ${regionName}`]: "Select Region",
    [`M'IZITec Incorporation ${regionName}`]: "Select Region",
    [`M'Media Incorporation ${regionName}`]: "Select Region",
  });

  const selectedCountryEntities = useMemo(
    () =>
      countryOperatingCompanies.map((item) => ({
        ...item,
        country: selectedCountry,
      })),
    [selectedCountry],
  );

  const updateRegion = (companyName: string, value: string) => {
    setSelectedRegions((current: Record<string, string>) => ({
      ...current,
      [companyName]: value,
    }));
  };

  return (
    <main className="w-full max-w-[1600px] mx-auto p-5 bg-white text-[#172033] font-sans">
      {/* CONTINENTAL LEVEL */}
      <section className="flex gap-4 mb-5">
        <SidebarLabel
          type="continental"
          title="CONTINENTAL LEVEL"
          subtitle="7 Continental Companies"
          note="Strategic Ownership & Oversight"
        />

        <div className="flex-grow bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
          <header className="bg-white text-white rounded-xl flex items-center justify-center px-12 py-4 w-fit mx-auto shadow-lg relative z-10 border border-gray-100">
            <img
              src={regionConfig.logo}
              alt={`${regionConfig.name} Logo`}
              className="h-[70px] w-auto object-contain"
            />
          </header>

          <div className="grid grid-cols-7 gap-0 w-full relative z-0 mt-4">
            {Array.from({ length: 7 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-full relative"
              >
                {i === 0 && (
                  <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#1B2956]" />
                )}
                {i === 6 && (
                  <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#1B2956]" />
                )}
                {i > 0 && i < 6 && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1B2956]" />
                )}

                <div className="w-0.5 h-6 bg-[#1B2956] relative z-10" />
                <div className="text-[#1B2956] text-[10px] leading-none -mt-[2px] scale-x-150 relative z-10">
                  ▼
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-0 relative mt-1">
            {continentalCompanies.map((company) => (
              <div key={company.name} className="px-1.5">
                <CompanyCard company={company} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGIONAL LEVEL */}
      <section className="flex gap-4 mb-5 relative">
        <SidebarLabel
          type="regional"
          title="REGIONAL LEVEL"
          subtitle="Regional Companies (For 3 Continental Companies Only)"
          // extra={
          //     <div className="flex items-center gap-2 text-left justify-center border-t border-white/20 pt-4 w-full rounded-2xl">
          //         Select a Region <span className="text-lg font-light tracking-widest relative top-px">---&gt;</span><br/>from the Menu
          //     </div>
          // }
        />

        <div className="flex-grow flex gap-4 bg-white border border-gray-100 p-4 rounded-xl shadow-sm ">
          <div className="grid grid-cols-3 gap-5 w-full">
            {regionalCompanies.map((company) => (
              <RegionalPanel
                key={company.name}
                company={company}
                selectedRegion={
                  selectedRegions[company.name] || "Select Region"
                }
                setSelectedRegion={(value) => updateRegion(company.name, value)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* COUNTRY LEVEL */}
      <section className="flex gap-4 mb-8">
        <SidebarLabel
          type="country"
          title="COUNTRY LEVEL"
          subtitle="Country Holding Companies & Operating Companies"
          // extra={
          //     <div className="flex items-center gap-2 text-left justify-center border-t border-white/20 pt-4 w-full rounded-2xl">
          //         Select a Country <span className="text-lg font-light tracking-[0.1em]">--&gt;</span><br/>from the Menu
          //     </div>
          // }
        />

        <div className="flex items-center gap-8 bg-[#eef4fb] border border-[#d2e3f5] p-6 rounded-2xl shadow-sm">
          {/* Left: Country Selector */}
          <div className="w-[440px] flex flex-col flex-shrink-0">
            <div className=" items-center justify-between mb-2">
              <div className="flex flex-col items-center gap-3">
                <span className="text-[#1B2956] font-medium text-sm">
                  Select Country
                </span>

                <div className="border border-gray-300 rounded-lg bg-white px-3 py-1.5 text-xs shadow-sm relative">
                  <select
                    className="w-[170px] border-none outline-none bg-transparent font-medium text-gray-700 cursor-pointer appearance-none relative z-10 rounded-2xl"
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="Select a Country">
                      Select Country
                    </option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none z-0">
                    <svg
                      className="w-3.5 h-3.5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
         
            </div>
          </div>

          {/* Right: Operating Companies */}
          <div className="flex-grow flex flex-col justify-end">
            <header className="mb-5 text-center">
              <h2 className="m-0 text-xl font-bold text-[#1B2956] tracking-wide">
                MSME Solutions{" "}
                {selectedCountry && selectedCountry !== "Select a Country"
                  ? `${selectedCountry}`
                  : "[Country Name]"}
              </h2>
              <p className="m-0 text-sm font-medium text-[#e86f28] mt-0.5">
                Country Holding Company
              </p>
            </header>
            <div className="grid grid-cols-5 gap-0 w-full mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center w-full relative"
                >
                  {i === 0 && (
                    <div className="absolute top-0 left-1/2 right-0 h-0.5 bg-[#1B2956]" />
                  )}
                  {i === 4 && (
                    <div className="absolute top-0 left-0 right-1/2 h-0.5 bg-[#1B2956]" />
                  )}
                  {i > 0 && i < 4 && (
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#1B2956]" />
                  )}

                  <div className="w-0.5 h-5 bg-[#1B2956] relative z-10" />
                  <div className="text-[#1B2956] text-[10px] leading-none -mt-1 scale-x-150 relative z-10">
                    ▼
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-0">
              {selectedCountryEntities.map((item) => (
                <div key={item.name} className="px-1.5">
                  <CountryCompanyCard
                    item={item}
                    selectedCountry={selectedCountry}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
