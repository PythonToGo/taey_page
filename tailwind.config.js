/** @type {import('tailwindcss').Config} */
module.exports = {
  mode : 'jit',
  darkMode : 'class',
  content :
          [
            './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
            './components/**/*.{js,ts,jsx,tsx,mdx,html}',
            './app/**/*.{js,ts,jsx,tsx,mdx,html}',
          ],
  theme : {
    extend : {
      backgroundImage : {
        'gradient-radial' : 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic' : 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // fontFamily: {
      //   sans: ['Roboto', 'sans-serif']
      // }
    },
  },
  plugins : [],
  variants:[],
};
