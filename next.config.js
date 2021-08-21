const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  target: 'serverless',
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
});
