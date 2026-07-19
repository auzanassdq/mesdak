"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, Banknote, BarChart3, Bell, Building2, CalendarDays, ChevronDown, CircleHelp,
  ClipboardCheck, Cloud, Contact, CreditCard, FileCheck, FileText, Landmark, LayoutDashboard,
  Lock, MessageCircle, MessagesSquare, Network, Phone, Search, Settings, ShieldCheck, ShoppingBag,
  ShoppingCart, Store, User, UserCog, UserRound, Users, UsersRound, Video
} from "lucide-react";
import styles from "./m-call.module.css";

const A = {
  logo: "/logos/products/m-call.png",
  preview: "/assets/products/mcall-app-preview.png",
  google: "/assets/products/google-play.svg",
  apple: "/assets/products/app-store.svg",
  harmony: "/assets/products/harmony-os.svg",
};

export default function MCallLanding() {
  return (
    <div className={styles.mcallPage}>
      <Header />
      <main>
        <Hero />
        <Audiences />
        <Experiences />
        <Ecosystem />
        <Trust />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function Header(){
  return (
    <header className={styles.nav}>
      <Link className={styles.brand} href="/m-call"><Image src={A.logo} alt="M'Call" width={50} height={20} /></Link>
      <nav className={styles.navlinks}>
        <Link href="#solutions">Solutions <ChevronDown size={14}/></Link>
        <Link href="#msmes">For MSMEs</Link>
        <Link href="#enterprises">For Enterprises</Link>
        <Link href="#governments">For Governments</Link>
        <Link href="#mnetwork">For M'Network Users</Link>
        <Link href="#resources">Resources <ChevronDown size={14}/></Link>
      </nav>
      <Link className={`${styles.signin} text-white`} href="/login">Sign In</Link>
    </header>
  )
}

function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <h1>M’Call</h1>
        <div className={styles.slogan}>Communicate. Collaborate. Commerce.</div>
        <p className={styles.intro}>The all-in-one communication and collaboration platform that connects people, businesses and institutions across the M’World ecosystem.</p>
        <div className={styles.pillars}>
          {[[MessagesSquare,"Communicate","Stay connected with messages, voice and video anywhere, anytime."],
            [UsersRound,"Collaborate","Work together on projects, documents and tasks in real time."],
            [ShoppingCart,"Commerce","Turn conversations into actions with payments, orders, funding and business transactions."]].map(([I,t,p]: any)=>(
              <div key={t}><I/><b>{t}</b><span>{p}</span></div>
          ))}
        </div>
        <div className={styles.heroActions}>
          <Link className={`${styles.btn} ${styles.primary} text-white`} href="#start">
            <b>Start with M’Call</b>
            <small>For Individuals & Businesses</small>
            <ArrowRight/>
          </Link>
          <Link className={`${styles.btn} ${styles.secondary}`} href="#enterprise">
            <b>Explore Enterprise Collaboration</b>
            <ArrowRight/>
          </Link>
          <Link className={`${styles.btn} ${styles.light}`} href="/login">
            <User/><b>Sign In</b>
          </Link>
        </div>
      </div>
      <Dashboard/>
    </section>
  )
}

