import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '8000',
                pathname: '/media/**',

                // protocol: 'https',
                // hostname: 'site-preview.site',
                // port: '',
                // pathname: '/media/**',
            },
        ],
    },
    env: {
        API_URL: "http://127.0.0.1:8000",
        // API_URL: "https://site-preview.site",
    },
};

export default nextConfig;