/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for next export (GitHub Pages)

  basePath: '/portfolio',         // ✅ GitHub repo name
  assetPrefix: '/portfolio/',     // ✅ Required for static asset paths

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    unoptimized: true,            // ✅ Required for next export
  },

  compress: true,                 // ✅ Enable gzip compression
  optimizeFonts: true,           // ✅ Font optimization

  // ✅ Custom security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
