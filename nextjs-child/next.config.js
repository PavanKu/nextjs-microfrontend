/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const nextFederationPlugin = new NextFederationPlugin({
      name: 'nextjs-child',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {},
      exposes: {
        "./about-us": "./src/pages/about-us.tsx",
        "./user-profile": "./src/pages/user-profile.tsx"
      },
      shared: {},
      extraOptions: {}
    });

    config.plugins.push(nextFederationPlugin);
    return config;
  }
}

module.exports = nextConfig
