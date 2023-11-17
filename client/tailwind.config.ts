/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
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
        gray: {
          100: '#F6F5F2',
          400: '#CAC9C8',
          600: '#7D898D',
          800: '#263C44',
          900: '#1E2D3A',
        },
        grass: "#60CBA5",
        sky: "#4FB8DA",
        sand: "#F0EDE8",
        ocean: "#2078AC",
        climate: "#277F6C",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontSize: {
        sm: [
          '0.875rem',
          {
            lineHeight: '1.125rem',
          },
        ],
        base: [
          '1rem',
          {
            lineHeight: '1.5rem',
          },
        ],
        lg: [
          '1.25rem',
          {
            lineHeight: '2rem',
          },
        ],
        '2lg': [
          '1.5rem',
          {
            lineHeight: '2.25rem',
          },
        ],
        xl: [
          '2rem',
          {
            lineHeight: '2.5rem',
          },
        ],
        '2xl': [
          '2.5rem',
          {
            lineHeight: '3rem',
          },
        ],
        '3xl': [
          '3rem',
          {
            lineHeight: '3.5rem',
          },
        ],
        '4xl': [
          '3.5rem',
          {
            lineHeight: '4rem',
          },
        ],
      },
      fontFamily: {
        "space-grotesk": ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
