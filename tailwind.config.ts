import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        primary:"#EB3C3C",
        lightBlue : "#EBEEF5",
        gray:'#B9C1D9',
        black:"#172E4E",
        blue:"#154992",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "running": {
          from: { backgroundPosition: 'center right -18vw' },
          to: {  backgroundPosition: 'center left'},

        },
        "tapDown": {
          // from: { gridRow: 'span 2 / span 2' },
          '100%': { opacity:'1', height: '58vh'},

        },
        "tapUp": {
          from: { opacity:'1', height: '58vh'},
          to: { opacity:'0', height: '0vh'},

        },
        "sizeUp": {
          // from: { gridRow: 'span 2 / span 2' },
          '100%': { opacity:'1', height: '5.2vh'},

        },
        "sizeDown": {
          from: { opacity:'1', height: '5.2vh'},
          to: { opacity:'0', height: '0vh'},

        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "float": {
          '50%': { transform: 'translate(50px, 20px)'},
        },
        "float2": {
          '50%': { transform: 'translate(-5px, 20px)'},
        },
        "float3": {
          '0%' : { backgroundPositionX: '100%'},
          '100%': { backgroundPositionX: '-50%'},
        },
        "change": {
          '0%' : { opacity: '0'},
          '100%': { opacity: '1'},
        },
        "revert": {
          '0%' : { opacity: '1'},
          '50%' : { opacity: '0'},
          '100%': {opacity: '1'},
        },
      },
      animation: {
        "float-l": "float 5s ease-in-out infinite",
        "float-r": "float2 6s ease-in-out infinite",
        "service-size": "sizeUp 0.5s ease-in-out forwards",
        "service-size-down": "sizeDown 0.5s ease-in-out forwards",
        "tab-active": "tapDown 0.2s ease-in-out forwards",
        "tab-disable": "tapUp 0.2s ease-in-out forwards",
        "running": "float3 12s linear infinite",
        "change": "change 0.5s ease-in-out forwards",
        "revert": "revert 0.5s ease-in-out forwards",





        // "accordion-up": "accordion-up 0.2s ease-out",
        // "move-r": "move 0.2s ease-out",

      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config