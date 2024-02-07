/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['localhost', 'assets.example.com'],
        // Specify additional loader options if needed
        loader: 'default',
        path: '/_next/image',
    },
}

module.exports = nextConfig
