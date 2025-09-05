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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))',
				},
			},
			borderRadius: {
				lg: 'var(--radius-lg)',
				md: 'var(--radius)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'card-hover': 'var(--shadow-card-hover)',
				'hero': 'var(--shadow-hero)',
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'slide-up': 'slideUp 0.6s ease-out forwards',
				'fade-in': 'fadeIn 0.8s ease-out forwards',
				'scale-in': 'scaleIn 0.5s ease-out forwards',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				slideUp: {
					from: {
						opacity: '0',
						transform: 'translateY(30px)',
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				scaleIn: {
					from: {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					to: {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
