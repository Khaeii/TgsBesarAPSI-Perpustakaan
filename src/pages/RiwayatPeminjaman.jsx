import DecorBlob from "../components/DecorBlob";
import TopNavbar from "../components/TopNavbar";

const STATUS_STYLES = {
  Terlambat: "text-red-500 font-bold",
  Dipinjam: "text-Yellow-Jasmine font-bold",
  Dikembalikan: "text-White-Lilac font-bold",
};

const rows = [
  {
    id: "TRX-2026-0089",
    title: "Analisis dan Perancangan Sistem Informasi",
    tglPinjam: "10/6/2026",
    batasTempo: "17/06/2026",
    status: "Terlambat",
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
    <div className="w-full min-h-screen bg-White-Lilac relative overflow-x-hidden pb-16 flex flex-col font-['Poppins']">
      
      {/* 1. TOP NAVBAR (Otomatis full stretch ke ujung monitor) */}
      <div className="w-full z-30">
        <TopNavbar active="riwayat" userName="Sakha" />
      </div>

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <DecorBlob name="ungu1" className="w-180 h-[500px] -right-90 bottom-[-50px] absolute opacity-40" />
        <DecorBlob name="kuning2" className="w-80 h-[400px] -left-20 top-[-60px] absolute opacity-40" />
        <DecorBlob name="ungu2" className="w-100 h-[380px] -right-20 top-[20px] absolute opacity-40" />
        <DecorBlob name="kuning2" className="w-80 h-[400px] right-[-30px] bottom-[-50px] absolute opacity-40" />
      </div>

      {/* CONTAINER UTAMA */}
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-12 mt-12 z-10">
        
      {/* TABLE CARD BASE */}
      <div className="w-full max-w-[1440px] mt-20 mx-auto bg-purple-950 rounded-[20px] shadow-xl p-6 md:p-12 text-White-Lilac overflow-x-auto">
        
        <h2 className="text-Yellow-Jasmine text-3xl font-bold font-['Josefin_Sans'] mb-8 text-center md:text-left">
          Riwayat Peminjaman
        </h2>

        {/* Struktur Tabel Utama Responsif */}
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="text-xl font-bold border-b border-white/20 text-center">
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[15%] text-left pl-4">ID PINJAM</th>
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[35%] text-left">JUDUL BUKU</th>
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[13%]">TGL PINJAM</th>
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[13%]">BATAS TEMPO</th>
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[14%]">STATUS</th>
              <th className="pb-4 font-['Poppins'] text-base md:text-lg w-[10%] pr-4 text-right">DENDA</th>
            </tr>
          </thead>
          
          <tbody className="divide-y divide-white/10">
            {rows.map((row, i) => (
              <tr key={i} className="text-base font-normal hover:bg-white/5 transition-colors align-middle text-center">
                <td className="py-5 font-['Poppins'] font-light tracking-wide text-left pl-4">
                  {row.id}
                </td>
                
                <td className="py-5 font-['Poppins'] text-left max-w-[350px] truncate">
                  {row.title}
                </td>
              
                <td className="py-5 font-['Poppins']">
                  {row.tglPinjam}
                </td>
                
                <td className="py-5 font-['Poppins']">
                  {row.batasTempo}
                </td>
                
                <td className={`py-5 font-['Poppins'] font-medium ${STATUS_STYLES[row.statusKey]}`}>
                  {row.status}
                </td>
                
                <td className="py-5 font-['Poppins'] font-bold pr-4 text-right">
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