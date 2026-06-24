import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

const stats = [
  { label: "Total Peminjaman", value: "342" },
  { label: "Sedang Dipinjam", value: "89" },
  { label: "Anggota Terdaftar", value: "1043" },
  { label: "Total Kas Denda", value: "Rp 236k" },
];

const transactions = [
  {
    id: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    kategori: "Sistem Informasi",
    status: "Terlambat",
    denda: "Rp 12.000",
  },
  {
    id: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    kategori: "Sistem Informasi",
    status: "Dipinjam",
    denda: null,
  },
  {
    id: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    kategori: "Sistem Informasi",
    status: "Selesai",
    denda: null,
  },
  {
    id: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    kategori: "Sistem Informasi",
    status: "Dipinjam",
    denda: null,
  },
  {
    id: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    kategori: "Sistem Informasi",
    status: "Terlambat",
    denda: "Rp 13.000",
  },
];

const STATUS_COLOR = {
  Terlambat: "text-red-500",
  Dipinjam: "text-yellow-500", // Diubah ke yellow-500 agar lebih terbaca di background putih
  Selesai: "text-black",
};

export default function Laporan() {
  return (
    // Main Dashboard Wrapper
    <div className="w-full min-h-screen bg-White-Lilac flex flex-col md:flex-row relative overflow-x-hidden font-['Poppins']">
      
      {/* 1. SIDEBAR UTAMA */}
      <Sidebar active="laporan" />

      {/* ================= AREA KONTEN UTAMA (Kanan) ================= */}
      <main className="flex-1 p-6 md:p-12 relative z-10 max-w-[1200px] mx-auto w-full flex flex-col gap-8">
        
        {/* Header Title Bar */}
        <div className="w-full max-w-md h-14 bg-Grape-Violet rounded-r-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] flex items-center px-6 shadow-md -ml-6 md:-ml-12">
          <h1 className="text-White-Lilac text-xl md:text-2xl font-bold font-['Josefin_Sans'] tracking-wide">
            Generator Laporan Perpustakaan
          </h1>
        </div>

        {/* BACKGROUND BLOBS */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-20">
          <DecorBlob name="kuning1" className="w-56 h-96 right-0 top-1/4 absolute" />
          <DecorBlob name="kuning2" className="w-48 h-80 left-10 top-1/2 absolute" />
        </div>

        {/* ================= 2. DATA ANALITIK CARDS ================= */}
        <section className="flex flex-col gap-4">
          <h2 className="text-purple-950 md:text-purple-900 text-2xl font-bold font-['Josefin_Sans']">
            Data Analitik
          </h2>
          {/* Grid responsive: 1 kolom di HP, 2 di tablet, 4 di desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="h-28 bg-purple-300 rounded-[20px] flex flex-col items-center justify-center gap-1 shadow-md p-4 transition-transform hover:scale-[1.02]"
              >
                <span className="text-center text-Grape-Violet text-base md:text-lg font-bold">
                  {s.label}
                </span>
                <span className="text-center text-Grape-Violet text-2xl md:text-3xl font-bold">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================= 3. CONTROL GENERATOR FORM ================= */}
        <section className="w-full bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-8 text-White-Lilac">
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans'] mb-6">
            Control Generator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            <div>
              <label className="block text-base md:text-lg mb-1">Jenis Rekapitulasi</label>
              <select className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 outline-none font-medium">
                <option>Semua Transaksi Rekapitulasi</option>
              </select>
            </div>

            <div>
              <label className="block text-base md:text-lg mb-1">Filter Kategori Buku</label>
              <select className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 outline-none font-medium">
                <option>Semua Koleksi Kategori</option>
              </select>
            </div>

            <div>
              <label className="block text-base md:text-lg mb-1">Periode Mulai</label>
              <input
                type="date"
                defaultValue="2026-06-01"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 outline-none font-medium"
              />
            </div>

            <div>
              <label className="block text-base md:text-lg mb-1">Periode Akhir</label>
              <input
                type="date"
                defaultValue="2026-06-30"
                className="w-full h-9 bg-Yellow-Jasmine rounded-[20px] px-4 text-sm text-purple-950 outline-none font-medium"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full h-10 mt-8 bg-Plum-Violet hover:bg-opacity-90 active:scale-[0.99] rounded-[20px] text-center text-Grape-Violet text-base font-bold transition-all shadow-md"
          >
            Cetak File
          </button>
        </section>

        {/* ================= 4. PREVIEW DOCUMENT CONTAINER ================= */}
        <section className="w-full bg-purple-300 rounded-[20px] shadow-xl p-4 md:p-8">
          <h2 className="text-Grape-Violet text-2xl font-bold font-['Josefin_Sans'] mb-6">
            Preview Document
          </h2>

          {/* Kertas Dokumen Putih */}
          <div className="w-full bg-white text-black p-6 md:p-10 rounded-lg shadow-inner flex flex-col gap-6">
            
            {/* Kop Surat Dokumen */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b-2 border-black pb-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight">Perpustakaan Kita</h3>
                <p className="text-sm text-zinc-700 mt-1 max-w-md">
                  Bl. Wisma Permai, Mulyosari, Surabaya. Telp (+62)811-3589-675
                </p>
              </div>
              <p className="text-sm font-mono bg-zinc-100 px-2 py-1 rounded">
                DOC-REF : RPT-2026-II
              </p>
            </div>

            {/* Judul Laporan */}
            <div className="text-center my-4">
              <h4 className="text-xl md:text-2xl font-bold tracking-wide">
                LAPORAN REKAPITULASI PERPUSTAKAAN
              </h4>
              <p className="text-sm md:text-base text-zinc-600 font-medium mt-1">
                PERIODE 01/06/2026 - 30/06/2026
              </p>
            </div>

            {/* Tabel Transaksi dengan proteksi Horizontal Scroll */}
            <div className="w-full overflow-x-auto JSON-table-wrapper">
              <table className="w-full min-w-[850px] text-left border-collapse">
                <thead>
                  <tr className="bg-zinc-300 text-sm font-bold border-t-2 border-b-2 border-black">
                    <th className="py-2 px-3 w-[12%]">ID TRX</th>
                    <th className="py-2 px-3 w-[20%]">NAMA ANGGOTA</th>
                    <th className="py-2 px-3 w-[28%]">JUDUL BUKU</th>
                    <th className="py-2 px-3 w-[18%] text-center">KATEGORI</th>
                    <th className="py-2 px-3 w-[12%] text-center">STATUS</th>
                    <th className="py-2 px-3 w-[10%] text-center">DENDA</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-zinc-200">
                  {transactions.map((t, i) => (
                    <tr key={i} className="hover:bg-zinc-50 font-normal">
                      <td className="py-3 px-3 tracking-wide">{t.id}</td>
                      <td className="py-3 px-3">{t.nama}</td>
                      <td className="py-3 px-3 max-w-[240px] truncate">{t.judul}</td>
                      <td className="py-3 px-3 text-center text-zinc-600">{t.kategori}</td>
                      <td className={`py-3 px-3 text-center font-bold ${STATUS_COLOR[t.status] || ""}`}>
                        {t.status}
                      </td>
                      <td className={`py-3 px-3 text-center font-bold ${t.denda ? "text-red-500" : "text-zinc-400"}`}>
                        {t.denda || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Ringkasan & Total Pendapatan Denda */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t-2 border-black pt-4 mt-4">
              <p className="text-sm md:text-base">
                Total Buku Tersirkulasi : <span className="font-bold">3 Buku (2 Kategori)</span>
              </p>
              <div className="sm:text-right">
                <p className="text-xs md:text-sm text-zinc-600 font-medium">Total Pendapatan Denda</p>
                <p className="text-xl font-bold text-purple-950">Rp 30.000,00</p>
              </div>
            </div>

            {/* Tanda Tangan/Footer Laporan */}
            <div className="flex justify-end mt-12">
              <div className="text-center min-w-[200px]">
                <p className="text-sm text-zinc-600">Surabaya, 30 Juni 2026</p>
                <div className="h-20" /> {/* Spacer untuk tanda tangan fisik */}
                <p className="text-sm font-bold border-t border-black pt-1">Perpustakaan Kita</p>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}