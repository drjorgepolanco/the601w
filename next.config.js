const withFonts = require('next-fonts');
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});

// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/home',
//         destination: '/',
//         permanent: true
//       }
//     ]
//   }
// }