import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1170px', // This sets the max-width to 1170px
      },
    },
    extend: {
      colors: {
        'bg-dark': '#28293E',
        'bg-light': '#FDF0E9',
        'text-dark': '#391400',
        'text-dark-accent': '#EF6D58',
        'text-dark-gray': '#391400A3',
        'text-light': '#FFFFFF',
        'text-light-accent': '#EF6D58',
        'text-light-gray': '#FFFFFFA3',
      },
      fontFamily: {
        epilogue: ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        h1: '72px',
        h2: '56px',
        h3: '40px',
        h4: '24px',
        h5: '16px',
        label: '12px',
        'text-big': '20px',
        text: '16px',
        'text-small': '14px',
      },
      fontWeight: {
        'extra-bold': '800',
      },
      letterSpacing: {
        h1: '-2px',
        h2: '-1px',
        h5: '3px',
      },
      lineHeight: {
        h1: '80px',
        h2: '64px',
        h3: '48px',
        h4: '32px',
        h5: '32px',
        label: '14.4px',
        'text-big': '32px',
        text: '32px',
        'text-small': '24px',
      },
    },
  },
  plugins: [],
}
export default config
