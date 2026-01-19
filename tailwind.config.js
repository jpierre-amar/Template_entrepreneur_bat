/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
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
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        },
        gold: {
          DEFAULT: 'hsl(var(--gold))',
          light: 'hsl(var(--gold-light))',
          dark: 'hsl(var(--gold-dark))'
        },
        navy: {
          DEFAULT: 'hsl(var(--navy))',
          light: 'hsl(var(--navy-light))',
          dark: 'hsl(var(--navy-dark))'
        },
        cream: 'hsl(var(--cream))'
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif']
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': 'calc(var(--radius) * 2)',
        '3xl': 'calc(var(--radius) * 3)'
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'premium-sm': '0 10px 25px -10px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 30px rgba(196, 165, 71, 0.3)',
        'glow-lg': '0 0 60px rgba(196, 165, 71, 0.4)',
        'inner-glow': 'inset 0 2px 20px rgba(196, 165, 71, 0.1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gold': 'linear-gradient(135deg, hsl(43 74% 49%) 0%, hsl(43 74% 60%) 100%)',
        'gradient-navy': 'linear-gradient(135deg, hsl(217 45% 22%) 0%, hsl(217 45% 12%) 100%)',
        'gradient-premium': 'linear-gradient(135deg, hsl(217 45% 12%) 0%, hsl(217 45% 22%) 50%, hsl(222 47% 10%) 100%)',
        'mesh-gradient': 'radial-gradient(at 40% 20%, hsla(217, 45%, 22%, 0.3) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(43, 74%, 49%, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(217, 45%, 35%, 0.2) 0px, transparent 50%)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-in-down': {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-left': {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'slide-in-right': {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' }
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' }
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px hsla(43, 74%, 49%, 0.2)' },
          '50%': { boxShadow: '0 0 40px hsla(43, 74%, 49%, 0.4)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'scale-in': 'scale-in 0.5s ease-out',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite'
      },
      transitionDuration: {
        '400': '400ms',
      },
      aspectRatio: {
        'golden': '1.618',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
