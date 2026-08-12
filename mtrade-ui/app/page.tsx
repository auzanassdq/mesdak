"use client";

import { useMemo, useState } from "react";

const navItems = ["Overview", "Trade", "Finance", "Documents", "Partners"];

const tradeRows = [
  { id: "TR-2841", buyer: "NordHaus Retail", route: "Accra → Hamburg", value: "$84,500", stage: "In transit", tone: "blue", date: "12 Aug" },
  { id: "TR-2838", buyer: "Kivu Home", route: "Accra → Kigali", value: "$42,800", stage: "Invoice approved", tone: "green", date: "08 Aug" },
  { id: "TR-2829", buyer: "Cedar & Loom", route: "Kumasi → London", value: "$31,200", stage: "Production", tone: "amber", date: "21 Aug" },
];

const offers = [
  { provider: "Absa Trade", initials: "AB", product: "Invoice finance", amount: "$38,520", rate: "8.2% p.a.", speed: "Same day", accent: "#efb34c" },
  { provider: "M'World Capital", initials: "MW", product: "Purchase order finance", amount: "$24,000", rate: "7.6% p.a.", speed: "Within 24h", accent: "#254d43" },
  { provider: "TradeSure", initials: "TS", product: "Credit insurance", amount: "$84,500", rate: "0.9% fee", speed: "Instant cover", accent: "#bb674c" },
];

