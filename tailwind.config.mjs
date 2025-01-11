/** @type {import('tailwindcss').Config} */



export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {


			fontFamily:{
				lato:['Lato','sans-serif'],
				Audio:['Audiowide','sans-serif'],
				Heue:['Comic Neue', 'serif'],
			}
		},
	},
	plugins: [],
}
