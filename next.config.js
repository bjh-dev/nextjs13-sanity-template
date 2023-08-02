/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    domains: ['cdn.sanity.io', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
