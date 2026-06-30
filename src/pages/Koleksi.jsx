import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DecorBlob from "../components/DecorBlob";
import TopNavbar from "../components/TopNavbar";

const books = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: "Analisis Perancangan Sistem Informasi",
  author: "Prof. Dr. Ariana Grande",
  isbn: "978-602-8519-93-9",
  rak: "A1",
  stok: 15,
}));

export default function Koleksi() {
  const navigate = useNavigate();
  
  // State untuk kontrol Modal Pop-up
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Helper formatting Tanggal Indonesia lokalisasi
  const formatDate = (daysToAdd = 0) => {
    const date = new Date();
    date.setDate(date.getDate() + daysToAdd);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleConfirmPinjam = (book) => {
    // 1. Tempat simulasi integrasi/insert ke tabel peminjaman API Supabase kamu
    console.log(`Menyimpan peminjaman buku ID: ${book.id} ke riwayat.`);
    
    // 2. Tutup modal
    setIsModalOpen(false);
    
    // 3. Alihkan pengguna langsung ke halaman Riwayat Peminjaman
    navigate("/riwayat"); 
  };

  return (
    <div className="w-full min-h-screen bg-White-Lilac relative overflow-x-hidden pb-16 flex flex-col font-['Poppins']">
      
      {/* 1. TOP NAVBAR */}
      <div className="w-full z-30">
        <TopNavbar active="koleksi" userName="Sakha" />
      </div>

      {/* ================= BACKGROUND BLOBS ================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <DecorBlob name="ungu1" className="w-180 h-[500px] -right-90 bottom-[-50px] absolute opacity-40" />
        <DecorBlob name="kuning2" className="w-80 h-[400px] -left-20 top-[-60px] absolute opacity-40" />
        <DecorBlob name="ungu2" className="w-100 h-[380px] -right-20 top-[20px] absolute opacity-40" />
        <DecorBlob name="kuning2" className="w-80 h-[400px] right-[-30px] bottom-[-50px] absolute opacity-40" />
      </div>

      {/* CONTAINER KONTEN UTAMA */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 z-10 flex flex-col items-center">
        
        {/* 2. JUDUL HALAMAN */}
        <h1 className="mt-28 text-center text-purple-950 text-3xl md:text-3xl font-bold font-['Josefin_Sans']">
          Koleksi Buku Perpustakaan Kita
        </h1>

      {/* 3. UTILITIES BAR (Search, Kategori, Filter) */}
      <div className="mt-8 w-full flex flex-wrap justify-center items-center gap-4 text-2xl">
        {/* Search Input */}
        <div className="w-full sm:w-96 h-12 bg-Grape-Violet rounded-3xl flex items-center gap-3 px-4 shadow-md">
          <img 
            src="src/assets/search.png" 
            alt="Cari" 
            className="w-7 h-7 object-contain" 
          />
          <input
            type="text"
            placeholder="Cari Buku........"
            className="bg-transparent outline-none text-purple-50 placeholder:text-purple-50 text-lg w-full"
          />
        </div>
          
          {/* Kategori */}
          <div className="w-full sm:w-48 h-12 bg-Grape-Violet rounded-3xl text-purple-50 text-lg flex items-center justify-center cursor-pointer select-none shadow-md hover:bg-opacity-90 transition-all">
            Semua Kategori
          </div>

          {/* Filter */}
          <button className="w-full sm:w-32 h-12 bg-Grape-Violet rounded-3xl text-purple-50 text-lg flex items-center justify-between px-5 hover:bg-opacity-90 transition-all shadow-md">
            <span>Filter</span>
            <img 
              src="src/assets/filter.png" 
              alt="Filter" 
              className="w-7 h-7 object-contain" />
          </button>
      </div>

      {/* 4. RESPONSIVE BOOK GRID */}
      <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
        {books.map((book) => (
          <article
            key={book.id}
            className="w-full max-w-[400px] h-48 bg-purple-950 rounded-[20px] relative px-5 py-5 flex flex-col justify-between shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div>
              <div className="flex justify-between items-start w-full">
                <h3 className="text-White-Lilac text-sm font-normal opacity-80">
                  Sistem Informasi
                </h3>
                <span className="text-White-Lilac text-md font-normal">
                  Stok : {book.stok}
                </span>
              </div>

              <p className="text-White-Lilac text-lg font-bold mt-2 line-clamp-1">
                {book.title}
              </p>
              <p className="text-White-Lilac text-md font-normal mt-0.5 line-clamp-1 opacity-90">
                {book.author}
              </p>
              <p className="text-purple-300 text-md font-normal mt-0.5">
                ISBN {book.isbn}
              </p>
            </div>

            <div className="flex items-center justify-between w-full mt-auto">
              <span className="text-White-Lilac text-base font-normal">
                Rak : {book.rak}
              </span>
              
              <button
                type="button"
                onClick={() => handleOpenModal(book)}
                className="w-24 h-8 bg-amber-200 rounded-[20px] text-center text-Grape-Violet text-sm font-bold flex items-center justify-center hover:bg-amber-300 active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Pinjam
              </button>
            </div>
          </article>
        ))}
      </div>
      </div>

      {/* ================= POP UP / MODAL KONFIRMASI PEMINJAMAN ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-purple-50/45 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsModalOpen(false)}
          />

          {/* Kotak Konten Pop Up */}
          <div className="bg-purple-950 border border-white/10 w-full max-w-md rounded-[20px] shadow-2xl p-6 relative z-10 text-White-Lilac animate-in fade-in zoom-in-95 duration-150">
            
            {/* Header Modal */}
            <div className="flex items-center gap-3 border-b border-white/10 pb-3 mb-4">
              <span className="text-2xl">📖</span>
              <h3 className="text-purple-300 text-xl font-bold font-['Josefin_Sans']">
                Konfirmasi Peminjaman
              </h3>
            </div>

            {/* Konten Data Detail Pengembalian */}
            <div className="flex flex-col gap-4 text-sm">
              <p className="text-white/80">
                Apakah Anda yakin ingin meminjam buku ini? Periksa kembali jadwal tenggat waktu peminjaman:
              </p>
              
              {/* Review Judul Buku */}
              <div className="bg-purple-50/10 rounded-xl p-3.5 border border-purple-50/5">
                <span className="text-xs text-purple-300 block font-medium">Judul Buku</span>
                <span className="font-semibold text-base text-white block mt-0.5 tracking-wide">
                  {selectedBook?.title}
                </span>
                <p className="text-xs text-white/50 mt-1">Oleh: {selectedBook?.author}</p>
              </div>

              {/* Tampilan Box Periode Durasi Pinjam */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-50/10 rounded-xl p-3 border border-purple-50/5">
                  <span className="text-xs text-purple-300 block font-medium">Tanggal Ambil</span>
                  <span className="font-bold text-xs sm:text-sm text-white mt-1 block">
                    {formatDate(0)} {/* Hari Ini */}
                  </span>
                </div>
                <div className="bg-purple-50/10 rounded-xl p-3 border border-purple-50/5">
                  <span className="text-xs text-purple-300 block font-medium">Batas Kembali</span>
                  <span className="font-bold text-xs sm:text-sm text-white mt-1 block">
                    {formatDate(7)} {/* Batas +7 Hari */}
                  </span>
                </div>
              </div>

              <div className="text-xs text-white/60 flex items-start gap-2 leading-relaxed">
                <span className="text-amber-400">⚠️</span>
                <p>Durasi pengemasan dan pinjam maksimal 7 hari. Harap melakukan pengembalian tepat waktu untuk mencegah sanksi denda.</p>
              </div>
            </div>

            {/* Tombol Pilihan Aksi */}
            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="flex-1 h-10 border border-white/20 hover:bg-white/10 rounded-[20px] text-center text-white text-sm font-semibold transition-colors">
                Batal
              </button>
              <button
                type="button"
                onClick={() => handleConfirmPinjam(selectedBook)}
                className="flex-1 h-10 bg-Plum-Violet hover:bg-opacity-90 active:scale-[0.98] rounded-[20px] text-center text-white text-sm font-bold transition-all shadow-md"
              >
                Yes, Pinjam
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}