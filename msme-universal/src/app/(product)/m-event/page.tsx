"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar, Users, Globe2, Building2, Handshake, TrendingUp, Mic, Plane,
  Hotel, Truck, MapPin, Star, Store, Video, BriefcaseBusiness, Landmark,
  Network, ChartNoAxesCombined, ChevronRight, LogIn, Languages, CheckCircle2, Menu
} from "lucide-react";
import styles from "./m-event.module.css";

const stats = [
  { icon: Globe2, value: "45+", label: "Countries" },
  { icon: Calendar, value: "200+", label: "Events Planned" },
  { icon: Users, value: "100K+", label: "Participants" },
  { icon: Building2, value: "20K+", label: "MSMEs" },
  { icon: Handshake, value: "500+", label: "Partners" },
  { icon: TrendingUp, value: "$3.2B+", label: "Business Opportunities" },
];

const solutions = [
  { icon: Users, title: "Business Matchmaking", text: "Connect with buyers, suppliers, investors and strategic partners." },
  { icon: BriefcaseBusiness, title: "Conferences & Forums", text: "High-impact knowledge sessions and policy dialogues." },
  { icon: Store, title: "Exhibitions & Trade Shows", text: "Showcase products, services and innovations." },
  { icon: Plane, title: "Trade Missions & Delegations", text: "Explore new markets and cross-border opportunities." },
  { icon: Mic, title: "Speaker Network", text: "Access experts, leaders and industry voices." },
  { icon: Landmark, title: "Government & Institutional Events", text: "Support national development and policy initiatives." },
  { icon: Network, title: "Networking & Community", text: "Build trusted relationships and communities." },
  { icon: ChartNoAxesCombined, title: "Data & Impact Reporting", text: "Measure outcomes and economic value created." },
];

