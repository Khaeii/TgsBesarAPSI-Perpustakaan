import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

// Sample pending-return rows — swap for live transaction data from your backend API.
const rows = [
  {
    idTrans: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    keterlambatan: "6 Hari",
    denda: "Rp 12.000",
    terlambat: true,
  },
  {
    idTrans: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    keterlambatan: "6 Hari",
    denda: "Rp 12.000",
    terlambat: true,
  },
  {
    idTrans: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    keterlambatan: "-",
    denda: "Rp 0,",
    terlambat: false,
  },
  {
    idTrans: "12345678",
    nama: "Sakha Imtinan",
    judul: "Pengantar Sistem Informasi",
    keterlambatan: "-",
    denda: "Rp 0,",
    terlambat: false,
  },
];

export default function Pengembalian() {
  return (
    // Main layout wrapper: Fleksibel mendatar memisahkan Sidebar dengan area konten
    <div className="w-full min-h-screen bg-White-Lilac flex flex-col md:flex-row relative overflow-x-hidden font-['Poppins']">
      
      {/* 1. SIDEBAR ADMIN (Menjaga navigasi Admin tetap aktif & responsif) */}
      <Sidebar active="pengembalian" />

      {/* ================= AREA KONTEN UTAMA (Kanan) ================= */}
      <main className="flex-1 p-6 md:p-12 relative z-10 max-w-[1200px] mx-auto w-full flex flex-col gap-10">
        
        {/* Header Title Bar Section */}
        <div className="w-full max-w-sm h-14 bg-Grape-Violet rounded-r-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] flex items-center px-6 shadow-md -ml-6 md:-ml-12">
          <h1 className="text-White-Lilac text-xl md:text-2xl font-bold font-['Josefin_Sans'] tracking-wide">
            Sirkulasi Pengembalian
          </h1>
        </div>

        {/* ================= BACKGROUND BLOBS (Dekoratif Estetik) ================= */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30">
          <DecorBlob name="kuning1" className="w-40 h-64 right-0 top-1/3 absolute" />
          <DecorBlob name="kuning2" className="w-48 h-80 left-10 bottom-1/4 absolute" />
        </div>

        {/* ================= 2. VERIFIKASI PENGEMBALIAN DATA TABLE ================= */}
        <div className="w-full bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-8 z-10 text-White-Lilac flex flex-col">
          
          {/* Card Header */}
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans'] mb-6 border-b border-white/10 pb-4">
            Verifikasi Pengembalian Buku
          </h2>

          {/* Wrapper Kontrol Luapan (Overflow-x-auto) agar data baris aman di layar kecil */}
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="text-sm md:text-base font-bold text-white/90 border-b-2 border-white/40">
                  <th className="pb-3 w-[15%]">ID TRANS</th>
                  <th className="pb-3 w-[25%]">NAMA ANGGOTA</th>
                  <th className="pb-3 w-[25%]">JUDUL BUKU</th>
                  <th className="pb-3 w-[15%] text-center">KETERLAMBATAN</th>
                  <th className="pb-3 w-[10%] text-center">DENDA</th>
                  <th className="pb-3 w-[10%] text-center">AKSI</th>
                </tr>
              </thead>
              
              <tbody className="divide-y divide-white/10 text-sm font-light">
                {rows.map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    {/* ID Transaksi */}
                    <td className="py-4 font-normal tracking-wide">{row.idTrans}</td>
                    
                    {/* Nama Anggota */}
                    <td className="py-4 pr-3 font-normal">{row.nama}</td>
                    
                    {/* Judul Buku */}
                    <td className="py-4 pr-4 font-normal max-w-[220px] truncate">
                      {row.judul}
                    </td>
                    
                    {/* Status Keterlambatan */}
                    <td className={`py-4 text-center font-bold ${row.terlambat ? "text-red-500" : "text-white/80"}`}>
                      {row.keterlambatan}
                    </td>
                    
                    {/* Jumlah Denda */}
                    <td className="py-4 text-center font-bold">{row.denda}</td>
                    
                    {/* Tombol Aksi Verifikasi */}
                    <td className="py-4">
                      <div className="flex justify-center">
                        <button 
                          type="button" 
                          className="w-24 h-7 bg-amber-200 hover:bg-amber-300 active:scale-95 text-center text-Grape-Violet text-xs font-bold rounded-[20px] shadow-sm transition-all"
                        >
                          Verifikasi
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