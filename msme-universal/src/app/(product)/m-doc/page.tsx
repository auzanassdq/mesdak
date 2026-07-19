"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, User, Building2, LayoutDashboard, Send, BarChart3, BadgeCheck, MessagesSquare, PieChart, Landmark, Phone, CreditCard, Search, Bell, CircleHelp, CloudUpload, Calendar, Cloud, Share2, MessageSquare, ClipboardList, Sparkles, FileText, LockKeyhole, ShieldCheck, Workflow, Lock, FileCheck, Linkedin, Twitter, Youtube, ChevronDown } from "lucide-react";
import styles from "./m-doc.module.css";

const ASSETS = {
  logo: "/logos/products/m-doc.png",
  icon: "/assets/products/mdoc-icon.png",
  mnetwork: "/assets/products/mnetwork-icon.png",
};

export default function MDocLanding() {
  const adminMenu = [
    [LayoutDashboard, "Dashboard", true], [Send, "Invite", false], [BarChart3, "Data Analytics", false], [BadgeCheck, "M’D³MP", false],
    [MessagesSquare, "Communicate", false], [PieChart, "Survey", false], [Landmark, "M’Project", false], [Phone, "M’Call", false], [CreditCard, "M’Pay", false],
  ];

  return (
    <div className={styles.mdocPage}>
      <header className={styles.nav}>
        <Link className={styles.brand} href="/m-doc"><Image src={ASSETS.logo} alt="M'Doc" width={50} height={15} /></Link>
        <nav className={styles.navlinks}>
          <Link href="#solutions">Solutions</Link>
          <Link href="#everyone">For Everyone</Link>
          <Link href="#admin">For Teams & Enterprises</Link>
          <Link href="#analytics">AI & Analytics</Link>
          <Link href="#security">Security</Link>
          <Link href="#pricing">Pricing</Link>
          <Link href="#resources">Resources <ChevronDown size={14}/></Link>
        </nav>
        <Link className={styles.signin} href="/login">Sign In</Link>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <h1>Digitise.<br/>Organise.<br/>Distribute.<br/><span>Generate Insights.</span></h1>
            <p>M’Doc helps you turn files — text, images, voice and video — into actionable insights.<br/><strong>Secure. Simple. Smart.</strong></p>
            <div className={styles.heroActions}>
              <Link className={`${styles.btn} ${styles.primary} text-white`} href="#everyone">
                <User/>
                <span><b>Explore M’Doc</b><small>For Individuals & Businesses</small></span>
                <ArrowRight/>
              </Link>
              <Link className={`${styles.btn} ${styles.secondary}`} href="#admin">
                <Building2/>
                <span><b>Launch Admin Panel</b><small>For Enterprises & Institutions</small></span>
                <ArrowRight/>
              </Link>
            </div>
          </div>

          <div className={styles.productStage}>
            <div className={styles.laptop}>
              <aside>
                <div className={styles.miniLogo}>M’Doc <span>Admin</span></div>
                {adminMenu.map(([Icon,label,active]: any) => <a key={label} className={active ? styles.active : ""}><Icon/> {label}</a>)}
              </aside>
              <div className={styles.screen}>
                <div className={styles.screenTop}>
                  <div className={styles.search}><Search size={15}/>Search files, users, forms, reports...</div>
                  <Bell/><CircleHelp/><span className={styles.avatar}/>
                </div>
                <h3>Welcome back, Jane 👋</h3><p>Here’s what’s happening with your workspace today.</p>
                <div className={styles.stats}>
                  {["Total Files|24,680|↑ 12.5%","Submissions Today|523|↑ 15.7%","Active Users|1,248|↑ 9.2%","Collections|128|↑ 8.2%"].map(x=>{
                    const [a,b,c]=x.split("|"); 
                    return <div key={a}><small>{a}</small><b>{b}</b><em>{c}</em></div>
                  })}
                </div>
                <div className={styles.dashboardGrid}>
                  <div className={styles.chartCard}><h4>Submission Activity</h4><div className={styles.chartLine}/></div>
                  <div className={styles.listCard}>
                    <h4>Top Collections <span>View all</span></h4>
                    {["Client Onboarding 1,240","Project Files 950","Field Surveys 786","HR Documents 532","Compliance Reports 412"].map(i=><p key={i}>{i.replace(/ \S+$/,"")} <b>{i.split(" ").at(-1)}</b></p>)}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.phone}>
              <div className={styles.phoneHead}><Image src={ASSETS.logo} alt="M'Doc" width={55} height={17} /><Search size={13}/></div>
              <h4>My Files</h4>
              {["Documents (24)","Images (156)","Voice (10)","Videos (12)"].map(i=><p key={i}>{i}</p>)}
              <h4>Recent Files</h4>
              {["Project_Proposal.pdf","Site_Photo.jpg","Voice_Note.m4a"].map(i=><p key={i}>{i}</p>)}
            </div>
          </div>
        </section>

        <section className={styles.two} id="solutions">
          <h2>One Platform. Two Powerful Experiences.</h2><p>Whether you are an individual or an organisation, M’Doc simplifies how you handle files and data.</p>
          <div className={styles.cards}>
            <Experience />
            <div className={styles.brandOrb}>
              <Image src={ASSETS.logo} alt="M'Doc" width={50} height={15} />
              <p>Your Files.<br/>Your Data.<br/>Actionable Insights.</p>
            </div>
            <AdminExperience />
          </div>
        </section>

        <section className={styles.trustInstall}>
          <Trust icon={Lock} title="Enterprise Security" text="End-to-end encryption & access control"/>
          <Trust icon={ShieldCheck} title="Compliance & Privacy" text="Global standards & regulations"/>
          <Trust icon={FileCheck} title="Audit & Transparency" text="Complete activity logs & audit trails"/>
          <Trust icon={Cloud} title="Secure Cloud" text="Redundant, reliable & always available"/>
          <div className={styles.install}>
            <b>Install M’Doc on your device</b>
            <span>Access your files anytime, anywhere.</span>
            <div className={styles.stores}>
              <a>▶ Google Play</a><a> App Store</a><a>Huawei AppGallery</a>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <Image className={styles.footerLogo} src={ASSETS.logo} alt="M'Doc" width={50} height={15} />
          <p>Making files and data work for you.<br/>Secure. Simple. Smart.</p>
        </div>
        <FooterCol title="Product" items={["Features","AI & Analytics","Integrations","What’s New"]}/>
        <FooterCol title="Company" items={["About Us","Careers","Partners","Contact Us"]}/>
        <FooterCol title="Resources" items={["Help Center","Documentation","Blog","Community"]}/>
        <div className={styles.social}>
          <b>Stay Connected</b>
          <span><Image src={ASSETS.mnetwork} alt="M'Network" width={42} height={42} /><Linkedin/><Twitter/><Youtube/></span>
        </div>
      </footer>
    </div>
  );
}

