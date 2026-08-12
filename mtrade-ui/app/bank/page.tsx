"use client";

import { useMemo, useState } from "react";
import "./bank.css";

const applications = [
  { business:"Akwaaba Textiles", initials:"AT", country:"Ghana", product:"Invoice finance", amount:84500, buyer:"NordHaus Retail", score:82, risk:"Low", stage:"Credit review", age:"18 min", color:"gold" },
  { business:"Kivu Coffee Works", initials:"KC", country:"Rwanda", product:"Pre-shipment finance", amount:126000, buyer:"Kaffee Union GmbH", score:76, risk:"Medium", stage:"Documents", age:"1h 12m", color:"rust" },
  { business:"Zola Agri Processors", initials:"ZA", country:"Kenya", product:"Purchase order finance", amount:62000, buyer:"FreshMart East Africa", score:89, risk:"Low", stage:"Ready to offer", age:"2h 04m", color:"green" },
  { business:"Mosi Homeware", initials:"MH", country:"Zambia", product:"Import finance", amount:48300, buyer:"Guangzhou Ceramics", score:68, risk:"Medium", stage:"Compliance", age:"3h 22m", color:"blue" },
];

const exposure = [
  { sector:"Agriculture", value:"$1.42m", pct:36, color:"#d5a953" },
  { sector:"Manufacturing", value:"$1.08m", pct:28, color:"#2f6253" },
  { sector:"Textiles", value:"$820k", pct:21, color:"#bd6a50" },
  { sector:"Other", value:"$580k", pct:15, color:"#718b84" },
];

