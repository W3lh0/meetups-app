import { auth0 } from '@/lib/auth0';
import { withMiddlewareAuthRquired} from '@auth0/nextjs-auth0/middleware'

export async function middleware(request) {
    console.log('Middleware called for', request.url);
    return await auth0.middleware(request);
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|/auth).*)'
    ],
};