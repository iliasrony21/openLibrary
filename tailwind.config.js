/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0376B8',
          secondary: '#333333',
          accent: '#666666',
          neutral: '#E1DCC5',
          'base-100': '#ffffff'
        }
      },
      'dark',
      'cupcake'
    ]
  },
  plugins: [require('daisyui')]
}
