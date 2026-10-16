# 04. Single Source of Truth & Konfigurasi Data (Data & Config)

Untuk mencegah data inkonsisten (*stale data* atau beda teks antar halaman), seluruh data konten telah dikelompokkan ke lokasi sentral berikut:

---

## 🗄️ Lokasi Master Data

### 1. Profil 7 Anak Perusahaan (Group Companies)
* **File**: [src/app/(main)/companies/data/group-companies.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/data/group-companies.ts)
* **Konsumen**:
  - Halaman grid [companies/page.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/page.tsx)
  - Bagan holding [HoldingStructure.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/_components/HoldingStructure.tsx)
* **Atribut**:
  ```ts
  interface GroupCompanyMeta {
    id: number;
    name: string;             // Contoh: "MSME Network Incorporation"
    shortName: string;        // Contoh: "MSME Network"
    tagline: string;          // Slogan resmi
    description: string;      // Deskripsi lengkap
    role: string;             // Peran spesifik dalam ekosistem
    link: string;             // URL route (/msme-network)
    color: string;            // Tailwind text color (text-[#e86f28])
    borderColor: string;      // Tailwind border color (border-[#e86f28])
    bgActive: string;         // Tailwind bg color (bg-[#e86f28])
    hasRegionalLayer?: boolean;
  }
  ```
* **Summary Modal Data**:
  - [src/app/(main)/companies/data/companies-summary.json](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/data/companies-summary.json)
  - Menyimpan data modal mendalam saat kartu perusahaan diklik di `/companies`.

---

### 2. Dewan Direksi & Komisaris (Board Members)
* **File**: [src/app/(main)/about/data/board-data.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/data/board-data.ts)
* **Konsumen**:
  - [src/app/(main)/about/_components/BoardModal.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/_components/BoardModal.tsx)
* **Struktur**:
  - `executive`: Anggota Executive Board (CEO, COO, CFO, CIO, CLO, Chief Economist, CSO).
  - `supervisory`: Anggota Supervisory Board (Chairman of the Board, Chairperson, Independent Director, Compliance Officer).
  - `advisory`: Anggota Advisory Board (Chairman, Industry Advisor, Technology Advisor, Market Advisors).

---

### 3. Layanan Bisnis (Services Data)
* **File**: [src/app/(main)/services/services-data.json](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/services/services-data.json)
* **Konsumen**:
  - [src/app/(main)/services/page.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/services/page.tsx)
* **Isi**: Judul layanan, ikon terkait, tagline, deskripsi singkat, dan `fullDescription` berformat HTML untuk modal popup.

---

### 4. Konfigurasi Multi-Region & Negara
* **File Konfigurasi**: [src/lib/config.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/config.ts)
  - Berisi palet warna Tailwind 50-950, warna primer, nama holding sesuai region, dan logo file path.
* **File Daftar Negara**: [src/lib/countries.json](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/countries.json)
  - Pemetaan negara-negara anggota untuk setiap region (Africa, Asia, Latin America, North America, ASEU, Europe).

---

### 5. Produk Ekosistem Digital
* **File**: [src/lib/products.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/products.ts)
  - Daftar produk terintegrasi: `M'Call`, `M'Trade`, `M'Event`, `M'Doc`, `M'Pay`, `M'Media`, `M'Project`, dsb.
