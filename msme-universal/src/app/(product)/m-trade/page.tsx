"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./m-trade.module.css";

const groups = [
  { no: "01", title: "Trade", lead: "Buyers & sellers", items: "Importers · Exporters · Manufacturers · Distributors", tone: styles.green1 },
  { no: "02", title: "Finance", lead: "Capital that moves", items: "Banks · Lenders · Investors · Payments · FX providers", tone: styles.green2 },
  { no: "03", title: "Assurance", lead: "Confidence built in", items: "Insurers · Guarantors · Credit protection partners", tone: styles.green3 },
  { no: "04", title: "Logistics", lead: "From origin to arrival", items: "Carriers · Freight forwarders · Warehouses · Customs brokers", tone: styles.green4 },
  { no: "05", title: "Verification", lead: "Trust, made visible", items: "Inspectors · Certification bodies · Legal & compliance", tone: styles.green5 },
  { no: "06", title: "Public & platform", lead: "The enabling layer", items: "Regulators · Government agencies · M’Trade operations", tone: styles.green6 },
];

export default function MTradeLanding() {
  return (
    <div className={styles.mtradePage}>
      <nav className={`${styles.nav} ${styles.shell}`} aria-label="Primary navigation">
        <Link className={styles.brand} href="#top" aria-label="M’Trade home">
          <Image src="/mtrade-mark.png" alt="M’Trade Logo" width={35} height={35} priority />
          <span>M’Trade</span>
        </Link>
        <div className={styles.navlinks}>
          <Link href="#ecosystem">Ecosystem</Link>
          <Link href="#how">How it works</Link>
          <Link href="#about">About</Link>
        </div>
        <Link className={`${styles.navcta} text-white`} href="#join">
          Join the network <span>↗</span>
        </Link>
      </nav>

      <main>
        <section className={`${styles.hero} ${styles.shell}`} id="top">
          <div className={styles.eyebrow}><i /> One trusted trade network</div>
          <h1>Connect Globally.<br /><em>Trade Smarter.</em></h1>
          <p className={styles.heroTagline}>The all-in-one trade platform for MSMEs.</p>
          <p className={styles.heroCopy}>Commerce. Capital. Assurance. Logistics. Finally unified. M’Trade transforms fragmented trade into a single, trusted flow—giving you the clarity and confidence to execute every deal.</p>
          <div className={styles.heroActions}>
            <Link className={`${styles.primary} text-white`} href="#join">Find your place <span>↗</span></Link>
            <Link className={styles.textLink} href="#ecosystem">Explore the ecosystem <span>↓</span></Link>
          </div>
          <div className={styles.network} aria-hidden="true">
            <div className={`${styles.orbit} ${styles.orbitA}`}><span></span></div>
            <div className={`${styles.orbit} ${styles.orbitB}`}><span></span></div>
            <div className={`${styles.orbit} ${styles.orbitC}`}><span></span></div>
            <div className={styles.core}>
              <Image src="/mtrade-mark.png" alt="M’Trade Core Symbol" width={78} height={78} />
            </div>
            <b className={`${styles.node} ${styles.n1}`}>TRADE</b>
            <b className={`${styles.node} ${styles.n2}`}>FINANCE</b>
            <b className={`${styles.node} ${styles.n3}`}>ASSURANCE</b>
            <b className={`${styles.node} ${styles.n4}`}>LOGISTICS</b>
            <b className={`${styles.node} ${styles.n5}`}>VERIFY</b>
            <b className={`${styles.node} ${styles.n6}`}>PUBLIC</b>
          </div>
        </section>

        <section className={`${styles.proof} ${styles.shell}`} aria-label="Platform benefits">
          <div><strong>One</strong><span>connected ecosystem</span></div>
          <div><strong>Six</strong><span>essential groups</span></div>
          <div><strong>End-to-end</strong><span>trade visibility</span></div>
          <p>Built for the people and institutions<br />that make global trade possible.</p>
        </section>

        <section className={`${styles.ecosystem} ${styles.shell}`} id="ecosystem">
          <header className={styles.sectionHead}>
            <div>
              <span className={styles.kicker}>THE M’TRADE ECOSYSTEM</span>
              <h2>Every role.<br />One clear place.</h2>
            </div>
            <p>Six interconnected networks simplifying the complexity of global trade into a single, effortless flow.</p>
          </header>
          <div className={styles.groupGrid}>
            {groups.map((group) => (
              <article className={`${styles.groupCard} ${group.tone}`} key={group.no}>
                <div className={styles.cardTop}>
                  <span>{group.no}</span>
                  <b>↗</b>
                </div>
                <div className={styles.glyph} aria-hidden="true">
                  <i /><i /><i />
                </div>
                <h3>{group.title}</h3>
                <h4>{group.lead}</h4>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.flow} id="how">
          <div className={`${styles.shell} ${styles.flowInner}`}>
            <span className={styles.kicker}>HOW IT COMES TOGETHER</span>
            <h2>One transaction.<br /><em>An intelligent ecosystem activated.</em></h2>
            <div className={styles.steps}>
              <div><b>01</b><h3>Connect</h3><p>Verified participants meet around a real trade opportunity.</p></div>
              <div><b>02</b><h3>Structure</h3><p>Finance, protection and fulfilment align around one deal.</p></div>
              <div><b>03</b><h3>Move</h3><p>Goods, documents and payments progress with shared visibility.</p></div>
              <div><b>04</b><h3>Grow</h3><p>Trust compounds into stronger relationships and more trade.</p></div>
            </div>
          </div>
        </section>

        <section className={`${styles.join} ${styles.shell}`} id="join">
          <Image src="/mtrade-mark.png" alt="M’Trade symbol" width={90} height={90} />
          <div>
            <span className={styles.kicker}>YOUR PLACE IN GLOBAL TRADE</span>
            <h2>Ready to move trade<br />forward, together?</h2>
          </div>
          <a className={`${styles.primary} ${styles.primaryLight}`} href="mailto:hello@mtrade.network">
            Join M’Trade <span>↗</span>
          </a>
        </section>
      </main>

      <footer className={`${styles.footer} ${styles.shell}`} id="about">
        <Link className={styles.brand} href="#top">
          <Image src="/mtrade-mark.png" alt="M’Trade Logo" width={35} height={35} />
          <span>M’Trade</span>
        </Link>
        <p>Trade, connected.</p>
        <small>© 2026 M’Trade. All rights reserved.</small>
      </footer>
    </div>
  );
}
