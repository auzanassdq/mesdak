'use client'

import Head from 'next/head';

export default function MSMENetworkIncorporationPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <title>MSME Network Incorporation - Unlock Untapped Potential</title>
      </Head>
      <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
        <div className="flex h-full grow flex-col">
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 z-10 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <div className="size-7 text-primary-400">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-white text-xl font-bold">MSME Network Inc.</h2>
                </div>
                <div className="hidden md:flex flex-1 justify-end gap-6 items-center">
                  <a className="text-slate-300 hover:text-white text-sm font-medium" href="#">About</a>
                  <a className="text-slate-300 hover:text-white text-sm font-medium" href="#">Services</a>
                  <a className="text-slate-300 hover:text-white text-sm font-medium" href="#">Directory</a>
                  <button
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-white text-slate-900 hover:bg-slate-200 text-sm font-bold transition-colors"
                  >
                    <span className="truncate">Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero */}
          <main>
            <div
              className="relative min-h-screen flex flex-col items-center justify-center text-center text-white p-4 hero-bg bg-cover bg-center"
            >
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                  Unlock Untapped Potential
                </h1>
                <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
                  MSME Network Incorporation is the operating firm behind M’Network, a unified digital ecosystem connecting individuals and organizations for collaboration, visibility, and growth.
                </p>
                <button
                  className="mt-8 flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-primary-700 text-white text-base font-bold transition-colors"
                >
                  <span className="truncate">Join the Network</span>
                </button>
              </div>
            </div>

            {/* Intro Section */}
            <div className="bg-background-light dark:bg-background-dark">
              <div className="max-w-7xl mx-auto">
                <section className="flex flex-col gap-10 px-4 sm:px-6 lg:px-8 py-16 md:py-24 @container">
                  <div className="flex flex-col gap-4 text-center items-center">
                    <h2 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl sm:text-4xl font-bold max-w-2xl">
                      Powering a Unified Digital Ecosystem
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
                      Our mission is to connect a diverse range of individuals—from students and professionals to retirees—with organizations of all scales, including micro-enterprises, large corporations, financial institutions, and government bodies. We foster an environment ripe for collaboration, enhanced visibility, and sustainable growth.
                    </p>
                  </div>
                </section>

                {/* Pillars Section */}
                <section className="flex flex-col gap-12 px-4 sm:px-6 lg:px-8 py-16 md:py-24 @container bg-slate-100 dark:bg-slate-900/50">
                  <div className="max-w-7xl mx-auto w-full">
                    <div className="flex flex-col gap-4 max-w-3xl">
                      <h2 className="text-slate-900 dark:text-slate-100 tracking-tight text-3xl sm:text-4xl font-bold">
                        Four Pillars of Growth
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                        We provide a comprehensive suite of innovative, data-driven service solutions designed to empower your organization at every stage of its journey.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
                      {/* Card 1 */}
                      <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-slate-800 p-6 shadow-sm">
                        <div className="text-primary-500">
                          <span className="material-symbols-outlined !text-4xl">verified_user</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-semibold">Build Visibility &amp; Trust</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">Establish a powerful brand presence and foster community.</p>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Branding &amp; Communication Strategy</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Community Building &amp; Management</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Marketing &amp; Online Advertising</li>
                        </ul>
                      </div>

                      {/* Card 2 */}
                      <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-slate-800 p-6 shadow-sm">
                        <div className="text-primary-500">
                          <span className="material-symbols-outlined !text-4xl">trending_up</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-semibold">Activate Engagement &amp; Reach</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">Drive sales growth and validate your products with the right audience.</p>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Sales Growth Solutions</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Product Testing &amp; Validation</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Collaboration Facilitation</li>
                        </ul>
                      </div>

                      {/* Card 3 */}
                      <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-slate-800 p-6 shadow-sm">
                        <div className="text-primary-500">
                          <span className="material-symbols-outlined !text-4xl">public</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-semibold">Scale Markets &amp; Expand</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">Navigate new territories and grow your market footprint effectively.</p>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Market Entry Support</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Market Development</li>
                        </ul>
                      </div>

                      {/* Card 4 */}
                      <div className="flex flex-col gap-3 rounded-xl bg-background-light dark:bg-slate-800 p-6 shadow-sm">
                        <div className="text-primary-500">
                          <span className="material-symbols-outlined !text-4xl">groups</span>
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-semibold">Strengthen the Organisation</h3>
                          <p className="text-slate-600 dark:text-slate-400 text-sm">Build a strong foundation with the right talent and strategic guidance.</p>
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Hiring &amp; Talent Matching</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Company Building &amp; Venture Studio</li>
                          <li className="flex items-center gap-2"><span className="material-symbols-outlined !text-base text-primary-500">check_circle</span> Strategic Consulting</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>

        {/* Page-specific footer from original HTML */}
        <footer className="bg-slate-900 text-slate-400">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-6 text-primary-400">
                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">MSME Network Inc.</h3>
                </div>
                <p className="text-sm">Connecting individuals and organizations for collaboration, visibility, and growth.</p>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-200 mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><a className="hover:text-primary-400" href="#">About Us</a></li>
                  <li><a className="hover:text-primary-400" href="#">Services</a></li>
                  <li><a className="hover:text-primary-400" href="#">Careers</a></li>
                  <li><a className="hover:text-primary-400" href="#">Contact</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-200 mb-4">Resources</h4>
                <ul className="space-y-3 text-sm">
                  <li><a className="hover:text-primary-400" href="#">Blog</a></li>
                  <li><a className="hover:text-primary-400" href="#">Directory</a></li>
                  <li><a className="hover:text-primary-400" href="#">Help Center</a></li>
                  <li><a className="hover:text-primary-400" href="#">Partners</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-slate-200 mb-4">Legal</h4>
                <ul className="space-y-3 text-sm">
                  <li><a className="hover:text-primary-400" href="#">Privacy Policy</a></li>
                  <li><a className="hover:text-primary-400" href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm">
              <p>© 2024 MSME Network Inc. All rights reserved.</p>
              <div className="flex space-x-4 mt-4 sm:mt-0">
                <a className="hover:text-primary-400" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    />
                  </svg>
                </a>
                <a className="hover:text-primary-400" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a className="hover:text-primary-400" href="#">
                  <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.328C3.965 1 2 2.985 2 5.355v13.29C2 21.015 3.965 23 6.328 23h11.34c2.363 0 4.328-1.985 4.328-4.355V5.355C22 2.985 20.032 1 17.668 1z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Material Symbols and hero background style for icon and hero rendering */}
      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .hero-bg {
          background-image: linear-gradient(to top, rgba(2, 6, 23, 0.8) 0%, rgba(2, 6, 23, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuASTbX70Wmbibb-b4mwzOPWOOQji53ee7Chn33MiP_v_N6UcWd4Z5e4HTygnp1ZYazsbC_o9o0t-DHWl2-Z-QSMOImtPOdAe7X14_3IOx866zRH1dSMd6aEr09vRAiB3a_CGuUCP74FeOe0b04WhnULiZ4ODtFAYqOjI7957dv-C2QDCIoUop__NRaX97muaHSYbyscStQVFZ3xbTY_cj93R_Gg2uohKzc6Qlz-hP7BJrHYx0JrvXcTn0dAwOGTKxX6hDGJvRR1z5nw");
        }
      `}</style>
    </div>
  );
}