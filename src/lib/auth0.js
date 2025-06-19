import { Auth0Client } from '@auth0/nextjs-auth0/server';

const ensureProtocol = (url) => {
    if (!url) return 'http://localhost:3000';
    return url.startsWith('http://') || url.startsWith('httpx://') ? url : `https://${url}`;
}

const baseURL = ensureProtocol(process.env.APP_BASE_URL) || (process.env.VERCEL_URL || 'https://localhost:3000');

export const auth0 = new Auth0Client({
    secret: process.env.AUTH0_SECRET,
    baseURL,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}`,
    clientID: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
});