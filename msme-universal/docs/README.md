# 📚 Dokumentasi Arsitektur & Pustaka Kode Proyek (MSME Universal)

Dokumentasi ini dibuat sebagai **pustaka rujukan cepat (*index directory*)** dan **memori kontekstual AI Agent** agar pencarian file, penambahan fitur, serta pemeliharaan kode dapat dilakukan secepat mungkin dengan konsumsi token yang hemat.

---

## 📑 Daftar Isi Dokumen

1. [01. Ikhtisar & Arsitektur Aplikasi](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/01-app-overview.md)
   - Deskripsi produk, regional multi-branding (`REGION_ID`), tech stack utama.
2. [02. Struktur Folder & Peta Routing](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/02-folder-structure.md)
   - Peta lengkap folder `src/app/`, route groups `(main)`, `(group-companies)`, `(product)`, dan colocation `_components`.
3. [03. Peta Komponen & State Management](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/03-components-map.md)
   - Daftar pustaka komponen global (`src/components/`) vs komponen halaman (`_components/`).
4. [04. Single Source of Truth & Konfigurasi](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/04-data-and-config.md)
   - Lokasi data JSON, master data anak perusahaan, data dewan komisaris, dan konfigurasi region.
5. [05. Panduan Pengembangan & Aturan AI](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/05-development-guide.md)
   - Standar coding, penempatan komponen baru, konvensi penamaan, dan *checklist* sebelum commit.
6. [06. Catatan Refactoring Nested Layout](file:///Users/mac/Project/upwork/mesdak/msme-universal/docs/06-nested-layout-refactoring.md)
   - Catatan migrasi refactoring nested layout & colocation komponen.

---

## ⚡ Quick Cheat Sheet (Pencarian Cepat)

| Ingin Mengubah / Mencari Apa? | Lokasi File Langsung |
| :--- | :--- |
| **Ganti Brand / Region / Warna Global** | [src/lib/config.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/lib/config.ts) & [.env](file:///Users/mac/Project/upwork/mesdak/msme-universal/.env) |
| **Navbar & Footer Utama** | [src/components/layout/Navbar.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/layout/Navbar.tsx) & [Footer.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/components/layout/Footer.tsx) |
| **Data & Tagline 7 Anak Perusahaan** | [src/app/(main)/companies/data/group-companies.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/data/group-companies.ts) |
| **Bagan Organisasi Group Company** | [src/app/(group-companies)/_components/group-org-charts/](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/group-org-charts/) |
| **Komponen Reusable Tree Org Chart** | [OrgChartTree.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(group-companies)/_components/group-org-charts/OrgChartTree.tsx) |
| **Struktur Holding & Peta Negara** | [HoldingStructure.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/companies/_components/HoldingStructure.tsx) |
| **Data Dewan Direksi (Executive/Supervisory/Advisory)** | [board-data.ts](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/data/board-data.ts) |
| **4 Gap Video Section di About** | [FourGapsSection.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/about/_components/FourGapsSection.tsx) |
| **Office Locations / Contact Tabs** | [LocationTabs.tsx](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(main)/contact/_components/LocationTabs.tsx) |
| **Halaman Produk Ekosistem (M'Call, M'Doc, dll)** | [src/app/(product)/](file:///Users/mac/Project/upwork/mesdak/msme-universal/src/app/(product)/) |
