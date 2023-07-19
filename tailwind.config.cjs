/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			primary: "#69e228",
			secondary: "#30405F",
			tertiary: "#1ba6fa",
			background: "#1e293b",
			hover: '#47A216',
		},
		extend: {
			fontFamily: {
				jakarta: ['Plus Jakarta Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
