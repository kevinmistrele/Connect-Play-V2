import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				background: "#0A0A0A",
				foreground: "#F8FAFC",
				"text-light": "#F8FAFC",         // adicionado
				"card-bg": "#1E1E1E",            // adicionado
				border: "#475569",
				input: "#1E293B",
				ring: "#7C3AED",
				primary: {
					DEFAULT: "#7C3AED",
					light: "#A78BFA",
					foreground: "#FFFFFF",
				},
				secondary: {
					DEFAULT: "#0F172A",
					foreground: "#F8FAFC",
				},
				destructive: {
					DEFAULT: "#EF4444",
					foreground: "#FFFFFF",
				},
				muted: {
					DEFAULT: "#334155",
					foreground: "#CBD5E1",
				},
				accent: {
					DEFAULT: "#10B981",
					foreground: "#FFFFFF",
				},
				popover: {
					DEFAULT: "#1E1E1E",
					foreground: "#F8FAFC",
				},
				card: {
					DEFAULT: "#1E1E1E",
					foreground: "#F8FAFC",
				},
				sidebar: {
					DEFAULT: "#1E1E1E",
					foreground: "#F8FAFC",
					primary: "#7C3AED",
					"primary-foreground": "#FFFFFF",
					accent: "#10B981",
					"accent-foreground": "#FFFFFF",
					border: "#334155",
					ring: "#7C3AED",
				},
			},
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
				inter: ["Inter", "sans-serif"],
				rubik: ["Rubik", "sans-serif"],
			},
			borderRadius: {
				lg: "0.625rem",
				md: "calc(0.625rem - 2px)",
				sm: "calc(0.625rem - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
