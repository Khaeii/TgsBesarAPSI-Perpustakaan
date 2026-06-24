/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Custom brand palette for "Perpustakaan Kita"
        "Grape-Violet": "#5B2A86",
        "White-Lilac": "#F6F2FB",
        "Yellow-Jasmine": "#F5C84C",
        "Plum-Violet": "#8E5DB8",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Josefin_Sans": ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
