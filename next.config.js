/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/dev',
  assetPrefix: '/dev/',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
