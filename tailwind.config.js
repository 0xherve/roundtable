/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts,tsx}"], // Include .ts and .tsx files
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        muted: 'var(--color-muted)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
};