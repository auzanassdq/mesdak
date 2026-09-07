"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const groups = [
  {
    no: "01",
    title: "Trade",
    lead: "Buyers & sellers",
    items: "Importers · Exporters · Manufacturers · Distributors",
    bg: "bg-[#f1f8f3]",
  },
  {
    no: "02",
    title: "Finance",
    lead: "Capital that moves",
    items: "Banks · Lenders · Investors · Payments · FX providers",
    bg: "bg-[#e8f4eb]",
  },
  {
    no: "03",
    title: "Assurance",
    lead: "Confidence built in",
    items: "Insurers · Guarantors · Credit protection partners",
    bg: "bg-[#deefe3]",
  },
  {
    no: "04",
    title: "Logistics",
    lead: "From origin to arrival",
    items: "Carriers · Freight forwarders · Warehouses · Customs brokers",
    bg: "bg-[#d4eadb]",
  },
  {
    no: "05",
    title: "Verification",
    lead: "Trust, made visible",
    items: "Inspectors · Certification bodies · Legal & compliance",
    bg: "bg-[#cae6d3]",
  },
  {
    no: "06",
    title: "Public & platform",
    lead: "The enabling layer",
    items: "Regulators · Government agencies · M’Trade operations",
    bg: "bg-[#c0e1cb]",
  },
];

