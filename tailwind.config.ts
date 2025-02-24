import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#074799",
				secondary: "#E1FFBB",
				custom_background: "#ECECEC"
			},
			fontFamily: {
				sans: ["var(--font-inter)", "Arial"],
				montserrat: ["var(--font-montserrat)", "sans-serif"],
			},
		},
	},
	plugins: [],
	purge: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	]
} satisfies Config;
