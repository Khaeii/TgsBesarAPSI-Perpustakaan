import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

// Sample pending-return rows — swap for live transaction data.
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
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] h-[746px] relative bg-White-Lilac overflow-hidden mx-auto">
        <Sidebar active="pengembalian" />

        <div className="w-96 h-14 left-[255px] top-[52px] absolute bg-Grape-Violet rounded-tr-[20px] rounded-br-[20px] flex items-center">
          <h1 className="w-full text-center justify-center text-White-Lilac text-3xl font-bold font-['Josefin_Sans']">
            Sirkulasi Pengembalian
          </h1>
        </div>

        <DecorBlob
          name="kuning1"
          className="w-40 h-64 left-[1400px] top-[378px] absolute origin-top-left rotate-180"
        />
        <DecorBlob
          name="kuning2"
          className="w-48 h-80 left-[255px] top-[518px] absolute origin-top-left rotate-180"
        />

        <div className="w-[1113px] h-72 left-[287px] top-[135px] absolute bg-purple-950 rounded-[20px] z-10 px-7 py-6">
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
            Verifikasi Pengembalian Buku
          </h2>

          <div className="grid grid-cols-[1fr_1.4fr_1.6fr_1.2fr_1fr_1fr] gap-x-4 mt-9 text-White-Lilac text-xl font-bold font-['Poppins']">
            <span>ID TRANS</span>
            <span>NAMA ANGGOTA</span>
            <span>JUDUL BUKU</span>
            <span className="text-center">KETERLAMBATAN</span>
            <span className="text-center">DENDA</span>
            <span className="text-center">AKSI</span>
          </div>
          <div className="w-full h-0 mt-2 outline outline-2 outline-offset-[-1px] outline-white" />

          {rows.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.4fr_1.6fr_1.2fr_1fr_1fr] gap-x-4 mt-4 items-center text-White-Lilac text-base font-['Poppins']"
            >
              <span>{row.idTrans}</span>
              <span>{row.nama}</span>
              <span>{row.judul}</span>
              <span
                className={`text-center font-bold ${
                  row.terlambat ? "text-red-500" : ""
                }`}
              >
                {row.keterlambatan}
              </span>
              <span className="text-center font-bold">{row.denda}</span>
              <div className="flex justify-center">
                <button className="w-28 h-6 bg-amber-200 rounded-[20px] text-center text-Grape-Violet text-base font-bold hover:opacity-90">
                  Verifikasi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
