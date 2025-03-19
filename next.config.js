/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: true, // Optional but recommended for styled-components
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noarchive' },
          { key: 'Content-Rating', value: 'General' },
        ],
      },
    ]
  },
}

module.exports = nextConfig
