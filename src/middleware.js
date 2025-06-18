import { auth0 } from '@/lib/auth0';

export async function middleware(request) {
    console.log('Middleware called for', request.url);
    return await auth0.middleware(request);
}

export const config = {
    matcher: [
        '/auth/:path*',
        '/',
    ],
};