const events = [
  { type: "National", image: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=900&q=80", date: "10 – 12 Jul 2027", title: "Mauritius MSME Summit", place: "Port Louis, Mauritius", tags: ["Summit", "Networking"] },
  { type: "Regional", image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80", date: "18 – 20 Aug 2027", title: "Nigeria Manufacturing Expo", place: "Lagos, Nigeria", tags: ["Exhibition", "B2B Matchmaking"] },
  { type: "Regional", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=900&q=80", date: "15 – 17 Sep 2027", title: "ASEAN Digital SME Forum", place: "Singapore", tags: ["Conference", "Digital"] },
  { type: "Global", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80", date: "05 – 07 Oct 2027", title: "Africa SME Finance Forum", place: "Nairobi, Kenya", tags: ["Finance", "Investment"] },
];

const partners = [
  { icon: Hotel, title: "Hotels" },
  { icon: Plane, title: "Airlines" },
  { icon: Truck, title: "Logistics" },
  { icon: MapPin, title: "Venues" },
  { icon: Mic, title: "Speakers" },
  { icon: Star, title: "Sponsors" },
  { icon: Store, title: "Exhibitors" },
  { icon: Video, title: "Media" },
];

const ecosystem = [
  ["M’Network", "Connect"], ["M’Call", "Communicate"], ["M’Project", "Collaborate"], ["M’Pay", "Transact"],
  ["M’Doc", "Digitise"], ["M’Butic", "Sell"], ["M’ERP", "Manage"], ["M’D³MP", "Measure Impact"], ["M’Government", "Institutions"],
];

function Logo() {
  return (
    <Link href="/m-event" className={styles["logo-wrap"]}>
      <Image src="/logos/products/m-event.png" alt="M_Event" width={140} height={40} className="object-contain h-10 w-auto" />
    </Link>
  );
}

function Header() {
  return (
    <header className={styles["site-header"]}>
      <Logo />
      <nav className={styles["main-nav"]}>
        <Link href="#home" className={styles.active}>Home</Link>
        <Link href="#about">About</Link>
        <Link href="#events">Events⌄</Link>
        <Link href="#calendar">M’Event Calendar</Link>
        <Link href="#partners">Partners⌄</Link>
        <Link href="#host">Host an Event</Link>
        <Link href="#resources">Resources⌄</Link>
        <Link href="#contact">Contact</Link>
      </nav>
      <div className={styles["header-actions"]}>
        <button className={styles.language}><Languages size={16}/> EN⌄</button>
        <button className={`${styles.btn} ${styles.ghost}`}><LogIn size={16}/> Login</button>
        <button className={`${styles.btn} ${styles.primary} ${styles.small}`}>Join M’World</button>
        <button className={styles["mobile-menu"]}><Menu /></button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles["hero-overlay"]}/>
      <div className={styles["hero-content"]}>
        <div className={styles["hero-copy"]}>
          <p className={styles.eyebrow}>M’EVENT INC</p>
          <h1>Where Businesses, Financial Institutions, Governments & Communities <span>Connect, Collaborate & Create Opportunities</span></h1>
          <p className={styles.lead}>M’Event Inc is the global event ecosystem bringing together businesses, financial institutions, governments, development partners, investors and communities through conferences, exhibitions, trade missions and business matchmaking to accelerate partnerships, innovation and sustainable economic growth.</p>
          <div className={styles["powered-line"]}><CheckCircle2 size={18}/> Powered by MSME Solutions World Group</div>
          <div className={styles["cta-row"]}>
            <button className={`${styles.btn} ${styles.primary}`}>Explore Events <ChevronRight size={18}/></button>
            <button className={`${styles.btn} ${styles.outline}`}>View M’Event Calendar <Calendar size={18}/></button>
            <button className={`${styles.btn} ${styles.outline}`}>Become a Partner <Handshake size={18}/></button>
          </div>
        </div>
        <div className={styles["summit-card"]}>
          <p>Upcoming Global Summit</p>
          <h3>M’World Global Summit 2027</h3>
          <span>📍 Dubai, UAE</span>
          <span>📅 12 – 15 March 2027</span>
          <div className={styles.timer}>
            <b>256<small>Days</small></b>
            <b>14<small>Hours</small></b>
            <b>32<small>Minutes</small></b>
            <b>45<small>Seconds</small></b>
          </div>
          <a>Register Now <ChevronRight size={16}/></a>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section className={styles["stats-bar"]}>
      {stats.map(({icon:Icon,value,label}) => (
        <div className={styles.stat} key={label}>
          <Icon/><strong>{value}</strong><span>{label}</span>
        </div>
      ))}
    </section>
  );
}

function Solutions() {
  return (
    <section className={`${styles.section} ${styles["solutions-section"]}`}>
      <div className={styles["section-head"]}>
        <p className={styles.eyebrow}>What we do</p>
        <h2>Solutions That Drive Meaningful Connections</h2>
      </div>
      <div className={styles["solution-grid"]}>
        {solutions.map(({icon:Icon,title,text}) => (
          <article className={styles["solution-card"]} key={title}>
            <Icon/><h3>{title}</h3><p>{text}</p>
          </article>
        ))}
      </div>
      <a className={styles["text-link"]}>View All Solutions <ChevronRight size={16}/></a>
    </section>
  );
}

function Events() {
  return (
    <section className={`${styles.section} ${styles["events-section"]}`}>
      <div className={styles["section-title-row"]}>
        <div>
          <p className={styles.eyebrow}>Upcoming events</p>
          <h2>Discover Upcoming Opportunities</h2>
        </div>
        <a className={styles["text-link"]}>View full calendar <ChevronRight size={16}/></a>
      </div>
      <div className={styles["event-grid"]}>
        {events.map(e => (
          <article className={styles["event-card"]} key={e.title}>
            <div className={styles["event-image"]} style={{backgroundImage:`url(${e.image})`}}>
              <span>{e.type}</span>
            </div>
            <div className={styles["event-body"]}>
              <p className={styles["event-date"]}>📅 {e.date}</p>
              <h3>{e.title}</h3>
              <p>{e.place}</p>
              <div className={styles.tags}>
                {e.tags.map(t => <span key={t}>{t}</span>)}
              </div>
              <a>Register Now <ChevronRight size={16}/></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className={`${styles.section} ${styles["partners-section"]}`}>
      <div className={styles["section-title-row"]}>
        <div>
          <p className={styles.eyebrow}>Our partners ecosystem</p>
          <h2>Working Together to Deliver Excellence</h2>
        </div>
        <a className={styles["text-link"]}>View all partners <ChevronRight size={16}/></a>
      </div>
      <div className={styles["partner-icons"]}>
        {partners.map(({icon:Icon,title}) => (
          <div className={styles["partner-icon"]} key={title}>
            <Icon/><span>{title}</span>
          </div>
        ))}
      </div>
      <div className={styles["logo-strip"]}>
        <strong>Emirates</strong><strong>Qatar Airways</strong><strong>DHL</strong><strong>Marriott</strong><strong>Hilton</strong><strong>STR Global</strong><strong>AVPartners</strong><strong>The Event Experience</strong>
      </div>
    </section>
  );
}

function HostImpact() {
  return (
    <section className={`${styles.section} ${styles["host-impact"]}`}>
      <div className={styles["host-card"]}>
        <div>
          <p className={styles.eyebrow}>Why host with M’Event</p>
          <h2>We Handle Everything. You Achieve More.</h2>
          <button className={`${styles.btn} ${styles.primary}`}>Host Your Event <ChevronRight size={18}/></button>
        </div>
        <ul>
          {['End-to-end event management','Marketing & promotion','Registration & ticketing','Travel & accommodation support','Exhibitor & sponsor management','Business matchmaking','Event technology & apps','Reporting & impact measurement'].map(x => (
            <li key={x}><CheckCircle2/> {x}</li>
          ))}
        </ul>
      </div>
      <div className={styles["impact-card"]}>
        <p className={styles.eyebrow}>Making a real impact</p>
        <h2>Creating Value. Driving Growth.</h2>
        <div className={styles["impact-grid"]}>
          {['100K+ Participants','25K+ Business Meetings','$3.2B+ Opportunities','18K+ Partnerships','45+ Countries','60% SMEs & Startups','40% Women Entrepreneurs','35% Youth Entrepreneurs'].map(x => (
            <span key={x}>{x}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className={`${styles.section} ${styles["ecosystem-section"]}`}>
      <div>
        <p className={styles.eyebrow}>Powered by M’World Ecosystem</p>
        <h2>One ecosystem. Endless value.</h2>
        <p>M’Event is integrated with the M’World platform to deliver seamless engagement before, during and after each event.</p>
      </div>
      <div className={styles["eco-grid"]}>
        {ecosystem.map(([name,action]) => (
          <div className={styles["eco-pill"]} key={name}>
            <strong>{name}</strong><span>{action}</span>
          </div>
        ))}
      </div>
      <a className={styles["text-link"]}>Explore M’World Ecosystem <ChevronRight size={16}/></a>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-top"]}>
        <Logo />
        <p>Join thousands of organisations, governments and partners building the future through collaboration and events that create impact.</p>
        <button className={`${styles.btn} ${styles.primary}`}>Join M’World Today <ChevronRight size={18}/></button>
      </div>
      <div className={styles["footer-grid"]}>
        {[
          ['Events','National M’Events','Regional M’Events','Global Summit','Industry Events'],
          ['M’Event Calendar','Upcoming Events','Calendar View','My Events','Past Events'],
          ['Partners','Hotels','Airlines','Logistics','Speakers'],
          ['Host an Event','Why Host with Us','Services','Request Proposal','Case Studies'],
          ['Company','About Us','Our Impact','Careers','Contact Us']
        ].map(col => (
          <div key={col[0]}>
            <h4>{col[0]}</h4>
            {col.slice(1).map(i => <a key={i}>{i}</a>)}
          </div>
        ))}
      </div>
      <div className={styles["footer-bottom"]}>
        <span>© 2027 M’Event Inc. All Rights Reserved.</span>
        <span>Privacy Policy · Terms of Use · Cookie Policy</span>
      </div>
    </footer>
  );
}

export default function MEventLanding() {
  return (
    <div className={styles.meventPage}>
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <div className={styles["content-grid"]}>
          <Solutions />
          <Events />
        </div>
        <Partners />
        <HostImpact />
        <Ecosystem />
      </main>
      <Footer />
    </div>
  );
}
