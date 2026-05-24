
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

export default function MButicOrgChart() {
  return (
    <section className="mbutic-chart-ui">
      <style>{css}</style>

      <header className="mbutic-header-card">
        <div className="mbutic-header-icon">🛒</div>
        <h1>M’Butic Incorporation</h1>
      </header>

      <div className="org-lines">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="butic-grid">
        {buticUnits.map((unit) => (
          <article className="butic-unit" key={unit.title}>
            <span className="drop-dot" />
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
.mbutic-chart-ui {
  --blue: #075eea;
  --blue-dark: #073b92;
  --green: #2f8f35;
  --line: #0c4cbf;
  --text: #10192e;

  width: min(1450px, 100%);
  margin: 0 auto;
  padding: 44px 42px 420px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 28px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
}

.mbutic-header-card {
  width: 620px;
  margin: 0 auto;
  padding: 30px 42px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  box-shadow: 0 22px 46px rgba(7, 59, 146, 0.24);
}

.mbutic-header-icon {
  width: 116px;
  height: 116px;
  border-radius: 999px;
  background: white;
  color: var(--blue-dark);
  display: grid;
  place-items: center;
  font-size: 58px;
}

.mbutic-header-card h1 {
  margin: 0;
  font-size: 52px;
  line-height: 1.05;
  font-weight: 850;
  letter-spacing: -0.045em;
}

.org-lines {
  height: 130px;
  position: relative;
}

.root-line {
  position: absolute;
  left: 50%;
  top: 0;
  width: 4px;
  height: 80px;
  background: var(--line);
  transform: translateX(-50%);
}

.horizontal-line {
  position: absolute;
  left: 16%;
  right: 16%;
  top: 80px;
  height: 4px;
  background: var(--line);
  border-radius: 999px;
}

.butic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  align-items: start;
}

.butic-unit {
  position: relative;
  min-height: 150px;
  padding: 28px 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: white;
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  gap: 24px;
  box-shadow: 0 18px 38px rgba(7, 59, 146, 0.18);
}

.drop-dot {
  position: absolute;
  left: 50%;
  top: -58px;
  width: 4px;
  height: 58px;
  background: var(--line);
  transform: translateX(-50%);
}

.drop-dot::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -9px;
  width: 18px;
  height: 18px;
  border-radius: 999px;
  background: var(--line);
  transform: translateX(-50%);
}

.unit-icon {
  width: 86px;
  height: 86px;
  border-radius: 999px;
  background: white;
  color: var(--blue-dark);
  display: grid;
  place-items: center;
  font-size: 42px;
}

.butic-unit h2 {
  margin: 0;
  font-size: 34px;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.services-card {
  position: absolute;
  top: 200px;
  right: 0;
  width: 360px;
  padding: 24px 30px;
  border-radius: 16px;
  background: linear-gradient(135deg, #43a047, #25752e);
  box-shadow: 0 18px 34px rgba(30, 100, 40, 0.2);
}

.services-card::before {
  content: "";
  position: absolute;
  top: -52px;
  left: 50%;
  width: 4px;
  height: 52px;
  background: var(--line);
  transform: translateX(-50%);
}

.service-row {
  display: grid;
  grid-template-columns: 34px 1fr;
  align-items: center;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255,255,255,0.24);
}

.service-row:last-child {
  border-bottom: none;
}

.service-row span {
  font-size: 24px;
}

.service-row p {
  margin: 0;
  font-size: 26px;
  font-weight: 800;
}

@media (max-width: 1050px) {
  .mbutic-chart-ui {
    padding-bottom: 64px;
  }

  .org-lines,
  .drop-dot,
  .services-card::before {
    display: none;
  }

  .butic-grid {
    grid-template-columns: 1fr;
  }

  .services-card {
    position: static;
    width: 100%;
    margin-top: 24px;
    grid-column: 1 / -1;
  }
}

@media (max-width: 700px) {
  .mbutic-chart-ui {
    padding: 24px 16px 40px;
  }

  .mbutic-header-card,
  .butic-unit {
    width: 100%;
    grid-template-columns: 1fr;
    flex-direction: column;
    text-align: center;
  }

  .mbutic-header-card {
    display: flex;
  }

  .mbutic-header-card h1 {
    font-size: 38px;
  }

  .mbutic-header-icon,
  .unit-icon {
    margin: 0 auto;
  }
}
`;















// izitec

import React from "react";

const izitecUnits = [
  {
    title: "M’App Inc",
    icon: "📱",
    description: "Mobile Applications & Digital Solutions",
  },
  {
    title: "Digital Solutions Inc",
    icon: "💻",
    description: "Custom Software Development",
  },
  {
    title: "IT Services Inc",
    icon: "☁️",
    description: "Infrastructure, Cloud & Managed Services",
  },
];
