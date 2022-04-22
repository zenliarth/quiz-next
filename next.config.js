/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: [
    {
      source: '/',
      destination: '/index.html',
    },
  ],
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig
