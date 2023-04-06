/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
    corePlugins: {
      aspectRatio: false,
    },

  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),],
}
