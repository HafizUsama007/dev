/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/dev',
  assetPrefix: '/dev/',
  trailingSlash: true,
  // Disable server features
  experimental: {
    serverActions: false,
    serverComponents: false
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
