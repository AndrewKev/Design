/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    colors:{
      'gray':{
        'default':'#747F77',
        'light':'#D9D9D9',
        'dark':'#111613',
        '50':'#F9FAFB',
        '900':'#111827',
      },
      'primary-green':'#249D54',
      'green':{
        '800':'#2A834D',
      },
      'green-yeu':'#019943',
      'blue-yeu':'#101279',
      'light-green':'#DEFAE2',
      'dark-green':'#112C1A',
      'light-blue':'#D8F1FF',
      'clear-blue':'#377CE5',
      'orange':'#EF9140',
      'light-orange':'#FFF1D5',
      'white':'#ffffff',
      'black':'#111613',
    },
    fontFamily : {
      'display': ['"Atkinson Hyperlegible"','Poppins', 'sans-serif'],
      'body':['"Atkinson Hyperlegible"','Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
