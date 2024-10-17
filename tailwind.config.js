/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {

    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '800px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {

      screens: {
      'halfSm': '320px', 
      'myMd' : '800px'
    },

      fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
      'Poppins' : ["Poppins" , "sans"],
      'iranian-sans' : ["iranian-sans","sans"] ,
      'iranyekan' : ["iranyekan","serif"],
      'dana' : ["dana","sans"] ,
      'Vazirmatn' : ["Vazirmatn","sans"]
    },

    backgroundImage: {
        'kouroshTower' : "url('https://lotusgr.com/wp-content/uploads/2024/08/CY3A7576.jpg')"
       },
    
    },
  },
  plugins: [],
}