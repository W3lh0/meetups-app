/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_BASE_URL: process.env.VERCEL_URL || process.env.AUTH0_BASE_URL,
    },
};

export default nextConfig;
