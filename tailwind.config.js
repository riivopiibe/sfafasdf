/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#9ca3af',
            a: {
              color: '#818cf8',
              '&:hover': {
                color: '#6366f1',
              },
            },
            h1: {
              color: '#ffffff',
            },
            h2: {
              color: '#ffffff',
            },
            h3: {
              color: '#ffffff',
            },
            strong: {
              color: '#ffffff',
            },
            code: {
              color: '#ffffff',
            },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#4b5563',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};