# Perpustakaan Kita

Web app "Perpustakaan Kita" — dirapikan dari hasil export Figma menjadi
project React + Vite + Tailwind yang terstruktur per halaman, dengan
routing antar halaman dan komponen yang dipakai ulang (navbar, sidebar,
dekorasi gambar).

## Struktur folder

```
perpustakaan-kita/
├─ src/
│  ├─ assets/              # gambar dekorasi (opacity 20% di semua halaman)
│  │  ├─ kuning1.png
│  │  ├─ kuning2.png
│  │  ├─ ungu1.png
│  │  └─ ungu2.png
│  ├─ components/
│  │  ├─ DecorBlob.jsx      # wrapper <img> dekorasi, selalu opacity-20
│  │  ├─ TopNavbar.jsx       # navbar atas untuk halaman anggota
│  │  └─ Sidebar.jsx         # sidebar kiri untuk halaman admin/pustakawan
│  ├─ pages/
│  │  ├─ Register.jsx        # "Buat Akun"
│  │  ├─ Login.jsx           # "Selamat datang"
│  │  ├─ Koleksi.jsx         # daftar buku (grid 12 buku)
│  │  ├─ RiwayatPeminjaman.jsx
│  │  ├─ Inventaris.jsx      # kelola buku (admin)
│  │  ├─ Pengembalian.jsx    # verifikasi pengembalian (admin)
│  │  └─ Laporan.jsx         # generator laporan + preview cetak (admin)
│  ├─ App.jsx                # routing semua halaman
│  ├─ main.jsx
│  ├─ index.css
│  └─ App.css
├─ index.html
├─ tailwind.config.js        # warna custom: Grape-Violet, White-Lilac, Yellow-Jasmine, Plum-Violet
├─ postcss.config.js
├─ vite.config.js
└─ package.json
```

## Rute halaman

| Path                    | Halaman                          |
| ------------------------ | -------------------------------- |
| `/`                      | Buat Akun (Register)             |
| `/login`                 | Login                            |
| `/koleksi`               | Koleksi buku (anggota)           |
| `/riwayat-peminjaman`    | Riwayat peminjaman (anggota)     |
| `/inventaris`            | Inventaris buku (pustakawan)     |
| `/pengembalian`          | Verifikasi pengembalian          |
| `/laporan`               | Generator laporan                |

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Lalu buka `http://localhost:5173`.

Build untuk produksi:

```bash
npm run build
npm run preview
```

## Catatan implementasi

- Semua gambar `https://placehold.co/...` di kode Figma asli diganti
  dengan 4 aset dekorasi (`kuning1`, `kuning2`, `ungu1`, `ungu2`) lewat
  komponen `<DecorBlob />`, yang otomatis menerapkan **opacity 20%**
  pada semua pemakaiannya — sesuai permintaan, tidak perlu diatur manual
  di tiap halaman.
- Data buku, transaksi, dan laporan di tiap halaman masih berupa data
  contoh (`books`, `rows`, `transactions`) di bagian atas file masing-
  masing — tinggal diganti dengan `fetch`/API call ke backend kamu.
- Navbar (anggota) dan Sidebar (admin) dipisah jadi komponen supaya tidak
  copy-paste markup yang sama di 5 halaman berbeda — cukup ubah sekali
  di `components/`.
- Tiap halaman dibungkus `.figma-canvas-wrapper` (scroll horizontal)
  karena layout dasarnya memang kanvas lebar 1440px dari Figma; ini
  menjaga tampilan tetap rapi di layar yang lebih kecil daripada
  memaksa elemen absolut menyusut secara tidak proporsional.
