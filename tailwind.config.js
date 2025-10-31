/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1rem' }],
        base: ['1rem', { lineHeight: '1.25rem' }],
        lg: ['1.125rem', { lineHeight: '1.375rem' }],
        xl: ['1.25rem', { lineHeight: '1.5rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
    },
  },
  plugins: [],
};

export default config;
