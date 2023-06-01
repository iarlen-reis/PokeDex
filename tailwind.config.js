/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './app/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'Roboto_700Bold',
        body: 'Roboto_400Regular',
        alt: 'BaiJamjuree_700Bold',
      },
    },
  },
  plugins: [],
}
