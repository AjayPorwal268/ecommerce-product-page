/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'khubh-sans': ['Kumbh Sans', 'sans-serif']
      },
      colors: {
        neutral: {
          veryDarkBlue: 'hsl(220, 13%, 13%)',
          darkGrayishBlue: 'hsl(219, 9%, 45%)',
          grayishBlue: 'hsl(220, 14%, 75%)',
          lightGrayishBlue: 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black: 'hsl(0, 0%, 0%)'
        },
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          pale_Orange: 'hsl(25, 100%, 94%)',
        }
      }
    },
  },
  plugins: [],
}

