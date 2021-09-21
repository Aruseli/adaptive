/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/adaptive' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Aruseli/adaptive/main/docs/' : '',
}
