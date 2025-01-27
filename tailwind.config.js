/** @type {import('tailwindcss').Config} */
module.exports = {
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
      direction: {
        'rtl': 'rtl',
        'ltr': 'ltr',
      },
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
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
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
        brand: {
          primary: "hsl(var(--brand-primary))",
          secondary: "hsl(var(--brand-secondary))",
          tertiary: "hsl(var(--brand-tertiary))",
        },
        'paper-green': {
          DEFAULT: "hsl(var(--paper-green))",
        },
        'paper-blue': {
          DEFAULT: "hsl(var(--paper-blue))",
        },
        'paper-yellow': {
          DEFAULT: "hsl(var(--paper-yellow))",
        },
        'paper-purple': {
          DEFAULT: "hsl(var(--paper-purple))",
        },
      },
      backgroundImage: {
          'paper-border-primary': "linear-gradient(135deg, transparent 50%, hsl(var(--primary)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--primary)) 50%)",
          'paper-border-secondary': "linear-gradient(135deg, transparent 50%, hsl(var(--secondary)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--secondary)) 50%)",
          'paper-border-tertiary': "linear-gradient(135deg, transparent 50%, hsl(var(--tertiary)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--tertiary)) 50%)",
          'paper-border-green': "linear-gradient(135deg, transparent 50%, hsl(var(--paper-green)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--paper-green)) 50%)",
          'paper-border-blue': "linear-gradient(135deg, transparent 50%, hsl(var(--paper-blue)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--paper-blue)) 50%)",
          'paper-border-yellow': "linear-gradient(135deg, transparent 50%, hsl(var(--paper-yellow)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--paper-yellow)) 50%)",
          'paper-border-purple': "linear-gradient(135deg, transparent 50%, hsl(var(--paper-purple)) 50%), linear-gradient(225deg, transparent 50%, hsl(var(--paper-purple)) 50%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        '.direction-rtl': {
          direction: 'rtl',
        },
        '.direction-ltr': {
          direction: 'ltr',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}