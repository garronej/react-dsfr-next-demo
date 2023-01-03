
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {

    config.module.rules.push({
      test: /\.min\.js$/,
      type: "asset/resource"
    });

    return config;
  }
};

module.exports = nextConfig