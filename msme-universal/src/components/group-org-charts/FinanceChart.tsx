const financeCompanies = [
  {
    title: "MSME Finance Management Company",
    icon: "🏢",
    color: "blue",
    description:
      "Professional fund and financial management services for MSME finance initiatives and investments.",
  },
  {
    title: "MSME Trade & Industrialisation Finance Company",
    icon: "🏭",
    color: "green",
    description:
      "Financing trade, industry and industrialisation initiatives to drive productivity, value chains and economic growth.",
  },
  {
    title: "M’Pay International",
    icon: "📱",
    color: "royal",
    description:
      "Global payment solutions and financial technology services for MSMEs across borders.",
  },
  {
    title: "MSW Fund Management",
    icon: "📈",
    color: "purple",
    description:
      "Investment management and wealth creation solutions for sustainable growth.",
  },
  {
    title: "MSME Insurance Company",
    icon: "🛡️",
    color: "orange",
    description:
      "Insurance solutions designed to protect MSMEs and support business resilience.",
  },
  {
    title: "M’Rating",
    icon: "🏅",
    color: "teal",
    description:
      "Credit rating and risk assessment solutions to enhance transparency and financial credibility.",
  },
];

const valueItems = [
  {
    title: "Financial Inclusion",
    icon: "👥",
    description: "Expanding access to financial services and opportunities for MSMEs.",
  },
  {
    title: "Growth & Impact",
    icon: "💰",
    description: "Driving sustainable economic growth and job creation across communities.",
  },
  {
    title: "Strategic Partnerships",
    icon: "🤝",
    description: "Building strong partnerships to unlock opportunities and create shared value.",
  },
  {
    title: "Risk Protection",
    icon: "🛡️",
    description: "Providing risk management and insurance solutions for business continuity.",
  },
  {
    title: "Innovation",
    icon: "🎯",
    description: "Investing in innovation and technology to future-proof MSMEs.",
  },
];