export default function MTradeLanding() {
  return (
    <div className="bg-[#f7faf6] text-[#10231b] font-sans min-h-screen scroll-smooth">
      {/* Navigation */}
      <nav
        className="w-[min(1180px,calc(100%-48px))] max-md:w-[min(100%-30px,1180px)] mx-auto h-[92px] flex items-center border-b border-[#16211d]/15 relative z-10"
        aria-label="Primary navigation"
      >
        <Link
          className="flex items-center gap-2.5 text-2xl font-bold tracking-tight text-[#10231b]"
          href="#top"
          aria-label="M’Trade home"
        >
          <Image
            src="/mtrade-mark.png"
            alt="M’Trade Logo"
            width={35}
            height={35}
            className="w-[35px] h-[35px] object-contain"
            priority
          />
          <span>M’Trade</span>
        </Link>

        {/* 1. GEDEKAN NAVLINKS (text-lg font-bold) */}
        <div className="hidden md:flex gap-10 mx-auto text-lg font-bold">
          <Link href="#ecosystem" className="text-[#10231b] hover:text-[#078c4b] transition-colors">
            Ecosystem
          </Link>
          <Link href="#how" className="text-[#10231b] hover:text-[#078c4b] transition-colors">
            How it works
          </Link>
          <Link href="#about" className="text-[#10231b] hover:text-[#078c4b] transition-colors">
            About
          </Link>
        </div>

        <Link
          className="ml-auto md:ml-0 bg-[#078c4b] text-white rounded-full px-6 py-3.5 text-base font-bold inline-flex items-center gap-4 md:gap-6 hover:opacity-90 transition-opacity"
          href="#join"
        >
          <span className="hidden sm:inline">Join the network</span>
          <span className="text-lg">↗</span>
        </Link>
      </nav>

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[745px] max-md:min-h-[900px] pt-[90px] max-md:pt-[65px] overflow-hidden bg-gradient-to-br from-[#f7faf6] via-[#eef7f0] to-[#dcefe2] px-6 lg:px-[max(24px,calc((100%-1180px)/2))] max-md:px-4"
          id="top"
        >
          {/* 2. GEDEKAN EYEBROW (text-lg md:text-xl) */}
          <div className="flex items-center gap-3 text-lg md:text-xl tracking-[0.2em] font-extrabold uppercase text-[#063d2a]">
            <i className="w-3 h-3 bg-[#078c4b] rounded-full inline-block" />
            One trusted trade network
          </div>

          {/* 3. KECILKAN H1 (text-3xl sm:text-4xl md:text-5xl lg:text-5xl) */}
          <h1 className="font-serif font-normal tracking-[-1.5px] text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-[1.15] my-5 md:my-6 max-w-[700px] text-[#10231b]">
            Connect Globally.
            <br />
            <em className="text-[#078c4b] italic font-serif">Trade Smarter.</em>
          </h1>

          <p className="mt-[-4px] mb-3.5 text-xl md:text-2xl font-bold text-[#063d2a] tracking-tight">
            The all-in-one trade platform for MSMEs.
          </p>

          <p className="text-lg md:text-xl leading-relaxed max-w-[580px] text-[#46524d]">
            Commerce. Capital. Assurance. Logistics. Finally unified. M’Trade
            transforms fragmented trade into a single, trusted flow—giving you
            the clarity and confidence to execute every deal.
          </p>

          <div className="flex items-center gap-6 md:gap-9 mt-8 max-sm:flex-col max-sm:items-stretch">
            <Link
              className="bg-[#078c4b] text-white rounded-full px-7 py-4 text-base font-bold inline-flex items-center justify-center gap-6 hover:opacity-90 transition-opacity"
              href="#join"
            >
              Find your place <span>↗</span>
            </Link>
            <Link
              className="text-base font-bold border-b-2 border-current pb-1 inline-flex items-center text-[#10231b] hover:text-[#078c4b] transition-colors"
              href="#ecosystem"
            >
              Explore the ecosystem <span className="ml-4">↓</span>
            </Link>
          </div>

          {/* Orbit Animation Graphic */}
          <div
            className="absolute w-[460px] h-[460px] max-md:w-[390px] max-md:h-[390px] right-[max(24px,calc((100%-1180px)/2))] max-md:right-1/2 max-md:translate-x-1/2 bottom-[-70px] max-md:bottom-[-30px] pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute inset-0 border border-[#078c4b]/30 rounded-full animate-[spin_40s_linear_infinite]">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-[#078c4b] left-[42px] top-[70px]" />
            </div>
            <div className="absolute inset-12 border border-[#078c4b]/30 rounded-full animate-[spin_30s_linear_infinite_reverse]">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-[#078c4b] right-[10px] top-[95px]" />
            </div>
            <div className="absolute inset-[98px] border border-[#078c4b]/30 rounded-full animate-[spin_20s_linear_infinite]">
              <span className="absolute w-2.5 h-2.5 rounded-full bg-[#078c4b] left-1/2 bottom-[-5px]" />
            </div>
            <div className="absolute inset-[166px] max-md:inset-[142px] rounded-full bg-[#078c4b] grid place-items-center shadow-lg">
              <Image
                src="/mtrade-mark.png"
                alt="M’Trade Core Symbol"
                width={78}
                height={78}
                className="w-[78px] brightness-0 invert"
              />
            </div>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full top-5 left-[55px]">
              TRADE
            </b>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full top-[92px] right-0">
              FINANCE
            </b>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full right-[34px] bottom-[72px]">
              ASSURANCE
            </b>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full bottom-[25px] left-[35px]">
              LOGISTICS
            </b>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full top-[180px] left-[-25px]">
              VERIFY
            </b>
            <b className="absolute font-bold text-[10px] tracking-widest bg-[#f7faf6] border border-[#087443]/35 py-2 px-2.5 rounded-full top-1 right-[105px]">
              PUBLIC
            </b>
          </div>
        </section>

        {/* Proof / Stats Bar */}
        <section
          className="bg-[#063d2a] text-white w-full py-10 px-6 lg:px-[max(24px,calc((100%-1180px)/2))] grid grid-cols-3 md:grid-cols-[repeat(3,1fr)_1.7fr] items-center gap-6"
          aria-label="Platform benefits"
        >
          {/* 4. GEDEKAN STATS DESC (text-base sm:text-lg md:text-xl) */}
          <div className="border-r border-white/20 pr-4 md:pr-6">
            <strong className="block font-serif text-3xl sm:text-4xl md:text-5xl text-[#71d49d] font-normal mb-1">
              One
            </strong>
            <span className="text-base sm:text-lg md:text-xl text-[#c9dfd1] font-medium leading-snug block">
              connected ecosystem
            </span>
          </div>
          <div className="border-r border-white/20 pl-4 md:pl-6 pr-4 md:pr-6">
            <strong className="block font-serif text-3xl sm:text-4xl md:text-5xl text-[#71d49d] font-normal mb-1">
              Six
            </strong>
            <span className="text-base sm:text-lg md:text-xl text-[#c9dfd1] font-medium leading-snug block">
              essential groups
            </span>
          </div>
          <div className="border-r-0 md:border-r border-white/20 pl-4 md:pl-6 pr-4 md:pr-6">
            <strong className="block font-serif text-3xl sm:text-4xl md:text-5xl text-[#71d49d] font-normal mb-1">
              End-to-end
            </strong>
            <span className="text-base sm:text-lg md:text-xl text-[#c9dfd1] font-medium leading-snug block">
              trade visibility
            </span>
          </div>
          {/* 5. GEDEKAN STATS PARAGRAPH (text-base sm:text-lg md:text-xl) */}
          <p className="hidden md:block text-right leading-relaxed text-base sm:text-lg md:text-xl text-[#c9dfd1] m-0 pl-6">
            Built for the people and institutions
            <br />
            that make global trade possible.
          </p>
        </section>

        {/* Ecosystem Section */}
        <section
          className="w-[min(1180px,calc(100%-48px))] max-md:w-[min(100%-30px,1180px)] mx-auto py-20 md:py-32"
          id="ecosystem"
        >
          <header className="grid md:grid-cols-2 mb-14 md:mb-16 items-end gap-6">
            <div>
              {/* 6. GEDEKAN KICKER (text-lg md:text-xl) */}
              <span className="text-lg md:text-xl tracking-[0.2em] font-extrabold text-[#078c4b] uppercase block">
                THE M’TRADE ECOSYSTEM
              </span>
              {/* 7. KECILKAN H2 (text-2xl sm:text-3xl md:text-4xl) */}
              <h2 className="font-serif font-normal text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-[#10231b] mt-3 md:mt-4">
                Every role.
                <br />
                One clear place.
              </h2>
            </div>
            {/* 8. GEDEKAN DESKRIPSI (text-lg md:text-xl) */}
            <p className="max-w-[500px] md:justify-self-end leading-relaxed text-[#59635f] text-lg md:text-xl m-0 font-normal">
              Six interconnected networks simplifying the complexity of global
              trade into a single, effortless flow.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <article
                className={`${group.bg} min-h-[400px] p-8 rounded-[4px] flex flex-col transition-all duration-200 border border-[#bdd8c5] shadow-[0_8px_30px_rgba(6,61,42,0.05)] hover:-translate-y-1.5 hover:border-[#078c4b] hover:shadow-[0_14px_40px_rgba(6,61,42,0.11)] group`}
                key={group.no}
              >
                <div className="flex justify-between items-center">
                  {/* 9. GEDEKAN NO (text-xl md:text-2xl font-black) */}
                  <span className="font-black text-xl md:text-2xl text-[#078c4b] tracking-wider">
                    {group.no}
                  </span>
                  <b className="text-2xl font-bold group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    ↗
                  </b>
                </div>

                {/* Decorative glyph */}
                <div
                  className="h-[105px] flex items-end justify-center gap-2.5 my-auto text-[#078c4b]"
                  aria-hidden="true"
                >
                  <i className="w-10 h-[75px] border-2 border-current rounded-[30px] block" />
                  <i className="w-10 h-[105px] border-2 border-current rounded-[30px] block" />
                  <i className="w-10 h-[57px] border-2 border-current rounded-[30px] block" />
                </div>

                <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-2 text-[#10231b]">
                  {group.title}
                </h3>
                {/* 10. GEDEKAN LEAD TEXT (text-xl md:text-2xl font-bold) */}
                <h4 className="text-xl md:text-2xl font-bold text-[#063d2a] mb-3">
                  {group.lead}
                </h4>
                <p className="text-base md:text-lg leading-relaxed text-[#53605a] m-0">
                  {group.items}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How it comes together */}
        <section className="bg-[#063d2a] text-white py-20 md:py-28" id="how">
          <div className="w-[min(1180px,calc(100%-48px))] max-md:w-[min(100%-30px,1180px)] mx-auto">
            {/* 11. GEDEKAN KICKER (text-lg md:text-xl) */}
            <span className="text-lg md:text-xl tracking-[0.2em] font-extrabold text-[#71d49d] uppercase block">
              HOW IT COMES TOGETHER
            </span>
            <h2 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl tracking-tight my-4 md:mb-16">
              One transaction.
              <br />
              <em className="text-[#71d49d] italic font-serif">
                An intelligent ecosystem activated.
              </em>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/25 mt-10">
              {/* Step 1 */}
              <div className="py-8 pr-6 border-b sm:border-b-0 lg:border-r border-white/20 min-h-[220px]">
                {/* 12. GEDEKAN ANGKA STEP (text-xl md:text-2xl font-black) */}
                <b className="text-xl md:text-2xl font-black text-[#71d49d] block">
                  01
                </b>
                <h3 className="font-serif text-2xl md:text-3xl my-5 text-white">
                  Connect
                </h3>
                {/* 13. GEDEKAN DESC STEP (text-base md:text-lg) */}
                <p className="text-base md:text-lg leading-relaxed text-[#bed2c5] m-0 font-normal">
                  Verified participants meet around a real trade opportunity.
                </p>
              </div>

              {/* Step 2 */}
              <div className="py-8 px-0 sm:px-6 border-b sm:border-b-0 lg:border-r border-white/20 min-h-[220px]">
                <b className="text-xl md:text-2xl font-black text-[#71d49d] block">
                  02
                </b>
                <h3 className="font-serif text-2xl md:text-3xl my-5 text-white">
                  Structure
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#bed2c5] m-0 font-normal">
                  Finance, protection and fulfilment align around one deal.
                </p>
              </div>

              {/* Step 3 */}
              <div className="py-8 px-0 lg:px-6 border-b lg:border-b-0 lg:border-r border-white/20 min-h-[220px]">
                <b className="text-xl md:text-2xl font-black text-[#71d49d] block">
                  03
                </b>
                <h3 className="font-serif text-2xl md:text-3xl my-5 text-white">
                  Move
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#bed2c5] m-0 font-normal">
                  Goods, documents and payments progress with shared visibility.
                </p>
              </div>

              {/* Step 4 */}
              <div className="py-8 px-0 sm:px-6 min-h-[220px]">
                <b className="text-xl md:text-2xl font-black text-[#71d49d] block">
                  04
                </b>
                <h3 className="font-serif text-2xl md:text-3xl my-5 text-white">
                  Grow
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-[#bed2c5] m-0 font-normal">
                  Trust compounds into stronger relationships and more trade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Join Section */}
        <section
          className="w-[min(1180px,calc(100%-48px))] max-md:w-[min(100%-30px,1180px)] mx-auto my-20 md:my-24 bg-gradient-to-r from-[#078c4b] to-[#055f36] text-white p-8 sm:p-12 md:p-14 grid grid-cols-1 md:grid-cols-[100px_1fr_auto] items-center gap-8 rounded-[4px]"
          id="join"
        >
          <Image
            src="/mtrade-mark.png"
            alt="M’Trade symbol"
            width={90}
            height={90}
            className="w-16 md:w-20 brightness-0 invert"
          />
          <div>
            <span className="text-sm tracking-widest font-bold uppercase text-[#c9dfd1] block mb-2">
              YOUR PLACE IN GLOBAL TRADE
            </span>
            <h2 className="font-serif font-normal text-xl sm:text-4xl md:text-4xl tracking-tight leading-tight m-0">
              Ready to move trade forward, together?
            </h2>
          </div>
          <a
            className="bg-white text-[#078c4b] hover:bg-[#f1f8f3] hover:text-[#063d2a] font-extrabold rounded-full px-7 py-4 text-base md:text-lg inline-flex items-center justify-center gap-4 transition-colors"
            href="mailto:hello@mtrade.network"
          >
            Join M’Trade <span>↗</span>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="w-[min(1180px,calc(100%-48px))] max-md:w-[min(100%-30px,1180px)] mx-auto border-t border-[#cbdccf] py-10 flex items-center gap-8 md:gap-12 flex-wrap"
        id="about"
      >
        <Link className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-[#10231b]" href="#top">
          <Image
            src="/mtrade-mark.png"
            alt="M’Trade Logo"
            width={35}
            height={35}
            className="w-[35px] h-[35px] object-contain"
          />
          <span>M’Trade</span>
        </Link>
        <p className="font-serif italic text-lg text-[#078c4b] m-0 hidden sm:block">
          Trade, connected.
        </p>
        <small className="sm:ml-auto text-base text-[#737b77]">
          © 2026 M’Trade. All rights reserved.
        </small>
      </footer>
    </div>
  );
}
