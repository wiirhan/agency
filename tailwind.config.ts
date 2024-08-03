import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
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
