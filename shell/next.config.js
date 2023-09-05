/** @type {import('next').NextConfig} */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const nextFederationPlugin = new NextFederationPlugin({
      name: 'shell',
      filename: 'static/chunks/remoteEntry.js',
      remotes: {},
      exposes: {},
      shared: {},
      extraOptions: {}
    });

    config.plugins.push(nextFederationPlugin);
    return config;
  }
}

module.exports = nextConfig
