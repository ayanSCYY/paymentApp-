/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'figma-bt': '#F4EC52',
        'figma-br':'#FF2E00',
        'figma-bl':'#8ACBC3',
        'figma-bb':'#2A61DC',
        'figma-hc':'#2A61DC',
        'figma-button':'#5998A1',
        'figma-t':'#8ACBC3',
      },
      margin:{
        '88':'22rem',
      },
      backgroundImage: {
       'firstpagepg': "url('/src/assets/firstpage.png')",
      }
    },
  },
  plugins: [],
}