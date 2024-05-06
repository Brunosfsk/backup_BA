/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(/bg-login.jpg)",
        signUp: "url(/bg-singup.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
}

// module.exports = {
//   important: true,
// }

