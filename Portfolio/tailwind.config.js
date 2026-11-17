/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFFFF',
          100: '#FFF7EB', // Primary Warm Cream Background
          200: '#F9F0E0', // Warm Sand Card / Surface Background
          300: '#EFE2CC',
        },
        sand: '#F9F0E0',
        sage: {
          DEFAULT: '#A2AB73', // Sage Olive Accent
          light: '#B7BF8A',
          dark: '#8B945D',
        },
        berry: {
          DEFAULT: '#CC3A63', // Vibrant Berry Accent / CTA
          light: '#DE4D75',
          dark: '#B02950',
        },
        charcoal: {
          900: '#1A1618', // Primary Heading Text
          800: '#2C2529',
          700: '#483F44', // Body Text
          600: '#645A60',
          500: '#82787E', // Muted Text
          400: '#A49BA0',
        },
        // Mapped for seamless compatibility
        navy: {
          900: '#FFF7EB',
          800: '#F9F0E0',
          700: '#EFE2CC',
          600: '#DFCDAF',
        },
        lime: {
          400: '#CC3A63',
          500: '#B02950',
          300: '#DE4D75',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
