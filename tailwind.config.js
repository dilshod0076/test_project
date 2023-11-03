/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: '',
	theme: {
	  extend: {
		 fontFamily: {
			'sans': ['Noto Sans', 'sans-serif'],
			montserrat: ['Montserrat', 'sans'],
		 },
	  },
	},
	plugins: [],
 }
 
 