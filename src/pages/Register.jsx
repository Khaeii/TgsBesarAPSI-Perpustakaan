import { Link } from "react-router-dom";
import DecorBlob from "../components/DecorBlob";

export default function Register() {
  return (
    <div 
      className="w-full min-h-screen bg-Grape-Violet flex justify-center items-center overflow-x-hidden relative px-4 py-8 font-['Poppins'] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/Frame5.png')" }}>

      {/* ================= WATERMARKS BACKDROP ================= */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-10 select-none">
        <div className="left-[5%] top-[15%] absolute rotate-[-28.27deg] text-purple-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[5%] top-[50%] absolute rotate-[-28.27deg] text-yellow-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[5%] top-[85%] absolute rotate-[-28.27deg] text-purple-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[40%] top-[15%] absolute rotate-[-28.27deg] text-yellow-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[40%] top-[50%] absolute rotate-[-28.27deg] text-purple-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[40%] top-[85%] absolute rotate-[-28.27deg] text-yellow-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[80%] top-[15%] absolute rotate-[-28.27deg] text-purple-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[80%] top-[50%] absolute rotate-[-28.27deg] text-yellow-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
        <div className="left-[80%] top-[85%] absolute rotate-[-28.27deg] text-purple-300/20 text-4xl font-bold font-['Josefin_Sans']">Perpustakan Kita</div>
      </div>
      {/* ================= FORM CARD CONTAINER ================= */}
      <div className="w-full max-w-[485px] bg-purple-50/90 rounded-[20px] shadow-2xl p-8 md:p-10 relative z-20 transition-all backdrop-blur-sm">
        
        {/* Tombol Tutup X */}
        <Link
          to="/login"
          aria-label="Tutup"
          className="absolute right-6 top-6 text-purple-950 text-xl font-bold hover:text-red-500 transition-colors"
        >
          X
        </Link>

        {/* Header Form */}
        <div className="text-center mb-6">
          <h1 className="text-Grape-Violet text-3xl font-bold mb-1">
            Buat Akun
          </h1>
          <p className="text-purple-950 text-sm md:text-base font-normal leading-relaxed">
            Buat akun Perpus Kita!
          </p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-4">
          
          {/* Input Nama */}
          <div className="flex flex-col gap-1">
            <label className="text-Grape-Violet text-lg md:text-xl font-normal">
              Nama
            </label>
            <input
              type="text"
              placeholder="Tulis Namamu..."
              className="w-full h-12 rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base text-purple-950 placeholder:text-purple-950/50 outline-none focus:bg-white/50 transition-all"
            />
          </div>

          {/* Input Alamat */}
          <div className="flex flex-col gap-1">
            <label className="text-Grape-Violet text-lg md:text-xl font-normal">
              Alamat
            </label>
            <input
              type="text"
              placeholder="Tulis Alamatmu..."
              className="w-full h-12 rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base text-purple-950 placeholder:text-purple-950/50 outline-none focus:bg-white/50 transition-all"
            />
          </div>

          {/* Input Email */}
          <div className="flex flex-col gap-1">
            <label className="text-Grape-Violet text-lg md:text-xl font-normal">
              Email
            </label>
            <input
              type="email"
              placeholder="Tulis Emailmu..."
              className="w-full h-12 rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base text-purple-950 placeholder:text-purple-950/50 outline-none focus:bg-white/50 transition-all"
            />
          </div>

          {/* Input Password */}
          <div className="flex flex-col gap-1">
            <label className="text-Grape-Violet text-lg md:text-xl font-normal">
              Password
            </label>
            <input
              type="password"
              placeholder="Tulis Passwordmu..."
              className="w-full h-12 rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base text-purple-950 placeholder:text-purple-950/50 outline-none focus:bg-white/50 transition-all"
            />
          </div>

          {/* Tombol Sign Up */}
          <button
            type="submit"
            className="w-full h-12 mt-4 bg-Yellow-Jasmine hover:bg-opacity-90 active:scale-[0.99] rounded-[20px] text-Grape-Violet text-base font-bold transition-all shadow-md"
          >
            Sign Up
          </button>

          {/* Footer Tautan */}
          <div className="text-center mt-5 text-purple-950 text-sm md:text-base font-normal">
            Sudah Punya Akun?{" "}
            <Link
              to="/login"
              className="text-Grape-Violet font-bold underline ml-1 hover:text-opacity-80"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}