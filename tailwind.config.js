/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#070707',
      'contactbutton': '#2E3763',
      'back-2': '#EEEFF8',
      'bordergray' : '#BFBCBC'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

