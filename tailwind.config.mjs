/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
			  sans: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [require("@catppuccin/tailwindcss"), require('tailwindcss-motion'),
		require("@tailwindcss/typography"),
		function ({ addVariant }) {
		  addVariant(
			"prose-inline-code",
			'&.prose :where(:not(pre)>code):not(:where([class~="not-prose"] *))',
		  );
		},
	],
}