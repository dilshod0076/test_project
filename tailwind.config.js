/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./index.html",
	  "./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	darkMode: '',
	theme: {
		 colors: {
			'body': '#F6F7F8',
		  	'black': '#0A0B0B',
		  	'lime': '#CF0',
			'limeHover': '#AEDA00',
		  	'gray': '#ECECEC',
		  	'darkgray': '#818181',
		  	'mediumgray': '#989898',
		  	'regulargray': '#D9D9D9',
		  	'lightgray': '#ECF0F3',
			'graykg': '#ECECEC'
		 },
	  extend: {
		boxShadow: {
			'80': '0px 0px 80px 0px rgba(204, 255, 0, 0.20)',
		 }
	},
	plugins: [],
 }
}
 
 