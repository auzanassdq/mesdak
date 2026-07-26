"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, BadgeCheck, Banknote, BarChart3, Bell, Building2, ChevronDown, CircleDollarSign,
  CircleHelp, ClipboardCheck, CreditCard, Download, FileBarChart, FileCheck, FileText, IdCard,
  Landmark, LayoutDashboard, LineChart, Network, Phone, Radar, Search, Send, ShieldCheck,
  ShoppingBag, ShoppingCart, Sprout, Store, TrendingUp, User, UserRound, UsersRound, Wallet, WalletCards
} from "lucide-react";
import styles from "./m-pay.module.css";

const A = {
  logo: "/logos/products/m-pay.png",
  logoWhite: "/assets/products/mpay-logo-white.png", // Or a white version if available
  google: "/assets/products/google-play.svg",
  apple: "/assets/products/app-store.svg",
  harmony: "/assets/products/harmony-os.svg",
  msme: "/assets/products/msme-card.jpg",
  investor: "/assets/products/investor-card.jpg",
  cross: "/assets/products/cross-border-card.jpg",
  gov: "/assets/products/government-card.jpg"
};

function Header() {
  return (
    <header className={styles.nav}>
      <Link className={styles.brand} href="/m-pay">
        <Image src={A.logo} alt="M'Pay" width={40} height={40} className="object-contain h-8 w-auto" />
        <span>Rock Your Finance</span>
      </Link>
      <nav className={styles.navlinks}>
        <a href="#solutions">Solutions <ChevronDown size={14} /></a>
        <a href="#msmes">For MSMEs</a>
        <a href="#investors">For Investors</a>
        <a href="#funds">For Funds</a>
        <a href="#governments">For Governments</a>
        <a href="#compliance">Tax & Compliance</a>
        <a href="#security">Security</a>
        <a href="#resources">Resources <ChevronDown size={14} /></a>
      </nav>
      <Link href="/login" className={styles.signin}>Sign In</Link>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-copy"]}>
        <h1>M’Pay</h1>
        <div className={styles.slogan}>Rock Your Finance</div>
        <h2>The Payment & Investment Platform for MSMEs, Investors, Asset Managers & Governments.</h2>
        <p>M’Pay enables MSMEs to pay, receive, manage and trace money across business, e-commerce, taxation and cross-border investment flows.</p>
        <div className={styles["quick-points"]}>
          {[[Send, "Pay"], [Download, "Receive"], [TrendingUp, "Invest"], [Sprout, "Grow"]].map(([I, t]: any) => (
            <span key={t}><I />{t}</span>
          ))}
        </div>
        <div className={styles["hero-actions"]}>
          <a className={`${styles.btn} ${styles.primary}`} href="#start">
            <b>Start with M’Pay</b><small>For MSMEs & Businesses</small><ArrowRight />
          </a>
          <a className={`${styles.btn} ${styles.secondary}`} href="#investment">
            <b>Explore Investment Flows</b><small>For Investors & Funds</small><ArrowRight />
          </a>
          <a className={`${styles.btn} ${styles.light}`} href="/login">
            <User /><b>Sign In</b>
          </a>
        </div>
      </div>
      <Dashboard />
    </section>
  );
}

