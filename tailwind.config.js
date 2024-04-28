/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        login: "url(./src/assets/bg-login.jpg)",
        signUp: "url(./src/assets/bg-singup.jpg)"
      }
    },
  },
  plugins: [require("daisyui")],
}


