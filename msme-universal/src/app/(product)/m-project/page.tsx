"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./m-project.module.css";

const features = [
  ["👥", "Team & Collaboration", "Communicate, coordinate and work together in real time."],
  ["🛡️", "Steering Committee", "Review progress, approve decisions and guide project execution."],
  ["📋", "Project Management", "Plan projects, assign work, manage priorities and meet deadlines."],
  ["🎯", "SDG Action Planning", "Select up to 3 SDGs, define action plans, execute and track impact."],
  ["🧠", "Intelligent i-ERP Builder", "Build your intelligent i-ERP step by step as your project progresses."],
  ["🏁", "Milestones & Deliverables", "Track milestones, deliverables and project completion."],
  ["📈", "Execution Tracking", "Monitor progress, KPIs and project health in real time."],
  ["📊", "Reports & Analytics", "Generate insights, reports and data-driven decisions."],
];

const workflow = [
  ["Create Your Project", "Define objectives, team, milestones and governance."],
  ["Select Your SDGs", "Choose up to three SDGs aligned with your project."],
  ["Build Your Action Plan", "Turn objectives into tasks, milestones and deliverables."],
  ["Collaborate & Execute", "Coordinate teams, communicate effectively and stay aligned."],
  ["Track Performance", "Monitor progress, KPIs, milestones and SDG achievements."],
  ["Deliver Results", "Complete projects faster and create lasting impact."],
];

