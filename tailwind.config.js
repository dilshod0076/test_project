/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: '',
	theme: {
		 colors: {
		  	'black': '#0A0B0B',
		  	'lime': '#CF0',
		  	'gray': '#ECECEC',
		  	'darkgray': '#818181',
		  	'mediumgray': '#989898',
		  	'regulargray': '#D9D9D9',
		  	'lightgray': '#ECF0F3',
			'graykg': '#ECECEC'
		 },
		 fontFamily: {
			'sans': ['Noto Sans', 'sans-serif'],
			'body': ['Nunito'],
		 },
	  extend: {
		boxShadow: {
			'3xl': '0px 4px 50px 0px rgba(0, 0, 0, 0.15)',
		 }
	},
	plugins: [],
 }
}
 
 