export default function MSMEFinanceOrgChart() {
  return (
    <section className="finance-chart-ui">
      <style>{css}</style>

      <header className="finance-header-card">
        <div className="finance-header-icon">🏛️</div>
        <div>
          <h1>MSME Finance</h1>
          <h2>Incorporation</h2>
        </div>
      </header>

      <div className="org-connectors">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="companies-grid">
        {financeCompanies.map((company) => (
          <article className={`finance-company-card ${company.color}`} key={company.title}>
            <span className="drop-dot" />
            <div className="company-icon">{company.icon}</div>
            <h3>{company.title}</h3>
            <div className="card-rule" />
            <p>{company.description}</p>
          </article>
        ))}
      </div>

      <footer className="value-strip">
        {valueItems.map((item) => (
          <div className="value-item" key={item.title}>
            <div className="value-icon">{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </footer>
    </section>
  );
}

const css = `
.finance-chart-ui {
  --blue: #005aa9;
  --blue-dark: #003f9f;
  --royal: #075eea;
  --green: #08853f;
  --purple: #552aa6;
  --orange: #ee7203;
  --teal: #008ca1;
  --pink: #d92b7c;
  --line: #0647b6;
  --text: #10192e;
  --muted: #44506a;
  width: min(1640px, 100%);
  margin: 0 auto;
  padding: 32px 30px 42px;
  background:
    radial-gradient(circle at 50% 0%, rgba(6, 71, 182, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 26px;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.finance-header-card {
  width: 720px;
  margin: 0 auto;
  padding: 28px 42px;
  border-radius: 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #075eea 0%, #003f9f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  box-shadow: 0 22px 46px rgba(0, 63, 159, 0.24);
}

.finance-header-icon {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.46);
  background: rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-size: 60px;
}

.finance-header-card h1,
.finance-header-card h2 {
  margin: 0;
  font-size: 50px;
  line-height: 1.05;
  font-weight: 850;
  letter-spacing: -0.045em;
  text-transform: uppercase;
}

.org-connectors {
  height: 120px;
  position: relative;
}

.root-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 72px;
  background: var(--line);
  transform: translateX(-50%);
}

.horizontal-line {
  position: absolute;
  left: 7.5%;
  right: 7.5%;
  top: 72px;
  height: 3px;
  background: var(--line);
  border-radius: 99px;
}

.companies-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 26px;
}

.finance-company-card {
  min-height: 390px;
  position: relative;
  padding: 28px 24px 30px;
  border-radius: 18px;
  border: 1px solid #dde7f4;
  background: rgba(255, 255, 255, 0.96);
  box-shadow: 0 18px 38px rgba(15, 58, 131, 0.1);
  text-align: center;
}

.drop-dot {
  position: absolute;
  left: 50%;
  top: -56px;
  width: 3px;
  height: 48px;
  background: var(--line);
  transform: translateX(-50%);
}

.drop-dot::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -8px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--line);
  transform: translateX(-50%);
}

.company-icon {
  width: 94px;
  height: 94px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-size: 44px;
  background: currentColor;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
}

.finance-company-card h3 {
  min-height: 94px;
  margin: 0;
  color: currentColor;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: -0.035em;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-rule {
  width: 100%;
  height: 2px;
  margin: 20px 0 22px;
  background: currentColor;
}

.finance-company-card p {
  margin: 0;
  color: var(--text);
  font-size: 17px;
  line-height: 1.55;
}

.finance-company-card.blue { color: var(--blue); }
.finance-company-card.green { color: var(--green); }
.finance-company-card.royal { color: var(--royal); }
.finance-company-card.purple { color: var(--purple); }
.finance-company-card.orange { color: var(--orange); }
.finance-company-card.teal { color: var(--teal); }
.finance-company-card.pink { color: var(--pink); }

.value-strip {
  margin-top: 40px;
  padding: 26px 28px;
  border: 1px solid #dfe8f4;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 14px 30px rgba(15, 58, 131, 0.07);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
}

.value-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 16px;
  align-items: start;
  padding-right: 20px;
  border-right: 1px solid #d8e2ef;
}

.value-item:last-child {
  border-right: none;
}

.value-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 34px;
  background: #edf4ff;
}

.value-item h4 {
  margin: 0 0 8px;
  font-size: 17px;
  color: var(--blue-dark);
}

.value-item p {
  margin: 0;
  color: var(--text);
  font-size: 14px;
  line-height: 1.45;
}

@media (max-width: 1320px) {
  .companies-grid {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 42px;
  }

  .org-connectors,
  .drop-dot {
    display: none;
  }

  .value-strip {
    grid-template-columns: repeat(2, 1fr);
  }

  .value-item {
    border-right: none;
  }
}

@media (max-width: 780px) {
  .finance-chart-ui {
    padding: 22px 16px 34px;
  }

  .finance-header-card {
    width: 100%;
    flex-direction: column;
    padding: 26px 20px;
    text-align: center;
  }

  .finance-header-card h1,
  .finance-header-card h2 {
    font-size: 34px;
  }

  .companies-grid,
  .value-strip {
    grid-template-columns: 1fr;
  }

  .finance-company-card {
    min-height: auto;
  }

  .finance-company-card h3 {
    min-height: auto;
  }

  .value-item {
    grid-template-columns: 58px 1fr;
    padding-right: 0;
  }

  .value-icon {
    width: 56px;
    height: 56px;
    font-size: 28px;
  }
}
`;















// 3 - M’Media Incorporation

import React from "react";

const mediaCompanies = [
  {
    title: "M’Event Inc",
    subtitle: "Events that Engage. Experiences that Inspire.",
    icon: "📅",
    color: "blue",
    description:
      "A full-service event management company delivering innovative and impactful experiences for businesses, communities and individuals.",
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
    icon: "📖",
    color: "purple",
    description:
      "A publishing company dedicated to creating high-quality content that educates, informs and empowers MSMEs and entrepreneurs.",
    services: [
      "Books & E-books",
      "Magazines & Journals",
      "Digital Content & Multimedia",
      "Research & Thought Leadership",
    ],
  },
];

const focusItems = [
  { title: "Innovation", icon: "🎯", description: "Creating innovative media, events and publications that drive change." },
  { title: "Impact", icon: "👥", description: "Delivering impactful experiences and content that empower audiences." },
  { title: "Collaboration", icon: "🤝", description: "Partnering with stakeholders to build meaningful connections." },
  { title: "Growth", icon: "📈", description: "Driving growth for MSMEs through knowledge, networks and visibility." },
  { title: "Global Reach", icon: "🌐", description: "Expanding reach to connect and inspire communities worldwide." },
];