export default function MProjectLanding() {
  return (
    <main className={styles["page-shell"]}>
      <header className={styles["site-header"]}>
        <Link className={styles.brand} href="/m-project" aria-label="M'Project home">
          <Image src="/logos/products/m-project.png" alt="M'Project" width={40} height={40} className="object-contain h-8 w-auto mr-2" />
          <span className={styles["brand-name"]}>M’<strong>Project</strong></span>
        </Link>
        <nav className={styles["main-nav"]} aria-label="Main navigation">
          <a href="#features">Features</a><a href="#sdgs">SDGs</a><a href="#ierp">i-ERP Integration</a><a href="#pricing">Pricing</a><a href="#resources">Resources</a>
        </nav>
        <div className={styles["header-actions"]}>
          <a className={`${styles.btn} ${styles["btn-primary"]}`} href="#start">Get Started — It’s Free</a>
          <Link className={`${styles.btn} ${styles["btn-light"]}`} href="/login">Log in</Link>
        </div>
      </header>

      <section className={`${styles.hero} ${styles["section-grid"]}`}>
        <div className={styles["hero-copy"]}>
          <p className={styles.eyebrow}>Part of M’World Ecosystem</p>
          <h1>Plan Together.<br /><span>Execute Smarter.</span><br />Deliver Lasting Impact.</h1>
          <p className={styles["hero-text"]}>M’Project is the collaborative execution workspace of the M’World ecosystem, bringing together teams, governance, SDG Action Planning, intelligent i-ERP implementation and real-time performance management to help teams deliver projects with confidence, accountability and measurable impact.</p>
          <div className={styles["hero-badges"]}>
            {["Team Collaboration","Steering Committee","Project Management","SDG Action Planning","Intelligent i-ERP","Execution Tracking"].map(item => <span key={item}>{item}</span>)}
          </div>
          <div className={styles["hero-cta"]}>
            <a className={`${styles.btn} ${styles["btn-primary"]} ${styles["btn-large"]}`} href="#start">Start Your Project — It’s Free</a>
            <a className={`${styles.btn} ${styles["btn-outline"]} ${styles["btn-large"]}`} href="#demo">Watch Overview</a>
          </div>
          <p className={styles["trust-note"]}>Trusted by SMEs, advisors, institutions and governments.</p>
        </div>
        <DashboardMockup />
      </section>

      <section id="features" className={styles["features-section"]}>
        <div className={styles["section-title"]}>
          <h2>Everything You Need in One Powerful Workspace</h2>
          <p>Built for teams. Designed for impact.</p>
        </div>
        <div className={styles["feature-grid"]}>
          {features.map(([icon, title, text]) => (
            <article key={title} id={title.includes("SDG") ? "sdgs" : title.includes("i-ERP") ? "ierp" : undefined}>
              <span>{icon}</span><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles["workflow-section"]}>
        <h2>How M’Project Works</h2>
        <div className={styles.workflow}>
          {workflow.map(([title, text], index) => (
            <article key={title}>
              <b>{index + 1}</b><h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles["download-section"]}>
        <div>
          <h2>Take M’Project Anywhere</h2>
          <p>Stay connected and productive on any device, anywhere.</p>
          <div className={styles["store-row"]}>
            <a href="#">▶ Google Play</a>
            <a href="#"> App Store</a>
            <a href="#">H HarmonyOS</a>
          </div>
        </div>
        <div className={styles["phone-mockup"]}>
          <span>M’Project</span><strong>72%</strong><p>Project Progress</p>
        </div>
      </section>

      <footer className={styles["ecosystem-footer"]}>
        <div className={styles["footer-label"]}>Part of<br />M’World Ecosystem</div>
        {["M’Network|Connect","M’Butic|E-Commerce","i-ERP|Intelligent ERP","M’Finance|Funding","M’Pay|Payments","M’Doc|Documents","M’Call|Communications","And More…|Explore All"].map(item => {
          const [name, sub] = item.split("|");
          return <a key={name} href="#">{name}<br /><small>{sub}</small></a>;
        })}
      </footer>
    </main>
  );
}

function DashboardMockup() {
  const menu = ["Dashboard", "+ New Project", "Projects", "Team & Collaboration", "Steering Committee", "Project Management", "Milestones", "Tasks", "Documents", "Communications", "SDGs", "Intelligent i-ERP", "Reports", "Settings"];
  return (
    <div className={styles["dashboard-card"]} aria-label="M'Project dashboard preview">
      <aside className={styles["app-sidebar"]}>
        <div className={styles["mini-brand"]}><span>M’</span>Project</div>
        {menu.map((item, i) => (
          <a key={item} className={i === 0 ? styles.active : i === 1 ? styles["new-project"] : ""} href="#">{item}</a>
        ))}
      </aside>
      <div className={styles["dashboard-main"]}>
        <div className={styles["dash-top"]}>
          <div><h2>Dashboard</h2><p>Your Project Command Center</p></div>
          <div className={styles["company-pill"]}>EcoBuild Ltd.</div>
        </div>
        <div className={styles["stats-row"]}>
          <div><strong>12</strong><span>Active Projects</span></div>
          <div><strong>34</strong><span>Tasks in Progress</span></div>
          <div><strong>6</strong><span>Upcoming Milestones</span></div>
          <div><strong>72%</strong><span>Overall Progress</span></div>
        </div>
        <div className={styles["dash-grid"]}>
          <article className={`${styles.panel} ${styles["chart-panel"]}`}>
            <h3>Project Progress</h3>
            <div className={styles["line-chart"]}>
              <span style={{height:"22%"}} /><span style={{height:"34%"}} /><span style={{height:"48%"}} /><span style={{height:"55%"}} /><span style={{height:"78%"}} /><span style={{height:"88%"}} />
            </div>
          </article>
          <article className={`${styles.panel} ${styles["sdg-panel"]}`}>
            <h3>SDG Impact Overview</h3>
            <div className={styles.donut}>
              <span>8<br /><small>SDGs</small></span>
            </div>
            <ul>
              <li>SDG 8 — Decent Work</li>
              <li>SDG 12 — Responsible Production</li>
              <li>SDG 13 — Climate Action</li>
            </ul>
          </article>
          <article className={`${styles.panel} ${styles["activity-panel"]}`}>
            <h3>Recent Activity</h3>
            <p>Q2 Impact Report submitted</p>
            <p>Milestone: Prototype completed</p>
            <p>Payment received via M’Pay</p>
          </article>
          <article className={`${styles.panel} ${styles["milestone-panel"]}`}>
            <h3>Upcoming Milestones</h3>
            <p>Mobile App Launch <strong>5 days</strong></p>
            <p>SDG Impact Assessment <strong>10 days</strong></p>
            <p>Q2 Financial Review <strong>16 days</strong></p>
          </article>
        </div>
      </div>
    </div>
  );
}
