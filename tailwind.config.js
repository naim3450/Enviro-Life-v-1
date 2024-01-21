/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // color
      colors: {
        liColor: '#262626',
      },
      // color

      // Box Shadow
      boxShadow: {
        CardHover: '5px 10px 15px rgba(0, 0, 0, 0.375)',
      },
      // Box Shadow

      // Font Family
      fontFamily: {
        dm: ['DM Sans']
      },
      // Font Family
    },
  },
  plugins: [],
}

