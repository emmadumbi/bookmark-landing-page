/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        Soft_Blue: 'hsl(231, 69%, 60%)',
        Soft_Red: 'hsl(0, 94%, 66%)',
        Grayish_Blue: 'hsl(229, 8%, 60%)',
        Very_Dark_Blue: 'hsl(229, 31%, 21%)'
      },
      letterSpacing: {
        wide: '0.2em',
        wider: '0.26em',
      },
      screens: {
        sm: '31.25em',
        md: '46.875em',
      }
    },
  },
  plugins: [],
}

