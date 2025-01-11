/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  basePath: '/dev',
  assetPrefix: '/dev/',
  trailingSlash: true
}

module.exports = nextConfig
