import { Link } from "react-router-dom";
import DecorBlob from "./DecorBlob";

/**
 * Sidebar
 * Shared left navigation for the librarian (admin) pages: Inventaris,
 * Pengembalian, Laporan. Uses flex layout so it correctly stretches to
 * each page's own height instead of relying on hardcoded pixel offsets,
 * while keeping the same visual structure as the Figma design.
 */
export default function Sidebar({ active }) {
  const itemBase =
    "text-White-Lilac text-xl font-['Poppins'] px-[18px] transition-opacity hover:opacity-80";

  const navItem = (key, to, label, underline) => (
    <Link
      to={to}
      className={`${itemBase} ${
        active === key
          ? `${underline ? "underline" : ""} font-bold`
          : "font-normal"
      } block py-2`}
    >
      {label}
    </Link>
  );

  return (
    <aside className="absolute left-0 top-0 h-full w-64 bg-Grape-Violet flex flex-col overflow-hidden z-10">
      {/* Decorative blob, bottom-left, faint */}
      <DecorBlob
        name="ungu2"
        className="w-72 h-80 left-[22px] bottom-[-40px] absolute rotate-[146deg]"
      />

      {/* Logo */}
      <div className="px-[18px] pt-7 pb-4 text-purple-300 text-3xl font-bold font-['Josefin_Sans'] relative z-10">
        📚 Perpustakan
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 mt-2 relative z-10">
        {navItem("inventaris", "/inventaris", "Inventaris Buku", true)}
        {navItem("pengembalian", "/pengembalian", "Pengembalian", true)}
        {navItem("laporan", "/laporan", "Laporan", true)}
      </nav>

      {/* Spacer pushes account block + logout to the bottom */}
      <div className="flex-1" />

      {/* Pustakawan account card */}
      <div className="relative z-10 px-[18px] pb-5 flex items-center gap-3">
        <div className="w-9 h-9 bg-purple-300 rounded-[10px] border-2 border-purple-50/30 flex items-center justify-center text-Grape-Violet text-xl font-bold font-['Josefin_Sans']">
          AD
        </div>
        <div>
          <div className="text-Plum-Violet text-2xl font-bold font-['Josefin_Sans'] leading-tight">
            Pustakawan
          </div>
          <div className="text-purple-50 text-base font-['Poppins']">
            ADMIN ID : AD-1003
          </div>
        </div>
      </div>

      {/* Log out bar */}
      <Link
        to="/login"
        className="relative z-10 w-full h-14 bg-Grape-Violet rounded-tl-2xl rounded-tr-2xl shadow-[0px_-4px_20px_0px_rgba(250,245,251,1.00)] flex items-center justify-center gap-3 text-purple-50 text-base font-bold font-['Poppins'] hover:opacity-90"
      >
        <span aria-hidden="true">🚪</span>
        Log Out
      </Link>
    </aside>
  );
}
