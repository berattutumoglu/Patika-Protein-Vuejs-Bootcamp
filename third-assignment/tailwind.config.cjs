/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
		fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
    extend: {
			colors: {
				"primary": "#717986",
				"green": "#00DB99",
				"yellow": {
					"450": "#F0BB00"
				},
				"rose":{
					"550": "#FF285C"
				},
				"gray": {
					"light": "#F9F9F9",
					DEFAULT: "#F1F2F7",
					"dark": "#E5E5E5",
					"deep": "#8B8B8B"
				},
				"navy": {
					DEFAULT: "#3C557A",
					"dark": "#25364F"
				},
				"divider": "#CDDCEE",
			}
		},
  },
  plugins: [],
}
