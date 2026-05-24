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

export default function MIZITecOrgChart() {
  return (
    <section className="izitec-chart-ui">
      <style>{css}</style>

      <header className="izitec-header-card">
        <div className="izitec-header-icon">⚙️</div>
        <div>
          <h1>M’IZITec Inc</h1>
          <p>Innovate. Integrate. Elevate.</p>
        </div>
      </header>

      <div className="org-lines">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="izitec-grid">
        {izitecUnits.map((unit) => (
          <article className="izitec-unit" key={unit.title}>
            <span className="drop-dot" />
            <div className="unit-icon">{unit.icon}</div>
            <h2>{unit.title}</h2>
            <div className="card-rule" />
            <p>{unit.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const css = `
.izitec-chart-ui {
  --blue: #075eea;
  --blue-dark: #073b92;
  --line: #0c4cbf;
  --text: #10192e;

  width: min(1400px, 100%);
  margin: 0 auto;
  padding: 44px 42px 64px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 28px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: var(--text);
}

.izitec-header-card {
  width: 690px;
  margin: 0 auto;
  padding: 30px 42px;
  border-radius: 18px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 34px;
  box-shadow: 0 22px 46px rgba(7, 59, 146, 0.24);
}

.izitec-header-icon {
  width: 118px;
  height: 118px;
  border-radius: 999px;
  background: white;
  color: var(--blue-dark);
  display: grid;
  place-items: center;
  font-size: 58px;
}

.izitec-header-card h1 {
  margin: 0;
  font-size: 56px;
  line-height: 1;
  font-weight: 850;
  letter-spacing: -0.045em;
}

.izitec-header-card p {
  margin: 12px 0 0;
  font-size: 24px;
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
  width: 4px;
  height: 80px;
  background: var(--line);
  transform: translateX(-50%);
}

.horizontal-line {
  position: absolute;
  left: 19%;
  right: 19%;
  top: 80px;
  height: 4px;
  background: var(--line);
  border-radius: 999px;
}

.izitec-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 54px;
  max-width: 1200px;
  margin: 0 auto;
}

.izitec-unit {
  position: relative;
  min-height: 360px;
  border-radius: 20px;
  overflow: hidden;
  background: white;
  border: 1px solid #dfe8f4;
  box-shadow: 0 18px 42px rgba(15, 58, 131, 0.12);
  text-align: center;
  padding: 150px 34px 40px;
}

.izitec-unit::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;
  height: 150px;
  background: linear-gradient(135deg, var(--blue), var(--blue-dark));
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
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  width: 118px;
  height: 118px;
  border-radius: 999px;
  background: white;
  color: var(--blue-dark);
  display: grid;
  place-items: center;
  font-size: 54px;
  box-shadow: 0 14px 30px rgba(7, 59, 146, 0.18);
  z-index: 2;
}

.izitec-unit h2 {
  margin: 34px 0 0;
  color: var(--blue-dark);
  font-size: 36px;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.card-rule {
  width: 70%;
  height: 3px;
  margin: 22px auto;
  background: var(--line);
  border-radius: 999px;
}

.izitec-unit p {
  margin: 0;
  font-size: 23px;
  line-height: 1.4;
  color: #303846;
}

@media (max-width: 1000px) {
  .org-lines,
  .drop-dot {
    display: none;
  }

  .izitec-header-card {
    width: 100%;
  }

  .izitec-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .izitec-chart-ui {
    padding: 24px 16px 40px;
  }

  .izitec-header-card {
    flex-direction: column;
    text-align: center;
    padding: 28px 20px;
  }

  .izitec-header-card h1 {
    font-size: 38px;
  }

  .izitec-header-card p {
    font-size: 20px;
  }

  .izitec-unit h2 {
    font-size: 30px;
  }
}
`;
