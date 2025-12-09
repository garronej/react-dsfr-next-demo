/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@codegouvfr/react-dsfr', 'tss-react'],
  output: "export"
};

module.exports = nextConfig