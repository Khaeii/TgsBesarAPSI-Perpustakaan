import { useState } from "react";
import DecorBlob from "../components/DecorBlob";
import Sidebar from "../components/Sidebar";

// Sample inventory rows — swap for live data from your backend/API.
const initialBooks = Array.from({ length: 4 }, () => ({
  isbn: "978-602-8519-93-9",
  judul: "Analisis Perancangan Sistem Informasi",
  kategori: "Sistem Informasi",
  stok: 15,
}));

export default function Inventaris() {
  const [books] = useState(initialBooks);

  return (
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] min-h-[934px] relative bg-White-Lilac overflow-hidden mx-auto">
        <Sidebar active="inventaris" />

        <div className="w-96 h-14 left-[255px] top-[52px] absolute bg-Grape-Violet rounded-tr-[20px] rounded-br-[20px] flex items-center">
          <h1 className="w-full text-center justify-center text-White-Lilac text-3xl font-bold font-['Josefin_Sans']">
            Kelola Inventaris Buku
          </h1>
        </div>

        <DecorBlob
          name="kuning1"
          className="w-48 h-80 left-[1400px] top-[478px] absolute origin-top-left rotate-180"
        />
        <DecorBlob
          name="kuning2"
          className="w-48 h-80 left-[255px] top-[518px] absolute origin-top-left rotate-180"
        />
        <DecorBlob
          name="ungu1"
          className="w-64 h-64 left-[552px] top-[541px] absolute origin-top-left rotate-180"
        />
        <DecorBlob
          name="ungu2"
          className="w-60 h-48 left-[990px] top-[579px] absolute"
        />

        {/* Tambah Koleksi Buku form */}
        <form className="w-[1113px] h-96 left-[287px] top-[135px] absolute bg-purple-950 rounded-[20px] z-10 px-7 py-6">
          <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
            Tambah Koleksi Buku
          </h2>

          <div className="grid grid-cols-3 gap-x-8 gap-y-7 mt-10">
            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Judul Buku
              </label>
              <input
                type="text"
                placeholder="Contoh : Analisis Perancangan Sistem Informasi"
                className="w-full h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-White-Lilac placeholder:text-purple-950/50 outline-none"
              />
            </div>

            <div className="col-span-2">
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Nomor ISBN
              </label>
              <input
                type="text"
                placeholder="Contoh : 978-602-8519-93-9"
                className="w-96 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-White-Lilac placeholder:text-purple-950/50 outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Pengarang
              </label>
              <input
                type="text"
                placeholder="Contoh : Olivia Dean"
                className="w-full h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950/50 outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Penerbit
              </label>
              <input
                type="text"
                placeholder="Contoh : Olivia Dean"
                className="w-56 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950/50 outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Tahun Terbit
              </label>
              <input
                type="number"
                defaultValue={2024}
                className="w-52 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950 outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Kategori
              </label>
              <input
                type="text"
                defaultValue="Sistem Informasi"
                className="w-full h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-Grape-Violet outline-none"
              />
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Stok
              </label>
              <div className="w-56 h-8 bg-Yellow-Jasmine rounded-[20px] flex items-center justify-between px-4">
                <button
                  type="button"
                  aria-label="Kurangi stok"
                  className="text-purple-950 text-base font-bold font-['Poppins']"
                >
                  -
                </button>
                <span className="text-purple-950 text-base font-['Poppins']">
                  15
                </span>
                <button
                  type="button"
                  aria-label="Tambah stok"
                  className="text-purple-950 text-base font-bold font-['Poppins']"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-White-Lilac text-xl font-['Poppins'] mb-1">
                Nomor Rak
              </label>
              <input
                type="text"
                placeholder="Contoh : A-4"
                className="w-52 h-8 bg-Yellow-Jasmine rounded-[20px] px-4 text-base font-['Poppins'] text-purple-950/50 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[1068px] h-8 mt-8 bg-Plum-Violet rounded-[20px] text-center text-Grape-Violet text-xl font-bold font-['Poppins'] hover:opacity-90"
          >
            Simpan
          </button>
        </form>

        {/* Master Data Buku table */}
        <div className="w-[1113px] h-72 left-[287px] top-[579px] absolute bg-purple-950 rounded-[20px] z-10 px-7 py-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-Yellow-Jasmine text-2xl font-bold font-['Josefin_Sans']">
              Master Data Buku
            </h2>
            <span className="text-purple-50/50 text-base font-['Poppins']">
              Total: 2526 Judul
            </span>
          </div>

          <div className="grid grid-cols-[1fr_2fr_1fr_0.6fr_0.8fr] gap-x-4 mt-8 text-White-Lilac text-xl font-bold font-['Poppins']">
            <span>ISBN</span>
            <span>JUDUL BUKU</span>
            <span>KATEGORI</span>
            <span className="text-center">STOK</span>
            <span className="text-center">AKSI</span>
          </div>
          <div className="w-full h-0 mt-2 outline outline-2 outline-offset-[-1px] outline-white" />

          {books.map((book, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_2fr_1fr_0.6fr_0.8fr] gap-x-4 mt-4 items-center text-White-Lilac text-base font-['Poppins']"
            >
              <span>{book.isbn}</span>
              <span>{book.judul}</span>
              <span>{book.kategori}</span>
              <span className="text-center">{book.stok}</span>
              <div className="flex items-center justify-center gap-2">
                <button className="w-16 h-6 bg-purple-300 rounded-[20px] text-center text-base font-bold">
                  Edit
                </button>
                <button className="w-16 h-6 bg-amber-200 rounded-[20px] text-center text-Grape-Violet text-base font-bold">
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
