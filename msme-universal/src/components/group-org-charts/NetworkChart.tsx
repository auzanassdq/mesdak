
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

export default function MSMENetworkOrgChart() {
  return (
    <section className="network-chart-ui">
      <style>{css}</style>

      <header className="network-header-card">
        <div className="network-header-icon">◎</div>
        <h1>MSME Network Incorporation</h1>
      </header>

      <div className="management-card">
        <div className="management-icon">👥</div>
        <ul>
          <li>Users Management</li>
          <li>M’Agent Management</li>
          <li>M’Advisor Management</li>
        </ul>
      </div>

      <div className="org-lines">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="network-grid">
        {networkUnits.map((unit) => (
          <article className="network-unit" key={unit.title}>
            <div className="unit-icon">{unit.icon}</div>
            <h2>{unit.title}</h2>

            {unit.services && (
              <aside className="services-card">
                {unit.services.map((service) => (
                  <div className="service-row" key={service}>
                    <span>•</span>
                    <p>{service}</p>
                  </div>
                ))}
              </aside>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

const css = `
.network-chart-ui {
  --blue: #075eea;
  --blue-dark: #063f9c;
  --green: #2f8f35;
  --line: #0c4cbf;
  --text: #10192e;

  width: min(1500px, 100%);
  margin: 0 auto;
  padding: 38px 42px 64px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 28px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
}

.network-header-card {
  width: 600px;
  margin: 0 auto;
  padding: 26px 40px;
  border-radius: 18px;
  background: linear-gradient(135deg, #075eea, #073b92);
  color: white;
  display: flex;
  align-items: center;
  gap: 28px;
  box-shadow: 0 22px 46px rgba(7, 59, 146, 0.24);
}

.network-header-icon {
  width: 96px;
  height: 96px;
  border-radius: 999px;
  border: 3px solid rgba(255,255,255,0.75);
  display: grid;
  place-items: center;
  font-size: 52px;
}

.network-header-card h1 {
  margin: 0;
  font-size: 42px;
  line-height: 1.08;
  font-weight: 850;
  letter-spacing: -0.04em;
}

.management-card {
  width: 390px;
  margin: 46px auto 0;
  transform: translateX(-210px);
  padding: 24px 30px;
  border-radius: 14px;
  background: linear-gradient(135deg, #8a8a8a, #5d5d5d);
  color: white;
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 22px;
  align-items: center;
  box-shadow: 0 18px 36px rgba(0,0,0,0.18);
}

.management-icon {
  width: 72px;
  height: 72px;
  border-radius: 999px;
  border: 2px solid rgba(255,255,255,0.75);
  display: grid;
  place-items: center;
  font-size: 34px;
}

.management-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.management-card li {
  font-size: 18px;
  line-height: 1.7;
  font-weight: 700;
}

.org-lines {
  height: 120px;
  position: relative;
}

.root-line {
  position: absolute;
  left: 50%;
  top: -180px;
  width: 3px;
  height: 250px;
  background: var(--line);
}

.horizontal-line {
  position: absolute;
  left: 8%;
  right: 8%;
  top: 72px;
  height: 3px;
  background: var(--line);
  border-radius: 999px;
}

.network-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 34px;
  align-items: start;
}

.network-unit {
  position: relative;
  min-height: 138px;
  padding: 26px 28px;
  border-radius: 14px;
  background: linear-gradient(135deg, #075eea, #073b92);
  color: white;
  display: grid;
  grid-template-columns: 86px 1fr;
  align-items: center;
  gap: 22px;
  box-shadow: 0 18px 38px rgba(7, 59, 146, 0.18);
}

.network-unit::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -54px;
  width: 3px;
  height: 54px;
  background: var(--line);
}

.network-unit::after {
  content: "";
  position: absolute;
  left: 50%;
  top: -62px;
  width: 16px;
  height: 16px;
  border-radius: 999px;
  background: var(--line);
  transform: translateX(-50%);
}

.unit-icon {
  width: 76px;
  height: 76px;
  border-radius: 999px;
  background: white;
  color: var(--blue-dark);
  display: grid;
  place-items: center;
  font-size: 34px;
}

.network-unit h2 {
  margin: 0;
  font-size: 27px;
  line-height: 1.2;
  letter-spacing: -0.035em;
}

.services-card {
  position: absolute;
  top: 168px;
  right: 0;
  width: 330px;
  padding: 22px 26px;
  border-radius: 14px;
  background: linear-gradient(135deg, #3e9a3d, #25752e);
  box-shadow: 0 18px 34px rgba(30, 100, 40, 0.2);
}

.services-card::before {
  content: "";
  position: absolute;
  top: -46px;
  left: 50%;
  width: 3px;
  height: 46px;
  background: var(--line);
}

.service-row {
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255,255,255,0.22);
}

.service-row:last-child {
  border-bottom: none;
}

.service-row p {
  margin: 0;
  font-size: 18px;
  font-weight: 750;
}

@media (max-width: 1100px) {
  .network-header-card {
    width: 100%;
  }

  .management-card {
    transform: none;
  }

  .org-lines,
  .network-unit::before,
  .network-unit::after,
  .services-card::before {
    display: none;
  }

  .network-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .services-card {
    position: static;
    grid-column: 1 / -1;
    width: 100%;
    margin-top: 24px;
  }
}

@media (max-width: 700px) {
  .network-chart-ui {
    padding: 24px 16px 40px;
  }

  .network-header-card,
  .management-card,
  .network-unit {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .network-header-icon,
  .management-icon,
  .unit-icon {
    margin: 0 auto;
  }

  .network-grid {
    grid-template-columns: 1fr;
  }

  .network-header-card h1 {
    font-size: 34px;
  }
}
`;

































// 6 - M’Butic Incorporation

import React from "react";

const buticUnits = [
  {
    title: "M’Market Incorporation",
    icon: "🛍️",
  },
  {
    title: "M’SuperDeal Incorporation",
    icon: "🏷️",
  },
  {
    title: "M’Butic Business Solutions",
    icon: "📈",
    services: ["Sales", "Advertising", "Purchase", "Market entry"],
  },
];
