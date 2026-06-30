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
    // 'absolute' diganti dadi 'fixed' lan ditambahi 'top-0 left-0 right-0' biar nempel pol pas di-scroll
    <div className="w-full h-16 fixed left-0 top-0 right-0 bg-Grape-Violet flex items-center justify-between px-5 z-50">
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
        <span className="text-White-Lilac text-xl font-bold font-['Josefin_Sans']">
          {userName}
        </span>

        <Link 
          to="/login" 
          className="hover:opacity-80 transition-opacity flex items-center justify-center"
          title="Logout"
        >
          <img 
            src="src/assets/pintu.png" 
            alt="Logout" 
            className="w-7 h-7 object-contain" 
          />
        </Link>
      </div>
    </div>
  );
}