export default function BankWorkspace(){
  const [active,setActive]=useState("Portfolio");
  const [filter,setFilter]=useState("All applications");
  const [selected,setSelected]=useState<typeof applications[0] | null>(null);
  const [notice,setNotice]=useState("");
  const [period,setPeriod]=useState("This quarter");
  const visible=useMemo(()=>applications.filter(a=>filter==="All applications" || a.risk===filter),[filter]);
  const flash=(m:string)=>{setNotice(m);window.setTimeout(()=>setNotice(""),2400)};

  return <main className="bank-shell">
    <aside className="bank-sidebar">
      <div className="bank-brand"><span>M'</span><div><b>TRADE</b><small>FINANCIAL INSTITUTIONS</small></div></div>
      <div className="bank-org"><span>AB</span><div><small>PARTNER BANK</small><strong>Absa Trade Finance</strong></div><button>⌄</button></div>
      <nav>
        <p>WORKSPACE</p>
        {["Portfolio","Applications","Offers","Transactions","Risk & compliance"].map((x,i)=><button className={active===x?"active":""} onClick={()=>setActive(x)} key={x}><span>{["⌂","▤","◇","↗","◎"][i]}</span>{x}{x==="Applications"&&<i>12</i>}</button>)}
        <p>MANAGEMENT</p>
        {["Partners","Impact","Reports"].map((x,i)=><button className={active===x?"active":""} onClick={()=>setActive(x)} key={x}><span>{["◉","⌁","▥"][i]}</span>{x}</button>)}
      </nav>
      <div className="bank-side-foot"><div className="bank-manager"><span>NA</span><div><strong>Nana Asare</strong><small>Senior Trade Officer</small></div><button>•••</button></div><a href="/">Switch to MSME view <span>↗</span></a></div>
    </aside>

    <section className="bank-workspace">
      <header className="bank-topbar"><label><span>⌕</span><input placeholder="Search businesses, applications, transactions..."/></label><div><button className="bank-bell" onClick={()=>flash("3 portfolio alerts opened")}>♢<i/></button><button className="bank-outline" onClick={()=>flash("Portfolio export prepared")}>↓ Export</button><button className="bank-primary" onClick={()=>flash("New facility draft created")}>＋ New facility</button></div></header>

      <div className="bank-content">
        <section className="bank-welcome"><div><p>INSTITUTIONAL WORKSPACE</p><h1>{active}</h1><span>Monitor exposure, review verified applications and grow your MSME trade portfolio.</span></div><div className="bank-date"><span>◷</span><div><small>LAST DATA SYNC</small><strong>Today, 09:42 GMT</strong></div><i>LIVE</i></div></section>

        <section className="bank-kpis">
          <article><div><p>ACTIVE PORTFOLIO</p><strong>$3.90m</strong><small><b>↑ 14.2%</b> this quarter</small></div><span className="spark green"><i/><i/><i/><i/><i/></span></article>
          <article><div><p>UTILISATION</p><strong>72.4%</strong><small>$1.49m available capacity</small></div><span className="bank-ring"><b>72</b></span></article>
          <article><div><p>PORTFOLIO AT RISK</p><strong>1.8%</strong><small><b className="good">0.6% below</b> target</small></div><span className="spark rust"><i/><i/><i/><i/><i/></span></article>
          <article><div><p>MSMES FINANCED</p><strong>148</strong><small>37 first-time borrowers</small></div><span className="bank-people">♙</span></article>
        </section>

        <section className="bank-main-grid">
          <article className="bank-applications">
            <div className="bank-panel-head"><div><p>CREDIT PIPELINE</p><h2>Applications requiring action</h2></div><div><select value={filter} onChange={e=>setFilter(e.target.value)}><option>All applications</option><option>Low</option><option>Medium</option></select><button onClick={()=>setActive("Applications")}>View queue →</button></div></div>
            <div className="bank-table-head"><span>BUSINESS</span><span>FACILITY</span><span>REQUEST</span><span>PASSPORT</span><span>RISK</span><span>STATUS</span><span/></div>
            {visible.map(a=><button className="bank-app-row" key={a.business} onClick={()=>setSelected(a)}>
              <span className="bank-business"><i className={a.color}>{a.initials}</i><div><strong>{a.business}</strong><small>{a.country} · Buyer: {a.buyer}</small></div></span>
              <span><strong>{a.product}</strong><small>Trade-linked facility</small></span>
              <span className="money">${a.amount.toLocaleString()}</span>
              <span className="passport-score"><b>{a.score}</b><i><em style={{width:`${a.score}%`}}/></i></span>
              <span><em className={`risk ${a.risk.toLowerCase()}`}>{a.risk}</em></span>
              <span><strong>{a.stage}</strong><small>{a.age} in queue</small></span><span>›</span>
            </button>)}
          </article>

          <aside className="bank-right-col">
            <article className="bank-capacity">
              <div className="bank-panel-head"><div><p>CAPITAL DEPLOYMENT</p><h2>Facility capacity</h2></div><button>•••</button></div>
              <div className="capacity-total"><span><b>$3.90m</b><small>Utilised</small></span><span><b>$1.49m</b><small>Available</small></span></div>
              <div className="capacity-bar"><i/><b/></div>
              <div className="capacity-legend"><span><i/>Bank capital <b>$3.12m</b></span><span><i/>Risk-shared <b>$780k</b></span></div>
              <div className="guarantee"><span>✓</span><div><small>PARTNER GUARANTEE</small><strong>IFC portfolio cover · 20%</strong></div><button onClick={()=>flash("Guarantee details opened")}>View</button></div>
            </article>

            <article className="bank-alerts">
              <div className="bank-panel-head"><div><p>EARLY WARNING</p><h2>Portfolio signals</h2></div><span>3</span></div>
              <button onClick={()=>flash("Currency exposure opened")}><i className="warn">!</i><div><strong>Currency exposure increased</strong><small>USD/GHS movement affects 8 facilities</small></div><span>›</span></button>
              <button onClick={()=>flash("Shipment delay opened")}><i className="info">◷</i><div><strong>Two shipment delays</strong><small>No repayment impact projected</small></div><span>›</span></button>
              <button onClick={()=>flash("Concentration report opened")}><i className="safe">✓</i><div><strong>Buyer concentration improved</strong><small>Largest exposure reduced to 9.4%</small></div><span>›</span></button>
            </article>
          </aside>
        </section>

        <section className="bank-bottom-grid">
          <article className="bank-exposure"><div className="bank-panel-head"><div><p>PORTFOLIO MIX</p><h2>Exposure by sector</h2></div><select value={period} onChange={e=>setPeriod(e.target.value)}><option>This quarter</option><option>Year to date</option></select></div><div className="exposure-content"><div className="donut"><div><b>$3.90m</b><small>Total exposure</small></div></div><div className="exposure-list">{exposure.map(e=><div key={e.sector}><span><i style={{background:e.color}}/>{e.sector}</span><b>{e.value}</b><small>{e.pct}%</small></div>)}</div></div></article>
          <article className="bank-impact"><div className="bank-panel-head"><div><p>DEVELOPMENT IMPACT</p><h2>Beyond the balance sheet</h2></div><button onClick={()=>flash("Impact report opened")}>Full report →</button></div><div className="impact-grid"><div><span>♙</span><b>2,840</b><small>Jobs supported</small></div><div><span>♀</span><b>46%</b><small>Women-led MSMEs</small></div><div><span>↗</span><b>$8.7m</b><small>Trade enabled</small></div></div><div className="impact-note"><span>✦</span><p><b>37 businesses</b> accessed formal trade finance for the first time this quarter.</p></div></article>
        </section>
      </div>
    </section>

    <nav className="bank-mobile-nav">{["Portfolio","Applications","Offers","Risk"].map((x,i)=><button className={active.startsWith(x)?"active":""} key={x} onClick={()=>setActive(x)}><span>{["⌂","▤","◇","◎"][i]}</span>{x}</button>)}</nav>
    {notice&&<div className="bank-toast"><span>✓</span>{notice}</div>}
    {selected&&<div className="bank-modal-bg" onMouseDown={()=>setSelected(null)}><section className="bank-modal" onMouseDown={e=>e.stopPropagation()}><button className="bank-modal-close" onClick={()=>setSelected(null)}>×</button><p>VERIFIED APPLICATION</p><div className="modal-company"><span>{selected.initials}</span><div><h2>{selected.business}</h2><small>{selected.country} · M’World verified</small></div><em>{selected.risk} risk</em></div><div className="modal-numbers"><div><small>REQUEST</small><b>${selected.amount.toLocaleString()}</b></div><div><small>PASSPORT</small><b>{selected.score}/100</b></div><div><small>PRODUCT</small><b>{selected.product}</b></div></div><h3>Transaction evidence</h3><div className="evidence"><span>✓ Purchase order verified</span><span>✓ Buyer identity confirmed</span><span>✓ Payment account controlled</span><span>✓ Documents 92% complete</span></div><div className="modal-insight"><span>✦</span><p><b>M’Trade assessment:</b> repayment is expected from a verified buyer obligation. No duplicate financing indicators detected.</p></div><div className="modal-actions"><button onClick={()=>{setSelected(null);flash("Application sent for clarification")}}>Request information</button><button onClick={()=>{setSelected(null);flash("Indicative offer created")}}>Create offer →</button></div></section></div>}
  </main>
}
