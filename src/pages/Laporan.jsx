import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

const stats = [
  { label: "Total Peminjaman", value: "342" },
  { label: "Sedang Dipinjam", value: "89" },
  { label: "Anggota  Terdaftar", value: "1043" },
  { label: "Total Kas Denda", value: "Rp 236k" },
];

// Sample transaction rows for the print preview — swap for live data.
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
  Dipinjam: "text-yellow-400",
  Selesai: "text-black",
};

export default function Laporan() {
  return (
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] min-h-[1777px] relative bg-White-Lilac overflow-hidden mx-auto">
        <Sidebar active="laporan" />

        <div className="w-[520px] h-14 left-[255px] top-[52px] absolute bg-Grape-Violet rounded-tr-[20px] rounded-br-[20px] flex items-center">
          <h1 className="w-full text-center justify-center text-White-Lilac text-3xl font-bold font-['Josefin_Sans']">
            Generator Laporan Perpustakaan
          </h1>
        </div>

        <DecorBlob
          name="kuning1"
          className="w-56 h-96 left-[1183px] top-[316px] absolute"
        />
        <DecorBlob
          name="kuning2"
          className="w-48 h-80 left-[255px] top-[518px] absolute origin-top-left rotate-180"
        />

        {/* Stat cards */}
        <h2 className="left-[313px] top-[163px] absolute justify-center text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans'] z-10">
          Data Analitik
        </h2>
        <div className="left-[313px] top-[202px] absolute z-10 grid grid-cols-4 gap-[20px]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="w-60 h-28 bg-purple-300 rounded-[20px] flex flex-col items-center justify-center gap-2"
            >
              <span className="text-center text-Grape-Violet text-xl font-bold font-['Poppins']">
                {s.label}
              </span>
              <span className="text-center text-Grape-Violet text-3xl font-bold font-['Poppins']">
                {s.value}
              </span>
            </div>
          ))}
        </div>

        {/* Control generator */}
        <div className="w-[1113px] h-80 left-[287px] top-[387px] absolute bg-purple-950 rounded-[20px] z-10 px-7 py-6">
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
            Control Generator
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 mt-8">
            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Jenis Rekapitulasi
              </label>
              <select className="w-full h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950 outline-none">
                <option>Semua Transaksi Rekapitulasi</option>
              </select>
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Filter Kategori Buku
              </label>
              <select className="w-full h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950/50 outline-none">
                <option>Semua Koleksi Kategori</option>
              </select>
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Periode Mulai
              </label>
              <input
                type="date"
                defaultValue="2026-06-01"
                className="w-60 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950 outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Periode Akhir
              </label>
              <input
                type="date"
                defaultValue="2026-06-30"
                className="w-60 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950 outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-[1068px] h-8 mt-8 bg-Plum-Violet rounded-[20px] text-center text-Grape-Violet text-xl font-bold font-['Poppins'] hover:opacity-90"
          >
            Cetak File
          </button>
        </div>

        {/* Preview document */}
        <div className="w-[1113px] min-h-[989px] left-[287px] top-[741px] absolute bg-purple-300 rounded-[20px] z-10 p-7">
          <h2 className="text-Grape-Violet text-2xl font-bold font-['Josefin_Sans']">
            Preview Document
          </h2>

          <div className="w-full min-h-[872px] mt-6 bg-white text-black p-6 relative">
            <div className="flex items-start justify-between border-b-2 border-black pb-4">
              <div>
                <h3 className="text-xl font-bold font-['Poppins']">
                  Perpustakaan Kita
                </h3>
                <p className="text-base font-['Poppins'] mt-3">
                  Jl. Wisma Permai, Mulyosari, Surabaya. Telp (+62)811-3589-675
                </p>
              </div>
              <p className="text-base font-['Poppins']">
                DOC-REF : RPT-2026-II
              </p>
            </div>

            <div className="text-center mt-6">
              <h4 className="text-2xl font-bold font-['Poppins']">
                LAPORAN REKAPITULASI PERPUSTAKAAN
              </h4>
              <p className="text-base font-['Poppins'] mt-2">
                PERIODE 01/06/2026 - 30/06/2026
              </p>
            </div>

            <div className="grid grid-cols-[1fr_1.4fr_1.6fr_1.3fr_1fr_1fr] gap-x-4 mt-10 bg-zinc-300 py-2 px-2 text-base font-bold font-['Poppins']">
              <span>ID TRX</span>
              <span>NAMA ANGGOTA</span>
              <span>JUDUL BUKU</span>
              <span className="text-center">KATEGORI</span>
              <span className="text-center">STATUS</span>
              <span className="text-center">DENDA</span>
            </div>

            {transactions.map((t, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_1.4fr_1.6fr_1.3fr_1fr_1fr] gap-x-4 py-2 px-2 border-b border-black/20 text-base font-['Poppins']"
              >
                <span>{t.id}</span>
                <span>{t.nama}</span>
                <span>{t.judul}</span>
                <span className="text-center">{t.kategori}</span>
                <span
                  className={`text-center font-bold ${
                    STATUS_COLOR[t.status] || ""
                  }`}
                >
                  {t.status}
                </span>
                <span className="text-center font-bold text-red-500">
                  {t.denda || ""}
                </span>
              </div>
            ))}

            <div className="flex items-start justify-between mt-8 pt-4 border-t-2 border-black">
              <p className="text-base font-['Poppins']">
                Total Buku Tersirkulasi :{" "}
                <span className="font-bold">3 Buku (2 Kategori)</span>
              </p>
              <div className="text-right">
                <p className="text-base font-['Poppins']">
                  Total Pendapatan Denda
                </p>
                <p className="text-xl font-bold font-['Poppins']">
                  Rp 30.000,00
                </p>
              </div>
            </div>

            <div className="text-right mt-16">
              <p className="text-base font-['Poppins']">
                Surabaya, 31 Juni 2026
              </p>
              <p className="text-base font-bold font-['Poppins'] mt-16">
                Perpustakaan Kita
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
