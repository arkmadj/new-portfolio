/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-jetbrains-mono)"],
				"dm-sans": ["var(--font-dm-sans)"],
			},
			boxShadow: {
				"shara-1":
					"16.27630043029785px 16.27630043029785px 11.235923767089844px 0px rgba(104, 104, 104, 0.08)",
				"shara-2":
					"0px 2.712716579437256px 27.127164840698242px 0px rgba(0, 0, 0, 0.25)",
				"shara-3":
					"0px 2.712716579437256px 27.127164840698242px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
