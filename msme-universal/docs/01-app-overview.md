# 01. Ikhtisar & Arsitektur Aplikasi (App Overview)

## 📌 Deskripsi Proyek
**MSME Universal** (`msme-universal`) adalah web platform multi-wilayah (*multi-region enterprise web portal*) untuk ekosistem **MSME Solutions World Group**. Platform ini menyajikan informasi perusahaan induk (*Holding*), anak perusahaan (*Group Companies*), solusi & produk digital (*Ecosystem Products*), serta jangkauan global ke berbagai benua.

---

## 🛠️ Tech Stack & Dependencies Utama

| Kategori | Teknologi | Keterangan |
| :--- | :--- | :--- |
| **Framework** | Next.js 16 (App Router + Turbopack) | React 19, Server & Client Components, Route Groups |
| **Styling** | Tailwind CSS + CSS Modules | Variabel warna CSS dinamis di root layout via `lib/config.ts` |
| **Animasi** | Framer Motion & GSAP + `@gsap/react` | ScrollTrigger scrubbing, timelines, layout spring animations |
| **Ikon** | `@phosphor-icons/react` & `lucide-react` | Phosphor untuk navigasi/branding umum, Lucide untuk bagan & holding |
| **Font** | `Sansation` & `Host_Grotesk` (`next/font/google`) | Tipografi modern enterprise |

---

## 🌍 Sistem Multi-Region (`NEXT_PUBLIC_REGION_ID`)
Aplikasi ini dirancang *multi-tenant* berbasis region melalui environment variable:
- File konfigurasi: [src/lib/config.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/config.ts)
- Konfigurasi didasarkan pada `process.env.NEXT_PUBLIC_REGION_ID`:
  - `world` (Global Holding - Default)
  - `africa`, `asia`, `latin-america`, `north-america`, `aseu`, `europe`
- **Variabel Dinamis**:
  - Warna primer (`primary`, `primaryDark`, `palette 50-950`). Variabel ini diinjeksikan langsung sebagai CSS variables `--primary` di [src/app/layout.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/layout.tsx).
  - Nama Brand, Logo URL, Meta deskripsi & OpenGraph.
  - Daftar negara aktif di bagan struktur holding didapat dari [src/lib/countries.json](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/countries.json).

---

## 🏛️ Arsitektur Layout (Clean Nested Layouts)
Aplikasi menggunakan pola **Route Groups** standar Next.js untuk memisahkan layout tanpa mengubah URL publik:
1. **Root Layout (`src/app/layout.tsx`)**:
   - Khusus menangani font, injeksi CSS variables warna tema, meta SEO global, dan JSON-LD Structured Data Schema.
   - **TIDAK lagi menggunakan layout shift conditional** seperti `ConditionalLayout.tsx`.
2. **Main Layout (`src/app/(main)/layout.tsx`)**:
   - Membungkus seluruh halaman utama portal (`/`, `/about`, `/contact`, `/careers`, `/companies`, `/services`) dengan `Navbar` dan `Footer`.
3. **Group Companies (`src/app/(group-companies)`)**:
   - Menggunakan navbar mandiri bertema khusus per company: [GroupCompanyNavbar.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/GroupCompanyNavbar.tsx).
4. **Standalone Landing Pages (`/mbrand`, `/super-deal`)**:
   - Memiliki styling dan navigation independen, terbebas dari navbar/footer global.
