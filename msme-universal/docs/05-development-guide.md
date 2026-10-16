# 05. Panduan Pengembangan & Aturan AI (Development Guide & Rules)

Dokumen ini berisi standar dan tata cara bagi pengembang maupun AI Agent saat melakukan perubahan kode di repositori ini.

---

## 🛑 Aturan Emas Pengembangan (Golden Rules)

1. **Prinsip Colocation (Jangan Kotori `src/components/`)**:
   - Jika membuat komponen baru yang **hanya digunakan oleh 1 halaman**, buatlah di folder `_components/` di dalam direktori halaman tersebut (contoh: `src/app/(main)/about/_components/MyNewWidget.tsx`).
   - Jangan meletakkan komponen spesifik halaman di folder global `src/components/`.
2. **Jangan Mengubah Pola Route Groups `(main)`**:
   - Route portal utama berada di dalam folder `src/app/(main)/`.
   - Nama folder dengan tanda kurung `(main)` **tidak mengubah URL di browser** (`/about` tetap `/about`), tetapi memastikan halaman otomatis mewarisi `Navbar` dan `Footer`.
3. **Hindari `any` dan Hardcoded Duplikasi**:
   - Manfaatkan master data di `data/*.ts` jika ingin menampilkan informasi grup perusahaan atau dewan direksi.
   - Jangan menulis ulang array informasi anak perusahaan secara lokal di komponen baru.
4. **GSAP & Animasi**:
   - Gunakan hook `useGSAP(() => { ... }, { scope: containerRef })` dari `@gsap/react` untuk memastikan pembersihan (*cleanup*) otomatis dan menghindari kebocoran memori pada animasi GSAP / ScrollTrigger.
5. **Konstanta Statis di Luar Komponen**:
   - Jangan mendeklarasikan array statis atau objek konstan di dalam body fungsi React Component tanpa `useMemo` jika data tersebut tidak bergantung pada state/props, agar tidak dialokasikan ulang di setiap siklus render.

---

## ✅ Pre-flight Checklist Sebelum Commit
Setiap kali selesai melakukan refactor atau penambahan fitur baru, AI Agent atau developer **wajib** menjalankan langkah-langkah berikut:

1. **Jalankan Verifikasi Build**:
   ```bash
   npm run build
   ```
   Pastikan seluruh 28 static routes terkompilasi tanpa error TypeScript maupun Turbopack missing module.
2. **Periksa Status Git**:
   ```bash
   git status
   ```
   Pastikan tidak ada file sampah (`.DS_Store`, build cache tersisa, atau file uji coba) yang ikut ter-stage.
3. **Commit dengan Pesan Konvensional**:
   - `feat(...)`: Fitur baru
   - `refactor(...)`: Perapihan struktur tanpa mengubah UI
   - `perf(...)`: Peningkatan performa & pembersihan memori
   - `docs(...)`: Dokumentasi
