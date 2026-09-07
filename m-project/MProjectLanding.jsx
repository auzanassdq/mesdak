import React, { useState } from "react";
import "./mproject-landing.css";

const projectCapabilities = [
  {
    title: "Project setup",
    description: "Define the objective, scope, dates, budget, owner and delivery model before work begins.",
    outcome: "Clear mandate",
  },
  {
    title: "Users & roles",
    description: "Bring the right people into one workspace with visible ownership and role-based responsibilities.",
    outcome: "Accountability",
  },
  {
    title: "Milestones & deliverables",
    description: "Turn the project plan into measurable checkpoints, outputs and acceptance criteria.",
    outcome: "Visible progress",
  },
  {
    title: "Action plans & tasks",
    description: "Coordinate day-to-day actions, priorities, deadlines and evidence of completion.",
    outcome: "Execution rhythm",
  },
  {
    title: "Timeline & dependencies",
    description: "See the critical path, connect dependent work and anticipate delivery risk earlier.",
    outcome: "Fewer surprises",
  },
  {
    title: "Control & reporting",
    description: "Capture observations, decisions, conclusions and performance evidence as work happens.",
    outcome: "Decision confidence",
  },
];

const modules = [
  {
    icon: "PM",
    title: "Your project workspace",
    promise: "Build for any initiative",
    description: "Create and manage a project from objective and budget through milestones, actions, evidence and reporting.",
    footer: "Project management core",
    theme: "",
  },
  {
    icon: "ERP",
    title: "Intelligent i-ERP setting & management",
    promise: "Digitise how work operates",
    description: "Structure processes, responsibilities, controls and management information around the way your organisation works.",
    footer: "Pre-installed specialist area",
    theme: "violet",
  },
  {
    icon: "MT",
    title: "M'Trade management",
    promise: "Move toward finance readiness",
    description: "Coordinate the transaction journey, requirements, documents, responsibilities and submission status in one governed workflow.",
    footer: "Pre-installed specialist area",
    theme: "blue",
  },
  {
    icon: "ESG",
    title: "ESG & SDG management",
    promise: "Turn commitments into evidence",
    description: "Plan actions, assign indicators, monitor results and organise evidence against environmental, social and SDG priorities.",
    footer: "Pre-installed specialist area",
    theme: "green",
  },
];

const tradeJourney = [
  ["01", "Opportunity", "Record the trade need and intended outcome."],
  ["02", "Counterparties", "Coordinate buyers, sellers and relevant parties."],
  ["03", "Requirements", "Map conditions, documents and responsibilities."],
  ["04", "Readiness", "Identify gaps before submission."],
  ["05", "Submission", "Present an organised transaction package."],
  ["06", "Monitoring", "Track follow-up, status and obligations."],
];

const impactSteps = [
  ["01", "Priorities", "Select the ESG themes and SDGs that matter to the initiative."],
  ["02", "Action plan", "Translate commitments into owners, activities and delivery dates."],
  ["03", "Indicators", "Define what will be measured and the evidence required."],
  ["04", "Monitoring", "Review results, exceptions and supporting evidence over time."],
];

const deliverySteps = [
  ["01", "Set up", "Define the initiative and desired result."],
  ["02", "Structure", "Add roles, milestones and dependencies."],
  ["03", "Activate", "Use the relevant specialist workspace."],
  ["04", "Execute", "Coordinate tasks, actions and evidence."],
  ["05", "Monitor", "Track progress, risk and indicators."],
  ["06", "Report", "Turn delivery data into decisions."],
];

const audiences = [
  ["PROJECT LEADS", "Project leaders", "Keep scope, milestones, dependencies and delivery evidence visible."],
  ["OPERATIONS TEAMS", "Operations teams", "Connect work to processes, controls and i-ERP management settings."],
  ["TRADE TEAMS", "Trade teams", "Coordinate transaction requirements and trade-finance readiness."],
  ["ESG & IMPACT TEAMS", "ESG & impact teams", "Manage action plans, indicators, SDGs and performance evidence."],
];

const trustItems = [
  ["01", "Role-based working", "Give contributors access aligned with their responsibilities."],
  ["02", "Evidence by design", "Connect supporting evidence to work, indicators and decisions."],
  ["03", "Visible accountability", "Keep ownership, status and follow-up clear across teams."],
  ["04", "Governed workflows", "Structure complex processes without replacing regulated decisions."],
];

