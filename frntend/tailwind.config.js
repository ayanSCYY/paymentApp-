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
        'white':'#ffffff',
        'bordersu':'#310D7E',
        'button2':'#9468F1'
      },
      margin:{
        '88':'22rem',
        '84':'21rem',
        '100':'26rem',
        '104':'28rem'

      },
      backgroundImage: {
        'signuppg':"url('/src/assets/signuppg.png')",
       'firstpagepg': "url('/src/assets/firstpage.png')",

      },
      borderWidth:{
        '1':'1px',
        '1.5':'1.5px'
      }
    },
  },
  plugins: [],
}