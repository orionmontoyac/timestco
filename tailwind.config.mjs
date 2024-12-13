/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  // this enables you to cancel out dark mode using the class "light" for specific sections if desired
  darkMode: ["variant", "&:is(.dark *):not(.light *)"],

  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // use any standard tailwind colors from here https://tailwindcss.com/docs/customizing-colors
        // or generate with https://uicolors.app/create
        primary: colors.lime,
        secondary: colors.green,
        base: {
          DEFAULT: "#2f5a1e",
          50: "#e6f2e6",
          100: "#cce5cc",
          200: "#99cc99",
          300: "#66b266",
          400: "#339933",
          500: "#2f5a1e", // main color
          600: "#264d19",
          700: "#1d3f14",
          800: "#142f0f",
          900: "#0b1f0a",
        },
        info: "#7dd3fc",
        "info-content": "#082f49",
        success: "#6ee7b7",
        "success-content": "#022c22",
        warning: "#fcd34d",
        "warning-content": "#111827",
        error: "#fca5a5",
        "error-content": "#450a0a",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 50s linear infinite",
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 1.5rem))",
          },
        },
        marquee2: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 8rem))",
          },
        },
      },
    },
    fontFamily: {
      sans: [
        "Inter",
        "Satoshi",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
