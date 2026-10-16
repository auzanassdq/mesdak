# 03. Peta Komponen & State Management (Components Map)

## 📌 Prinsip Pemisahan Komponen
Untuk menghemat token context AI dan mencegah pencarian kode yang rumit:
1. **Global Components (`src/components/`)**: HANYA boleh berisi komponen yang dipakai di lebih dari 2 halaman non-sekeluarga (misalnya: `Navbar`, `Footer`, `TranslateButton`, dan `ContinentIcons`).
2. **Page-Specific Components (`_components/`)**: Wajib diletakkan di dalam folder route masing-masing dengan prefix underscore `_components`. Folder berawalan `_` tidak akan dianggap sebagai route URL oleh Next.js.

---

## 🗺️ Detail Peta Komponen

### 1. Global Components (`src/components/`)
* [src/components/layout/Navbar.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/layout/Navbar.tsx):
  - Navbar utama portal. Menggunakan `framer-motion` untuk entrance animation, mendeteksi scroll window (`isScrolled`), dan merender link halaman utama portal.
* [src/components/layout/Footer.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/layout/Footer.tsx):
  - Footer standar portal dengan link navigasi, legal, dan social links.
* [src/components/ui/translate-btn.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/ui/translate-btn.tsx):
  - Widget translasi multi-bahasa terintegrasi.
* [src/components/icons/ContinentIcons.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/icons/ContinentIcons.tsx):
  - SVG icon vector murni benua: `AfricaIcon`, `AsiaIcon`, `LatinAmericaIcon`, `NorthAmericaIcon`, `AseuIcon`, `EuropeIcon`.

---

### 2. Group Companies Components (`src/app/(group-companies)/_components/`)
* [GroupCompanyNavbar.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/GroupCompanyNavbar.tsx):
  - Navbar adaptif untuk 7 group company. Menerima prop `themeColor` dan `logoSrc`. Mendukung navigasi in-page smooth hash scrolling (`#about`, `#companies`, `#reach`).
* [group-org-charts/OrgChartTree.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/group-org-charts/OrgChartTree.tsx):
  - **Tree Engine Universal**: Menggambar pohon bagan organisasi hierarkis lengkap dengan root logo, garis koneksi ortogonal (grid 2, 3, 4, 6, atau 8 kolom), card anak interaktif, tooltip hover `Key Services`, dan strip nilai inti (*value items*).
* Sub-komponen Chart Anak Perusahaan:
  - `ButicChart.tsx`, `ConsultingChart.tsx`, `DataTalkChart.tsx`, `FinanceChart.tsx`, `IZITecChart.tsx`, `MediaChart.tsx`, `NetworkChart.tsx` — sekarang bertindak sebagai *thin wrapper* yang hanya menyuplai data ke `OrgChartTree`.
* [OurReachSection.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/group-org-charts/OurReachSection.tsx):
  - Bagian jangkauan kontinental 6 wilayah dengan link ke masing-masing subdomain regional portal.

---

### 3. Main Portal Colocated Components
* **Homepage (`src/app/(main)/_components/`)**:
  - [HomeHero.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/_components/HomeHero.tsx): Hero interaktif berbasis GSAP Timeline dan rotasi kata statis `SWITCHING_WORDS` (Digitization, Decentralization, Decarbonization).
  - [HomeContent.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/_components/HomeContent.tsx): Bagian konten pendukung landing page.
* **About (`src/app/(main)/about/_components/`)**:
  - [FourGapsSection.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/_components/FourGapsSection.tsx): Grid 4 video gap ekonomi (MSME Finance, SDG Execution, Real-Time Economic Intelligence, Human Capital).
  - [BoardModal.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/_components/BoardModal.tsx): Modal dialog pop-up detail dewan komisaris & direksi dengan pagination antar board.
  - [SectionWithVideo.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/_components/SectionWithVideo.tsx): Video showcase section.
* **Companies (`src/app/(main)/companies/_components/`)**:
  - [HoldingStructure.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/_components/HoldingStructure.tsx): Bagan interaktif perusahaan induk kontinental, regional, dan filter perusahaan operasi per negara (`countriesData`).
* **Contact (`src/app/(main)/contact/_components/`)**:
  - [LocationTabs.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/contact/_components/LocationTabs.tsx): Tab pergantian alamat kantor global dan form kontak.
* **Careers (`src/app/(main)/careers/_components/`)**:
  - [TabCareer.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/careers/_components/TabCareer.tsx): Filter lowongan karir berdasarkan negara, fungsi, dan video preview.
  - [TabPartnership.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/careers/_components/TabPartnership.tsx): Formulir dan informasi kemitraan strategis.
