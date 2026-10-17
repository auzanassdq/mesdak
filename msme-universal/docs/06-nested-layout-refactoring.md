# Refactoring Next.js Layout (Nested Layouts)

## Masalah Saat Ini
Sistem menyembunyikan Navbar dan Footer pada route spesifik (seperti landing page products atau group companies) menggunakan file `ConditionalLayout.tsx` yang mengecek `pathname`. Hal ini kurang efisien dan tidak memanfaatkan fitur utama dari Next.js App Router yaitu *Nested Layouts* dan *Route Groups*.

## Rekomendasi Solusi
Hapus `ConditionalLayout.tsx` dan letakkan elemen UI global (seperti Navbar dan Footer) ke dalam layout yang spesifik untuk rute utama aplikasi (misalnya di folder `(main)`).

### Struktur Folder yang Disarankan:
```text
src/app/
 ├── layout.tsx                <-- Root layout (Hanya berisi <html>, <body>, provider/fonts)
 ├── (main)/
 │    ├── layout.tsx           <-- Main layout (BERISI Navbar & Footer)
 │    ├── about/page.tsx
 │    ├── services/page.tsx
 │    └── ... (halaman utama lainnya)
 ├── (product)/
 │    ├── layout.tsx           <-- Product layout opsional (TANPA Navbar/Footer)
 │    ├── m-doc/page.tsx
 │    └── m-call/page.tsx
 └── (group-companies)/
      ├── layout.tsx           <-- Layout khusus companies opsional (TANPA Navbar/Footer)
      └── ... 
```

### Langkah-langkah Eksekusi:
1. Pindahkan halaman utama seperti `about/`, `contact/`, `services/`, dan `companies/` ke dalam sub-folder `src/app/(main)/`.
2. Buat file `src/app/(main)/layout.tsx` dan pindahkan pemanggilan `<Navbar />` dan `<Footer />` ke sana.
3. Hapus pemanggilan `ConditionalLayout` dari `src/app/layout.tsx`.
4. Rute-rute di dalam `(product)` dan `(group-companies)` otomatis tidak akan merender Navbar dan Footer karena mereka berada di luar grup `(main)`.

## Keuntungan
- Tidak perlu me-maintain array pengecualian URL (`hideNavFooterRoutes`).
- Kinerja server-side rendering lebih bersih tanpa perlu `usePathname()` di level root layout.
- Kode lebih sesuai dengan arsitektur standar Next.js App Router.
