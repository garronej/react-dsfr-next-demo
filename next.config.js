/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {

    config.module.rules.push({
      test: /\.(woff2|webmanifest)$/,
      type: "asset/resource"
    });

    return config;
  },
  transpilePackages: ['@codegouvfr/react-dsfr', 'tss-react']
};

module.exports = nextConfig