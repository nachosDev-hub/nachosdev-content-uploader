import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00A651',
        'brand-light': '#E8F7EF',
      },
    },
  },
  plugins: [],
}
export default config
