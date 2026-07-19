"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./m-media.module.css";

const logo = "/logos/products/m-media.png";

const storyItems = [
  ["Funding", "World Bank Approves $200M to Support MSMEs in Africa", "3h ago", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80"],
  ["Trade", "AfCFTA: New Digital Platform Simplifies Cross-border Trade for SMEs", "4h ago", "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80"],
  ["Technology", "AI Solutions Helping Small Businesses Drive Growth", "5h ago", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80"],
  ["Policy", "Malaysia Introduces SME Tax Incentives for 2025", "6h ago", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=300&q=80"]
];

const quickLinks = [
  ["📰", "News"], ["💼", "Business Opportunities"], ["🏦", "Funding & Grants"], ["📑", "Policy Updates"],
  ["📈", "Markets & Insights"], ["📅", "Events"], ["▶", "M’Media TV"], ["📚", "Publications"]
];

const topics = ["Entrepreneurship","Fintech","Exports","Digital Transformation","Women in Business","Green Energy","Agriculture","E-commerce","Tourism","Youth Entrepreneurs","Manufacturing"];
const industries = ["Agriculture","Manufacturing","Technology","Tourism","Creative Economy","Construction","Healthcare","Energy"];

export default function MMediaLanding() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <div className={styles["topbar-inner"]}>
          <Link className={styles.brand} href="/m-media">
            <span className={styles["brand-mark"]}><Image src={logo} alt="M'Media logo" width={40} height={40} className="object-contain h-8 w-auto" /></span>
            <span className={styles["brand-title"]}>M’MEDIA <span>The Voice of the MSME Economy</span></span>
          </Link>
          <form className={styles.search} role="search" onSubmit={(e) => e.preventDefault()}>
            <input aria-label="Search M'Media" placeholder="Search news, topics, companies, opportunities..." />
            <button type="submit">⌕</button>
          </form>
          <div className={styles.actions}>
            <button className={styles.pill}>🌐 EN⌄</button>
            <button className={styles.login}>Log in</button>
            <button className={styles.signup}>Sign up</button>
          </div>
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles["nav-inner"]}>
            {["News","TV","Markets","Opportunities","Industries","Countries","Events","Publications","Library","More⌄"].map((item, i) => (
              <a key={item} className={i === 0 ? styles.active : ""} href={`#${item.toLowerCase().replace("⌄","")}`}>{item}</a>
            ))}
          </div>
        </nav>
      </header>

      <section className={styles.ticker}>
        <div className={styles["ticker-inner"]}>
          <strong className={styles.breaking}>BREAKING ⚡</strong>
          <div className={styles["ticker-track"]}>
            {["Kenya launches $50M fund for women-led SMEs","IFC expands digital finance support for MSMEs","EU unveils green transition support for SMEs","ADB backs MSME resilience in Asia","AfCFTA digital trade platform opens new routes"].map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.hero} id="news">
          <div className={styles["hero-main"]}>
            <div className={styles["hero-copy"]}>
              <span className={styles.kicker}>Daily MSME intelligence</span>
              <h1>Be Faster.<br/>Easier.<br/>Everywhere<span className={styles.dot}>.</span></h1>
              <p>Your daily source of news, intelligence, opportunities and stories shaping the MSME economy — from local markets to the global stage.</p>
              <form className={styles["hero-search"]} onSubmit={(e) => e.preventDefault()}>
                <input placeholder="Search news, companies, opportunities..."/>
                <button>⌕</button>
              </form>
              <div className={styles.popular}>
                <span>Popular:</span>
                {["Funding","Export","AI for SMEs","Green Energy","Trade"].map(t => (
                  <a className={styles.topic} href="#" key={t}>{t}</a>
                ))}
              </div>
            </div>
          </div>
          <aside className={styles.snapshot} id="markets">
            <div className={styles["snapshot-header"]}>
              <h3>Market Snapshot</h3>
              <a className={styles.view} href="#">View all</a>
            </div>
            {[
              ["Global MSME Index","52.7","↑ 2.1%","up"],
              ["MSME Confidence Index","112.4","↑ 4.2%","up"],
              ["Commodity Prices","","↑ 1.3%","up"],
              ["Exchange Rates","Mixed","",""],
              ["Inflation Avg.","3.6%","↓ 0.2%","down"]
            ].map(([label,val,change,cls]) => (
              <div className={styles.metric} key={label}>
                <span>{label}</span>
                <b>{val} {change && <em className={styles[cls] || cls}>{change}</em>}</b>
              </div>
            ))}
            <small>Last updated: 1 hour ago</small>
          </aside>
        </section>

        <section className={styles["quick-links"]}>
          {quickLinks.map(([icon,label]) => (
            <a className={styles.quick} key={label}>
              <span className={styles["quick-icon"]}>{icon}</span>{label}
            </a>
          ))}
        </section>

        <section className={styles["content-grid"]}>
          <div className={styles.section}>
            <div className={styles["section-header"]}>
              <h2>Top Stories</h2><a className={styles.view} href="#">View all</a>
            </div>
            <div className={styles.stories}>
              <article className={styles["lead-card"]}>
                <span className={styles.label}>Business</span>
                <h2>Digital Tools Are Transforming SMEs in Emerging Markets</h2>
                <p>New research shows digital adoption is boosting productivity and opening new export opportunities.</p>
              </article>
              <div className={styles["story-list"]}>
                {storyItems.map(([cat,title,time,img]) => (
                  <article className={styles["story-item"]} key={title}>
                    <div className={styles.thumb}><img src={img} alt="" /></div>
                    <div><small>{cat}</small><h4>{title}</h4><span>{time}</span></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
          <aside className={styles.section}>
            <div className={styles["section-header"]}>
              <h2>Enterprise Manager Interviews</h2><a className={styles.view} href="#">View all</a>
            </div>
            <article className={styles.interview}>
              <span className={styles.play}>▶</span>
              <div className={styles.quote}>“Innovation and agility are key to building resilient businesses.”</div>
              <p>— Marco van Zyl, CEO, GreenPack Solutions</p>
            </article>
          </aside>
        </section>

        <section className={styles["content-grid"]}>
          <div className={styles.section} id="opportunities">
            <div className={styles["section-header"]}>
              <h2>MSW Cell Funds — Powering MSME Growth</h2><a className={styles.view} href="#">View all funds</a>
            </div>
            <div className={styles.funds}>
              {[
                ["MSW Cell Africa Fund","map-shape","Catalysing MSME finance, innovation and inclusive growth across Africa.","Explore Africa Fund →"],
                ["MSW Cell Asia Fund","map-shape map-asia","Driving entrepreneurship, digital transformation and sustainable growth in Asia.","Explore Asia Fund →"],
                ["MSW Cell Latin America Fund","map-shape map-latam","Supporting MSMEs to scale, innovate and compete in Latin America and the Caribbean.","Explore Latin America Fund →"]
              ].map(([title,shape,text,cta]) => (
                <article className={styles["fund-card"]} key={title}>
                  <h3>{title}</h3>
                  <div className={`${styles[shape.split(" ")[0]]} ${shape.split(" ")[1] ? styles[shape.split(" ")[1]] : ""}`}></div>
                  <p>{text}</p>
                  <a href="#">{cta}</a>
                </article>
              ))}
            </div>
          </div>
          <aside className={styles.section}>
            <div className={styles["section-header"]}>
              <h2>Trending Topics</h2><a className={styles.view} href="#">View all</a>
            </div>
            <div className={styles.topics}>
              {topics.map(t => <a className={styles.tag} key={t}>{t}</a>)}
            </div>
          </aside>
        </section>

        <section className={styles["lower-grid"]}>
          <div className={styles.section} id="events">
            <div className={styles["section-header"]}>
              <h2>Upcoming Events</h2><a className={styles.view}>View calendar →</a>
            </div>
            {[
              ["28","MAY","Africa SME Finance Forum 2025","Nairobi, Kenya"],
              ["05","JUN","Global Entrepreneurship Summit","Riyadh, Saudi Arabia"],
              ["12","JUN","Women in Business Conference","Dubai, UAE"]
            ].map(([d,m,title,place]) => (
              <article className={styles.event} key={title}>
                <div className={styles.date}>{d}<span>{m}</span></div>
                <div><b>{title}</b><br/><small>{place}</small></div>
                <button className={styles["btn-small"]}>Register</button>
              </article>
            ))}
          </div>
          <div className={styles.section} id="tv">
            <div className={styles["section-header"]}>
              <h2>M’Media TV — Watch & Listen</h2><a className={styles.view}>View all videos →</a>
            </div>
            <article className={styles["video-card"]}>
              <span className={styles.label}>Featured Interview</span>
              <h3>Building Sustainable MSMEs for the Future</h3>
              <p>With Amina Diop, Founder & CEO, EcoTrade Africa</p>
            </article>
          </div>
          <aside className={styles.services}>
            <h2>Get Your Business Seen. Grow Your Impact.</h2>
            <p>Share your story, announce your news or promote your opportunity to a global MSME audience.</p>
            <button className={styles.cta}>Publish with M’Media →</button>
          </aside>
        </section>

        <section className={styles["world-industries"]} id="countries">
          <div className={styles["map-panel"]}>
            <div className={styles["section-header"]}>
              <h2>Around the World</h2><a className={styles.view}>Explore by region →</a>
            </div>
            <div className={styles["world-map"]}></div>
            <div className={styles["region-tabs"]}>
              <button className={styles.active}>Africa</button>
              <button>Asia</button>
              <button>Europe</button>
              <button>Americas</button>
            </div>
          </div>
          <div className={styles.industries} id="industries">
            <div className={styles["section-header"]}>
              <h2>Featured Industries</h2><a className={styles.view}>View all industries →</a>
            </div>
            <div className={styles["industry-list"]}>
              {industries.map(i => (
                <div className={styles.industry} key={i}>
                  <div className={styles["industry-img"]}></div>{i}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.newsletter}>
          <div>
            <h2>Your daily source of MSME news, opportunities and intelligence.</h2>
            <p>Stay informed. Stay ahead.</p>
          </div>
          <form className={styles.email} onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Enter your email address"/>
            <button>Subscribe</button>
          </form>
          <div>✓ Daily updates &nbsp;&nbsp; ✓ Curated content &nbsp;&nbsp; ✓ No spam, ever</div>
        </section>
      </div>

      <footer className={styles.footer}>
        <div className={styles["footer-inner"]}>
          <div>
            <div className={styles.brand}>
              <span className={styles["brand-mark"]}><Image src={logo} alt="" width={40} height={40} className="object-contain" /></span>
              <span className={styles["brand-title"]}>M’MEDIA <span>The Voice of the MSME Economy</span></span>
            </div>
            <p>M’Media is the media and intelligence platform of the M’World ecosystem, dedicated to the growth and visibility of MSMEs worldwide.</p>
          </div>
          {[
            ["Explore",["News","TV","Markets","Countries","Industries","Opportunities","Events"]],
            ["Resources",["Publications","Library","Reports","Research","Data & Insights","Policy Updates"]],
            ["Services",["Promote Your Business","Media Partnerships","Advertising","Brand Solutions","Event Coverage","Press Releases"]],
            ["About",["About M’Media","Our Mission","Team","Careers","Contact Us"]]
          ].map(([title,links]: any) => (
            <div key={title as string}>
              <h4>{title}</h4>
              {links.map((l: string) => <a key={l}>{l}</a>)}
            </div>
          ))}
          <div>
            <h4>Part of M’World Ecosystem</h4>
            <div className={styles["eco-icons"]}>
              {["M’Network","M’Butic","i-ERP","M’Project","M’Finance","M’Pay","M’Doc","M’Call"].map(e => (
                <span className={styles.eco} key={e}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
