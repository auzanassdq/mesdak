"use client";

import { useMemo, useState } from "react";

const continentalCompanies = [
    {
        id: 1,
        name: "MSME Network Incorporation Africa",
        slogan: "Unlock Untapped Potentials",
        role: "Identity, networking & ecosystem infrastructure",
        color: "blue",
        icon: "◎",
    },
    {
        id: 2,
        name: "M'Butic Incorporation Africa",
        slogan: "Welcome to the Future of Commerce",
        role: "Commerce & marketplace infrastructure",
        color: "green",
        icon: "🛒",
    },
    {
        id: 3,
        name: "MSME Development Consulting Incorporation Africa",
        slogan: "Think the Unthought",
        role: "Advisory, capacity building & implementation",
        color: "purple",
        icon: "👥",
    },
    {
        id: 4,
        name: "MSME Finance Incorporation Africa",
        slogan: "Finance Re-imagined",
        role: "Financial ecosystem & capital infrastructure",
        color: "orange",
        icon: "$",
        hasRegionalLayer: true,
    },
    {
        id: 5,
        name: "M'IZITec Incorporation Africa",
        slogan: "Driving Business Through Digital Power",
        role: "Technology engineering & AI",
        color: "teal",
        icon: "⚡",
        hasRegionalLayer: true,
    },
    {
        id: 6,
        name: "M'Media Incorporation Africa",
        slogan: "Be Faster, Easier & Everywhere",
        role: "Media, communication & engagement",
        color: "red",
        icon: "▶",
        hasRegionalLayer: true,
    },
    {
        id: 7,
        name: "M'DataTalk Incorporation Africa",
        slogan: "Unlock Insight Within Data",
        role: "Data, analytics & intelligence",
        color: "darkGreen",
        icon: "▥",
    },
];

const regionalCompanies = continentalCompanies.filter((company) => company.hasRegionalLayer);

const regionalOptions = [
    "Central Africa",
    "East Africa",
    "North Africa",
    "Southern Africa",
    "West Africa",
    "Nigeria",
    "Ethiopia",
    "Egypt",
    "South Africa",
    "DRC",
];

const countries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cabo Verde", "Cameroon", "Central African Republic", "Chad", "Comoros", "Congo", "Côte d'Ivoire", "Djibouti", "DRC", "Egypt", "Equatorial Guinea", "Eritrea", "Eswatini", "Ethiopia", "Gabon", "Gambia", "Ghana", "Guinea", "Guinea-Bissau", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar", "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger", "Nigeria", "Rwanda", "São Tomé and Príncipe", "Senegal", "Seychelles", "Sierra Leone", "Somalia", "South Africa", "South Sudan", "Sudan", "Tanzania", "Togo", "Tunisia", "Uganda", "Zambia", "Zimbabwe"
];

const countryOperatingCompanies = [
    {
        name: "M'Network Incorporation",
        role: "Identity, network & ecosystem infrastructure",
        color: "blue",
        icon: "◎",
    },
    {
        name: "M'DataTalk Incorporation",
        role: "Data, analytics & intelligence",
        color: "darkGreen",
        icon: "▥",
    },
    {
        name: "M'Butic Incorporation",
        role: "Commerce & marketplace infrastructure",
        color: "green",
        icon: "🛒",
    },
    {
        name: "M'Pay",
        role: "Payments & financial solutions",
        color: "purple",
        icon: "▣",
    },
    {
        name: "MSME Consulting Incorporation",
        role: "Advisory, capacity building & implementation",
        color: "orange",
        icon: "👥",
    },
];

function cx(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
}

function SidebarLabel({ type, title, subtitle, note }: { type: string, title: string, subtitle: string, note?: string }) {
    return (
        <aside className={cx("sidebar-label", type)}>
            <div className="sidebar-icon">{type === "continental" ? "🌐" : type === "regional" ? "📍" : "🏢"}</div>
            <h3>{title}</h3>
            <div className="divider" />
            <p>{subtitle}</p>
            {note && <small>{note}</small>}
        </aside>
    );
}

