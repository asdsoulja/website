const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
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
        scale:{
          175: '1.75',
          400: '4.00',
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
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
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
        "name": {
          from: {borderRadius: "0px"},
          to: {borderRadius: "100px"}
        },
        slideUpEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideUpEnterDelayed: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(-0px)",
          },
        },
        slideUpEnterDelayed2: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(-25px)",
          },
        },
        slideLeftEnter: {
          "0%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateX(0px)",
          },
        },
        slideRightEnter: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateX(0px)",
          },
        },
        slideRightEnterDelayed: {
          "0%": {
            opacity: 0,
            transform: "translateX(-1000px)",
            transform: "translateY(0px)"
          },
          "100%": {
            opacity: 100,
            transform: "translateX(850px)",
          },
        },
        slideDownEnter: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: 100,
            transform: "translateY(0px)",
          },
        },
        slideAwayUp: {
          "0%": {
            opacity: 100,
            transform: "translateY(650px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(600px)",
          },
        },
        progress: {
          '0%, 60%': {
            transform: 'translateY(0px)'
          },
          '30%': {
            transform: 'translateY(-30px)'
          },
        },
        // three bounce
        "three-bounce": {
          '0%, 100%': {
            transform: 'scale(0.5)',
            opacity: 0.5
          },
          '50%': {
            transform: 'scale(2)',
            opacity: 1
          },
        },
        // rotate dot in circle
        circle: {
          '0%': {
            transform: 'rotate(-360deg)translate(25px)rotate(360deg)'
          },
          '100%': {
            transform: 'rotate(0deg)translate(25px)rotate(0deg)'
          },
        },
        // rotate two dots
        "rotate-in": {
          '0%, 100%': {
            transform: 'scale(2)',
            opacity: 1
          },
          '50%': {
            transform: 'scale(1)',
            opacity: 0.5
          },
        },
        "rotate-out": {
          '0%, 100%': {
            transform: 'rotate(-360deg)translate(24px)rotate(0deg)scale(1.5)',
            opacity: 1
          },
          '50%': {
            transform: 'rotate(0deg)translate(24px)rotate(-360deg)scale(1)',
            opacity: 0.5
          },
        },
        // square fill
        "square-fill": {
          '0%, 50%': {
            transform: 'rotate(-360deg)',
          },
        },
        "square-fill-in": {
          '0%': {
            transform: 'scaleY(0)',
            "transform-origin": "bottom",
          },
          '50%, 100%': {
            transform: 'scaleY(1)',
            background: "rgb(219, 39, 119)",
          },
        },
        // rotate square and circle
        "rotate": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotateY(-180deg)",
          },
          "100%": {
            transform: "rotate(-180deg)"
          }
        },
        // heart jumping
        "jump-heart": {
          "0%, 100%": {
            transform: "translateY(-30px)rotate(45deg) ",
          },
          "50%": {
            transform: "translateY(0px)rotate(45deg) ",
          },
        },
        "line": {
          '0%, 100%': {
            transform: 'scaleX(0.8)',
            opacity: 0.5,
          },
          '50%': {
            transform: 'scaleX(1.5)',
            opacity: 1,
          },
        },
        // pacman
        "pacman": {
          "0%, 100%": {
            "clip-path": "polygon(100% 74%, 44% 48%, 100% 21%)"
          },
          "25%, 75%": {
            "clip-path": "polygon(100% 60%, 44% 48%, 100% 40%)"
          },
          "50%": {
            "clip-path": "polygon(100% 50%, 44% 48%, 100% 50%)"
          },
        },
        //zoom
        "zoom": {
          '0%, 100%': {
            transform: 'scale(0.8)',
          },
          '50%': {
            transform: 'scale(1.2)',
          },
        },
        //spin
        "spin": {
          '0%': {
            transform: 'rotate(-180deg)',
          },
          '100%': {
            transform: 'rotate(180deg)',
          },
        },
        //wave
        "wave": {
          '0%': {
            "box-shadow": "0 0 0 0 rgba(219, 39, 119, 0.3), 0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3),0 0 0 3em rgba(219, 39, 119, 0.3)",
          },
          '100%': {
            "box-shadow": "0 0 0 1em rgba(219, 39, 119, 0.3), 0 0 0 2em rgba(219, 39, 119, 0.3), 0 0 0 3em rgba(219, 39, 119, 0.3), 0 0 0 4em rgba(219, 39, 119, 0)",
          },
        },
        //circle-left
        "circle-left": {
          '0%, 100%': {
            transform: "translateX(0px)scale(1)"
          },
          '50%': {
            transform: "translateX(-30px)scale(2)"
          },
          '70%': {
            transform: "translateX(30px)scale(2)"
          },
        },
        //circle-right
        "circle-right": {
          '0%, 100%': {
            transform: "translateX(0px)scale(1)"
          },
          '50%': {
            transform: "translateX(30px)scale(2)"
          },
          '70%': {
            transform: "translateX(-30px)scale(2)"
          },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 3s linear infinite',
        'name-right': 'name 0.5s ease-out',
        slideUpEnter1s: "slideUpEnter 1s ease-in-out",
        slideDownEnter1s: "slideDownEnter 1s ease-in-out",
        slideLeftEnter1s: "slideLeftEnter 1s ease-in-out",
        slideRightEnter1s: "slideRightEnter 1s ease-in-out",
        slideUpEnterQuick: "slideUpEnter 1s ease-in-out",
        slideDownEnterQuick: "slideDownEnter 1s ease-in-out",
        slideLeftEnterQuick: "slideLeftEnter 1s ease-in-out",
        slideRightEnterQuick: "slideRightEnter 1s ease-in-out",
        slideAwayUp: "slideAwayUp 6s 1 normal forwards",
        slideUpEnterQuickDelayed: "slideUpEnterDelayed 1s 3s normal forwards",
        slideUpEnterQuickDelayed2: "slideUpEnterDelayed2 1s 5s normal forwards",
        slideRightEnterQuickDelayed: "slideRightEnterDelayed 1s 3s normal forwards",
        "progress": 'progress 1s linear infinite',
        "three-bounce": 'three-bounce 1s ease-in-out infinite',
        "circle": 'circle 2s ease-in-out infinite',
        "rotate-in": 'rotate-in 2s ease-in-out infinite',
        "rotate-out": 'rotate-out 2s ease-in-out infinite',
        "square-fill": 'square-fill 2s ease-in-out infinite',
        "square-fill-in": 'square-fill-in 2s ease-in-out infinite',
        "rotate": 'rotate 1.5s linear infinite',
        "jump-heart": 'jump-heart 1.5s ease-out infinite',
        "line": 'line 1.5s ease-out infinite',
        "pacman": 'pacman 1s ease-out infinite',
        "zoom-in": 'zoom 1.5s ease-out infinite', // zoom in
        "spin": 'spin 2s linear infinite', // zoom in
        "spin-fast": 'spin 2s linear infinite', // clock spin fast
        "spin-slow": 'spin 12s linear infinite', // clock spin slow
        "wave": 'wave 1s linear infinite',
        "circle-left": 'circle-left 2s ease-in-out infinite',
        "circle-right": 'circle-right 2s ease-in-out infinite',
        fadeIn: "fadeIn 2s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
