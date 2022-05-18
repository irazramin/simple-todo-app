module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#fc2326',

          secondary: '#9395d8',

          accent: '#81c3d3',

          neutral: '#17161D',

          'base-100': '#FAF9FA',

          info: '#65B1DC',

          success: '#45D97E',

          warning: '#D8910E',

          error: '#FB3751',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
