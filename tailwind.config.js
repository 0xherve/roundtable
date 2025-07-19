/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",       // Next.js App Router
  "./pages/**/*.{js,ts,jsx,tsx}",     // If using /pages
  "./components/**/*.{js,ts,jsx,tsx}",// If you have a /components folder
  "./layouts/**/*.{js,ts,jsx,tsx}",   // If you use /layouts
],

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