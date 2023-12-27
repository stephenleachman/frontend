import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'custom-gray': '#F3F4F6',
        'custom-gray-1': '#F9FAFB',
        'custom-gray-link': '#64748B',
        'custom-blue-opacaty': '#CBEAF8',
        'custom-blue': '#18BFFF',
        'custom-green': '#9333ea',
        'custom-dark-1': '#4B5563',
        'custom-dark-2': '#374151',
        'custom-dark-3': '#1F2A37',
        'custom-dark-4': '#111928',
        'custom-dark-text': '#8899A8',

        'custom-Opacity-blue': '#EBF6FB',
        'custom-Opacity-green': '#EBF6FB',
      },
      screens: {
        'tall': { 
          'raw': '(min-height: 700px)' },
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
}

export default config
