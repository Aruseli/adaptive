/** @type {import('next').NextConfig} */

const isProd = true;

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? '/adaptive' : '',
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/Aruseli/adaptive/main/docs/' : '',
}
