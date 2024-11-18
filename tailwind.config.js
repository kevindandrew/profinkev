/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,tsx}",
    "./src/components/**/*.{js,jsx,tsx}",
    "./src/app/**/*.{js,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        'newspaper-bg': '#f5f5dc', 
        'newspaper-text': '#333333', 
        'newspaper-border': '#888888', 
      },
    },
  },
  plugins: [],
};