export default function Home() {
  const [activeNav, setActiveNav] = useState("Overview");
  const [notice, setNotice] = useState("");
  const [filter, setFilter] = useState("All trades");
  const [showFinance, setShowFinance] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const title = useMemo(() => activeNav === "Overview" ? "Good morning, Ama." : activeNav, [activeNav]);

  function flash(message: string) {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand" aria-label="M Trade home">
          <span className="brand-mark">M'</span>
          <span>TRADE</span>
        </div>

        <nav className="nav" aria-label="Primary navigation">
          <p className="nav-label">WORKSPACE</p>
          {navItems.map((item, i) => (
            <button key={item} className={activeNav === item ? "nav-item active" : "nav-item"} onClick={() => setActiveNav(item)}>
              <span className="nav-icon">{["⌂", "↗", "◇", "▤", "◎"][i]}</span>{item}
              {item === "Documents" && <span className="nav-count">3</span>}
            </button>
          ))}
          <p className="nav-label second">INSIGHTS</p>
          <button className="nav-item" onClick={() => { setActiveNav("Trade Passport"); flash("Trade Passport opened"); }}><span className="nav-icon">◉</span>Trade Passport</button>
          <button className="nav-item" onClick={() => { setActiveNav("Impact"); flash("Impact report opened"); }}><span className="nav-icon">⌁</span>Impact</button>
        </nav>

        <div className="sidebar-bottom">
          <div className="support-card">
            <span className="support-icon">?</span>
            <div><strong>Need a hand?</strong><p>Your trade advisor is online.</p></div>
            <button aria-label="Contact advisor" onClick={() => flash("Advisor request sent")}>↗</button>
          </div>
          <div className="profile">
            <span className="avatar">AM</span>
            <div><strong>Ama Mensah</strong><p>Akwaaba Textiles</p></div>
            <button aria-label="Profile menu">•••</button>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div className="mobile-brand">M'<b>TRADE</b></div>
          <label className="search"><span>⌕</span><input aria-label="Search" placeholder="Search trades, buyers, documents..." /></label>
          <div className="top-actions">
            <button className="icon-button" aria-label="Notifications" onClick={() => flash("You have 2 new updates")}>♢<span className="dot" /></button>
            <button className="primary" onClick={() => setShowFinance(true)}><span>＋</span> New request</button>
          </div>
        </header>

        <div className="content">
          <section className="welcome-row">
            <div>
              <p className="eyebrow">MONDAY, 2 AUGUST</p>
              <h1>{title}</h1>
              <p className="subhead">Your trade is moving. Here’s what needs your attention today.</p>
            </div>
            <div className="verified"><span>✓</span><div><small>M’WORLD VERIFIED</small><strong>Business identity active</strong></div></div>
          </section>

          <section className="hero-grid">
            <article className="passport-card">
              <div className="passport-head">
                <div><p className="section-kicker">M’TRADE PASSPORT</p><h2>Finance readiness</h2></div>
                <button onClick={() => flash("Passport details opened")}>View passport <span>→</span></button>
              </div>
              <div className="score-area">
                <div className="score-ring"><div><strong>82</strong><span>/100</span></div></div>
                <div className="score-copy"><span className="status-pill">STRONG</span><h3>You’re ready to grow.</h3><p>Your verified trading history puts you in the top 18% of textile exporters on M’World.</p></div>
              </div>
              <div className="metrics">
                <div><span>On-time delivery</span><strong>94%</strong><i><b style={{width:"94%"}} /></i></div>
                <div><span>Document quality</span><strong>88%</strong><i><b style={{width:"88%"}} /></i></div>
                <div><span>Payment history</span><strong>Excellent</strong><i><b style={{width:"97%"}} /></i></div>
              </div>
            </article>

            <article className="attention-card">
              <div className="attention-title"><span>!</span><div><p>NEEDS ATTENTION</p><h2>Complete one document</h2></div></div>
              <p className="attention-copy">TR-2841 is ready to ship. Upload the certificate of origin to release your trade documents.</p>
              <div className="document-row"><span className="doc-icon">▤</span><div><strong>Certificate of origin</strong><p>Required by 4 Aug · PDF or image</p></div><span className="urgent">URGENT</span></div>
              <button className="dark-button" onClick={() => flash("Document picker ready")}>Upload document <span>↑</span></button>
            </article>
          </section>

          <section className="stats-row">
            <article><span className="stat-icon green">↗</span><div><p>ACTIVE TRADE VALUE</p><strong>$158,500</strong><small><b>+12.4%</b> this quarter</small></div></article>
            <article><span className="stat-icon gold">◇</span><div><p>AVAILABLE FINANCE</p><strong>$62,400</strong><small>Across 3 matched offers</small></div></article>
            <article><span className="stat-icon rust">◷</span><div><p>AVG. PAYMENT CYCLE</p><strong>34 days</strong><small><b>6 days faster</b> than peers</small></div></article>
            <article><span className="stat-icon blue">◎</span><div><p>TRADING PARTNERS</p><strong>12</strong><small>Across 7 markets</small></div></article>
          </section>

          <section className="main-grid">
            <article className="trades-panel">
              <div className="panel-head"><div><p className="section-kicker">TRADE FLOW</p><h2>Active trades</h2></div><div className="panel-actions"><select value={filter} onChange={e => setFilter(e.target.value)} aria-label="Filter trades"><option>All trades</option><option>In transit</option><option>Production</option></select><button onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "View all"} →</button></div></div>
              <div className="trade-table">
                <div className="table-header"><span>TRADE & BUYER</span><span>VALUE</span><span>STATUS</span><span>EXPECTED</span><span /></div>
                {tradeRows.filter(row => filter === "All trades" || row.stage === filter).map(row => (
                  <button className="table-row" key={row.id} onClick={() => flash(`${row.id} details opened`)}>
                    <span className="trade-name"><i>{row.buyer.slice(0,2).toUpperCase()}</i><div><strong>{row.buyer}</strong><small>{row.id} · {row.route}</small></div></span>
                    <strong>{row.value}</strong><span><em className={`stage ${row.tone}`}>{row.stage}</em></span><span>{row.date}</span><span>›</span>
                  </button>
                ))}
                {showAll && <div className="more-note">3 completed trades archived this month</div>}
              </div>
            </article>

            <article className="offers-panel">
              <div className="panel-head"><div><p className="section-kicker">MATCHED FOR YOU</p><h2>Finance offers</h2></div><span className="offer-count">3</span></div>
              <p className="panel-intro">Based on your live trade activity and M’Trade Passport.</p>
              <div className="offer-list">
                {offers.map((offer, index) => (
                  <button className="offer" key={offer.provider} onClick={() => flash(`${offer.provider} offer selected`)}>
                    <span className="provider-logo" style={{background: offer.accent}}>{offer.initials}</span>
                    <span className="offer-main"><strong>{offer.product}</strong><small>{offer.provider} · {offer.speed}</small></span>
                    <span className="offer-price"><strong>{offer.amount}</strong><small>{offer.rate}</small></span>
                    <span className="arrow">→</span>
                    {index === 1 && <i className="best">BEST RATE</i>}
                  </button>
                ))}
              </div>
              <button className="compare" onClick={() => setShowFinance(true)}>Compare all offers <span>→</span></button>
            </article>
          </section>

          <section className="insight-strip">
            <span className="insight-mark">✦</span>
            <div><p>M’TRADE INSIGHT</p><strong>Financing your NordHaus invoice today could release $76,050 in working capital — 29 days before payment is due.</strong></div>
            <button onClick={() => setShowFinance(true)}>Explore this option <span>→</span></button>
          </section>
        </div>
      </section>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {navItems.slice(0,4).map((item, i) => <button key={item} className={activeNav === item ? "active" : ""} onClick={() => setActiveNav(item)}><span>{["⌂","↗","◇","▤"][i]}</span>{item}</button>)}
      </nav>

      {notice && <div className="toast" role="status"><span>✓</span>{notice}</div>}
      {showFinance && <div className="modal-backdrop" onMouseDown={() => setShowFinance(false)}><section className="modal" onMouseDown={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Finance request"><button className="modal-close" onClick={() => setShowFinance(false)}>×</button><p className="section-kicker">SMART MATCH</p><h2>Fund your next trade</h2><p>Tell us where you are in the trade cycle. M’Trade will prepare one verified request and match it with suitable providers.</p><div className="choice-grid"><button onClick={() => flash("Purchase order selected")}><span>01</span><strong>I have a purchase order</strong><small>Fund materials and production</small></button><button onClick={() => flash("Invoice selected")}><span>02</span><strong>I have an approved invoice</strong><small>Get paid before the due date</small></button><button onClick={() => flash("Import selected")}><span>03</span><strong>I need to import goods</strong><small>Finance a verified supplier</small></button></div><button className="modal-primary" onClick={() => { setShowFinance(false); flash("Draft request created"); }}>Start finance request →</button><small className="modal-note">No commitment · Your details remain private until you choose a provider.</small></section></div>}
    </main>
  );
}
