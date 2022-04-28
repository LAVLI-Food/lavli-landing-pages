module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ['images.unsplash.com'],
  },
  swcMinify: true,
  generateBuildId: () => 'build',
};
