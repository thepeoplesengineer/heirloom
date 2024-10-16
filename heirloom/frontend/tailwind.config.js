/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust paths according to your folder structure
  ],
  theme: {
    extend: {
      colors: {
        eggshell: '#F0EAD6', // Add eggshell color here
      },
    },
  },
  plugins: [],
};
