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
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'primary': '#ed1b24',
        'secondary': '#5b595a',
        'bg': '#ff49db',
        'mutad': '#b3b3b3',
        'w': '#fff',
        'bg_2': '#ffc82c',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