function Experience(){
  return (
    <article className={styles.experience} id="everyone">
      <h3>M’Doc</h3><strong>For Everyone</strong>
      <p>Store, organise and share your files securely from any device, anytime.</p>
      <div className={styles.featureList}>
        {[[CloudUpload,"Backup"],[Calendar,"Events"],[Cloud,"MyCloud"],[BarChart3,"Polls"],[Share2,"Share & Invite"],[Bell,"Notifications"],[MessageSquare,"Messages"]].map(([I,t]: any)=><span key={t}><I/>{t}</span>)}
      </div>
      <a>Explore all features <ArrowRight size={16}/></a>
    </article>
  )
}
function AdminExperience(){
  return (
    <article className={`${styles.experience} ${styles.experienceAdmin}`} id="admin">
      <h3>M’Doc Admin</h3><strong>For Teams & Enterprises</strong>
      <p>Collect, manage, analyse and distribute files and data at scale.</p>
      <div className={styles.featureList}>
        {[[ClipboardList,"Smart Forms"],[Sparkles,"AI Insights"],[PieChart,"Surveys"],[FileText,"Reports"],[LockKeyhole,"File Permissions"],[ShieldCheck,"Audit Logs"],[BarChart3,"Data Analytics"],[Workflow,"Workflows"]].map(([I,t]: any)=><span key={t}><I/>{t}</span>)}
      </div>
      <a>Explore all features <ArrowRight size={16}/></a>
    </article>
  )
}
function Trust({icon:Icon,title,text}: any){
  return <div className={styles.trustItem}><Icon/><b>{title}</b><span>{text}</span></div>
}
function FooterCol({title,items}: any){
  return <div><b>{title}</b>{items.map((i: string)=><a key={i}>{i}</a>)}</div>
}
