/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {

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
       }
    
    },
  },
  plugins: [],
}