/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['xtyl.digital']
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig 