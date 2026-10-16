# 02. Struktur Folder & Peta Routing (Folder Structure & Routes)

Berikut adalah peta struktur direktori lengkap pada `src/` yang telah dioptimasi dengan prinsip **Component Colocation** (komponen diletakkan sedekat mungkin dengan halaman penggunanya):

```text
src/
├── app/
│   ├── (group-companies)/                    # Group Perusahaan Anak (7 Company Pages)
│   │   ├── _components/
│   │   │   ├── GroupCompanyNavbar.tsx        # Navbar khusus group company (hash scroll + themeColor)
│   │   │   └── group-org-charts/             # Komponen bagan organisasi anak perusahaan
│   │   │       ├── OrgChartTree.tsx          # ⭐ Reusable dynamic hierarchical tree
│   │   │       ├── ButicChart.tsx            # Bagan M'Butic
│   │   │       ├── ConsultingChart.tsx       # Bagan MSME Consulting
│   │   │       ├── DataTalkChart.tsx         # Bagan M'DataTalk
│   │   │       ├── FinanceChart.tsx          # Bagan MSME Finance
│   │   │       ├── IZITecChart.tsx           # Bagan M'IZITec
│   │   │       ├── MediaChart.tsx            # Bagan M'Media
│   │   │       ├── NetworkChart.tsx          # Bagan MSME Network
│   │   │       └── OurReachSection.tsx       # Reach continental grid
│   │   ├── msme-butic/page.tsx               # URL: /msme-butic
│   │   ├── msme-consulting/page.tsx          # URL: /msme-consulting
│   │   ├── msme-datatalk/page.tsx            # URL: /msme-datatalk
│   │   ├── msme-finance/page.tsx             # URL: /msme-finance
│   │   ├── msme-izitec/page.tsx              # URL: /msme-izitec
│   │   ├── msme-media/page.tsx               # URL: /msme-media
│   │   └── msme-network/page.tsx             # URL: /msme-network
│   │
│   ├── (main)/                               # Route Group Portal Utama (dibungkus Navbar & Footer)
│   │   ├── layout.tsx                        # Layout pembungkus Navbar & Footer
│   │   ├── page.tsx                          # URL: / (Homepage)
│   │   ├── _components/                      # Komponen khusus homepage
│   │   │   ├── HomeHero.tsx                  # Hero section homepage (GSAP + switching words)
│   │   │   └── HomeContent.tsx               # Konten landing homepage
│   │   │
│   │   ├── about/                            # URL: /about
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── _components/
│   │   │   │   ├── SectionWithVideo.tsx      # Video section
│   │   │   │   ├── FourGapsSection.tsx       # 4 Gaps Video grid (Google Drive iframes)
│   │   │   │   └── BoardModal.tsx            # Modal pop-up dewan komisaris/direksi
│   │   │   └── data/
│   │   │       └── board-data.ts             # Master data dewan direksi/komisaris
│   │   │
│   │   ├── careers/                          # URL: /careers
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── _components/
│   │   │       ├── TabCareer.tsx             # Tab karir & lowongan
│   │   │       └── TabPartnership.tsx        # Tab kemitraan
│   │   │
│   │   ├── companies/                        # URL: /companies
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── _components/
│   │   │   │   └── HoldingStructure.tsx      # Interactive holding & country operating structure
│   │   │   └── data/
│   │   │       ├── group-companies.ts        # ⭐ Master metadata 7 anak perusahaan
│   │   │       └── companies-summary.json    # Summary detail modal pop-up
│   │   │
│   │   ├── contact/                          # URL: /contact
│   │   │   ├── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── _components/
│   │   │       └── LocationTabs.tsx          # Tab kantor global
│   │   │
│   │   └── services/                         # URL: /services
│   │       ├── page.tsx
│   │       ├── layout.tsx
│   │       └── services-data.json            # Data layanan & deskripsi
│   │
│   ├── (product)/                            # Produk Ekosistem Digital M'World
│   │   ├── m-call/page.tsx                   # URL: /m-call
│   │   ├── m-doc/page.tsx                    # URL: /m-doc
│   │   ├── m-event/page.tsx                  # URL: /m-event
│   │   ├── m-media/page.tsx                  # URL: /m-media
│   │   ├── m-pay/page.tsx                    # URL: /m-pay
│   │   ├── m-project/page.tsx                # URL: /m-project
│   │   └── m-trade/page.tsx                  # URL: /m-trade
│   │
│   ├── mbrand/page.tsx                       # URL: /mbrand (Standalone Landing Page)
│   ├── super-deal/page.tsx                   # URL: /super-deal (Standalone Landing Page)
│   ├── globals.css                           # Global styles & Tailwind directives
│   ├── layout.tsx                            # Root HTML layout (metadata, fonts, css vars)
│   ├── manifest.ts                           # PWA Webmanifest generator
│   ├── robots.ts                             # SEO robots.txt generator
│   └── sitemap.ts                            # SEO sitemap.xml generator
│
├── components/                               # HANYA Komponen Global Bersama (Shared across app)
│   ├── layout/
│   │   ├── Navbar.tsx                        # Main portal navbar
│   │   └── Footer.tsx                        # Main portal footer
│   ├── ui/
│   │   └── translate-btn.tsx                 # Language translate widget (GTranslate)
│   └── icons/
│       └── ContinentIcons.tsx                # Custom SVG icons: Africa, Asia, Europe, LatAm, NA, ASEU
│
└── lib/                                      # Utilities, Configs & Constants
    ├── config.ts                             # Multi-region dynamic tenant configuration
    ├── countries.json                        # Mapping negara aktif per region
    └── products.ts                           # List produk ekosistem
```
