/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      primary: '#9e7f66',
      secondary: '#939BF4',
      darkBlue: '#19202D',
      midnight: '#121721',
      white: '#FFFFFF',
      lightGrey: '#F4F6F8',
      gray: '#9DAEC2',
      darkGrey: '#6E8098'
    },
    fontSize: {
      sm: ['14px', {
        lineHeight: '18px',
        fontWeight: '500'
      }],
      base: ['16px', {
        lineHeight: '26px',
        fontWeight: '400'
      }],
      lg: ['20px', {
        lineHeight: '24px',
        fontWeight: '500'
      }],
      xl: ['24px', {
        lineHeight: '29px',
        fontWeight: '600'
      }],
      '2xl': ['28px', {
        lineHeight: '34px',
        fontWeight: '700'
      }]
    },
    extend: {},
  },
  plugins: [],
}