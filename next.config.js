const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const nextConfig = withContentlayer({
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  scrollRestoration: false,
});

module.exports = nextConfig;
