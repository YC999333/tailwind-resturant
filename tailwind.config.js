module.exports = {
  mode: 'jit',
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
        'about-image': "url('https://upload.cc/i1/2021/05/14/CBrcxU.jpg')",
        'main-image':
          "linear-gradient(rgba(9,2,19, 0.8), rgba(9,2,19, 0.8)),url('https://upload.cc/i1/2021/05/14/GRBrXK.jpg')",
        'drink-image':
          "linear-gradient(rgba(9,2,19, 0.8), rgba(9,2,19, 0.8)),url('https://upload.cc/i1/2021/05/14/EoOKdD.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
