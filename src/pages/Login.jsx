import { Link } from "react-router-dom";
import DecorBlob from "../components/DecorBlob";

export default function Login() {
  return (
    <div className="figma-canvas-wrapper">
      <div className="w-[1440px] h-[746px] relative bg-Grape-Violet overflow-hidden mx-auto">
        <DecorBlob
          name="ungu1"
          className="w-[601px] h-[613px] left-[881px] top-[133px] absolute"
        />
        <DecorBlob
          name="ungu2"
          className="w-[601px] h-[613px] left-[601px] top-[613px] absolute origin-top-left rotate-180"
        />

        <div className="left-[31px] top-[613.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-purple-300/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>
        <div className="left-[912px] top-[405.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-amber-200/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>
        <div className="left-[549px] top-[836.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-amber-200/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>
        <div className="left-[-97px] top-[133.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-purple-300/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>
        <div className="left-[1006px] top-[824.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-purple-300/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>
        <div className="left-[1179px] top-[79.20px] absolute origin-top-left rotate-[-28.27deg] justify-start text-purple-300/30 text-4xl font-bold font-['Josefin_Sans']">
          Perpustakan Kita
        </div>

        <form className="w-[485px] h-[544px] left-[478px] top-[101px] absolute bg-purple-50/90 rounded-[20px]">
          <Link
            to="/"
            aria-label="Tutup"
            className="left-[448px] top-[13px] absolute text-center justify-start text-purple-950 text-xl font-bold font-['Poppins']"
          >
            X
          </Link>

          <div className="w-80 left-[85px] top-[32px] absolute text-center justify-start text-Grape-Violet text-3xl font-bold font-['Poppins']">
            Selamat datang
          </div>
          <div className="w-96 left-[47px] top-[75px] absolute text-center justify-start text-purple-950 text-base font-normal font-['Poppins']">
            Masuk untuk mengakses akun perpustakaanmu!!
          </div>

          {/* Nama */}
          <label className="w-96 left-[38px] top-[119px] absolute justify-start text-Grape-Violet text-xl font-normal font-['Poppins']">
            Nama
          </label>
          <input
            type="text"
            placeholder="Tulis Namamu..."
            className="w-96 h-12 left-[38px] top-[149px] absolute rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base font-['Poppins'] text-purple-950 placeholder:text-purple-950/50 outline-none"
          />

          {/* Email */}
          <label className="w-96 left-[38px] top-[212px] absolute justify-start text-Grape-Violet text-xl font-normal font-['Poppins']">
            Email
          </label>
          <input
            type="email"
            placeholder="Tulis Emailmu..."
            className="w-96 h-12 left-[38px] top-[242px] absolute rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base font-['Poppins'] text-purple-950 placeholder:text-purple-950/50 outline-none"
          />

          {/* Password */}
          <label className="w-96 left-[38px] top-[289px] absolute justify-start text-Grape-Violet text-xl font-normal font-['Poppins']">
            Password
          </label>
          <input
            type="password"
            placeholder="Tulis Passwordmu..."
            className="w-96 h-12 left-[38px] top-[338px] absolute rounded-[20px] border-2 border-Grape-Violet bg-transparent px-4 text-base font-['Poppins'] text-purple-950 placeholder:text-purple-950/50 outline-none"
          />

          <button
            type="submit"
            className="w-96 h-12 left-[38px] top-[419px] absolute bg-Yellow-Jasmine rounded-[20px] text-center justify-start text-Grape-Violet text-base font-bold font-['Poppins'] hover:opacity-90"
          >
            Sign Up
          </button>

          <div className="w-96 left-[57px] top-[482px] absolute text-center justify-start">
            <span className="text-purple-950 text-base font-normal font-['Poppins']">
              Sudah Punya Akun?
            </span>{" "}
            <Link
              to="/koleksi"
              className="text-Grape-Violet text-base font-bold font-['Poppins'] underline"
            >
              Log In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