function Dashboard(){
  const menu = [
    [LayoutDashboard,"Dashboard",1],[MessageCircle,"Messages",0],[Contact,"Contacts",0],
    [CalendarDays,"Meetings",0],[Users,"Communities",0],[ClipboardCheck,"M’Project",0],
    [FileText,"M’Doc",0],[CreditCard,"M’Pay",0],[Bell,"Notifications",0],[Settings,"Settings",0]
  ];
  return (
    <div className={styles.stage}>
      <div className={styles.glow}/>
      <div className={styles.dashboard}>
        <aside>
          <Image src={A.logo} alt="M'Call" className={styles.dashLogo} width={105} height={31} />
          {menu.map(([I,t,a]: any) => (
            <a key={t} className={a ? styles.active : ""}><I/>{t}</a>
          ))}
        </aside>
        <section className={styles.screen}>
          <div className={styles.screenTop}>
            <div className={styles.search}><Search size={15}/>Search messages, contacts, meetings...</div>
            <Bell/><CircleHelp/><span className={styles.avatar}/>
          </div>
          <h3>Welcome back, Marie 👋</h3>
          <p>Here’s what’s happening today.</p>
          <div className={styles.metrics}>
            {["Unread Messages|24|+12%","Active Meetings|5|Today","Projects|8|In Progress","Shared Files|156|+18%"].map(x=>{
              const [a,b,c]=x.split("|");
              return <div key={a}><small>{a}</small><b>{b}</b><em>{c}</em></div>
            })}
          </div>
          <div className={styles.dashGrid}>
            <DashList title="Upcoming Meetings" items={["Product Strategy Meeting|09:30 AM","M’Network Community Call|11:00 AM","Investor Update Meeting|02:00 PM","Team Daily Stand-up|04:30 PM"]}/>
            <DashList title="Recent Conversations" items={["M’Butic Sellers Group|2m ago","Project Alpha|Yesterday","Funding Discussion|Yesterday","Customer Support|May 16"]}/>
          </div>
        </section>
      </div>
      <div className={styles.phone}>
        <h4>Project Alpha</h4>
        <div className={`${styles.bubble} ${styles.left}`}>Please review the project proposal.</div>
        <div className={styles.file}>Proposal_v2.pdf</div>
        <div className={`${styles.bubble} ${styles.right}`}>Thanks John, looks good 👍</div>
        <div className={`${styles.bubble} ${styles.left}`}>I added some comments.</div>
      </div>
    </div>
  )
}
function DashList({title,items}: any){
  return (
    <article>
      <h4>{title} <span>View all</span></h4>
      {items.map((x: string)=>{
        const [a,b]=x.split("|");
        return <p key={a}><b>{a}</b><em>{b}</em></p>
      })}
    </article>
  )
}