function CompanyCard({ company }: { company: any }) {
    return (
        <article className={cx("company-card", company.color)}>
            <div className="company-topline">
                <div className="company-icon">{company.icon}</div>
                <span className="company-number">{company.id}</span>
            </div>
            <h4>{company.name}</h4>
            <div className="mini-line" />
            <p>{company.slogan}</p>
            <small>{company.role}</small>
        </article>
    );
}

function RegionalPanel({ company, selectedRegion, setSelectedRegion }: { company: any, selectedRegion: string, setSelectedRegion: (v: string) => void }) {
    return (
        <section className={cx("regional-panel", company.color)}>
            <header>
                <div className="company-icon">{company.icon}</div>
                <div>
                    <h4>{company.name}</h4>
                    <p>Regional Companies</p>
                </div>
            </header>

            <label className="select-row">
                <span>Select Region</span>
                <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
                    {regionalOptions.map((region) => (
                        <option key={region} value={region}>{region}</option>
                    ))}
                </select>
            </label>

            <div className="regional-menu-grid">
                {regionalOptions.map((region) => (
                    <button
                        type="button"
                        key={region}
                        className={cx("menu-pill", selectedRegion === region && "active")}
                        onClick={() => setSelectedRegion(region)}
                    >
                        <span>●</span>{region}
                    </button>
                ))}
            </div>
        </section>
    );
}

function CountryCompanyCard({ item, selectedCountry }: { item: any, selectedCountry: string }) {
    return (
        <article className={cx("country-company-card", item.color)}>
            <div className="company-icon small">{item.icon}</div>
            <h4>{item.name} {selectedCountry}</h4>
            <p>{item.role}</p>
        </article>
    );
}

