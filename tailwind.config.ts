import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");
// const nextUIPlogin = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
// import { PluginAPI } from 'tailwindcss/types/config'; // Adjust based on your setup


const config: Config = {
  'primary': {
    1: '#00b7fa',
    2: '#01cfea',
  },
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
        'custom-dark-text': 'rgb(148 163 184)',
        'custom-Opacity-blue': '#EBF6FB',
        'custom-Opacity-green': '#EBF6FB',
      },



      screens: {
        'tall': { 
          'raw': '(min-height: 700px)' },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
    
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            'background': {
              1: '#eff6ff',
              2: '#f8fafc',
              3: '#f1f5f9',
              4: '#f8fafc',
            },
            'background-card': {
              1: '#F9FAFB',
              2: '#ffffff',
            },
            'ring-color': {
              1: '#e2e8f0'
            },
            'primary': {
              1: '#00b7fa',
              2: '#01cfea',
            },
            'secondary': {

            },
            'heading-text': '#334155',
            'p-text': '#475569',
            'border': '#fff',
            'link-text': '#64748b',
            'image-bg': '#1e293b',
            'button-color': '#f1f5f9',
          },
        },
        dark: {
          layout: {},
          colors: {
            'background': {
              1: '#3f3f46',
              2: '#27272a',
              3: '#18181b',
              4: '#09090b',
            },
            'background-card': {
              1: '#27272a',
              2: '#18181b',
            },
            'ring-color': {
              1: '#3f3f46'
            },
            'primary': {
              1: '#6FEE8D',
              2: '#17c964',
            },
            'secondary': {

            },
            'heading-text': '#fafafa',
            'p-text': '#a1a1aa',
            'border': '#3f3f46',
            'link-text': '#a1a1aa',
            'image-bg': '#09090b',
            'button-color': '#09090b',
          }
        },
        // ... // custom themes
      },
    }),
  ],
}

export default config
function themes(arg0: string) {
  throw new Error('Function not implemented.');
}

