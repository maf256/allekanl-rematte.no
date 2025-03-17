// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   babel: {
//     plugins: [['styled-components', { ssr: true }]],
//   },
//   reactStrictMode: true,
//   output: 'standalone', // Added missing comma
//   async headers() {
//     // Moved this to align properly in the object
//     return [
//       {
//         source: '/(.*)',
//         headers: [
//           {
//             key: 'X-Robots-Tag',
//             value: 'noarchive',
//           },
//           {
//             key: 'Content-Rating',
//             value: 'General',
//           },
//         ],
//       },
//     ]
//   },
// }

// module.exports = nextConfig

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