const ecosystem = [
  ["ERP", "Operations"],
  ["Banks", "Trade finance"],
  ["Documents", "Evidence"],
  ["Data", "Indicators"],
  ["Email", "Collaboration"],
  ["Calendar", "Delivery"],
  ["BI", "Reporting"],
  ["API", "Integration"],
];

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ open }) {
  return open ? (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ) : (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProductPreview() {
  const metrics = [
    ["Delivery progress", "68%", "68%", "#ef2f2f"],
    ["Budget control", "On plan", "81%", "#6b4ec4"],
    ["Trade readiness", "72%", "72%", "#167b91"],
    ["Impact evidence", "76%", "76%", "#579b43"],
  ];

  return (
    <div className="mp-product-frame" aria-label="Illustrative M'Project command centre preview">
      <div className="mp-browser-bar"><i /><i /><i /><span>workspace.mproject.app</span></div>
      <div className="mp-dashboard">
        <aside className="mp-preview-nav" aria-label="Preview navigation">
          <div className="mp-preview-brand"><img src="./M_Project-3.png" alt="" /> M'PROJECT</div>
          <a className="active" href="#project">Command centre</a>
          <a href="#project">Project delivery</a>
          <a href="#ierp">i-ERP management</a>
          <a className="trade" href="#mtrade">M'Trade workflow</a>
          <a href="#esg">ESG & SDG impact</a>
          <a href="#how">Reports & evidence</a>
          <div className="mp-preview-note"><strong>CONNECTED EXECUTION</strong><span>One coordinated view of delivery, operations, trade readiness and impact.</span></div>
        </aside>

        <div className="mp-preview-main">
          <div className="mp-preview-top">
            <div><small>PROGRAMME COMMAND CENTRE</small><h2>Solar value-chain expansion</h2><p>Cross-functional execution workspace</p></div>
            <span className="mp-status">On track</span>
          </div>

          <div className="mp-metrics">
            {metrics.map(([label, value, width, colour]) => (
              <div className="mp-metric" key={label}>
                <small>{label}</small><strong>{value}</strong>
                <div className="mp-meter"><i style={{ width, "--accent": colour }} /></div>
              </div>
            ))}
          </div>

          <div className="mp-preview-grid">
            <article className="mp-preview-card">
              <span className="label">M'TRADE / TRANSACTION 04</span>
              <h3>Trade-finance readiness journey</h3>
              <div className="mp-mini-journey">
                {['Need', 'Parties', 'Terms', 'Ready', 'Submit', 'Monitor'].map((label, index) => <div key={label}><i>{index + 1}</i><span>{label}</span></div>)}
              </div>
              <div className="mp-governance-note"><strong>Governed hand-off</strong>M'Project organises readiness and evidence; financial institutions retain assessment, compliance and credit decisions.</div>
            </article>

            <article className="mp-preview-card" style={{ "--accent": "#579b43" }}>
              <span className="label">ESG & SDG PERFORMANCE</span>
              <h3>Impact evidence</h3>
              <div className="mp-impact-score"><strong>76%</strong><small>evidence ready</small></div>
              <div className="mp-impact-list">
                <span><i style={{ "--sdg": "#f4a22b" }}>7</i> Affordable clean energy</span>
                <span><i style={{ "--sdg": "#3f7e44" }}>8</i> Decent work & growth</span>
                <span><i style={{ "--sdg": "#56c02b" }}>13</i> Climate action</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MProjectLanding({ workspaceHref = "#contact" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const navItems = [
    ["#project", "Project"], ["#ierp", "i-ERP"], ["#mtrade", "M'Trade"],
    ["#esg", "ESG & SDG"], ["#how", "How it works"], ["#ecosystem", "Ecosystem"],
  ];

  return (
    <div className="mp-site">
      <header className="mp-header">
        <a className="mp-brand" href="#top" aria-label="M'Project home"><img src="./M_Project-3.png" alt="M'Project logo" /><span>M'Project</span></a>
        <nav className="mp-nav" aria-label="Primary navigation">
          {navItems.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="mp-button primary mp-header-cta" href={workspaceHref}>Open workspace <ArrowIcon /></a>
        <button className="mp-menu-button" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mp-mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen} /></button>
        <nav id="mp-mobile-navigation" className={`mp-mobile-nav${menuOpen ? " open" : ""}`} aria-label="Mobile navigation">
          {navItems.map(([href, label]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
          <a href={workspaceHref} onClick={closeMenu}>Open workspace</a>
        </nav>
      </header>

      <main id="top">
        <section className="mp-container mp-hero" aria-labelledby="hero-title">
          <div className="mp-hero-copy">
            <span className="mp-eyebrow">Project • i-ERP • M'Trade • ESG & SDG</span>
            <h1 id="hero-title">Manage projects. Digitise operations. Measure impact. <span className="accent">Become trade-finance ready.</span></h1>
            <p>M'Project moves teams from plans to coordinated execution by connecting governance and collaboration with intelligent i-ERP setup and management, M'Trade workflows, ESG and SDG action planning, monitoring, and performance evidence — all in one workspace.</p>
            <div className="mp-hero-actions">
              <a className="mp-button primary" href={workspaceHref}>Open your workspace <ArrowIcon /></a>
              <a className="mp-button secondary" href="#how">See how it works</a>
            </div>
            <p className="mp-audience"><strong>Built for coordinated delivery</strong>Project leaders · Operations teams · Trade teams · ESG and impact teams</p>
          </div>
          <ProductPreview />
        </section>

        <section className="mp-section mp-problem" aria-labelledby="problem-title">
          <div className="mp-container">
            <div className="mp-section-heading centered"><span className="mp-kicker">One operating view</span><h2 id="problem-title">Complex initiatives lose momentum when the work is fragmented.</h2><p>M'Project gives every team a shared structure for planning, ownership, execution, evidence and decisions.</p></div>
            <div className="mp-problem-grid">
              <article className="mp-problem-card dark">
                <span>WITHOUT A CONNECTED WORKSPACE</span><h3>Activity increases. Visibility falls.</h3>
                <div className="mp-comparison-list">
                  <div className="mp-comparison-item"><b>01</b><div><strong>Disconnected plans</strong><p>Schedules, spreadsheets and documents tell different versions of the same initiative.</p></div></div>
                  <div className="mp-comparison-item"><b>02</b><div><strong>Unclear ownership</strong><p>Responsibilities and dependencies become visible only after something slips.</p></div></div>
                  <div className="mp-comparison-item"><b>03</b><div><strong>Evidence collected too late</strong><p>Reporting, trade submissions and impact reviews become expensive reconstruction exercises.</p></div></div>
                </div>
              </article>
              <article className="mp-problem-card light">
                <span>WITH M'PROJECT</span><h3>One plan becomes coordinated execution.</h3>
                <div className="mp-comparison-list">
                  <div className="mp-comparison-item"><b>01</b><div><strong>Shared delivery structure</strong><p>Objectives, budgets, milestones, tasks and evidence connect in a single workspace.</p></div></div>
                  <div className="mp-comparison-item"><b>02</b><div><strong>Specialist workflows built in</strong><p>Activate i-ERP, M'Trade and ESG & SDG management when the initiative needs them.</p></div></div>
                  <div className="mp-comparison-item"><b>03</b><div><strong>Decisions backed by evidence</strong><p>Progress, risk, indicators and supporting records remain visible as work happens.</p></div></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="mp-section" id="project" aria-labelledby="project-title">
          <div className="mp-container">
            <div className="mp-section-heading"><span className="mp-kicker">Project management core</span><h2 id="project-title">Set up and manage any project — from first objective to final evidence.</h2><p>Use M'Project as the delivery backbone for an internal initiative, investment programme, operational transformation, trade transaction or impact plan.</p></div>
            <div className="mp-core-grid">
              {projectCapabilities.map((item, index) => <article className="mp-feature-card" key={item.title}><span className="mp-feature-number">{String(index + 1).padStart(2, "0")}</span><span className="outcome">{item.outcome}</span><h3>{item.title}</h3><p>{item.description}</p><footer>Connected to the workspace</footer></article>)}
            </div>
          </div>
        </section>

        <section className="mp-section mp-installed" id="ierp" aria-labelledby="installed-title">
          <div className="mp-container">
            <div className="mp-section-heading"><span className="mp-kicker">Ready from day one</span><h2 id="installed-title">Start with the project you need. Activate the specialist areas already installed.</h2><p>Every workspace includes the flexible project-management core plus pre-installed settings for operational management, trade workflows and impact monitoring.</p></div>
            <div className="mp-module-grid">
              {modules.map((module) => <article className={`mp-module-card ${module.theme}`} key={module.title}><div className="mp-module-top"><span className="mp-module-icon">{module.icon}</span><span className="mp-module-badge">Available</span></div><span className="promise">{module.promise}</span><h3>{module.title}</h3><p>{module.description}</p><footer>{module.footer}</footer></article>)}
            </div>
          </div>
        </section>

        <section className="mp-section mp-trade" id="mtrade" aria-labelledby="trade-title">
          <div className="mp-container">
            <div className="mp-section-heading"><span className="mp-kicker">M'Trade management</span><h2 id="trade-title">Coordinate the path from trade opportunity to finance-ready submission.</h2><p>M'Trade brings the transaction journey, people, requirements, documents, actions and status into one governed workflow — so teams can address gaps before presenting the case to a financing partner.</p></div>
            <div className="mp-trade-journey"><div className="mp-journey">{tradeJourney.map(([number, title, description], index) => <article className={`mp-journey-step ${index === 3 ? "current" : index > 3 ? "future" : ""}`} key={title}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div></div>
            <div className="mp-trade-audiences">
              <article><span>FOR BUSINESSES</span><p>Understand what the transaction needs, assign the work and maintain a coherent readiness record.</p></article>
              <article><span>FOR ADVISERS</span><p>Coordinate the client journey, requirements and evidence without losing context across hand-offs.</p></article>
              <article><span>FOR FINANCING PARTNERS</span><p>Receive a better-organised case with clearer ownership, status and supporting information.</p></article>
            </div>
            <p className="mp-boundary"><strong>Important governance boundary:</strong> M'Project supports preparation, coordination and monitoring. Banks and other authorised institutions retain KYC/AML review, compliance assessment, credit decisions, pricing, approval and the provision of finance.</p>
          </div>
        </section>

        <section className="mp-section mp-esg" id="esg" aria-labelledby="esg-title">
          <div className="mp-container">
            <div className="mp-section-heading"><span className="mp-kicker">ESG & SDG management</span><h2 id="esg-title">Move from impact ambition to actions, indicators and evidence.</h2><p>Build a practical line of sight from the priorities you choose to the work delivered, the results observed and the evidence available for review.</p></div>
            <div className="mp-impact-steps">{impactSteps.map(([number, title, description]) => <article className="mp-impact-step" key={title}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div>
            <div className="mp-impact-board"><span>Illustrative impact board</span><h3>Connect each initiative to the outcomes it is designed to support.</h3><div className="mp-sdg-grid">
              <article className="mp-sdg"><b style={{ "--sdg": "#f4a22b" }}>7</b><div><strong>Affordable & clean energy</strong><p>Capacity, access and efficiency indicators</p></div></article>
              <article className="mp-sdg"><b style={{ "--sdg": "#3f7e44" }}>8</b><div><strong>Decent work & growth</strong><p>Employment, skills and local value indicators</p></div></article>
              <article className="mp-sdg"><b style={{ "--sdg": "#56c02b" }}>13</b><div><strong>Climate action</strong><p>Emissions, resilience and transition indicators</p></div></article>
            </div><p className="mp-assurance">M'Project organises management information and evidence. External assurance, certification and regulatory opinions remain with appropriately qualified parties.</p></div>
          </div>
        </section>

        <section className="mp-section mp-how" id="how" aria-labelledby="how-title">
          <div className="mp-container">
            <div className="mp-section-heading centered"><span className="mp-kicker">How M'Project works</span><h2 id="how-title">A practical rhythm from setup to accountable reporting.</h2><p>The same delivery logic connects general project management with i-ERP, M'Trade and ESG & SDG workflows.</p></div>
            <div className="mp-steps">{deliverySteps.map(([number, title, description]) => <article className="mp-step" key={title}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div>
            <div className="mp-users-heading"><span>Designed for the whole delivery network</span><h3>Give each contributor the view they need — while keeping one coordinated record.</h3></div>
            <div className="mp-user-grid">{audiences.map(([label, title, description], index) => <article className="mp-user-card" key={label}><b>0{index + 1} / {label}</b><h4>{title}</h4><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="mp-section mp-trust" id="ecosystem" aria-labelledby="trust-title">
          <div className="mp-container">
            <div className="mp-section-heading"><span className="mp-kicker">Control without friction</span><h2 id="trust-title">Built to strengthen governance, accountability and confidence.</h2><p>M'Project makes the working record easier to understand, maintain and review across the life of an initiative.</p></div>
            <div className="mp-trust-grid">{trustItems.map(([number, title, description]) => <article className="mp-trust-card" key={title}><b>{number}</b><h3>{title}</h3><p>{description}</p></article>)}</div>
            <div className="mp-ecosystem"><span>Integration-ready ecosystem</span><div className="mp-app-grid">{ecosystem.map(([name, type]) => <div className="mp-app" key={name}><strong>{name}</strong><span>{type}</span></div>)}</div></div>
            <div className="mp-final-cta" id="contact"><div><h3>Bring your plans, operations, trade readiness and impact evidence into one place.</h3><p>Start with a project. Activate the specialist workflows your initiative needs.</p></div><a className="mp-button on-dark" href={workspaceHref}>Open M'Project <ArrowIcon /></a></div>
          </div>
        </section>
      </main>

      <footer className="mp-footer"><div className="mp-footer-row"><div className="mp-footer-brand"><img src="./M_Project-3.png" alt="" /><div><strong>M'PROJECT</strong><span>Coordinated execution. Evidence-ready management.</span></div></div><nav className="mp-footer-links" aria-label="Footer navigation"><a href="#project">Project</a><a href="#mtrade">M'Trade</a><a href="#esg">ESG & SDG</a><a href="#top">Back to top</a></nav></div></footer>
    </div>
  );
}