export default function MSWHoldingStructureUI() {
    const [selectedCountry, setSelectedCountry] = useState("Kenya");
    const [selectedRegions, setSelectedRegions] = useState<Record<string, string>>({
        "MSME Finance Incorporation Africa": "West Africa",
        "M'IZITec Incorporation Africa": "East Africa",
        "M'Media Incorporation Africa": "Central Africa",
    });

    const selectedCountryEntities = useMemo(() => (
        countryOperatingCompanies.map((item) => ({ ...item, country: selectedCountry }))
    ), [selectedCountry]);

    const updateRegion = (companyName: string, value: string) => {
        setSelectedRegions((current: Record<string, string>) => ({ ...current, [companyName]: value }));
    };

    return (
        <main className="msw-structure-page">
            <style>{css}</style>

            <section className="structure-section continental-section">
                <SidebarLabel
                    type="continental"
                    title="CONTINENTAL LEVEL"
                    subtitle="7 Continental Companies"
                    note="Strategic ownership & oversight"
                />

                <div className="section-content">
                    <header className="holding-header">
                        <div className="africa-mark">Africa</div>
                        <div>
                            <h1>MSME Solutions Africa</h1>
                            <p>Continental Holding Company</p>
                        </div>
                    </header>

                    <div className="connector-line" />

                    <div className="continental-grid">
                        {continentalCompanies.map((company) => (
                            <CompanyCard key={company.name} company={company} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="structure-section regional-section">
                <SidebarLabel
                    type="regional"
                    title="REGIONAL LEVEL"
                    subtitle="Regional Companies"
                    note="Applies only to MSME Finance, M'IZITec and M'Media"
                />

                <div className="section-content regional-content">
                    {regionalCompanies.map((company) => (
                        <RegionalPanel
                            key={company.name}
                            company={company}
                            selectedRegion={selectedRegions[company.name]}
                            setSelectedRegion={(value) => updateRegion(company.name, value)}
                        />
                    ))}
                </div>
            </section>

            <section className="structure-section country-section">
                <SidebarLabel
                    type="country"
                    title="COUNTRY LEVEL"
                    subtitle="Country holding and operating companies"
                    note="Select one of the 54 African countries"
                />

                <div className="section-content country-content">
                    <div className="country-control-bar">
                        <div>
                            <h2>MSME Solutions {selectedCountry}</h2>
                            <p>Country Holding Company</p>
                        </div>

                        <label className="select-row country-select">
                            <span>Select Country</span>
                            <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <div className="country-menu-box">
                        {countries.map((country) => (
                            <button
                                type="button"
                                key={country}
                                className={cx("country-pill", selectedCountry === country && "active")}
                                onClick={() => setSelectedCountry(country)}
                            >
                                {country}
                            </button>
                        ))}
                    </div>

                    <div className="country-company-grid">
                        {selectedCountryEntities.map((item) => (
                            <CountryCompanyCard key={item.name} item={item} selectedCountry={selectedCountry} />
                        ))}
                    </div>
                </div>
            </section>

            <footer className="legend-bar">
                <span><i className="legend continental-dot" /> Continental Level</span>
                <span><i className="legend regional-dot" /> Regional Level</span>
                <span><i className="legend country-dot" /> Country Level</span>
                <span className="note">Only MSME Finance Incorporation Africa, M'IZITec Incorporation Africa and M'Media Incorporation Africa have regional companies.</span>
            </footer>
        </main>
    );
}

const css = `
:root {
  --navy: #072f67;
  --navy-2: #0b4d9c;
  --blue: #1769d8;
  --green: #2f963f;
  --dark-green: #0f6b3a;
  --purple: #5a3fa3;
  --orange: #f28a00;
  --teal: #00939b;
  --red: #dd2525;
  --soft-bg: #f5f8fc;
  --border: #d9e3f1;
  --text: #172033;
}

* { box-sizing: border-box; }

.msw-structure-page {
  width: min(1600px, 100%);
  margin: 0 auto;
  padding: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #f4f8fd 100%);
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.structure-section {
  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 16px;
  margin-bottom: 18px;
}

.sidebar-label {
  min-height: 190px;
  border-radius: 16px;
  padding: 22px 14px;
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 14px 30px rgba(0, 31, 77, 0.16);
}

.sidebar-label.continental { background: linear-gradient(160deg, #052557, #07428f); }
.sidebar-label.regional { background: linear-gradient(160deg, #075b2d, #129144); }
.sidebar-label.country { background: linear-gradient(160deg, #06438c, #126bcb); }

.sidebar-icon { font-size: 42px; line-height: 1; margin-bottom: 12px; }
.sidebar-label h3 { margin: 0; font-size: 20px; line-height: 1.2; }
.sidebar-label p { margin: 10px 0 0; font-weight: 700; font-size: 14px; }
.sidebar-label small { margin-top: 12px; font-size: 12px; line-height: 1.35; opacity: 0.9; }
.divider { width: 46px; height: 2px; background: rgba(255,255,255,0.65); margin: 16px 0 4px; }

.section-content {
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 14px 36px rgba(0, 31, 77, 0.08);
  padding: 18px;
}

.holding-header {
  width: fit-content;
  min-width: 580px;
  margin: 0 auto 16px;
  padding: 18px 34px;
  border-radius: 14px;
  background: linear-gradient(135deg, #052557, #0d4c95);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
}

.africa-mark {
  width: 78px;
  height: 58px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 13px;
}

.holding-header h1 { margin: 0; font-size: 40px; letter-spacing: -0.04em; }
.holding-header p { margin: 2px 0 0; text-transform: uppercase; letter-spacing: 0.08em; font-weight: 800; }

.connector-line {
  height: 20px;
  width: 2px;
  margin: -4px auto 8px;
  background: var(--navy);
}

.continental-grid {
  display: grid;
  grid-template-columns: repeat(7, minmax(130px, 1fr));
  gap: 16px;
}

.company-card,
.country-company-card {
  border: 1.5px solid currentColor;
  border-radius: 14px;
  padding: 18px 14px;
  background: #fff;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.company-topline {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.company-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  color: #fff;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 24px;
  background: currentColor;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.14);
}

.company-icon.small {
  width: 42px;
  height: 42px;
  font-size: 20px;
  margin-bottom: 12px;
}

.company-number {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  color: #fff;
  background: currentColor;
  display: grid;
  place-items: center;
  font-weight: 900;
}

.company-card h4,
.country-company-card h4 {
  margin: 0;
  font-size: 18px;
  line-height: 1.2;
  color: currentColor;
}

.company-card p,
.country-company-card p {
  margin: 10px 0 0;
  font-size: 13px;
  line-height: 1.35;
  color: #162238;
}

.company-card small {
  display: block;
  margin-top: auto;
  font-size: 11px;
  line-height: 1.35;
  color: #4d5c72;
}

.mini-line { width: 54px; height: 1px; background: currentColor; opacity: 0.45; margin: 14px 0 4px; }

.blue { color: var(--blue); }
.green { color: var(--green); }
.darkGreen { color: var(--dark-green); }
.purple { color: var(--purple); }
.orange { color: var(--orange); }
.teal { color: var(--teal); }
.red { color: var(--red); }

.regional-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.regional-panel {
  border: 1.5px solid currentColor;
  border-radius: 14px;
  padding: 18px;
  background: color-mix(in srgb, currentColor 7%, white);
}

.regional-panel header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.regional-panel h4 { margin: 0; font-size: 18px; color: #161f31; }
.regional-panel p { margin: 4px 0 0; color: currentColor; font-weight: 800; }

.select-row {
  display: grid;
  grid-template-columns: 110px 1fr;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 13px;
  font-weight: 700;
}

.select-row select {
  height: 40px;
  border-radius: 8px;
  border: 1px solid #9eb1cc;
  background: #fff;
  padding: 0 12px;
  font: inherit;
  color: #233149;
}

.regional-menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.menu-pill,
.country-pill {
  border: 1px solid color-mix(in srgb, currentColor 35%, #dfe8f4);
  background: #fff;
  border-radius: 10px;
  padding: 9px 10px;
  text-align: left;
  font-weight: 700;
  color: #263349;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease, border 0.15s ease;
}

.menu-pill span { color: currentColor; margin-right: 8px; }
.menu-pill:hover,
.country-pill:hover { transform: translateY(-1px); background: #f7fbff; }
.menu-pill.active,
.country-pill.active { border-color: currentColor; background: color-mix(in srgb, currentColor 10%, white); }

.country-control-bar {
  display: grid;
  grid-template-columns: 1fr 430px;
  gap: 20px;
  align-items: end;
  margin-bottom: 14px;
}

.country-control-bar h2 {
  margin: 0;
  color: var(--navy-2);
  font-size: 30px;
  letter-spacing: -0.03em;
}

.country-control-bar p { margin: 4px 0 0; font-weight: 800; color: #35587f; }
.country-select { margin: 0; grid-template-columns: 120px 1fr; }

.country-menu-box {
  max-height: 180px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px;
  background: #fbfdff;
  margin-bottom: 18px;
}

.country-pill {
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.country-company-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 14px;
}

.country-company-card {
  min-height: 170px;
  align-items: center;
  text-align: center;
}

.country-company-card h4 { font-size: 15px; }
.country-company-card p { font-size: 12px; }

.legend-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  padding: 16px 20px;
  font-weight: 700;
  font-size: 13px;
}

.legend {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 4px;
  margin-right: 8px;
  vertical-align: middle;
}

.continental-dot { background: var(--navy-2); }
.regional-dot { background: var(--green); }
.country-dot { background: #5fa9ed; }
.note {
  margin-left: auto;
  max-width: 620px;
  padding: 10px 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: #fff;
  color: #24405f;
}

@media (max-width: 1200px) {
  .structure-section { grid-template-columns: 1fr; }
  .sidebar-label { min-height: auto; }
  .continental-grid { grid-template-columns: repeat(3, 1fr); }
  .regional-content { grid-template-columns: 1fr; }
  .country-control-bar { grid-template-columns: 1fr; }
  .country-menu-box { grid-template-columns: repeat(3, 1fr); }
  .country-company-grid { grid-template-columns: repeat(2, 1fr); }
  .holding-header { min-width: auto; width: 100%; }
}

@media (max-width: 700px) {
  .msw-structure-page { padding: 12px; }
  .continental-grid,
  .country-company-grid { grid-template-columns: 1fr; }
  .country-menu-box { grid-template-columns: repeat(2, 1fr); }
  .holding-header { flex-direction: column; padding: 18px; }
  .holding-header h1 { font-size: 28px; }
  .select-row { grid-template-columns: 1fr; }
}
`;
