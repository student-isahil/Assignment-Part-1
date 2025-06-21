/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true, // GitHub Pages doesn't support Image Optimization
  },
  trailingSlash: true, // Important for correct routing on GitHub Pages
};

module.exports = nextConfig;
