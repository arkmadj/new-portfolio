/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				blob: "var(--blob-color)",
				b54: {
					"gray-1": "var(--b54-gray-1)",
					"gray-2": "var(--b54-gray-2)",
					"gray-3": "var(--b54-gray-3)",
					"gray-4": "var(--b54-gray-4)",
					"primary": "var(--b54-primary)",
					"background": "var(--b54-background)",
					"secondary": "var(--b54-secondary)",
				},
				shara: {
					"gray-1": "var(--shara-gray-1)",
					"gray-2": "var(--shara-gray-2)",
					"gray-3": "var(--shara-gray-3)",
					"gray-4": "var(--shara-gray-4)",
					"green-1": "var(--shara-green-1)",
					"green-2": "var(--shara-green-2)",
					"primary": "var(--shara-primary)",
					"background": "var(--shara-background)",
					"secondary": "var(--shara-secondary)",
				},
			},
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
