import { Auth0Client } from '@auth0/nextjs-auth0/server';

const baseURL = process.env.APP_BASE_URL || 'https://localhost:3000';

console.log('BaseURL resolution:', { APP_BASE_URL: process.env.APP_BASE_URL, VERCEL_URL: process.env.VERCEL_URL, resolvedBaseURL: baseURL });

export const auth0 = new Auth0Client({
    secret: process.env.AUTH0_SECRET,
    baseURL,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
});