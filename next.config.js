/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {
  webpack: (config, ctxWebpack) => {
    // Получаем текущие конфиги
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: { not: [/component/] },
      },
      {
        test: /\.svg$/i,
        resourceQuery: /component/,
        issuer: fileLoaderRule.issuer,
        use: [
          {
            loader: '@svgr/webpack',
          },
        ],
      },
    );

    // Исключаем обработку свг из текущий правил nextjs
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
  output: 'standalone',
  // basePath: '/site-animation',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
};

module.exports = withVideos(nextConfig);
