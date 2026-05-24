
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

export default function MMediaOrgChart() {
  return (
    <section className="mmedia-chart-ui">
      <style>{css}</style>

      <header className="mmedia-header-card">
        <div className="mmedia-header-icon">▶</div>
        <div>
          <h1>M’Media Inc</h1>
          <p>Inspiring Ideas. Creating Impact.</p>
        </div>
      </header>

      <div className="org-lines">
        <span className="root-line" />
        <span className="horizontal-line" />
      </div>

      <div className="media-grid">
        {mediaCompanies.map((company) => (
          <article className={`media-company-card ${company.color}`} key={company.title}>
            <span className="drop-dot" />

            <div className="company-card-header">
              <div className="company-icon">{company.icon}</div>
              <div>
                <h2>{company.title}</h2>
                <p>{company.subtitle}</p>
              </div>
            </div>

            <div className="company-body">
              <p className="company-description">{company.description}</p>

              <div className="service-grid">
                {company.services.map((service) => (
                  <div className="service-item" key={service}>
                    <span className="service-icon">□</span>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <footer className="focus-strip">
        <div className="focus-label">Our Focus</div>
        {focusItems.map((item) => (
          <div className="focus-item" key={item.title}>
            <div className="focus-icon">{item.icon}</div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </footer>
    </section>
  );
}

const css = `
.mmedia-chart-ui {
  --blue: #075eea;
  --blue-dark: #063f9c;
  --purple: #5e2cc8;
  --line: #0c4cbf;
  --text: #10192e;

  width: min(1560px, 100%);
  margin: 0 auto;
  padding: 34px 42px 48px;
  background:
    radial-gradient(circle at 50% 0%, rgba(7, 94, 234, 0.08), transparent 34%),
    linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);
  border-radius: 28px;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.mmedia-header-card {
  width: 720px;
  margin: 0 auto;
  padding: 28px 42px;
  border-radius: 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #075eea 0%, #073b92 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  box-shadow: 0 22px 46px rgba(7, 59, 146, 0.24);
}

.mmedia-header-icon {
  width: 118px;
  height: 118px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.45);
  background: rgba(255, 255, 255, 0.08);
  display: grid;
  place-items: center;
  font-size: 52px;
}

.mmedia-header-card h1 {
  margin: 0;
  font-size: 58px;
  line-height: 1;
  font-weight: 850;
  letter-spacing: -0.05em;
}

.mmedia-header-card p {
  margin: 12px 0 0;
  font-size: 25px;
  color: rgba(255, 255, 255, 0.92);
}

.org-lines {
  height: 118px;
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
  left: 24%;
  right: 24%;
  top: 72px;
  height: 3px;
  background: var(--line);
  border-radius: 99px;
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 92px;
  max-width: 1260px;
  margin: 0 auto;
}

.media-company-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #dfe8f4;
  box-shadow: 0 18px 42px rgba(15, 58, 131, 0.12);
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

.company-card-header {
  min-height: 142px;
  padding: 28px 36px;
  display: grid;
  grid-template-columns: 96px 1fr;
  align-items: center;
  gap: 28px;
  color: #ffffff;
}

.media-company-card.blue .company-card-header {
  background: linear-gradient(135deg, #075eea, #063f9c);
}

.media-company-card.purple .company-card-header {
  background: linear-gradient(135deg, #6b35d6, #442096);
}

.company-icon {
  width: 92px;
  height: 92px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.88);
  font-size: 42px;
}

.company-card-header h2 {
  margin: 0;
  font-size: 33px;
  line-height: 1.08;
  letter-spacing: -0.035em;
}

.company-card-header p {
  margin: 12px 0 0;
  font-size: 20px;
  line-height: 1.25;
  color: rgba(255, 255, 255, 0.94);
}

.company-body {
  padding: 28px 36px 32px;
}

.company-description {
  max-width: 480px;
  margin: 0 auto 28px;
  font-size: 19px;
  line-height: 1.45;
  text-align: left;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid #dfe6f1;
  padding-top: 26px;
}

.service-item {
  min-height: 86px;
  padding: 0 12px;
  border-right: 1px solid #dfe6f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: flex-start;
  gap: 10px;
  font-size: 14px;
  font-weight: 750;
  line-height: 1.25;
}

.service-item:last-child {
  border-right: none;
}

.service-icon {
  color: var(--line);
  font-size: 28px;
}

.focus-strip {
  position: relative;
  margin: 70px auto 0;
  padding: 50px 28px 28px;
  border: 1px solid #dfe8f4;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 16px 35px rgba(15, 58, 131, 0.08);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 22px;
}

.focus-label {
  position: absolute;
  top: -28px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 210px;
  padding: 14px 26px;
  background: linear-gradient(135deg, #075eea, #073b92);
  color: #ffffff;
  border-radius: 10px;
  text-align: center;
  font-weight: 850;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.focus-item {
  display: grid;
  grid-template-columns: 74px 1fr;
  gap: 16px;
  align-items: start;
  padding-right: 20px;
  border-right: 1px solid #d8e2ef;
}

.focus-item:last-child {
  border-right: none;
}

.focus-icon {
  width: 68px;
  height: 68px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #edf4ff;
  font-size: 34px;
}

.focus-item h3 {
  margin: 0 0 8px;
  font-size: 17px;
  color: var(--blue-dark);
  text-transform: uppercase;
}

.focus-item p {
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
}

@media (max-width: 1180px) {
  .org-lines,
  .drop-dot {
    display: none;
  }

  .media-grid {
    gap: 28px;
  }

  .service-grid {
    grid-template-columns: repeat(2, 1fr);
    row-gap: 18px;
  }

  .service-item:nth-child(2) {
    border-right: none;
  }

  .focus-strip {
    grid-template-columns: repeat(2, 1fr);
  }

  .focus-item {
    border-right: none;
  }
}

@media (max-width: 820px) {
  .mmedia-chart-ui {
    padding: 22px 16px 34px;
  }

  .mmedia-header-card {
    width: 100%;
    flex-direction: column;
    padding: 26px 20px;
    text-align: center;
  }

  .mmedia-header-card h1 {
    font-size: 38px;
  }

  .mmedia-header-card p {
    font-size: 19px;
  }

  .media-grid,
  .focus-strip {
    grid-template-columns: 1fr;
  }

  .company-card-header {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .company-icon {
    margin: 0 auto;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    border-right: none;
    border-bottom: 1px solid #dfe6f1;
    padding: 12px 0;
  }

  .service-item:last-child {
    border-bottom: none;
  }
}
`;































// 4 - M’DataTalk

import React from "react";

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
