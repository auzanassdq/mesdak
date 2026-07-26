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
    { icon: UserRound, title: "For Everyone", desc: "Chat with family, friends and business contacts easily and securely.", id: "everyone" },
    { icon: Store, title: "For MSMEs", desc: "Communicate with customers, suppliers and teams while managing business conversations in one place.", id: "msmes" },
    { icon: Building2, title: "For Enterprises", desc: "Improve collaboration across departments with secure meetings, shared workspaces and integrated workflows.", id: "enterprises" },
    { icon: Landmark, title: "For Governments", desc: "Connect ministries, agencies, field officers and citizens through secure digital communication.", id: "governments" },
    { icon: Network, title: "For M’Network Users", desc: "Communicate with your business network, investors, advisors and communities directly inside M’Network.", id: "mnetwork" }
  ];
  return (
    <section className="text-center py-10 lg:py-16 px-6 lg:px-14" id="solutions">
      <h2 className="text-[28px] font-bold mb-2 text-[#06183F]">One Platform. Built for Everyone.</h2>
      <p className="text-[#5F6E85] mb-10 text-[15px]">M’Call serves all key participants in the digital economy.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-[1420px] mx-auto">
        {items.map(({ icon: Icon, title, desc, id }) => (
          <article id={id} key={title} className="bg-white border border-[#E6ECFA] rounded-[18px] p-6 text-left shadow-[0_14px_45px_rgba(31,91,222,0.04)] flex flex-col h-full hover:shadow-[0_28px_90px_rgba(31,91,222,0.12)] transition-shadow duration-300">
            <Icon className="w-[46px] h-[46px] p-2.5 rounded-2xl bg-[#F6F9FF] text-[#1F5BDE] mb-5" />
            <h3 className="text-[18px] font-bold text-[#06183F] mb-2">{title}</h3>
            <p className="text-[#5F6E85] text-[14px] leading-relaxed mb-6">{desc}</p>
            <a className="mt-auto text-[#1F5BDE] font-black text-[14px] flex items-center gap-2 cursor-pointer hover:underline">
              Learn more <ArrowRight size={15}/>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function Experiences(){
  const items = [
    { icon: MessagesSquare, title: "Messaging", list: ["Instant messaging","Group chats & channels","Business messaging","Broadcasts","Smart notifications"] },
    { icon: Video, title: "Voice & Video", list: ["Voice calls","HD video meetings","Screen sharing","Meeting recording","Live streaming"] },
    { icon: UsersRound, title: "Collaboration", list: ["Shared workspaces","Projects & tasks","File sharing","Calendar & scheduling","Real-time co-editing"] },
    { icon: ShoppingCart, title: "Commerce", list: ["Customer support","Order discussions","Payment requests","Funding conversations","Investor meetings"] }
  ];
  return (
    <section className="text-center py-10 lg:py-16 px-6 lg:px-14">
      <h2 className="text-[28px] font-bold mb-10 text-[#06183F]">One Platform. Four Communication Experiences.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1420px] mx-auto">
        {items.map(({ icon: Icon, title, list }) => (
          <article key={title} className="bg-white border border-[#E6ECFA] rounded-[18px] p-7 text-left shadow-[0_14px_40px_rgba(31,91,222,0.05)] hover:shadow-[0_28px_90px_rgba(31,91,222,0.14)] transition-shadow duration-300">
            <Icon className="w-12 h-12 p-3 rounded-full bg-[#EAF1FF] text-[#1F5BDE] mb-4" />
            <h3 className="text-xl font-bold text-[#06183F] mb-4">{title}</h3>
            <ul className="list-disc pl-5 space-y-2 text-[#263A58] text-[15px] leading-relaxed">
              {list.map((i: string) => <li key={i}>{i}</li>)}
            </ul>
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

function PhoneMockup() {
  return (
    <div className="w-[200px] h-[380px] border-[10px] border-slate-900 rounded-[34px] bg-white shadow-[0_24px_50px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden mx-auto shrink-0">
      <div className="bg-gradient-to-br from-[#1F5BDE] to-[#0B2F93] text-white pt-7 pb-4 px-3.5 font-extrabold text-center text-[13px]">
        Group Meeting
      </div>
      <div className="flex-1 bg-slate-50 p-2.5 flex flex-col gap-2.5">
        <div className="grid grid-cols-2 gap-1.5 flex-1">
           <div className="bg-slate-300 rounded-lg grid place-items-center text-slate-500 overflow-hidden relative"><User size={24}/></div>
           <div className="bg-slate-300 rounded-lg grid place-items-center text-slate-500 overflow-hidden relative"><User size={24}/></div>
           <div className="bg-slate-300 rounded-lg grid place-items-center text-slate-500 overflow-hidden relative"><User size={24}/></div>
           <div className="bg-slate-300 rounded-lg grid place-items-center text-slate-500 overflow-hidden relative"><User size={24}/></div>
        </div>
      </div>
      <div className="flex justify-evenly p-3 bg-white border-t border-slate-200">
         <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 grid place-items-center"><Video size={14}/></div>
         <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-600 grid place-items-center"><MessageCircle size={14}/></div>
         <div className="w-8 h-8 rounded-full bg-red-500 text-white grid place-items-center"><Phone size={14}/></div>
      </div>
    </div>
  );
}

function CTA(){
  return (
    <section className="max-w-[1420px] mx-5 lg:mx-auto mt-10 mb-12 bg-gradient-to-br from-[#1F5BDE] to-[#1479FF] text-white rounded-[20px] p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[200px_1fr_auto_330px] gap-8 lg:gap-10 items-center shadow-lg" id="start">
      <div>
        <PhoneMockup />
      </div>
      <div className="text-center lg:text-left">
        <h2 className="text-[28px] lg:text-[32px] font-bold mb-3">Ready to Connect Your Business?</h2>
        <p className="opacity-90 text-[15px] leading-relaxed max-w-xl mx-auto lg:mx-0">Join professionals, MSMEs, enterprises and governments using M’Call to communicate, collaborate and grow together.</p>
      </div>
      <div className="flex flex-col gap-3 w-full lg:w-auto">
        <a className="bg-white text-[#1F5BDE] px-6 py-3.5 rounded-xl text-center font-black cursor-pointer hover:bg-gray-50 transition">Create Account</a>
        <a className="bg-transparent text-white border border-white/75 px-6 py-3.5 rounded-xl text-center font-black cursor-pointer hover:bg-white/10 transition">Contact Sales</a>
      </div>
      <div className="text-center lg:text-left">
        <b className="block mb-3 text-[14px]">Get M’Call on your device</b>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          <Image src={A.google} alt="Google Play" width={120} height={38} className="bg-black rounded-lg cursor-pointer hover:opacity-90 transition" />
          <Image src={A.apple} alt="App Store" width={120} height={38} className="bg-black rounded-lg cursor-pointer hover:opacity-90 transition" />
          <Image src={A.harmony} alt="HarmonyOS" width={120} height={38} className="bg-black rounded-lg cursor-pointer hover:opacity-90 transition" />
        </div>
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
