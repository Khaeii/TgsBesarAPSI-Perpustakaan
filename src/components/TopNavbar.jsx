import { Link } from "react-router-dom";

/**
 * TopNavbar
 * Shared top bar for the member-facing pages (Koleksi, Riwayat Peminjaman).
 * `active` controls which nav item is shown underlined/bold, matching the
 * original Figma states.
 */
export default function TopNavbar({ active, userName = "Sakha" }) {
  const linkBase =
    "text-White-Lilac text-xl font-['Poppins'] transition-opacity hover:opacity-80";

  return (
    <div className="w-full h-16 absolute left-0 top-0 bg-Grape-Violet flex items-center justify-between px-5 z-10">
      <div className="text-purple-300 text-3xl font-bold font-['Josefin_Sans']">
        📚 Perpustakan
      </div>

      <nav className="flex items-center gap-10">
        <Link
          to="/koleksi"
          className={`${linkBase} ${
            active === "koleksi" ? "font-bold underline" : "font-normal"
          }`}
        >
          Koleksi
        </Link>
        <Link
          to="/riwayat-peminjaman"
          className={`${linkBase} ${
            active === "riwayat" ? "font-bold underline" : "font-normal"
          }`}
        >
          Riwayat Peminjaman
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Notifikasi"
          className="w-8 h-8 rounded-full bg-purple-300/30 flex items-center justify-center"
        >
          🔔
        </button>
        <span className="text-White-Lilac text-xl font-bold font-['Josefin_Sans']">
          {userName}
        </span>
      </div>
    </div>
  );
}
