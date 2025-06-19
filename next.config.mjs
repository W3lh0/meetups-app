/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APP_BASE_URL: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : process.env.APP_BASE_URL,
    },
};

export default nextConfig;
