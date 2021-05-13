module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  },
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'testimonial-image':
          "url('https://upload.cc/i1/2021/05/12/yxgsop.jpg')",
        'events-image': "url('https://upload.cc/i1/2021/05/12/c2pJjK.jpg')",
        'landing-image': "url('https://upload.cc/i1/2021/05/11/f2RWx8.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
