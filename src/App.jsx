import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Koleksi from "./pages/Koleksi.jsx";
import RiwayatPeminjaman from "./pages/RiwayatPeminjaman.jsx";
import Inventaris from "./pages/Inventaris.jsx";
import Pengembalian from "./pages/Pengembalian.jsx";
import Laporan from "./pages/Laporan.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        {/* Mengarahkan root '/' otomatis ke halaman login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Member-facing */}
        <Route path="/koleksi" element={<Koleksi />} />
        <Route path="/riwayat-peminjaman" element={<RiwayatPeminjaman />} />

        {/* Librarian / admin-facing */}
        <Route path="/inventaris" element={<Inventaris />} />
        <Route path="/pengembalian" element={<Pengembalian />} />
        <Route path="/laporan" element={<Laporan />} />
      </Routes>
    </BrowserRouter>
  );
}