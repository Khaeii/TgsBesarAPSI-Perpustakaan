import { useState } from "react";
import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

// Sample inventory rows
const initialBooks = Array.from({ length: 4 }, () => ({
  isbn: "978-602-8519-93-9",
  judul: "Analisis Perancangan Sistem Informasi",
  kategori: "Sistem Informasi",
  stok: 15,
}));

export default function Inventaris() {
  const [books] = useState(initialBooks);

  return (
    // Wrapper layout dasbor: Menggunakan flex horizontal agar sidebar & konten berdampingan
    <div className="w-full min-h-screen bg-White-Lilac flex flex-col md:flex-row relative overflow-x-hidden font-['Poppins']">
      
      {/* 1. SIDEBAR UTAMA ADMIN (Otomatis memanjang ke bawah, menangani Navigasi, Profil AD-1003, dan Log Out) */}
      <Sidebar active="inventaris" />

      {/* ================= AREA KONTEN UTAMA (Kanan) ================= */}
      {/* Menggunakan flex-1 agar otomatis memenuhi lebar sisa layar monitor */}
      <main className="flex-1 p-6 md:p-12 relative z-10 max-w-[1200px] mx-auto w-full flex flex-col gap-10">
        
        {/* Header Title Bar */}
        <div className="w-full max-w-sm h-14 bg-Grape-Violet rounded-r-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] flex items-center px-6 shadow-md -ml-6 md:-ml-12">
          <h1 className="text-White-Lilac text-xl md:text-2xl font-bold font-['Josefin_Sans'] tracking-wide">
            Kelola Inventaris Buku
          </h1>
        </div>

        {/* ================= BACKGROUND BLOBS (Dekoratif Mengalir) ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          <DecorBlob name="kuning1" className="w-48 h-80 right-0 top-1/4 absolute" />
          <DecorBlob name="kuning2" className="w-48 h-80 left-10 bottom-1/4 absolute" />
          <DecorBlob name="ungu1" className="w-64 h-64 left-1/3 top-1/2 absolute" />
          <DecorBlob name="ungu2" className="w-60 h-48 right-10 bottom-10 absolute" />
        </div>

        {/* ================= 2. FORM TAMBAH KOLEKSI BUKU ================= */}
        <form className="w-full bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-8 z-10 text-White-Lilac">
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans'] mb-6">
            Tambah Koleksi Buku
          </h2>

          {/* Grid layout input adaptif: 1 kolom di mobile, otomatis melebar di desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-5">
            
            {/* Judul Buku */}
            <div className="lg:col-span-2">
              <label className="block text-sm md:text-base mb-1">Judul Buku</label>
              <input
                type="text"
                placeholder="Contoh : Analisis Perancangan Sistem Informasi"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 placeholder:text-purple-950/40 outline-none font-medium"
              />
            </div>

            {/* Nomor ISBN */}
            <div>
              <label className="block text-sm md:text-base mb-1">Nomor ISBN</label>
              <input
                type="text"
                placeholder="Contoh : 978-602-8519-93-9"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 placeholder:text-purple-950/40 outline-none font-medium"
              />
            </div>

            {/* Pengarang */}
            <div>
              <label className="block text-sm md:text-base mb-1">Pengarang</label>
              <input
                type="text"
                placeholder="Contoh : Olivia Dean"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 placeholder:text-purple-950/40 outline-none font-medium"
              />
            </div>

            {/* Penerbit */}
            <div>
              <label className="block text-sm md:text-base mb-1">Penerbit</label>
              <input
                type="text"
                placeholder="Contoh : Olivia Dean"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 placeholder:text-purple-950/40 outline-none font-medium"
              />
            </div>

            {/* Tahun Terbit */}
            <div>
              <label className="block text-sm md:text-base mb-1">Tahun Terbit</label>
              <input
                type="number"
                defaultValue={2024}
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 outline-none font-medium"
              />
            </div>

            {/* Kategori */}
            <div>
              <label className="block text-sm md:text-base mb-1">Kategori</label>
              <input
                type="text"
                defaultValue="Sistem Informasi"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-Grape-Violet outline-none font-medium"
              />
            </div>

            {/* Control Stok */}
            <div>
              <label className="block text-sm md:text-base mb-1">Stok</label>
              <div className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] flex items-center justify-between px-5">
                <button type="button" className="text-purple-950 text-lg font-bold hover:scale-125 transition-transform">-</button>
                <span className="text-purple-950 font-semibold text-sm">15</span>
                <button type="button" className="text-purple-950 text-lg font-bold hover:scale-125 transition-transform">+</button>
              </div>
            </div>

            {/* Nomor Rak */}
            <div>
              <label className="block text-sm md:text-base mb-1">Nomor Rak</label>
              <input
                type="text"
                placeholder="Contoh : A-4"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 placeholder:text-purple-950/40 outline-none font-medium"
              />
            </div>

          </div>

          {/* Button Simpan */}
          <button
            type="submit"
            className="w-full h-10 mt-8 bg-Plum-Violet hover:bg-opacity-90 active:scale-[0.99] rounded-[20px] text-center text-Grape-Violet text-base font-bold transition-all shadow-md"
          >
            Simpan
          </button>
        </form>

        {/* ================= 3. MASTER DATA BUKU TABLE ================= */}
        <div className="w-full bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-8 z-10 text-White-Lilac flex flex-col">
          
          {/* Table Top Header */}
          <div className="flex items-center justify-between border-b-2 border-white/80 pb-4 mb-4">
            <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
              Master Data Buku
            </h2>
            <span className="text-purple-50/50 text-sm md:text-base font-medium">
              Total: 2526 Judul
            </span>
          </div>

          {/* Wrapper Overflow agar tabel aman dari pemotongan teks */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr className="text-sm md:text-base font-bold text-white/90">
                  <th className="pb-3 w-[20%]">ISBN</th>
                  <th className="pb-3 w-[40%]">JUDUL BUKU</th>
                  <th className="pb-3 w-[20%]">KATEGORI</th>
                  <th className="pb-3 w-[10%] text-center">STOK</th>
                  <th className="pb-3 w-[10%] text-center">AKSI</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-white/10 text-sm font-light">
                {books.map((book, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 tracking-wide">{book.isbn}</td>
                    <td className="py-3 pr-4 font-normal line-clamp-1 mt-1 block max-w-[320px]">
                      {book.judul}
                    </td>
                    <td className="py-3">{book.kategori}</td>
                    <td className="py-3 text-center font-normal">{book.stok}</td>
                    <td className="py-3">
                      <div className="flex items-center justify-center gap-2">
                        <button className="w-14 h-6 bg-purple-300 rounded-[20px] text-center text-xs font-bold text-purple-950 hover:bg-purple-200 transition-colors">
                          Edit
                        </button>
                        <button className="w-14 h-6 bg-amber-200 rounded-[20px] text-center text-xs font-bold text-Grape-Violet hover:bg-amber-100 transition-colors">
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}