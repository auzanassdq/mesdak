
const dataCompanies = [
  {
    title: "M’D³MP Incorporation",
    icon: "📄",
    description: "Data Management, Mining & Predictive Analytics",
  },
  {
    title: "M’Doc Incorporation",
    icon: "📋",
    description: "Document Management & Digital Solutions",
  },
  {
    title: "Business Services",
    icon: "💼",
    description: "Consulting, Support & Business Solutions",
  },
];

export default function MDataTalkOrgChart() {
  return (
    <section className="mdatalk-chart-ui">
      <style>{css}</style>

      <header className="mdatalk-header">
        <div className="header-icon">📊</div>
        <div>
          <h1>M’DataTalk Incorporation</h1>
          <div className="header-rule" />
          <p>Data. Insights. Solutions.</p>
        </div>
      </header>

      <div className="org-lines">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="company-grid">
        {dataCompanies.map((company) => (
          <article className="company-card" key={company.title}>
            <span className="drop-dot" />
            <div className="company-icon">{company.icon}</div>
            <h2>{company.title}</h2>
            <div className="card-rule" />
            <p>{company.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const css = `
.mdatalk-chart-ui {
  --blue: #075eea;
  --blue-dark: #063f9c;
  --line: #0c4cbf;
  --text: #10192e;

  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 44px 42px 64px;
  background:
    radial-gradient(circle at 50% 0%, rgba(7, 94, 234, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 28px;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.mdatalk-header {
  width: 720px;
  margin: 0 auto;
  padding: 34px 44px;
  border-radius: 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #075eea 0%, #073b92 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  box-shadow: 0 22px 46px rgba(7, 59, 146, 0.24);
}

.header-icon {
  width: 120px;
  height: 120px;
  border-radius: 999px;
  border: 2px solid rgba(255,255,255,0.5);
  background: rgba(255,255,255,0.08);
  display: grid;
  place-items: center;
  font-size: 58px;
}

.mdatalk-header h1 {
  margin: 0;
  font-size: 52px;
  line-height: 1.08;
  font-weight: 850;
  letter-spacing: -0.045em;
}

.header-rule {
  width: 100%;
  height: 2px;
  margin: 18px 0 14px;
  background: rgba(255,255,255,0.75);
}

.mdatalk-header p {
  margin: 0;
  font-size: 28px;
  color: rgba(255,255,255,0.92);
}

.org-lines {
  height: 130px;
  position: relative;
}

.root-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 82px;
  background: var(--line);
  transform: translateX(-50%);
}

.horizontal-line {
  position: absolute;
  left: 17%;
  right: 17%;
  top: 82px;
  height: 3px;
  background: var(--line);
  border-radius: 99px;
}

.company-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 58px;
  max-width: 1120px;
  margin: 0 auto;
}

.company-card {
  position: relative;
  min-height: 360px;
  padding: 34px 34px 38px;
  border-radius: 22px;
  background: #ffffff;
  border: 1px solid #dfe8f4;
  box-shadow: 0 18px 42px rgba(15, 58, 131, 0.12);
  text-align: center;
  overflow: hidden;
}

.company-card::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 22px;
  background: linear-gradient(135deg, #075eea, #073b92);
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
  margin: 0 auto 24px;
  border-radius: 50%;
  color: #ffffff;
  background: linear-gradient(135deg, #075eea, #073b92);
  display: grid;
  place-items: center;
  font-size: 42px;
  box-shadow: 0 14px 30px rgba(7, 59, 146, 0.18);
}

.company-card h2 {
  margin: 0;
  color: var(--blue-dark);
  font-size: 36px;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.card-rule {
  width: 100%;
  height: 2px;
  margin: 24px 0 20px;
  background: var(--line);
}

.company-card p {
  margin: 0;
  color: var(--text);
  font-size: 21px;
  line-height: 1.45;
}

@media (max-width: 1000px) {
  .org-lines,
  .drop-dot {
    display: none;
  }

  .mdatalk-header {
    width: 100%;
  }

  .company-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

@media (max-width: 640px) {
  .mdatalk-chart-ui {
    padding: 24px 16px 36px;
  }

  .mdatalk-header {
    flex-direction: column;
    text-align: center;
    padding: 28px 22px;
  }

  .mdatalk-header h1 {
    font-size: 36px;
  }

  .mdatalk-header p {
    font-size: 21px;
  }

  .company-card h2 {
    font-size: 30px;
  }
}
`;








// 5 - M’Network

import React from "react";

const networkUnits = [
  {
    title: "M’Business Directory Incorporation",
    icon: "💼",
  },
  {
    title: "M’Corporation Incorporation",
    icon: "🏢",
  },
  {
    title: "M’Venture Studio Corporation",
    icon: "🚀",
  },
  {
    title: "M’Business Services Incorporation",
    icon: "🤝",
    services: ["Advertising", "Branding", "Communication", "Hiring", "Marketing", "Sales"],
  },
];
