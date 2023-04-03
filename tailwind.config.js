/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Georgia', 'serif'],
    },
    extend: {
      animation: {
        "slide-down": "slide-down 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-up": "slide-up 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "text-focus-in": "text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
        "typing": "3.5s steps(40, end)",
        "blink-caret": ".75s step-end infinite",
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(120%)" },
          "100%": { transform: "translateY(0)" },
        },
        'slide-down': {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(120%)" },
        },
        "text-focus-in": {
          "0%": {
            filter: "blur(12px)",
            opacity: 0,
          },
          "100%": {
            filter: "blur(0px)",
            opacity: 1,
          }
        },
        "typing": {
          from: {
            width: 0
          },
          to: {
            width: "100%"
          }
        },
        "blink-caret": {
          from: {
            "border-color": "transparent"
          },
          to: {
            "border-color": "transparent"
          },
          "50%": { "border-color": "#0891b2" }
        },
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