function Dashboard() {
  const menu = [
    [LayoutDashboard, "Dashboard", 1], [CreditCard, "Payments"], [ShoppingCart, "E-commerce"],
    [ShieldCheck, "Tax Reserve"], [LineChart, "Investment Flows"], [Landmark, "Funds"],
    [CircleDollarSign, "Dividends"], [Wallet, "Wallets"], [FileBarChart, "Reports"], [BadgeCheck, "Compliance"]
  ];
  return (
    <div className={styles["dashboard-wrap"]}>
      <div className={styles.glow} />
      <div className={styles.dashboard}>
        <aside>
          <div className={styles["dash-logo"]}><img src={A.logo} alt="M'Pay" /></div>
          {menu.map(([I, t, active]: any) => <a key={t} className={active ? styles.active : ""}><I />{t}</a>)}
        </aside>
        <section className={styles["dash-main"]}>
          <div className={styles["dash-top"]}>
            <div className={styles.search}><Search size={15} />Search transactions, invoices, users...</div>
            <Bell /><CircleHelp /><span className={styles.avatar} />
          </div>
          <h3>Welcome back, Marie 👋</h3>
          <p>Here’s what’s happening with your account today.</p>
          <div className={styles.metrics}>
            {["Available Balance|USD 24,680|↑ 12.5%", "Payments Received|USD 18,250|↑ 15.7%", "E-commerce Sales|USD 9,480|↑ 9.2%", "Tax Reserve|USD 3,250|↑ 8.2%"].map(x => {
              const [a, b, c] = x.split("|");
              return (
                <div key={a}><small>{a}</small><b>{b}</b><em>{c}</em></div>
              );
            })}
          </div>
          <div className={styles["dash-grid"]}>
            <div className={styles["chart-card"]}>
              <h4>Transaction Overview <span>7 Days</span></h4>
              <div className={styles["chart-lines"]} />
            </div>
            <div className={styles["activity-card"]}>
              <h4>Recent Activity <span>View all</span></h4>
              {["Payment from ABC Ltd|+ USD 1,250", "E-commerce Order #1253|+ USD 700", "Tax Reserve Transfer|- USD 320", "Investment Received|+ USD 5,000", "Dividend Received|+ USD 210"].map(x => {
                const [a, b] = x.split("|");
                return (
                  <p key={a}><b>{a}</b><em className={b.startsWith("-") ? styles.out : ""}>{b}</em></p>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Audiences() {
  const items = [
    { icon: Store, title: "For MSMEs", desc: "Receive payments, sell online, manage taxes and access funding to grow your business.", id: "msmes" },
    { icon: UserRound, title: "For Investors", desc: "Invest in MSMEs and regional funds, track your portfolio and receive dividends transparently.", id: "investors" },
    { icon: Landmark, title: "For Funds", desc: "Collect capital, invest in MSMEs and distribute returns through a compliant, secure platform.", id: "funds" },
    { icon: Building2, title: "For Governments", desc: "Drive financial inclusion, simplify tax collection and monitor economic impact in real time.", id: "governments" },
    { icon: Network, title: "For M’Network Users", desc: "Invest in eligible regional funds and receive dividends directly in your M’Pay wallet.", id: "" }
  ];
  return (
    <section className="text-center py-10 lg:py-16 px-6 lg:px-14" id="solutions">
      <h2 className="text-[28px] font-bold mb-2 text-[#071D35]">One Platform. Built for Everyone.</h2>
      <p className="text-[#5C6B7A] mb-10 text-[15px]">M’Pay serves all key participants in the MSME and investment ecosystem.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1420px] mx-auto">
        {items.map(({ icon: Icon, title, desc, id }) => (
          <article id={id || undefined} key={title} className="bg-white border border-[#E6EEF0] rounded-[18px] p-6 text-left shadow-[0_14px_45px_rgba(0,75,80,0.05)] flex flex-col h-full hover:shadow-[0_28px_80px_rgba(0,75,80,0.12)] transition-shadow duration-300">
            <Icon className="w-[46px] h-[46px] p-2.5 rounded-2xl bg-[#E9FFFC] text-[#007A75] mb-5" />
            <h3 className="text-[18px] font-bold text-[#071D35] mb-2">{title}</h3>
            <p className="text-[#071D35] text-[14px] leading-relaxed mb-6">{desc}</p>
            <a className="mt-auto text-[#007A75] font-black text-[14px] flex items-center gap-2 cursor-pointer hover:underline">
              Learn more <ArrowRight size={15} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Flows() {
  const flows = [
    [CreditCard, "Payments", "Send and receive payments, invoices, QR payments, wallet, bank and card transactions."],
    [ShoppingCart, "E-commerce", "Secure checkout, order reconciliation, seller settlements and simplified refunds."],
    [ShieldCheck, "Tax Simplification", "Tax reserve wallet, automated calculations, tax payment support and simplified reporting."],
    [TrendingUp, "Investment & Dividends", "Cross-border investment flows, fund subscriptions, dividend distribution and withdrawals."]
  ];
  return (
    <section className={styles.flows}>
      <h2>One Platform. Four Powerful Financial Flows.</h2>
      <div className={styles["flow-grid"]}>
        {flows.map(([I, t, p]: any) => (
          <article key={t}><I /><h3>{t}</h3><p>{p}</p></article>
        ))}
      </div>
    </section>
  );
}

function ImageCards() {
  const cards = [
    [A.msme, "Grow Your Business", "Accept payments. Sell online. Stay tax-ready. Access funding."],
    [A.investor, "Invest with Confidence", "Discover opportunities. Track performance. Receive dividends."],
    [A.cross, "Move Capital Across Borders", "Secure, compliant and transparent investment flows."],
    [A.gov, "Empower Economies", "Improve financial inclusion and monitor MSME growth at scale."]
  ];
  return (
    <section className={styles["image-cards"]}>
      {cards.map(([img, t, p]) => (
        <article key={t}>
          <img src={img} alt="" />
          <div><h3>{t}</h3><p>{p}</p></div>
        </article>
      ))}
    </section>
  );
}

function Trust() {
  const items = [
    { icon: IdCard, title: "KYC / KYB", desc: "Verified onboarding for all users" },
    { icon: Radar, title: "AML Monitoring", desc: "Advanced monitoring & risk management" },
    { icon: FileCheck, title: "Audit Trail", desc: "End-to-end transaction transparency" },
    { icon: WalletCards, title: "Secure Wallets", desc: "Multi-currency secure storage" },
    { icon: UsersRound, title: "Institutional Reporting", desc: "Real-time reports for governments & partners" }
  ];
  return (
    <section className={styles.trust} id="security">
      <h2>Built on Trust. Secured for You.</h2>
      <p>Bank-grade security. Full transparency. Complete peace of mind.</p>
      <div className="grid grid-cols-1 lg:grid-cols-5 border border-[#E6EEF0] rounded-[18px] bg-white max-w-[1420px] mx-auto overflow-hidden">
        {items.map(({ icon: Icon, title, desc }) => (
          <div 
            key={title}
            className="flex flex-col gap-3 p-5 lg:p-6 text-left border-[#E6EEF0] border-b lg:border-b-0 lg:border-r last:border-b-0 last:border-r-0"
          >
            <div className="flex items-center gap-3">
              <Icon className="text-[#007A75] bg-[#E9FFFC] rounded-full p-2.5 w-[42px] h-[42px] shrink-0" />
              <b className="text-[#071D35] text-[15px] leading-tight">{title}</b>
            </div>
            <p className="text-[#5C6B7A] text-[13px] m-0 leading-relaxed">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Ecosystem() {
  const e = [
    [Network, "M’Network"], [ShoppingBag, "M’Butic"], [Phone, "M’Call"], [ClipboardCheck, "M’Project"],
    [BarChart3, "M’D³MP"], [FileText, "M’Doc"], [Landmark, "M’Government"], [Banknote, "M’Finance"]
  ];
  return (
    <section className={styles.ecosystem}>
      <h2>Powering the M’World Ecosystem.</h2>
      <div className={styles["ecosystem-row"]}>
        {e.map(([I, t]: any) => <span key={t}><I />{t}</span>)}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.cta} id="start">
      <div>
        <h2>Ready to Rock Your Finance?</h2>
        <p>Join MSMEs, investors and institutions using M’Pay to grow, invest and prosper.</p>
      </div>
      <a>Create Account</a>
      <a className={styles.outline}>Contact Sales</a>
      <div className={styles.stores}>
        <b>Get M’Pay on your device</b>
        <span>
          <img src={A.google} alt="Google Play" />
          <img src={A.apple} alt="App Store" />
          <img src={A.harmony} alt="HarmonyOS" />
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <img src={A.logo} alt="M'Pay" />
        <p>M’Pay is a member of the MSME Solutions World Group. Empowering MSMEs. Connecting Capital. Creating Impact.</p>
      </div>
      {["Product|Payments,E-commerce,Tax Reserve,Investment Flows,Dividends", "Company|About Us,Careers,Partners,Contact Us", "Resources|Help Center,Documentation,Guides,Blog", "Legal|Privacy Policy,Terms of Service,Compliance,Security"].map(col => {
        const [h, items] = col.split("|");
        return (
          <div key={h}>
            <b>{h}</b>
            {items.split(",").map(i => <a key={i}>{i}</a>)}
          </div>
        );
      })}
    </footer>
  );
}

export default function MPayLanding() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <Hero />
        <Audiences />
        <Flows />
        <ImageCards />
        <Trust />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
