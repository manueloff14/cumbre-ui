/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require('@tailwindcss/typography')],
	corePlugins: {
		// Deshabilita el max-width predeterminado de prose si es necesario
		container: false,
	},
}