function Audiences(){
  const items = [
    [UserRound,"For Everyone","Chat with family, friends and business contacts easily and securely.","everyone"],
    [Store,"For MSMEs","Communicate with customers, suppliers and teams while managing business conversations in one place.","msmes"],
    [Building2,"For Enterprises","Improve collaboration across departments with secure meetings, shared workspaces and integrated workflows.","enterprises"],
    [Landmark,"For Governments","Connect ministries, agencies, field officers and citizens through secure digital communication.","governments"],
    [Network,"For M’Network Users","Communicate with your business network, investors, advisors and communities directly inside M’Network.","mnetwork"]
  ];
  return (
    <section className={styles.audiences} id="solutions">
      <h2>One Platform. Built for Everyone.</h2>
      <p>M’Call serves all key participants in the digital economy.</p>
      <div className={styles.audienceGrid}>
        {items.map(([I,t,p,id]: any)=>(
          <article id={id} key={t}>
            <I/>
            <h3>{t}</h3><p>{p}</p>
            <a>Learn more <ArrowRight size={15}/></a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experiences(){
  const items = [
    [MessagesSquare,"Messaging",["Instant messaging","Group chats & channels","Business messaging","Broadcasts","Smart notifications"]],
    [Video,"Voice & Video",["Voice calls","HD video meetings","Screen sharing","Meeting recording","Live streaming"]],
    [UsersRound,"Collaboration",["Shared workspaces","Projects & tasks","File sharing","Calendar & scheduling","Real-time co-editing"]],
    [ShoppingCart,"Commerce",["Customer support","Order discussions","Payment requests","Funding conversations","Investor meetings"]]
  ];
  return (
    <section className={styles.experiences}>
      <h2>One Platform. Four Communication Experiences.</h2>
      <div className={styles.experienceGrid}>
        {items.map(([I,t,list]: any)=>(
          <article key={t}>
            <I/>
            <h3>{t}</h3>
            <ul>{list.map((i: string)=><li key={i}>{i}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}

function Ecosystem(){
  const e = [
    [Network,"M’Network"],[ShoppingBag,"M’Butic"],[FileText,"M’Doc"],[ClipboardCheck,"M’Project"],
    [CreditCard,"M’Pay"],[BarChart3,"M’D³MP"],[Landmark,"M’Government"],[Banknote,"M’Finance"]
  ];
  return (
    <section className={styles.ecosystem}>
      <h2>Powering the M’World Ecosystem.</h2>
      <div className={styles.ecosystemRow}>
        {e.map(([I,t]: any)=><span key={t}><I/>{t}</span>)}
      </div>
    </section>
  )
}

function Trust(){
  const t = [
    [Lock,"End-to-End Encryption","Industry-standard encryption for all communications."],
    [ShieldCheck,"Private & Secure","Your data and conversations are protected."],
    [UserCog,"Role-Based Access","Granular permissions for teams and organisations."],
    [Video,"Meeting Security","Secure meetings with lobby and participant controls."],
    [FileCheck,"Audit Logs","Full audit trail for compliance and accountability."],
    [Cloud,"Cloud Storage","Secure storage for files, media and documents."]
  ];
  return (
    <section className={styles.trust}>
      <h2>Built on Trust. Secured for You.</h2>
      <div className={styles.trustGrid}>
        {t.map(([I,a,b]: any)=>(
          <div key={a}><I/><b>{a}</b><span>{b}</span></div>
        ))}
      </div>
    </section>
  )
}

function CTA(){
  return (
    <section className={styles.cta} id="start">
      <div className={styles.ctaVisual}>
        <div className={styles.phoneMockup}>
          <div className={styles.phoneHeader}>Group Meeting</div>
          <div className={styles.phoneBody}>
            <div className={styles.videoGrid}>
               <div className={styles.videoCell}><User size={24}/></div>
               <div className={styles.videoCell}><User size={24}/></div>
               <div className={styles.videoCell}><User size={24}/></div>
               <div className={styles.videoCell}><User size={24}/></div>
            </div>
          </div>
          <div className={styles.phoneControls}>
             <div className={styles.controlBtn}><Video size={14}/></div>
             <div className={styles.controlBtn}><MessageCircle size={14}/></div>
             <div className={`${styles.controlBtn} ${styles.danger}`}><Phone size={14}/></div>
          </div>
        </div>
      </div>
      <div>
        <h2>Ready to Connect Your Business?</h2>
        <p>Join professionals, MSMEs, enterprises and governments using M’Call to communicate, collaborate and grow together.</p>
      </div>
      <div className={styles.ctaActions}>
        <a>Create Account</a>
        <a className={styles.outline}>Contact Sales</a>
      </div>
      <div className={styles.stores}>
        <b>Get M’Call on your device</b>
        <span>
          <Image src={A.google} alt="Google Play" width={120} height={38} />
          <Image src={A.apple} alt="App Store" width={120} height={38} />
          <Image src={A.harmony} alt="HarmonyOS" width={120} height={38} />
        </span>
      </div>
    </section>
  )
}

function Footer(){
  return (
    <footer className={styles.footer}>
      <div>
        <Image src={A.logo} alt="M'Call" width={102} height={30} />
        <p>M’Call is a member of the MSME Solutions World Group. Empowering MSMEs. Connecting Capital. Creating Impact.</p>
      </div>
      {["Product|Features,Messaging,Meetings,Collaboration,Security",
        "Solutions|For MSMEs,For Enterprises,For Governments,For M’Network Users",
        "Resources|Help Center,Documentation,Blog,Community",
        "Legal|Privacy Policy,Terms of Service,Security,Compliance"
       ].map(col=>{
        const [h,items]=col.split("|");
        return (
          <div key={h}>
            <b>{h}</b>
            {items.split(",").map(i=><a key={i}>{i}</a>)}
          </div>
        )
      })}
    </footer>
  )
}
