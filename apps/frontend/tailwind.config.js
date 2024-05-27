import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{ts,vue}"],
	theme: {
		extend: {
			fontFamily: {
				serif: ['"Antic Didone"', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
};
