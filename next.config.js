// /** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig = {
//   output: 'export',
//   basePath: isProd ? '/portfolio' : '',
//   assetPrefix: isProd ? '/portfolio/' : '', // ✅ add trailing slash
//   images: {
//     unoptimized: true,
//   },
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   compress: true,
//   optimizeFonts: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Only if you're doing `next export`, else remove this line
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  compress: true,
  optimizeFonts: true,
};

module.exports = nextConfig;
