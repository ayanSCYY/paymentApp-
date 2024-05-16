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
        'button2':'#9468F1',
        'button3':'#8ACBC3',
        'button4':'#173476',
        'signbg':'#EDE4EE',
        'signh':'#963BA5',
        'signbu':'#FF007A',
        'signtt':'#963BA5',
        'signtties':'#FEF4FC'
        
        
      },
      margin:{
        '88':'22rem',
        '84':'21rem',
        '22':'5.5rem',
        '100':'26rem',
        '104':'28rem'

      },
      width:{
        '58':'14.5rem',
        '88':'22rem',
        '112':'30rem',
        '124':'36rem',
      },
      height:{
        '100':'26rem',
      },
      fontSize:{
        'xxs':'10px'
      },
      fontFamily:{
        'merri':'Inria Serif'
      },
      backgroundImage: {
        'signuppg':"url('/src/assets/signuppg.png')",
       'firstpagepg': "url('/src/assets/firstpage.png')",
       'signinright': "url('/src/assets/siginpgrightimg.png')",
       'signinbg': "url('/src/assets/signinbg.jpg')",
       'signin':`url('/src/assets/signin.jpg')`,
       'sgn':`url('/src/assets/sgn.jpg')`,
       'sigu':`url('/src/assets/sigu.png')`,

      },
      borderWidth:{
        '1':'1px',
        '1.5':'1.5px'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'my':'1000px',
        'myy':'1124px',
        'myyy':'520px',
        'my3':'1200px',
        'my4':'730px',
        'my5':'520px'
    },
  },
  plugins: [],
}}