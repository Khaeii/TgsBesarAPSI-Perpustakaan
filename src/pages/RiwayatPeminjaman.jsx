import DecorBlob from "../components/DecorBlob";
import TopNavbar from "../components/TopNavbar";

const STATUS_STYLES = {
  Terlambat: "text-red-500 font-bold",
  Dipinjam: "text-Yellow-Jasmine font-bold",
  Dikembalikan: "text-White-Lilac font-bold",
};

// Sample borrow history rows — swap for live transaction data.
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
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] h-[746px] relative bg-White-Lilac overflow-hidden mx-auto">
        <TopNavbar active="riwayat" userName="Sakha" />

        <DecorBlob
          name="ungu1"
          className="w-96 h-[480px] left-[-86px] top-[266px] absolute"
        />
        <DecorBlob
          name="kuning1"
          className="w-48 h-80 left-[1249px] top-[62px] absolute"
        />
        <DecorBlob
          name="kuning2"
          className="w-80 h-80 left-[1096px] top-[426px] absolute"
        />
        <DecorBlob
          name="ungu2"
          className="w-80 h-64 left-[79px] top-[57px] absolute"
        />
        <DecorBlob
          name="ungu1"
          className="w-[474px] h-96 left-[437px] top-[367px] absolute"
        />

        <div className="w-[1334px] h-72 left-[51px] top-[112px] absolute bg-purple-950 rounded-[20px] z-10">
          <h2 className="w-72 left-[31.16px] top-[28px] absolute text-center justify-center text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
            Riwayat Peminjaman
          </h2>

          {/* Table header */}
          <div className="left-[38px] top-[79px] absolute justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            ID PINJAM
          </div>
          <div className="left-[214px] top-[79px] absolute justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            JUDUL BUKU
          </div>
          <div className="left-[605px] top-[79px] absolute text-right justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            TGL PINJAM
          </div>
          <div className="left-[757px] top-[79px] absolute text-right justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            BATAS TEMPO
          </div>
          <div className="left-[971px] top-[79px] absolute justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            STATUS
          </div>
          <div className="left-[1159px] top-[79px] absolute justify-start text-White-Lilac text-xl font-bold font-['Poppins']">
            DENDA
          </div>
          <div className="w-[1263px] h-0 left-[31px] top-[118.50px] absolute outline outline-2 outline-offset-[-1px] outline-white" />

          {rows.map((row, i) => (
            <div key={i} className="contents">
              <div
                className="left-[38px] absolute justify-start text-White-Lilac text-base font-normal font-['Poppins']"
                style={{ top: 127 + i * 32 }}
              >
                {row.id}
              </div>
              <div
                className="left-[214px] absolute justify-start text-White-Lilac text-base font-normal font-['Poppins']"
                style={{ top: 127 + i * 32 }}
              >
                {row.title}
              </div>
              <div
                className="w-28 left-[605px] absolute text-right justify-start text-White-Lilac text-base font-normal font-['Poppins']"
                style={{ top: 127 + i * 32 }}
              >
                {row.tglPinjam}
              </div>
              <div
                className="w-36 left-[757px] absolute text-right justify-start text-White-Lilac text-base font-normal font-['Poppins']"
                style={{ top: 127 + i * 32 }}
              >
                {row.batasTempo}
              </div>
              <div
                className={`w-40 left-[971px] absolute justify-start text-base font-['Poppins'] ${
                  STATUS_STYLES[row.statusKey]
                }`}
                style={{ top: 127 + i * 32 }}
              >
                {row.status}
              </div>
              <div
                className="w-28 left-[1159px] absolute justify-start text-White-Lilac text-base font-bold font-['Poppins']"
                style={{ top: 127 + i * 32 }}
              >
                {row.denda}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
