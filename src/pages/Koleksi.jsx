import { Link } from "react-router-dom";
import DecorBlob from "../components/DecorBlob";
import TopNavbar from "../components/TopNavbar";

// 12 sample books — replace with real data from your backend/API.
const books = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Analisis Perancangan Sistem Informasi",
  author: "Prof. Dr. Ariana Grande",
  isbn: "978-602-8519-93-9",
  rak: "A1",
  stok: 15,
}));

export default function Koleksi() {
  return (
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] min-h-[881px] relative bg-White-Lilac overflow-hidden mx-auto pb-10">
        <TopNavbar active="koleksi" userName="Sakha" />

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
          className="w-80 h-80 left-[1096px] top-[530px] absolute"
        />
        <DecorBlob
          name="ungu2"
          className="w-80 h-64 left-[79px] top-[57px] absolute"
        />

        <h1 className="left-[490px] top-[128px] absolute text-center justify-start text-purple-950 text-3xl font-bold font-['Josefin_Sans']">
          Koleksi Buku Perpustakaan Kita
        </h1>

        {/* Search + filter bar */}
        <div className="left-[28px] top-[188px] absolute flex items-center gap-3 z-10">
          <div className="w-96 h-8 bg-Grape-Violet rounded-3xl flex items-center gap-2 px-4">
            <span aria-hidden="true" className="text-purple-50/50">
              🔍
            </span>
            <input
              type="text"
              placeholder="Cari Buku........"
              className="bg-transparent outline-none text-purple-50/80 placeholder:text-purple-50/50 text-xl font-['Poppins'] w-full"
            />
          </div>
          <select className="w-48 h-8 bg-Grape-Violet rounded-3xl text-purple-50/70 text-base font-['Poppins'] px-4 outline-none">
            <option>Semua Kategori</option>
          </select>
          <button className="w-28 h-8 bg-Grape-Violet rounded-3xl text-purple-50/70 text-base font-['Poppins'] flex items-center justify-center gap-2">
            Filter <span aria-hidden="true">⚙️</span>
          </button>
        </div>

        {/* Book grid */}
        <div className="left-[28px] top-[269px] absolute w-[1364px] grid grid-cols-4 gap-x-[29px] gap-y-[21px]">
          {books.map((book) => (
            <article
              key={book.id}
              className="w-80 h-44 bg-purple-950 rounded-[20px] relative px-3 py-4"
            >
              <h3 className="text-White-Lilac text-base font-normal font-['Poppins']">
                Sistem Informasi
              </h3>
              <p className="text-White-Lilac text-base font-bold font-['Poppins'] mt-[18px] pr-16">
                {book.title}
              </p>
              <p className="text-Plum-Violet text-base font-normal font-['Poppins'] mt-[2px]">
                ISBN {book.isbn}
              </p>
              <p className="text-White-Lilac text-base font-normal font-['Poppins'] mt-[24px]">
                {book.author}
              </p>
              <span className="absolute right-3 top-4 text-Plum-Violet text-base font-normal font-['Poppins']">
                Stok : {book.stok}
              </span>
              <div className="absolute left-3 bottom-4 flex items-center justify-between w-[calc(100%-1.5rem)]">
                <span className="text-White-Lilac text-base font-normal font-['Poppins']">
                  Rak : {book.rak}
                </span>
                <Link
                  to={`/koleksi/${book.id}`}
                  className="w-20 h-6 bg-amber-200 rounded-[20px] text-center text-Grape-Violet text-base font-bold font-['Poppins'] flex items-center justify-center hover:opacity-90"
                >
                  Pinjam
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
