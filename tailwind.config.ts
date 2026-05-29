import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#1A1A2E',
          50: '#F8F9FE',
        },
        accent: {
          blue: '#4F8EF7',
          gold: '#F5A623',
        },
        neutral: {
          primary: '#1A1A2E',
          secondary: '#6B7280',
          light: '#F8F9FE',
          white: '#FFFFFF',
        },
      },
      borderRadius: {
        card: '16px',
        button: '12px',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(0,0,0,0.07)',
        'soft-lg': '0 8px 32px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        section: '48px',
        card: '24px',
      },
    },
  },
  plugins: [],
};

export default config;
