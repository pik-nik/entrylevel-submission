/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "content.cloudfront.entrylevel.net",
            },
        ],
    },
}

module.exports = nextConfig
