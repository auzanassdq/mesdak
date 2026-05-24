import React from "react";

interface Entity {
  title: string;
  icon: string;
  description: string;
  theme?: string;
  functions?: string[];
}

const developmentEntities: Entity[] = [
  {
    title: "Africa Development Incorporation",
    icon: "🌍",
    description: "Driving sustainable development and business growth across Africa.",
  },
  {
    title: "Asia Development Incorporation",
    icon: "🌏",
    description: "Fostering economic growth and strategic partnerships across Asia.",
  },
  {
    title: "Latin America Development Incorporation",
    icon: "🌎",
    description: "Accelerating development initiatives and opportunities in Latin America.",
  },
  {
    title: "North America Development Incorporation",
    icon: "🌎",
    description: "Supporting innovation and growth across North American markets.",
  },
  {
    title: "ASEU Development Incorporation",
    icon: "🌐",
    description: "Advancing economic collaboration and development across ASEU regions.",
  },
  {
    title: "Europe Development Incorporation",
    icon: "🇪🇺",
    description: "Empowering business transformation and sustainable growth across Europe.",
  },
];

const serviceEntities: Entity[] = [
  {
    title: "M’Government Consulting Corporation",
    icon: "🏛️",
    theme: "green",
    description: "Policy advisory, public-sector consulting and governance solutions.",
  },
  {
    title: "I-ERP Consulting Corporation",
    icon: "📊",
    theme: "purple",
    description: "Enterprise resource planning solutions and digital transformation services.",
    functions: ["Sales", "Advertising", "Purchase", "Market Entry"],
  },
];

export default function MSMEConsultingGlobalOrgChart() {
  return (
    <section className="global-consulting-chart">
      <style>{css}</style>

      <header className="parent-card">
        <div className="parent-icon">🤝</div>
        <div>
          <h1>MSME Consulting</h1>
          <h2>Incorporation</h2>
        </div>
      </header>

      <div className="tree-line">
        <span className="vertical-root" />
        <span className="horizontal-root" />
      </div>

      <div className="entity-grid">
        {[...developmentEntities, ...serviceEntities].map((entity, index) => (
          <div className="entity-wrap" key={entity.title}>
            <span className="drop-line" />
            <article className={`entity-card ${entity.theme || "blue"}`}>
              <div className="entity-icon">{entity.icon}</div>
              <h3>{entity.title}</h3>
              <div className="entity-rule" />
              <p>{entity.description}</p>
            </article>

            {entity.functions && (
              <aside className="functions-card">
                <div className="functions-title">Functions</div>
                <ul>
                  {entity.functions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const css = `
.global-consulting-chart {
  --blue: #164fae;
  --blue-dark: #0f3a83;
  --blue-soft: #edf4ff;
  --green: #13864d;
  --green-soft: #eaf8f0;
  --purple: #6436b8;
  --purple-soft: #f2ecff;
  --line: #1453c5;
  --text: #142033;
  --muted: #526078;
  width: min(1680px, 100%);
  min-height: 860px;
  margin: 0 auto;
  padding: 34px 34px 56px;
  background:
    radial-gradient(circle at 50% 5%, rgba(20, 83, 197, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f7faff 100%);
  border-radius: 28px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
  overflow: hidden;
}

.parent-card {
  width: 690px;
  margin: 0 auto;
  padding: 26px 42px;
  background: linear-gradient(135deg, #1d5abe 0%, #0e3a85 100%);
  color: #ffffff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  box-shadow: 0 24px 50px rgba(15, 58, 131, 0.26);
}

.parent-icon {
  width: 118px;
  height: 118px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.42);
  background: rgba(255, 255, 255, 0.1);
  display: grid;
  place-items: center;
  font-size: 58px;
}

.parent-card h1,
.parent-card h2 {
  margin: 0;
  font-size: 48px;
  line-height: 1.04;
  letter-spacing: -0.04em;
  font-weight: 850;
}

.tree-line {
  height: 118px;
  position: relative;
}

.vertical-root {
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 66px;
  background: var(--line);
  transform: translateX(-50%);
}

.horizontal-root {
  position: absolute;
  left: 5.5%;
  right: 5.5%;
  top: 66px;
  height: 3px;
  border-radius: 99px;
  background: var(--line);
}

.entity-grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 22px;
  align-items: start;
}

.entity-wrap {
  position: relative;
}

.drop-line {
  width: 3px;
  height: 44px;
  background: var(--line);
  display: block;
  margin: -52px auto 8px;
  position: relative;
}

.drop-line::before {
  content: "";
  position: absolute;
  top: -8px;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--line);
  transform: translateX(-50%);
}

.entity-card {
  min-height: 390px;
  padding: 24px 20px 26px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid #dde7f5;
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(18, 59, 131, 0.1);
  text-align: left;
}

.entity-icon {
  width: 86px;
  height: 86px;
  margin: 0 auto 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 42px;
  background: var(--blue-soft);
  border: 2px solid #9fc2ff;
}

.entity-card h3 {
  margin: 0;
  color: var(--blue-dark);
  font-size: 23px;
  line-height: 1.18;
  letter-spacing: -0.035em;
  text-align: center;
}

.entity-rule {
  width: 100%;
  height: 2px;
  margin: 22px 0;
  background: #9fc2ff;
}

.entity-card p {
  margin: 0;
  color: var(--text);
  font-size: 16px;
  line-height: 1.5;
}

.entity-card.green .entity-icon {
  background: var(--green-soft);
  border-color: #a8ddb9;
}

.entity-card.green h3 {
  color: var(--green);
}

.entity-card.green .entity-rule {
  background: #a8ddb9;
}

.entity-card.purple .entity-icon {
  background: var(--purple-soft);
  border-color: #c8b3f6;
}

.entity-card.purple h3 {
  color: var(--purple);
}

.entity-card.purple .entity-rule {
  background: #c8b3f6;
}

.functions-card {
  width: 84%;
  margin: 58px auto 0;
  padding: 54px 30px 26px;
  position: relative;
  background: #ffffff;
  border: 1px solid #dde7f5;
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(18, 59, 131, 0.12);
}

.functions-card::before {
  content: "";
  position: absolute;
  left: 50%;
  top: -58px;
  width: 3px;
  height: 58px;
  background: var(--purple);
  transform: translateX(-50%);
}

.functions-card::after {
  content: "";
  position: absolute;
  left: 50%;
  top: -8px;
  width: 16px;
  height: 16px;
  background: var(--purple);
  border-radius: 50%;
  transform: translateX(-50%);
}

.functions-title {
  position: absolute;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 190px;
  padding: 12px 22px;
  background: linear-gradient(135deg, #6a36c8, #4a259b);
  color: #ffffff;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 850;
  font-size: 18px;
}

.functions-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.functions-card li {
  padding: 13px 0;
  border-bottom: 1px solid #dfe6f3;
  font-size: 18px;
  color: #182339;
}

.functions-card li:last-child {
  border-bottom: none;
}

@media (max-width: 1380px) {
  .entity-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .tree-line,
  .drop-line {
    display: none;
  }

  .entity-card {
    min-height: 330px;
  }
}

@media (max-width: 900px) {
  .global-consulting-chart {
    padding: 24px 18px 40px;
  }

  .parent-card {
    width: 100%;
  }

  .entity-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .parent-card {
    flex-direction: column;
    text-align: center;
    padding: 26px 20px;
  }

  .parent-card h1,
  .parent-card h2 {
    font-size: 34px;
  }

  .entity-grid {
    grid-template-columns: 1fr;
  }
}
`;