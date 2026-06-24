import DecorBlob from "../components/DecorBlob";
import TopNavbar from "../components/TopNavbar";

const STATUS_STYLES = {
  Terlambat: "text-red-500 font-bold",
  Dipinjam: "text-Yellow-Jasmine font-bold",
  Dikembalikan: "text-White-Lilac font-bold",
};

// Sample borrow history rows
const rows = [
  {
    id: "TRX-2026-0089",
    title: "Analisis dan Perancangan Sistem Informasi",
    tglPinjam: "10/6/2026",
    batasTempo: "17/06/2026",
    status: "Terlambat (4 hari)",
    statusKey: "Terlambat",
    denda: "Rp 12.000",
  },
  {
    id: "TRX-2026-0089",
    title: "Analisis dan Perancangan Sistem Informasi",
    tglPinjam: "10/6/2026",
    batasTempo: "17/06/2026",
    status: "Dipinjam",
    statusKey: "Dipinjam",
    denda: "Rp 0,",
  },
  {
    id: "TRX-2026-0089",
    title: "Analisis dan Perancangan Sistem Informasi",
    tglPinjam: "10/6/2026",
    batasTempo: "17/06/2026",
    status: "Dikembalikan",
    statusKey: "Dikembalikan",
    denda: "Rp 0,",
  },
  {
    id: "TRX-2026-0089",
    title: "Analisis dan Perancangan Sistem Informasi",
    tglPinjam: "10/6/2026",
    batasTempo: "17/06/2026",
    status: "Dikembalikan",
    statusKey: "Dikembalikan",
    denda: "Rp 0,",
  },
];

export default function RiwayatPeminjaman() {
  return (
    // Wrapper utama full width mengikuti lebar layar monitor browser
    <div className="w-full min-h-screen bg-White-Lilac relative overflow-x-hidden pb-16 flex flex-col font-['Poppins']">
      
      {/* 1. TOP NAVBAR (Otomatis full stretch ke ujung monitor) */}
      <div className="w-full z-30">
        <TopNavbar active="riwayat" userName="Sakha" />
      </div>

      {/* ================= BACKGROUND BLOBS DEKORASI ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <DecorBlob name="ungu1" className="w-96 h-[480px] -left-20 top-[266px] absolute opacity-40" />
        <DecorBlob name="kuning1" className="w-48 h-80 -right-10 top-[62px] absolute opacity-40" />
        <DecorBlob name="kuning2" className="w-80 h-80 right-10 bottom-10 absolute opacity-40" />
        <DecorBlob name="ungu2" className="w-80 h-64 left-20 top-[57px] absolute opacity-40" />
        <DecorBlob name="ungu1" className="w-[474px] h-96 left-[35%] top-[367px] absolute opacity-30" />
      </div>

      {/* CONTAINER UTAMA (Membatasi isi konten tengah agar simetris maks 1440px) */}
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-12 mt-12 z-10">
        
        {/* ================= TABLE CARD BASE ================= */}
        {/* Menggunakan padding dinamis & overflow-x-auto agar aman jika dibuka di layar kecil */}
        <div className="w-full bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-10 text-White-Lilac overflow-x-auto">
          
          {/* Judul Riwayat */}
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans'] mb-8">
            Riwayat Peminjaman
          </h2>

          {/* Struktur Tabel Utama Responsif */}
          <table className="w-full min-w-[1100px] border-collapse text-left">
            <thead>
              <tr className="text-xl font-bold border-b-2 border-white/80 pb-3">
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[15%]">ID PINJAM</th>
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[35%]">JUDUL BUKU</th>
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[13%] text-right pr-6">TGL PINJAM</th>
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[13%] text-right pr-6">BATAS TEMPO</th>
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[14%] pl-6">STATUS</th>
                <th className="pb-4 font-['Poppins'] text-base md:text-xl w-[10%]">DENDA</th>
              </tr>
            </thead>
            
            <tbody className="divide-y divide-white/10">
              {rows.map((row, i) => (
                <tr key={i} className="text-base font-normal hover:bg-white/5 transition-colors">
                  {/* ID Pinjam */}
                  <td className="py-4 font-['Poppins'] font-light tracking-wide">
                    {row.id}
                  </td>
                  
                  {/* Judul Buku */}
                  <td className="py-4 font-['Poppins'] pr-8 line-clamp-1 mt-3 block max-w-[400px]">
                    {row.title}
                  </td>
                  
                  {/* Tanggal Pinjam */}
                  <td className="py-4 font-['Poppins'] text-right pr-6">
                    {row.tglPinjam}
                  </td>
                  
                  {/* Batas Tempo */}
                  <td className="py-4 font-['Poppins'] text-right pr-6">
                    {row.batasTempo}
                  </td>
                  
                  {/* Status Transaksi */}
                  <td className={`py-4 font-['Poppins'] pl-6 ${STATUS_STYLES[row.statusKey]}`}>
                    {row.status}
                  </td>
                  
                  {/* Jumlah Denda */}
                  <td className="py-4 font-['Poppins'] font-bold">
                    {row.denda}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}